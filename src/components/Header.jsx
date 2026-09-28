"use client";

import React from "react";
import { MapPin, ChevronDown, User, ShoppingBag, Sparkles } from "lucide-react";

export default function Header({ cartCount, onOpenCart, onSelectHome }) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm px-4 py-3">
      <div className="max-w-md mx-auto flex items-center justify-between">
        {/* Left: Location Selector */}
        <div 
          onClick={onSelectHome}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="bg-red-50 p-2 rounded-full text-[#E23744] group-hover:bg-red-100 transition-colors">
            <MapPin className="w-5 h-5 fill-[#E23744]/20 text-[#E23744] stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-gray-900 text-base tracking-tight leading-none group-hover:text-[#E23744] transition-colors">
                Kattankulathur, Chennai
              </span>
              <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#E23744] transition-colors" />
            </div>
            <span className="text-xs text-gray-500 font-medium truncate max-w-[200px] mt-0.5">
              SRM University Main Campus, Abode Valley
            </span>
          </div>
        </div>

        {/* Right: Actions (Cart & Profile Avatar) */}
        <div className="flex items-center gap-3">
          {/* Cart Quick Button */}
          {cartCount > 0 && (
            <button
              onClick={onOpenCart}
              className="relative bg-red-50 text-[#E23744] p-2 rounded-full hover:bg-red-100 transition-all flex items-center justify-center cursor-pointer"
              title="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#E23744] text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow">
                {cartCount}
              </span>
            </button>
          )}

          {/* User Profile Avatar */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#E23744] to-red-400 text-white font-bold flex items-center justify-center text-sm shadow-md cursor-pointer border-2 border-white ring-2 ring-red-100">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
