"use client";

import React from "react";
import { CheckCircle2, ArrowLeft, ShieldCheck, Sparkles, Receipt } from "lucide-react";

export default function OrderSuccessModal({ orderDetails, onReset }) {
  if (!orderDetails) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in">
      <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl border border-gray-100 animate-in zoom-in-95">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 ring-8 ring-emerald-50">
          <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
        </div>

        <h2 className="text-2xl font-black text-gray-900 tracking-tight">
          Order Placed!
        </h2>
        <p className="text-xs text-gray-500 font-medium mt-1">
          Your order has been sent to the kitchen at <span className="font-bold text-gray-800">Hotel Shankar Vilas</span>.
        </p>

        {/* Bill Receipt Summary */}
        <div className="my-5 bg-gray-50 border border-gray-200 rounded-2xl p-4 text-left space-y-2 text-xs">
          <div className="flex items-center gap-1.5 font-bold text-gray-700 pb-1 border-b border-gray-200">
            <Receipt className="w-4 h-4 text-[#E23744]" />
            <span>C Backend Verified Receipt</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Subtotal:</span>
            <span className="font-semibold text-gray-900">₹{orderDetails.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Delivery Fee:</span>
            <span className="font-semibold text-gray-900">₹{orderDetails.deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Tax Amount (8% C Engine):</span>
            <span className="font-semibold text-gray-900">₹{orderDetails.taxAmount.toFixed(2)}</span>
          </div>
          <div className="border-t border-gray-200 pt-2 flex justify-between font-extrabold text-sm text-gray-900">
            <span>Grand Total:</span>
            <span className="text-[#E23744]">₹{orderDetails.grandTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* ETA Badge */}
        <div className="bg-red-50 text-[#E23744] font-bold text-xs py-2 px-3 rounded-xl mb-5 flex items-center justify-center gap-1">
          <Sparkles className="w-4 h-4" />
          <span>Estimated Delivery: 25 Mins</span>
        </div>

        <button
          onClick={onReset}
          className="w-full bg-[#E23744] hover:bg-red-700 text-white font-black py-3 rounded-2xl shadow-md transition-all cursor-pointer"
        >
          Back to Restaurants
        </button>
      </div>
    </div>
  );
}
