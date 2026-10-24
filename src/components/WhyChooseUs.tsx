"use client";

import React from "react";
import { WHY_CHOOSE_US } from "@/data/dentalData";
import { HeartHandshake, ShieldCheck, Sparkles, Wallet } from "lucide-react";

export default function WhyChooseUs() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "heart-handshake":
        return <HeartHandshake className="w-6 h-6 text-pink-600" />;
      case "shield-check":
        return <ShieldCheck className="w-6 h-6 text-sky-600" />;
      case "sparkles":
        return <Sparkles className="w-6 h-6 text-purple-600" />;
      case "wallet":
        return <Wallet className="w-6 h-6 text-amber-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-600" />;
    }
  };

  return (
    <section id="kenapa-kami" className="py-16 sm:py-24 bg-white/70 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 border border-purple-200 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Kenyamanan Pasien Prioritas Utama</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 font-heading">
            Kenapa Pasien Memilih OKAY Dental Therapist?
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Kami mengerti bahwa pergi ke tempat perawatan gigi seringkali menimbulkan rasa cemas. Karena itu, kami merancang setiap pengalaman agar santai dan menyenangkan.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-slate-100 hover:border-purple-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: item.bg }}
                >
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-black text-slate-800 font-heading mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-purple-600 flex items-center gap-1">
                  ✓ Komitmen OKAY Care
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
