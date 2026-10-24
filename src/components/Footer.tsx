"use client";

import React from "react";
import Image from "next/image";
import { CLINIC_INFO } from "@/data/dentalData";
import { MessageCircle, Heart, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 relative overflow-hidden border-t-4 border-purple-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <a href="#hero" className="block relative h-11 w-48 transition-transform hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="OKAY DENTAL Therapist"
                fill
                className="object-contain object-left"
              />
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Klinik perawatan kesehatan gigi dan mulut terapis dengan suasana ceria, ramah anak, dan bebas rasa takut.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CLINIC_INFO.waLink}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp Resmi"
                className="w-9 h-9 rounded-xl bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
              </a>

              <a
                href={CLINIC_INFO.tiktokLink}
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok Resmi"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298 0 .59.046.87.135V9.32a6.32 6.32 0 00-.87-.06A6.335 6.335 0 003.15 15.6a6.34 6.34 0 008.28 6.07 6.328 6.328 0 004.4-6.02V8.78a8.18 8.18 0 004.64 1.44V6.78c-.29-.01-.58-.04-.88-.09z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-purple-300 mb-4">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#hero" className="hover:text-sky-400 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#jadwal" className="hover:text-sky-400 transition-colors">
                  Jadwal Buka Praktik
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-sky-400 transition-colors">
                  Layanan Perawatan
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-sky-400 transition-colors">
                  Booking Online WA
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-sky-400 transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Operational Hours Summary */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-purple-300 mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-400" />
              <span>Jadwal Operasional</span>
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <span className="font-bold text-sky-400 block mb-0.5">
                  Senin - Sabtu (Sore)
                </span>
                <span className="text-white font-black text-base">
                  16.30 - 20.00 WIB
                </span>
              </div>

              <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                <span className="font-bold text-purple-400 block mb-0.5">
                  Minggu (Pagi)
                </span>
                <span className="text-white font-black text-base">
                  10.00 - 12.00 WIB
                </span>
              </div>
            </div>
          </div>

          {/* Contact & Notice */}
          <div>
            <h4 className="font-heading font-black text-sm uppercase tracking-wider text-purple-300 mb-4">
              Kontak Resmi
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div>
                <span className="text-slate-400 text-xs block">WhatsApp:</span>
                <a
                  href={CLINIC_INFO.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-black text-emerald-400 hover:underline text-base"
                >
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                💡 {CLINIC_INFO.notice}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} OKAY Dental Therapist. Seluruh Hak Cipta Dilindungi.
          </p>
          <p className="flex items-center gap-1 justify-center">
            Dibuat dengan <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> untuk Senyum Sehat Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
