"use client";

import React from "react";
import { Search, Mic, SlidersHorizontal } from "lucide-react";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="px-4 pt-3 pb-2 max-w-md mx-auto">
      <div className="relative flex items-center bg-gray-100/90 hover:bg-gray-100 rounded-2xl shadow-sm border border-gray-200/60 px-3.5 py-2.5 transition-all focus-within:ring-2 focus-within:ring-[#E23744]/30 focus-within:border-[#E23744] focus-within:bg-white">
        <Search className="w-5 h-5 text-[#E23744] mr-2.5 shrink-0 stroke-[2.2]" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Restaurant name or a dish"
          className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-400 font-medium focus:outline-none"
        />
        {searchTerm ? (
          <button 
            onClick={() => setSearchTerm("")}
            className="text-gray-400 hover:text-gray-600 text-xs font-bold px-1.5 py-0.5 rounded-full bg-gray-200"
          >
            ✕
          </button>
        ) : (
          <div className="flex items-center gap-2 text-gray-400 border-l border-gray-300 pl-2 ml-1">
            <Mic className="w-4 h-4 text-[#E23744] hover:text-red-700 cursor-pointer transition-colors" />
          </div>
        )}
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-2 mt-1 -mx-4 px-4">
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 shadow-2xs whitespace-nowrap hover:border-gray-300">
          <SlidersHorizontal className="w-3.5 h-3.5 text-gray-500" />
          <span>Filters</span>
        </button>
        <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 shadow-2xs whitespace-nowrap hover:border-gray-300">
          Rating 4.0+
        </button>
        <button className="px-3 py-1.5 bg-red-50 border border-red-200 text-[#E23744] font-bold rounded-xl text-xs shadow-2xs whitespace-nowrap">
          Offers & Deals
        </button>
        <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 shadow-2xs whitespace-nowrap hover:border-gray-300">
          Pure Veg
        </button>
        <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 shadow-2xs whitespace-nowrap hover:border-gray-300">
          Under 30 mins
        </button>
      </div>
    </div>
  );
}
