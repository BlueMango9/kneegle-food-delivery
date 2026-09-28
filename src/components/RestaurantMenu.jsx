"use client";

import React, { useState } from "react";
import { ArrowLeft, Star, Share2, Search, Info, Flame, ChevronRight } from "lucide-react";
import AddButton from "./AddButton";

export default function RestaurantMenu({ restaurant, cart, onUpdateCart, onBack, onOpenCheckout }) {
  const [activeCategory, setActiveCategory] = useState("Recommended");

  // Menu items list as strictly requested
  const menuItems = [
    {
      id: "zing-1",
      name: "Zinger Burger",
      price: 150,
      category: "Recommended",
      isVeg: false,
      rating: "4.5",
      votes: "1.2k",
      description: "Signature crispy juicy chicken fillet topped with fresh lettuce & creamy mayo in a toasted sesame bun.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
      bestseller: true,
    },
    {
      id: "pop-2",
      name: "Popcorn Chicken",
      price: 120,
      category: "Recommended",
      isVeg: false,
      rating: "4.4",
      votes: "890",
      description: "Bite-sized crunchy chicken pops seasoned with spicy herbs. Served hot with garlic dip.",
      image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
      bestseller: true,
    },
    {
      id: "pan-3",
      name: "Paneer Tikka Sandwich",
      price: 90,
      category: "Main Course",
      isVeg: true,
      rating: "4.3",
      votes: "650",
      description: "Multi-grain grilled sandwich stuffed with tandoori marinated paneer cubes, mint chutney & onions.",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
      bestseller: false,
    },
    {
      id: "cof-4",
      name: "Cold Coffee",
      price: 80,
      category: "Beverages",
      isVeg: true,
      rating: "4.6",
      votes: "1.4k",
      description: "Thick & creamy brewed espresso coffee blended with chilled milk and topped with dark chocolate drizzle.",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
      bestseller: true,
    },
  ];

  const categories = ["Recommended", "Main Course", "Beverages"];

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const getItemCount = (itemId) => {
    return cart[itemId] ? cart[itemId].count : 0;
  };

  const totalCartCount = Object.values(cart).reduce((sum, item) => sum + item.count, 0);
  const totalCartSubtotal = Object.values(cart).reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className="bg-white min-h-screen pb-28 max-w-md mx-auto shadow-md">
      {/* Top Header Bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <button
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-gray-100 text-gray-800 transition-colors"
          aria-label="Back to main feed"
        >
          <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        <div className="flex items-center gap-3 text-gray-700">
          <Search className="w-5 h-5 cursor-pointer hover:text-[#E23744]" />
          <Share2 className="w-5 h-5 cursor-pointer hover:text-[#E23744]" />
        </div>
      </div>

      {/* Restaurant Header Banner */}
      <div className="px-4 pt-4 pb-3 border-b border-gray-100 bg-gradient-to-b from-red-50/40 to-white">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-black text-gray-900 tracking-tight">
              {restaurant.name}
            </h1>
            <p className="text-xs font-semibold text-gray-500 mt-0.5">
              {restaurant.cuisines.join(", ")} • SRM Campus
            </p>
            <p className="text-xs text-gray-400 mt-0.5">
              {restaurant.distance} • {restaurant.time}
            </p>
          </div>

          <div className="bg-[#24963F] text-white font-extrabold text-sm px-2.5 py-1 rounded-xl flex items-center gap-1 shadow-sm shrink-0">
            <span>{restaurant.rating}</span>
            <Star className="w-3.5 h-3.5 fill-white text-white" />
          </div>
        </div>

        {/* Safety & Offers Badge */}
        <div className="mt-3 flex items-center gap-2 bg-blue-50/80 border border-blue-100 text-blue-800 px-3 py-1.5 rounded-xl text-xs font-semibold">
          <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>{restaurant.offer || "50% OFF up to ₹100 using Kneegle Pay"}</span>
        </div>
      </div>

      {/* Sticky Category Navigation Bar */}
      <div className="sticky top-12 z-20 bg-white border-b border-gray-100 shadow-2xs px-4 py-2.5 flex items-center gap-2 overflow-x-auto scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeCategory === cat
                ? "bg-[#E23744] text-white shadow-sm"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Section Header */}
      <div className="px-4 pt-4 pb-2">
        <h2 className="text-lg font-black text-gray-900 flex items-center gap-2">
          <span>{activeCategory}</span>
          <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
            {filteredItems.length}
          </span>
        </h2>
      </div>

      {/* ZOMATO EXACT ROW STRUCTURE ITEMS LIST */}
      <div className="divide-y divide-gray-100 px-4">
        {filteredItems.map((item) => {
          const currentCount = getItemCount(item.id);

          return (
            <div key={item.id} className="py-5 flex items-start justify-between gap-4">
              {/* Left Side: Details (65% width) */}
              <div className="flex-1 min-w-0 pr-2">
                {/* Veg / Non-Veg Icon & Bestseller Badge */}
                <div className="flex items-center gap-2 mb-1.5">
                  <div
                    className={`w-4 h-4 rounded-sm border flex items-center justify-center p-0.5 ${
                      item.isVeg ? "border-green-600" : "border-red-600"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        item.isVeg ? "bg-green-600" : "bg-red-600"
                      }`}
                    />
                  </div>

                  {item.bestseller && (
                    <span className="bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-extrabold px-1.5 py-0.2 rounded-md uppercase tracking-wider flex items-center gap-0.5">
                      <Flame className="w-3 h-3 fill-amber-500 text-amber-500" />
                      Bestseller
                    </span>
                  )}
                </div>

                {/* Item Name */}
                <h3 className="font-extrabold text-gray-900 text-base leading-snug">
                  {item.name}
                </h3>

                {/* Item Price */}
                <div className="text-gray-900 font-extrabold text-sm mt-1">
                  ₹{item.price}
                </div>

                {/* Rating / Votes */}
                <div className="flex items-center gap-1 mt-1 text-[11px] text-gray-500 font-semibold">
                  <span className="text-amber-500 flex items-center">★ {item.rating}</span>
                  <span>({item.votes})</span>
                </div>

                {/* Item Description */}
                <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Right Side: Square Image Container & Overlapping ADD Button (35% width) */}
              <div className="relative shrink-0 w-28 h-28 my-auto">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-28 h-28 rounded-2xl object-cover shadow-sm bg-gray-100"
                />

                {/* OVERLAPPING ZOMATO [ ADD ] / [ - 1 + ] COUNTER BUTTON */}
                <AddButton
                  count={currentCount}
                  onAdd={() => onUpdateCart(item, 1)}
                  onRemove={() => onUpdateCart(item, -1)}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* View Cart Sticky Bottom Floating Bar when items added */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-3.5 shadow-[0_-6px_20px_rgba(0,0,0,0.1)] max-w-md mx-auto">
          <div className="flex items-center justify-between bg-[#E23744] text-white p-3 rounded-2xl shadow-md">
            <div>
              <div className="text-xs font-semibold text-red-100 uppercase tracking-wider">
                {totalCartCount} ITEM{totalCartCount > 1 ? "S" : ""} ADDED
              </div>
              <div className="text-base font-black">
                ₹{totalCartSubtotal}.00 <span className="text-xs font-normal text-red-100">(Subtotal)</span>
              </div>
            </div>

            <button
              onClick={onOpenCheckout}
              className="bg-white text-[#E23744] font-black text-sm px-5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-sm hover:bg-red-50 transition-all cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
