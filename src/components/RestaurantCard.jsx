"use client";

import React from "react";
import { Star, Clock, Tag, Heart } from "lucide-react";

export default function RestaurantCard({ restaurant, onSelect }) {
  return (
    <div
      onClick={() => onSelect(restaurant)}
      className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer group mb-4 max-w-md mx-auto"
    >
      {/* Cover Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Gradient Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

        {/* Heart Favorite Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-black/50 transition-colors"
        >
          <Heart className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* Absolute-Positioned OFFERS Tag */}
        {restaurant.offer && (
          <div className="absolute bottom-3 left-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-xs px-3 py-1 rounded-lg shadow-md flex items-center gap-1.5 uppercase tracking-wide border border-white/20">
            <Tag className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>{restaurant.offer}</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-3.5">
        {/* Name and Rating Badge */}
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className="font-extrabold text-gray-900 text-lg group-hover:text-[#E23744] transition-colors truncate">
            {restaurant.name}
          </h3>
          <div className="bg-[#24963F] text-white text-xs font-extrabold px-2 py-0.5 rounded-lg flex items-center gap-0.5 shadow-2xs shrink-0">
            <span>{restaurant.rating}</span>
            <Star className="w-3 h-3 fill-white text-white" />
          </div>
        </div>

        {/* Cuisines */}
        <p className="text-xs font-medium text-gray-500 truncate mb-2">
          {restaurant.cuisines.join(", ")}
        </p>

        {/* Separator Line */}
        <div className="border-t border-gray-100 my-2" />

        {/* Delivery Specs Footer */}
        <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-gray-400" />
            <span>{restaurant.time}</span>
            <span className="text-gray-300">•</span>
            <span>{restaurant.distance}</span>
          </div>
          <span className="text-gray-700 font-semibold">{restaurant.priceForTwo}</span>
        </div>
      </div>
    </div>
  );
}
