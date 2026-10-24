"use client";

import React from "react";
import Image from "next/image";
import { CLINIC_INFO } from "@/data/dentalData";
import {
  Calendar,
  MessageCircle,
  ShieldCheck,
  Heart,
  Smile,
  Star,
  ArrowRight,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative py-8 sm:py-14 lg:py-18 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-4 sm:space-y-6">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-white/95 border border-purple-200 px-4 py-1.5 rounded-full shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-purple-900 font-heading">
                ✨ Klinik Ramah Gigi & Mulut untuk Keluarga
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-[1.15] font-heading">
              Senyum Manis, Bersih &{" "}
              <span className="bg-gradient-to-r from-sky-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Bebas Rasa Takut!
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              Perawatan gigi terapis dengan pendekatan ceria, sabar, dan ramah untuk anak-anak maupun dewasa. Wujudkan gigi sehat berkilau tanpa rasa ngilu.
            </p>

            {/* Value Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <div className="flex items-center gap-1.5 bg-sky-50 text-sky-800 border border-sky-200 px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                <Smile className="w-3.5 h-3.5 text-sky-600" />
                <span>Ramah Anak & Dewasa</span>
              </div>
              <div className="flex items-center gap-1.5 bg-purple-50 text-purple-800 border border-purple-200 px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                <span>Instrumen 100% Steril</span>
              </div>
              <div className="flex items-center gap-1.5 bg-pink-50 text-pink-800 border border-pink-200 px-3 py-1 rounded-full text-xs font-bold shadow-xs">
                <Heart className="w-3.5 h-3.5 text-pink-600 fill-pink-400" />
                <span>Bebas Cemas</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={CLINIC_INFO.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-black text-sm sm:text-base px-6 sm:px-8 py-3.5 rounded-full shadow-lg shadow-emerald-200/80 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Chat WhatsApp: {CLINIC_INFO.phone}</span>
              </a>

              <a
                href="#jadwal"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-purple-50 text-purple-800 border-2 border-purple-200 hover:border-purple-300 font-bold text-sm sm:text-base px-5 sm:px-6 py-3.5 rounded-full shadow-xs transition-all hover:scale-105"
              >
                <Calendar className="w-4 h-4 text-purple-600" />
                <span>Lihat Jadwal Praktik</span>
                <ArrowRight className="w-4 h-4 text-purple-500" />
              </a>
            </div>

            {/* Rating Stat */}
            <div className="pt-3 border-t border-purple-100 flex items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="text-slate-800 font-black ml-1">4.9 / 5.0</span>
              </div>
              <span className="text-slate-300">•</span>
              <p className="text-slate-500 font-medium">
                Dipercaya oleh ratusan pasien keluarga
              </p>
            </div>

          </div>

          {/* Right Column: Hero Visual with Mascot */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md p-3 sm:p-5 bg-gradient-to-br from-sky-100/70 via-white/80 to-purple-100/70 rounded-3xl sm:rounded-[36px] border-4 border-white shadow-xl">
              
              {/* Mascot 3D Image */}
              <div className="relative aspect-square w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-inner border-2 border-white animate-float">
                <Image
                  src="/images/cute-tooth.jpg"
                  alt="Maskot Lucu OKAY Dental Therapist"
                  fill
                  sizes="(max-width: 640px) 300px, 400px"
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating Badge Top-Right (safely contained) */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/95 backdrop-blur-md border border-pink-300 rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2">
                <span className="text-base">💖</span>
                <div className="text-left">
                  <span className="text-[10px] font-black text-pink-600 uppercase block font-heading leading-tight">
                    Gentle Care
                  </span>
                  <p className="text-[10px] sm:text-[11px] font-bold text-slate-700 leading-tight">
                    Bebas Rasa Sakit
                  </p>
                </div>
              </div>

              {/* Floating Badge Bottom-Left (safely contained) */}
              <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 bg-white/95 backdrop-blur-md border border-sky-300 rounded-xl px-3 py-1.5 shadow-md flex items-center gap-2">
                <span className="text-base">🦷</span>
                <div className="text-left">
                  <span className="text-[10px] font-black text-sky-600 uppercase block font-heading leading-tight">
                    Gigi Sehat & Rapi
                  </span>
                  <p className="text-[10px] sm:text-[11px] font-bold text-slate-700 leading-tight">
                    Scaling & Tambal Gigi
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
