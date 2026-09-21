"use client";

import { useState } from "react";
import { GraduationCap, Menu, X, BookOpen } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Themes", href: "#themes" },
    { name: "Quotes", href: "#quotes" },
    { name: "Structure", href: "#summary" },
    { name: "Discussion", href: "#discussion" },
    { name: "Works Cited", href: "#references" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-50/90 backdrop-blur-md border-b border-plum-900/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* SRM IST Logo & Academic Header */}
        <div className="flex items-center gap-3">
          <div className="h-10 px-3 bg-plum-900 rounded flex items-center justify-center text-gold-400 shadow-sm border border-gold-500/20">
            <GraduationCap className="w-6 h-6 mr-2" />
            <span className="font-serif font-bold tracking-wide text-sm text-white">SRM IST</span>
          </div>
          <div className="hidden sm:flex flex-col border-l border-slate-300 pl-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-plum-900">Academic Presentation</span>
            <span className="text-xs text-slate-500 font-medium">Department of English</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-plum-800 transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Course & Student Information */}
        <div className="hidden md:flex items-center gap-4 text-xs font-medium">
          <div className="bg-plum-100/70 border border-plum-800/15 text-plum-900 px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-plum-700" />
            <span>English</span>
          </div>
          <div className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full shadow-2xs">
            Student: <span className="font-semibold text-slate-900">Akshith</span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-plum-900 hover:bg-plum-100 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          <div className="pt-2 pb-3 border-b border-slate-100 flex flex-col gap-2">
            <div className="text-xs text-slate-600">Course: <span className="font-semibold text-plum-900">English</span></div>
            <div className="text-xs text-slate-600">Presenter: <span className="font-semibold text-plum-900">Akshith (Section AM1)</span></div>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-800 hover:text-plum-800 hover:bg-cream-100 px-3 py-2 rounded-md"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
