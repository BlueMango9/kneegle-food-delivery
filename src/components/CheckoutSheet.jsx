"use client";

import React, { useState, useEffect } from "react";
import { X, Cpu, CheckCircle2, ShieldCheck, MapPin, Receipt, ArrowRight, Loader2, AlertCircle } from "lucide-react";

export default function CheckoutSheet({ cart, onUpdateCart, onClose, onPlaceOrder }) {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cartArray = Object.values(cart).filter((item) => item.count > 0);
  const subtotal = cartArray.reduce((sum, item) => sum + item.price * item.count, 0);

  // CRUCIAL API INTEGRATION: useEffect sends subtotal to C Backend Express Bridge at http://localhost:5000/api/calculate
  useEffect(() => {
    if (subtotal <= 0) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    fetch("http://localhost:5000/api/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subtotal }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server returned status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setApiData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("C API Tax Engine fetch failed:", err);
        setError("Could not connect to C Backend Tax Engine (http://localhost:5000/api/calculate)");
        setLoading(false);
      });
  }, [subtotal]);

  if (cartArray.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Slide-Up Bottom Sheet Box */}
      <div className="w-full max-w-md bg-white rounded-t-3xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-300">
        {/* Header Bar */}
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <Receipt className="w-5 h-5 text-[#E23744]" />
            <h2 className="text-lg font-black text-gray-900 tracking-tight">Checkout</h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sheet Content Scrollable Area */}
        <div className="p-5 overflow-y-auto space-y-5">
          {/* Delivery Address Card */}
          <div className="bg-red-50/50 border border-red-100 rounded-2xl p-3.5 flex items-start gap-3">
            <div className="p-2 rounded-xl bg-red-100 text-[#E23744] shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 fill-[#E23744]/30" />
            </div>
            <div className="flex-1 text-xs">
              <div className="font-extrabold text-gray-900">Delivery to Home</div>
              <p className="text-gray-600 font-medium mt-0.5">
                Hostel Block 4, SRM University, Kattankulathur, Chennai
              </p>
              <span className="text-[#E23744] font-bold mt-1 inline-block">25 mins ETA</span>
            </div>
          </div>

          {/* Cart Items Summary List */}
          <div>
            <h3 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-2.5">
              Order Items ({cartArray.reduce((acc, i) => acc + i.count, 0)})
            </h3>
            <div className="bg-white border border-gray-100 rounded-2xl p-3 divide-y divide-gray-100 shadow-2xs">
              {cartArray.map((item) => (
                <div key={item.id} className="py-2.5 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 min-w-0 pr-2">
                    <div className={`w-3 h-3 rounded-2xs border flex items-center justify-center p-0.5 ${item.isVeg ? 'border-green-600' : 'border-red-600'}`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${item.isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
                    </div>
                    <span className="font-bold text-gray-800 truncate">{item.name}</span>
                    <span className="text-gray-400 font-medium">x{item.count}</span>
                  </div>

                  <span className="font-extrabold text-gray-900 shrink-0">
                    ₹{(item.price * item.count).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* C BACKEND ARCHITECTURE INFO BADGE */}
          <div className="bg-slate-900 text-slate-100 rounded-2xl p-3.5 shadow-md border border-slate-800">
            <div className="flex items-center gap-2 mb-1 text-xs font-bold text-emerald-400">
              <Cpu className="w-4 h-4 animate-pulse" />
              <span>C Backend Tax Engine Connected</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed font-mono">
              Single point of truth (8% Tax) computed via C pointer function:
              <br />
              <code className="text-amber-300 font-bold">void calculate_tax(&subtotal, &tax_amount, &grand_total)</code>
            </p>
          </div>

          {/* BILL DETAILS CARD (DISTINCT CARD WITH SUBTLE GRAY BORDER) */}
          <div>
            <h3 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-2.5">
              Bill Details
            </h3>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 space-y-3 shadow-2xs">
              {loading ? (
                <div className="py-6 flex flex-col items-center justify-center text-gray-500 gap-2">
                  <Loader2 className="w-6 h-6 animate-spin text-[#E23744]" />
                  <span className="text-xs font-bold">Calling C Backend Tax Engine...</span>
                </div>
              ) : error ? (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{error}</span>
                </div>
              ) : apiData ? (
                <>
                  {/* Item Subtotal Row */}
                  <div className="flex items-center justify-between text-xs font-medium text-gray-600">
                    <span>Item Subtotal</span>
                    <span className="font-bold text-gray-900">₹{apiData.subtotal.toFixed(2)}</span>
                  </div>

                  {/* Delivery Fee Row */}
                  <div className="flex items-center justify-between text-xs font-medium text-gray-600">
                    <span className="flex items-center gap-1">
                      <span>Delivery Fee</span>
                      <span className="text-[10px] bg-gray-200 text-gray-700 px-1.5 py-0.2 rounded">Flat</span>
                    </span>
                    <span className="font-bold text-gray-900">₹{apiData.deliveryFee.toFixed(2)}</span>
                  </div>

                  {/* Tax Amount Row (8% from C Engine) */}
                  <div className="flex items-center justify-between text-xs font-medium text-gray-600">
                    <span className="flex items-center gap-1">
                      <span>Taxes & Govt Charges</span>
                      <span className="text-[10px] bg-red-100 text-[#E23744] font-bold px-1.5 py-0.2 rounded">
                        8% (C Engine)
                      </span>
                    </span>
                    <span className="font-bold text-gray-900">₹{apiData.taxAmount.toFixed(2)}</span>
                  </div>

                  <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
                    <span className="font-extrabold text-sm text-gray-900">Grand Total</span>
                    <span className="font-black text-lg text-[#E23744]">
                      ₹{apiData.grandTotal.toFixed(2)}
                    </span>
                  </div>
                </>
              ) : null}
            </div>
          </div>

          {/* Guarantee Footer */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 font-medium pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Safe & Contactless Delivery guaranteed</span>
          </div>
        </div>

        {/* STICKY WHITE FOOTER WITH GRAND TOTAL AND PLACE ORDER BUTTON */}
        <div className="p-4 bg-white border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">
              To Pay
            </div>
            <div className="text-xl font-black text-gray-900">
              ₹{apiData ? apiData.grandTotal.toFixed(2) : (subtotal + 40 + subtotal * 0.08).toFixed(2)}
            </div>
          </div>

          <button
            onClick={() => onPlaceOrder(apiData)}
            disabled={loading || !apiData}
            className="flex-1 bg-[#E23744] hover:bg-red-700 disabled:bg-gray-300 text-white font-black text-base py-3.5 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>Place Order</span>
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
}
