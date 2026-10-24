"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CLINIC_INFO } from "@/data/dentalData";
import { MessageCircle, Menu, X, Calendar, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Jadwal Praktik", href: "#jadwal", highlight: true },
    { name: "Layanan", href: "#layanan" },
    { name: "Booking Online", href: "#booking" },
    { name: "Kenapa Kami", href: "#kenapa-kami" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-pink-100/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
        
        {/* Official Brand Logo */}
        <a href="#hero" className="flex items-center group shrink-0 py-1">
          <div className="relative h-10 sm:h-12 w-40 sm:w-52 transition-transform group-hover:scale-105">
            <Image
              src="/images/logo-light.png"
              alt="OKAY DENTAL Therapist"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-purple-50/60 border border-purple-100 px-3 py-1.5 rounded-full shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all ${
                link.highlight
                  ? "bg-purple-600 text-white shadow-xs hover:bg-purple-700 flex items-center gap-1.5"
                  : "text-slate-600 hover:text-purple-700 hover:bg-white"
              }`}
            >
              {link.highlight && <Calendar className="w-3.5 h-3.5" />}
              {link.name}
            </a>
          ))}
        </nav>

        {/* Header Action Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={CLINIC_INFO.waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-black text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full shadow-md shadow-emerald-200/80 transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
            </span>
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100 cursor-pointer transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-purple-100 px-5 py-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-2xl font-bold text-sm transition-colors ${
                  link.highlight
                    ? "bg-purple-600 text-white flex items-center justify-between"
                    : "text-slate-700 hover:bg-purple-50 hover:text-purple-700"
                }`}
              >
                <span>{link.name}</span>
                {link.highlight && <Sparkles className="w-4 h-4" />}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100 mt-1">
              <a
                href={CLINIC_INFO.waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-black py-3 rounded-2xl shadow-md text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat WhatsApp: {CLINIC_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
