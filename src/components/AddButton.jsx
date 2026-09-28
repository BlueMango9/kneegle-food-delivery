"use client";

import React from "react";
import { Plus, Minus } from "lucide-react";

export default function AddButton({ count, onAdd, onRemove }) {
  if (count > 0) {
    return (
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#E23744] text-white font-bold text-xs rounded-xl shadow-lg flex items-center justify-between px-3 py-1.5 w-24 select-none z-10 transition-all transform scale-100 hover:scale-105 active:scale-95">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="hover:bg-red-700 p-0.5 rounded transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Decrease quantity"
        >
          <Minus className="w-3.5 h-3.5 stroke-[3]" />
        </button>

        <span className="font-extrabold text-sm text-white px-1 font-mono">
          {count}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onAdd();
          }}
          className="hover:bg-red-700 p-0.5 rounded transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Increase quantity"
        >
          <Plus className="w-3.5 h-3.5 stroke-[3]" />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onAdd();
      }}
      className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-[#E23744] font-extrabold text-xs px-6 py-1.5 rounded-xl border border-red-100 shadow-md uppercase tracking-wider transition-all transform scale-100 hover:scale-105 active:scale-95 hover:bg-red-50 cursor-pointer flex items-center gap-1 z-10"
    >
      <span>ADD</span>
      <Plus className="w-3 h-3 stroke-[3]" />
    </button>
  );
}
