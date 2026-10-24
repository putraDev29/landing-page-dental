"use client";

import React from "react";
import Image from "next/image";
import { SERVICES, CLINIC_INFO } from "@/data/dentalData";
import {
  Sparkles,
  Shield,
  Heart,
  Sun,
  CheckCircle,
  Smile,
  Clock,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

export default function ServicesSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "sparkles":
        return <Sparkles className="w-5 h-5 text-sky-500" />;
      case "shield":
        return <Shield className="w-5 h-5 text-indigo-500" />;
      case "heart":
        return <Heart className="w-5 h-5 text-pink-500" />;
      case "sun":
        return <Sun className="w-5 h-5 text-amber-500" />;
      case "smile":
        return <Smile className="w-5 h-5 text-purple-500" />;
      default:
        return <CheckCircle className="w-5 h-5 text-emerald-500" />;
    }
  };

  const handleConsultService = (title: string) => {
    const text = encodeURIComponent(
      `Halo admin OKAY Dental Therapist! Saya ingin tanya & konsultasi mengenai perawatan: ${title}. Mohon info jadwal yang tersedia ya kak, terima kasih.`
    );
    window.open(`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${text}`, "_blank");
  };

  return (
    <section id="layanan" className="py-12 sm:py-20 bg-white/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-800 border border-sky-200 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span>Pilihan Tindakan Lengkap</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-800 font-heading">
            Layanan Perawatan Gigi Unggulan
          </h2>
          <p className="text-slate-600 mt-2 text-xs sm:text-base leading-relaxed">
            Dari pembersihan karang gigi hingga perawatan ramah si kecil, semua tindakan dilakukan dengan alat higienis dan sentuhan lembut.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white border-2 border-purple-100 rounded-3xl p-5 sm:p-6 shadow-xs hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full">
                    {service.category}
                  </span>
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                    {service.badge}
                  </span>
                </div>

                {/* Title & Icon */}
                <div className="flex items-start gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-800 font-heading leading-tight group-hover:text-purple-700 transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-1.5 mb-5">
                  {service.benefits.map((b, i) => (
                    <li
                      key={i}
                      className="text-xs text-slate-600 flex items-start gap-2"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Konsultasi Gratis
                </span>

                <button
                  onClick={() => handleConsultService(service.title)}
                  className="inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-xs transition-all cursor-pointer active:scale-95"
                >
                  <span>Tanya Info & Jadwal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-10 bg-gradient-to-r from-sky-50 via-purple-50 to-pink-50 border-2 border-purple-200 rounded-3xl p-5 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xs">
          <div className="w-24 h-24 sm:w-32 sm:h-32 relative rounded-2xl overflow-hidden border-2 border-white shadow-sm shrink-0">
            <Image
              src="/images/toothbrush-cup.jpg"
              alt="Peralatan Sikat Gigi OKAY Dental Therapist"
              fill
              sizes="(max-width: 640px) 96px, 128px"
              className="object-cover"
            />
          </div>

          <div className="text-center sm:text-left flex-1">
            <div className="inline-block bg-pink-100 text-pink-700 font-bold text-xs px-2.5 py-0.5 rounded-full mb-1.5 border border-pink-300">
              💡 Rekomendasi Terapis
            </div>
            <h4 className="text-lg sm:text-2xl font-black text-slate-800 font-heading mb-1">
              Konsultasikan Keluhan Gigi Anda Lebih Awal
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Cegah gigi berlubang bertambah parah dengan pembersihan rutin setiap 6 bulan sekali. Admin kami siap membantu tanya jawab via WhatsApp!
            </p>
          </div>

          <a
            href={`https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
              "Halo OKAY Dental Therapist, saya ingin konsultasi awal mengenai keluhan gigi saya sebelum jadwal kunjungan."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-sm shrink-0 transition-transform hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-500" />
            <span>Tanya via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
