"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { SERVICES, CLINIC_INFO } from "@/data/dentalData";
import {
  Sparkles,
  Send,
  User,
  CheckCircle2,
  Phone,
} from "lucide-react";

export default function BookingCalculator() {
  const [selectedServiceId, setSelectedServiceId] = useState(SERVICES[0].id);
  const [scheduleSlot, setScheduleSlot] = useState(
    "Senin - Sabtu (Sore: 16.30 - 20.00)"
  );
  const [preferredDate, setPreferredDate] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientAge, setPatientAge] = useState("");
  const [complaint, setComplaint] = useState("");

  const selectedService =
    SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();

    if (!patientName.trim()) {
      alert("Silakan isi nama pasien terlebih dahulu");
      return;
    }

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#38bdf8", "#c084fc", "#f472b6", "#fbbf24"],
      });
    } catch {
      // ignore
    }

    const message = `Halo OKAY Dental Therapist!
Saya ingin melakukan reservasi / booking jadwal perawatan gigi:

📋 *Detail Reservasi:*
• Nama Pasien: ${patientName} ${patientAge ? `(${patientAge} th)` : ""}
• No. WhatsApp: ${patientPhone || "-"}
• Layanan Dipilih: ${selectedService.title}
• Estimasi Waktu: ${selectedService.duration}
• Pilihan Sesi: ${scheduleSlot}
${preferredDate ? `• Rencana Tanggal: ${preferredDate}` : ""}
${complaint ? `• Keluhan / Catatan: ${complaint}` : ""}

Apakah slot antrean pada sesi tersebut masih tersedia? Mohon konfirmasinya ya kak, terima kasih!`;

    const waUrl = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
      message
    )}`;

    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 300);
  };

  return (
    <section id="booking" className="py-12 sm:py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 border border-pink-200 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 shadow-xs">
            <Sparkles className="w-4 h-4 text-pink-600" />
            <span>Booking Mudah & Langsung</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-800 font-heading">
            Booking Jadwal Perawatan Gigi
          </h2>
          <p className="text-slate-600 mt-2 text-xs sm:text-base max-w-xl mx-auto">
            Pilih tindakan dan jadwal yang sesuai dengan jam operasional kami. Data akan langsung dikirim ke WhatsApp admin klinik.
          </p>
        </div>

        {/* Form Box */}
        <div className="bg-white border-3 border-purple-200 rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg">
          <form onSubmit={handleBooking} className="space-y-6">
            
            {/* Step 1: Pilih Layanan */}
            <div>
              <div className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2 font-heading">
                <span className="w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center text-xs">
                  1
                </span>
                <span>Pilih Layanan Perawatan</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {SERVICES.map((s) => {
                  const isSelected = s.id === selectedServiceId;
                  return (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSelectedServiceId(s.id)}
                      className={`text-left p-3.5 rounded-2xl border-2 transition-all cursor-pointer ${
                        isSelected
                          ? "border-purple-600 bg-purple-50/80 shadow-xs"
                          : "border-slate-200 hover:border-purple-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-bold text-purple-700">
                          {s.category}
                        </span>
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-purple-600" />
                        )}
                      </div>
                      <p className="text-sm font-black text-slate-800 font-heading leading-tight">
                        {s.title}
                      </p>
                      <span className="text-xs text-slate-500 block mt-1">
                        Estimasi: {s.duration}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Pilih Sesi Praktik */}
            <div>
              <div className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2 font-heading">
                <span className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs">
                  2
                </span>
                <span>Pilih Sesi Sesuai Jadwal Praktik</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* Sesi 1: Senin - Sabtu */}
                <div
                  onClick={() =>
                    setScheduleSlot("Senin - Sabtu (Sore: 16.30 - 20.00)")
                  }
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    scheduleSlot.includes("Senin")
                      ? "border-sky-500 bg-sky-50 shadow-xs"
                      : "border-slate-200 hover:border-sky-300 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="bg-sky-600 text-white font-heading font-black text-xs px-3.5 py-1 rounded-full shadow-xs">
                      Senin - Sabtu
                    </span>
                    <span className="text-xs font-bold text-sky-800">
                      Sore
                    </span>
                  </div>
                  <div className="text-xl font-black text-slate-800 font-heading mt-2">
                    16.30 - 20.00
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Sesi reguler sore hari
                  </p>
                </div>

                {/* Sesi 2: Minggu */}
                <div
                  onClick={() =>
                    setScheduleSlot("Minggu (Pagi: 10.00 - 12.00)")
                  }
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    scheduleSlot.includes("Minggu")
                      ? "border-purple-500 bg-purple-50 shadow-xs"
                      : "border-slate-200 hover:border-purple-300 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="bg-purple-600 text-white font-heading font-black text-xs px-3.5 py-1 rounded-full shadow-xs">
                      Minggu
                    </span>
                    <span className="text-xs font-bold text-purple-800">
                      Pagi
                    </span>
                  </div>
                  <div className="text-xl font-black text-slate-800 font-heading mt-2">
                    10.00 - 12.00
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Sesi weekend ramah keluarga
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Data Pasien */}
            <div>
              <div className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2 font-heading">
                <span className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-xs">
                  3
                </span>
                <span>Data Pasien & Rencana Kunjungan</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">
                    Nama Pasien <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Bella / Adik Ken"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">
                    No. WhatsApp Pasien
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      placeholder="Contoh: 081234567890"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">
                    Usia Pasien (Opsional)
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: 6 tahun / 24 tahun"
                    value={patientAge}
                    onChange={(e) => setPatientAge(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">
                    Rencana Tanggal (Opsional)
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">
                    Keluhan atau Catatan
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Gigi ngilu saat minum dingin"
                    value={complaint}
                    onChange={(e) => setComplaint(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Summary & Submit */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-[11px] font-bold text-purple-700 uppercase tracking-wide block">
                  Ringkasan Booking
                </span>
                <p className="text-base font-black text-slate-800 font-heading">
                  {selectedService.title}
                </p>
                <div className="text-xs text-slate-600 flex items-center justify-center sm:justify-start gap-2 mt-0.5">
                  <span>Estimasi Pengerjaan: {selectedService.duration}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-black text-sm px-6 py-3.5 rounded-full shadow-md shadow-emerald-200 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Booking via WhatsApp</span>
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
