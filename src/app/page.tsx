"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantMenu from "../components/RestaurantMenu";
import CheckoutSheet from "../components/CheckoutSheet";
import OrderSuccessModal from "../components/OrderSuccessModal";
import { Utensils, ShoppingBag, Sparkles, ChevronRight } from "lucide-react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  count: number;
  isVeg: boolean;
  category: string;
  description: string;
  image: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cuisines: string[];
  rating: string;
  distance: string;
  time: string;
  priceForTwo: string;
  offer: string;
  image: string;
}

export default function Home() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [cart, setCart] = useState<Record<string, CartItem>>({});
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [orderDetails, setOrderDetails] = useState<any>(null);

  // Exact restaurant feature feed data as required
  const restaurants: Restaurant[] = [
    {
      id: "shankar-vilas",
      name: "Hotel Shankar Vilas",
      cuisines: ["South Indian", "North Indian", "Thalis"],
      rating: "4.3",
      distance: "1.8 km",
      time: "25 mins",
      priceForTwo: "₹250 for two",
      offer: "50% OFF up to ₹100",
      image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "shakes-deserts",
      name: "Shakes And Deserts SRM",
      cuisines: ["Desserts", "Beverages", "Milkshakes"],
      rating: "4.5",
      distance: "0.9 km",
      time: "15 mins",
      priceForTwo: "₹200 for two",
      offer: "FLAT ₹50 OFF",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "daily-dose",
      name: "Daily Dose",
      cuisines: ["Cafe", "Fast Food", "Burgers"],
      rating: "4.1",
      distance: "1.2 km",
      time: "20 mins",
      priceForTwo: "₹300 for two",
      offer: "20% OFF ON ALL ORDERS",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "blue-fox",
      name: "Blue Fox",
      cuisines: ["North Indian", "Biryani", "Chinese"],
      rating: "4.4",
      distance: "2.5 km",
      time: "35 mins",
      priceForTwo: "₹400 for two",
      offer: "FREE DELIVERY",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleUpdateCart = (item: any, delta: number) => {
    setCart((prevCart: Record<string, CartItem>) => {
      const current = prevCart[item.id] || { ...item, count: 0 };
      const newCount = current.count + delta;

      if (newCount <= 0) {
        const copy = { ...prevCart };
        delete copy[item.id];
        return copy;
      }

      return {
        ...prevCart,
        [item.id]: {
          ...current,
          count: newCount,
        },
      };
    });
  };

  const cartItemsList = Object.values(cart);
  const cartItemsCount = cartItemsList.reduce((sum: number, i: CartItem) => sum + i.count, 0);
  const cartSubtotal = cartItemsList.reduce((sum: number, i: CartItem) => sum + i.price * i.count, 0);

  const filteredRestaurants = restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.cuisines.some((c) => c.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handlePlaceOrderSuccess = (cBackendData: any) => {
    setOrderDetails(cBackendData);
    setIsCheckoutOpen(false);
    setCart({});
  };

  const handleResetOrder = () => {
    setOrderDetails(null);
    setSelectedRestaurant(null);
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* If a restaurant menu is open, show RestaurantMenu screen */}
      {selectedRestaurant ? (
        <RestaurantMenu
          restaurant={selectedRestaurant}
          cart={cart}
          onUpdateCart={handleUpdateCart}
          onBack={() => setSelectedRestaurant(null)}
          onOpenCheckout={() => setIsCheckoutOpen(true)}
        />
      ) : (
        /* Otherwise, show Home Screen Zomato Feed */
        <div className="max-w-md mx-auto min-h-screen bg-white shadow-sm border-x border-gray-100">
          {/* Header Bar */}
          <Header
            cartCount={cartItemsCount}
            onOpenCart={() => setIsCheckoutOpen(true)}
            onSelectHome={() => setSelectedRestaurant(null)}
          />

          {/* Search Bar & Filter Chips */}
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* C Backend Announcement Banner */}
          <div className="px-4 py-2">
            <div className="bg-gradient-to-r from-red-600 via-[#E23744] to-red-500 text-white rounded-2xl p-3.5 shadow-md flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="bg-white/20 p-2 rounded-xl backdrop-blur-xs shrink-0">
                  <Sparkles className="w-5 h-5 text-amber-300 fill-amber-300" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xs tracking-tight">Kneegle C Pointer Backend Enabled</h4>
                  <p className="text-[11px] text-red-100 font-medium leading-tight">
                    Single point of truth (8% Tax) computed dynamically via C binary execution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Food Feed Title */}
          <div className="px-4 pt-4 pb-2">
            <h2 className="text-xl font-black text-gray-900 tracking-tight">
              Top Restaurants Near You
            </h2>
            <p className="text-xs text-gray-500 font-semibold">
              Delivering to Kattankulathur & SRM Campus
            </p>
          </div>

          {/* Restaurant Cards List */}
          <div className="px-4 pt-1 pb-6 space-y-4">
            {filteredRestaurants.length > 0 ? (
              filteredRestaurants.map((res) => (
                <RestaurantCard
                  key={res.id}
                  restaurant={res}
                  onSelect={(restaurant: Restaurant) => setSelectedRestaurant(restaurant)}
                />
              ))
            ) : (
              <div className="py-12 text-center text-gray-400">
                <Utensils className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="font-bold text-sm">No restaurants found matching "{searchTerm}"</p>
              </div>
            )}
          </div>

          {/* Floating Cart Button on Home Screen when cart has items */}
          {cartItemsCount > 0 && (
            <div className="fixed bottom-4 left-0 right-0 z-40 px-4 max-w-md mx-auto">
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full bg-[#E23744] text-white p-3.5 rounded-2xl shadow-xl flex items-center justify-between cursor-pointer hover:bg-red-700 transition-all active:scale-98"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-xl">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-red-100 uppercase tracking-wider">
                      {cartItemsCount} ITEM{cartItemsCount > 1 ? "S" : ""}
                    </div>
                    <div className="text-base font-black">
                      ₹{cartSubtotal}.00 <span className="text-xs font-normal opacity-80">(Subtotal)</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-sm font-black bg-white text-[#E23744] px-4 py-2 rounded-xl shadow-sm">
                  <span>View Cart</span>
                  <ChevronRight className="w-4 h-4 stroke-[3]" />
                </div>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Checkout Slide-up Sheet Modal */}
      {isCheckoutOpen && (
        <CheckoutSheet
          cart={cart}
          onUpdateCart={handleUpdateCart}
          onClose={() => setIsCheckoutOpen(false)}
          onPlaceOrder={handlePlaceOrderSuccess}
        />
      )}

      {/* Order Success Receipt Modal */}
      {orderDetails && (
        <OrderSuccessModal orderDetails={orderDetails} onReset={handleResetOrder} />
      )}
    </main>
  );
}
