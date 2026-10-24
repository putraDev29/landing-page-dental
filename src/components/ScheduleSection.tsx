"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CLINIC_INFO } from "@/data/dentalData";
import {
  Sun,
  Sunrise,
  Megaphone,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function ScheduleSection() {
  const [clinicStatus, setClinicStatus] = useState<{
    isOpen: boolean;
    label: string;
    sublabel: string;
    type: "open" | "soon" | "closed";
  }>({
    isOpen: false,
    label: "Mengecek Jadwal...",
    sublabel: "Memuat waktu operasional",
    type: "closed",
  });

  useEffect(() => {
    const checkSchedule = () => {
      const now = new Date();
      // Indonesian Western Time (WIB = UTC+7)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const wibTime = new Date(utc + 3600000 * 7);

      const day = wibTime.getDay(); // 0: Sunday, 1-6: Mon-Sat
      const hours = wibTime.getHours();
      const minutes = wibTime.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      if (day === 0) {
        // Sunday: 10:00 - 12:00
        const start = 10 * 60;
        const end = 12 * 60;
        if (totalMinutes >= start && totalMinutes < end) {
          setClinicStatus({
            isOpen: true,
            label: "Klinik Sedang BUKA Sekarang!",
            sublabel: "Sesi Minggu Pagi (10.00 - 12.00 WIB)",
            type: "open",
          });
        } else if (totalMinutes < start) {
          setClinicStatus({
            isOpen: false,
            label: "Buka Pagi Ini Jam 10.00 WIB",
            sublabel: "Sesi Minggu Pagi (10.00 - 12.00 WIB)",
            type: "soon",
          });
        } else {
          setClinicStatus({
            isOpen: false,
            label: "Praktik Sesi Minggu Telah Selesai",
            sublabel: "Buka kembali Senin sore jam 16.30 WIB",
            type: "closed",
          });
        }
      } else {
        // Mon - Sat: 16:30 - 20:00
        const start = 16 * 60 + 30;
        const end = 20 * 60;
        if (totalMinutes >= start && totalMinutes < end) {
          setClinicStatus({
            isOpen: true,
            label: "Klinik Sedang BUKA Sore Ini!",
            sublabel: "Sesi Sore melayani hingga 20.00 WIB",
            type: "open",
          });
        } else if (totalMinutes < start) {
          setClinicStatus({
            isOpen: false,
            label: "Buka Nanti Sore Jam 16.30 WIB",
            sublabel: "Bisa booking antrean WhatsApp terlebih dahulu",
            type: "soon",
          });
        } else {
          setClinicStatus({
            isOpen: false,
            label: "Praktik Hari Ini Sudah Selesai",
            sublabel:
              day === 6
                ? "Buka besok Minggu pagi jam 10.00 WIB"
                : "Buka kembali besok sore jam 16.30 WIB",
            type: "closed",
          });
        }
      }
    };

    checkSchedule();
    const interval = setInterval(checkSchedule, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="jadwal" className="py-10 sm:py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Subtle Section Badge & Title */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 border border-pink-200 px-4 py-1.5 rounded-full mb-2 shadow-xs">
            <Sparkles className="w-4 h-4 text-pink-600" />
            <span className="text-xs sm:text-sm font-bold font-heading">
              Jadwal Resmi Praktik
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-800 font-heading">
            Waktu Operasional Klinik
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mt-1">
            Reservasi via WhatsApp terlebih dahulu agar konsultasi & perawatan lebih nyaman tanpa antre panjang.
          </p>

          {/* Live Status Pill */}
          <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-xs text-xs font-bold bg-white">
            <span className="relative flex h-2.5 w-2.5">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  clinicStatus.type === "open"
                    ? "bg-emerald-400"
                    : clinicStatus.type === "soon"
                    ? "bg-amber-400"
                    : "bg-slate-400"
                }`}
              />
              <span
                className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                  clinicStatus.type === "open"
                    ? "bg-emerald-500"
                    : clinicStatus.type === "soon"
                    ? "bg-amber-500"
                    : "bg-slate-400"
                }`}
              />
            </span>
            <span className="text-slate-800">{clinicStatus.label}</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500 font-normal">{clinicStatus.sublabel}</span>
          </div>
        </div>

        {/* ================= POSTER CARD (REPLICATING REFERENCE IMAGE) ================= */}
        <div className="bg-white border-4 sm:border-[6px] border-pink-200 rounded-[32px] sm:rounded-[44px] p-5 sm:p-8 md:p-10 shadow-xl shadow-pink-100/60 relative">
          
          {/* Top Poster Logo */}
          <div className="text-center mb-5 sm:mb-6 flex justify-center">
            <div className="relative h-12 sm:h-14 w-44 sm:w-56">
              <Image
                src="/images/logo-light.png"
                alt="OKAY DENTAL Therapist"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Ribbon Title Banner: "Jadwal Buka Praktik" */}
          <div className="text-center mb-7 sm:mb-8">
            <div className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 border-2 sm:border-3 border-pink-400 rounded-full px-6 sm:px-10 py-2 sm:py-2.5 shadow-sm max-w-full">
              <span className="text-xl sm:text-2xl">🗓️</span>
              <h3 className="text-lg sm:text-2xl font-black text-sky-800 font-heading tracking-tight drop-shadow-xs">
                Jadwal Buka Praktik
              </h3>
              <span className="text-xl sm:text-2xl">⏰</span>
            </div>
          </div>

          {/* Dual Schedule Cards (Senin-Sabtu & Minggu) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6 mb-6 sm:mb-8 pt-2">
            
            {/* CARD 1: SENIN - SABTU */}
            <div className="relative bg-sky-50/70 border-3 border-sky-400 rounded-3xl p-5 sm:p-6 text-center pt-8 sm:pt-9 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              {/* Header Floating Pill */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-sky-600 text-white font-heading font-black text-xs sm:text-sm px-6 py-1.5 rounded-full shadow-sm border-2 border-white whitespace-nowrap">
                  Senin - Sabtu
                </span>
              </div>

              {/* Session: Sore */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 shadow-xs">
                  <Sun className="w-5 h-5 fill-amber-400 stroke-amber-600" />
                </div>
                <span className="text-xl sm:text-2xl font-black text-sky-900 font-heading">
                  Sore
                </span>
              </div>

              {/* Big Time Display */}
              <div className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight font-heading my-1">
                16.30 - 20.00
              </div>

              <div className="mt-2">
                <span className="text-[11px] font-bold text-sky-800 bg-sky-200/70 px-3 py-1 rounded-full inline-block">
                  Sesi Sore Reguler
                </span>
              </div>
            </div>

            {/* CARD 2: MINGGU */}
            <div className="relative bg-purple-50/70 border-3 border-purple-400 rounded-3xl p-5 sm:p-6 text-center pt-8 sm:pt-9 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              {/* Header Floating Pill */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-purple-600 text-white font-heading font-black text-xs sm:text-sm px-7 py-1.5 rounded-full shadow-sm border-2 border-white whitespace-nowrap">
                  Minggu
                </span>
              </div>

              {/* Session: Pagi */}
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 shadow-xs">
                  <Sunrise className="w-5 h-5 text-pink-600" />
                </div>
                <span className="text-xl sm:text-2xl font-black text-purple-900 font-heading">
                  Pagi
                </span>
              </div>

              {/* Big Time Display */}
              <div className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight font-heading my-1">
                10.00 - 12.00
              </div>

              <div className="mt-2">
                <span className="text-[11px] font-bold text-purple-800 bg-purple-200/70 px-3 py-1 rounded-full inline-block">
                  Sesi Weekend Pagi
                </span>
              </div>
            </div>

          </div>

          {/* ================= WHATSAPP NUMBER BADGE (MATCHING POSTER) ================= */}
          <div className="mb-5 sm:mb-6 flex justify-center">
            <a
              href={CLINIC_INFO.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 bg-white border-3 border-purple-300 hover:border-emerald-500 px-5 sm:px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-[1.02] group"
            >
              {/* WhatsApp Green Icon */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-500 flex items-center justify-center shadow-xs shrink-0 group-hover:rotate-12 transition-transform">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>

              {/* Number and Label */}
              <div className="text-center sm:text-left">
                <span className="text-[10px] sm:text-xs font-black text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full inline-block font-heading">
                  Nomer WhatsApp
                </span>
                <div className="text-xl sm:text-2xl font-black text-slate-800 font-heading tracking-wide">
                  {CLINIC_INFO.phone}
                </div>
              </div>

              <div className="hidden md:flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 ml-1">
                <span>Chat Sekarang</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>

          {/* ================= NOTICE BANNER ================= */}
          <div className="bg-purple-50/70 border-2 border-dashed border-purple-300 rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-purple-200 text-purple-700 flex items-center justify-center shrink-0">
                <Megaphone className="w-4 h-4 -rotate-12" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-purple-900 leading-snug">
                {CLINIC_INFO.notice}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={CLINIC_INFO.waLink}
                target="_blank"
                rel="noopener noreferrer"
                title="Status WhatsApp"
                className="w-8 h-8 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-xs"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              <a
                href={CLINIC_INFO.tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok @okaydentaltherapist"
                className="w-8 h-8 rounded-full bg-black hover:bg-slate-800 text-white flex items-center justify-center transition-transform hover:scale-110 shadow-xs"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298 0 .59.046.87.135V9.32a6.32 6.32 0 00-.87-.06A6.335 6.335 0 003.15 15.6a6.34 6.34 0 008.28 6.07 6.328 6.328 0 004.4-6.02V8.78a8.18 8.18 0 004.64 1.44V6.78c-.29-.01-.58-.04-.88-.09z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Flanking Cute Illustrations (with safety margin) */}
          <div className="mt-8 pt-5 border-t border-pink-100 flex items-center justify-between">
            {/* Left Corner: Cute smiling tooth */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 relative rounded-2xl overflow-hidden border-2 border-sky-300 shadow-sm shrink-0">
                <Image
                  src="/images/cute-tooth.jpg"
                  alt="Tooth character"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-xs font-black text-sky-700 block font-heading">
                  Ramah & Ceria
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  Perawatan tanpa cemas
                </span>
              </div>
            </div>

            {/* Right Corner: Cute Toothbrush in Cup */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-right">
                <span className="text-xs font-black text-purple-700 block font-heading">
                  Alat Steril Modern
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  Higienis standar klinik
                </span>
              </div>
              <div className="w-12 h-12 sm:w-14 sm:h-14 relative rounded-2xl overflow-hidden border-2 border-purple-300 shadow-sm shrink-0">
                <Image
                  src="/images/toothbrush-cup.jpg"
                  alt="Toothbrush cup"
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
