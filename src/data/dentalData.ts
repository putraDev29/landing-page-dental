export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  duration: string;
  iconName: string;
  benefits: string[];
}

export interface ScheduleInfo {
  period: string;
  session: string;
  time: string;
  icon: string;
  color: string;
  badgeBg: string;
}

export const CLINIC_INFO = {
  name: "OKAY DENTAL THERAPIST",
  tagline: "Perawatan Gigi Nyaman, Ceria & Bebas Ngilu",
  phone: "083856480982",
  phoneDisplay: "0838-5648-0982",
  phoneRaw: "6283856480982",
  waLink: "https://wa.me/6283856480982",
  tiktokHandle: "@okaydentaltherapist",
  tiktokLink: "https://tiktok.com",
  instagramHandle: "@okaydental.therapist",
  address: "Jl. Sehat Ceria No. 28, Area Nyaman (Dekat Pusat Kota)",
  notice: "Cek status wa atau tiktok secara berkala untuk update terbaru (jika tutup akan di update)",
};

export const CLINIC_SCHEDULES: ScheduleInfo[] = [
  {
    period: "Senin - Sabtu",
    session: "Sore",
    time: "16.30 - 20.00",
    icon: "sun",
    color: "#0284c7",
    badgeBg: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
  },
  {
    period: "Minggu",
    session: "Pagi",
    time: "10.00 - 12.00",
    icon: "morning",
    color: "#7c3aed",
    badgeBg: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "scaling",
    title: "Scaling & Bersih Karang",
    category: "Perawatan Dasar",
    badge: "Paling Populer ⭐",
    description: "Membersihkan karang gigi dan plak membandel dengan alat ultrasonic gentle. Bikin gusi sehat & napas fresh!",
    duration: "30 - 45 Menit",
    iconName: "sparkles",
    benefits: ["Mencegah bau mulut & radang gusi", "Alat ultrasonic tanpa rasa ngilu berlebih", "Polesing halus pasca pembersihan"],
  },
  {
    id: "filling",
    title: "Penambalan Gigi Estetik",
    category: "Restorasi",
    badge: "Warna Alami",
    description: "Tambal gigi berlubang menggunakan bahan resin komposit sewarna gigi asli. Rapi, kuat, dan tampak alami.",
    duration: "30 - 60 Menit",
    iconName: "shield",
    benefits: ["Bahan komposit grade premium", "Tahan kunyah & tidak mudah lepas", "Bentuk disesuaikan lekuk alami gigi"],
  },
  {
    id: "kids-care",
    title: "Perawatan Gigi Anak",
    category: "Pediatrik Ramah Anak",
    badge: "Favorit Si Kecil 👶",
    description: "Pemeriksaan dan perawatan gigi dengan pendekatan sabar & seru. Dilengkapi reward stiker agar si kecil tidak takut!",
    duration: "20 - 40 Menit",
    iconName: "heart",
    benefits: ["Terapis komunikatif & sabar", "Ruangan nyaman tanpa kesan menakutkan", "Bonus edukasi sikat gigi benar"],
  },
  {
    id: "bleaching",
    title: "Bleaching / Whitening Gigi",
    category: "Estetika Senyum",
    badge: "Senyum Berkilau ✨",
    description: "Mencerahkan warna gigi yang kusam akibat kopi/teh. Hasil langsung terlihat lebih cerah dalam 1 sesi.",
    duration: "45 - 60 Menit",
    iconName: "sun",
    benefits: ["Formula pencerah aman untuk email gigi", "Hasil instan 2-4 tingkat lebih cerah", "Termasuk pelindung gusi anti-iritasi"],
  },
  {
    id: "cabut-susu",
    title: "Pencabutan Gigi Susu",
    category: "Tumbuh Kembang",
    badge: "Minim Trauma",
    description: "Pencabutan gigi susu yang sudah goyang atau persistensi untuk memberi ruang tumbuh gigi tetap yang rapi.",
    duration: "15 - 30 Menit",
    iconName: "check",
    benefits: ["Anestesi topikal rasa manis/buah", "Proses cepat dalam hitungan detik", "Panduan perawatan pasca cabut"],
  },
  {
    id: "fluoride",
    title: "Fluoride Topical & Sealant",
    category: "Proteksi Gigi",
    badge: "Cegah Lubang",
    description: "Pelapisan fluoride dan penutup ceruk gigi geraham untuk memproteksi gigi dari asam dan bakteri penyebab karies.",
    duration: "20 - 30 Menit",
    iconName: "smile",
    benefits: ["Memperkuat lapisan email gigi", "Melindungi gigi hingga berbulan-bulan", "Cocok untuk anak-anak & remaja"],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Bunda Rania & Kenzie (6 th)",
    role: "Pasien Gigi Anak",
    rating: 5,
    avatarColor: "#FCE7F3",
    avatarText: "RK",
    comment:
      "Biasanya Kenzie selalu histeris kalau ke klinik gigi. Tapi di OKAY Dental Therapist malah happy banget karena terapisnya ramah, sabar, dan tempatnya gemas sekali! Pulang-pulang dikasih stiker bintang.",
  },
  {
    id: 2,
    name: "Dimas Anggara",
    role: "Pasien Scaling & Estetik",
    rating: 5,
    avatarColor: "#E0F2FE",
    avatarText: "DA",
    comment:
      "Pertama kali scaling gigi yang bener-bener gak ngilu parah. Terapisnya teliti banget bersihin sampai ke sela-sela belakang. Jadwal sorenya pas banget pulang kerja!",
  },
  {
    id: 3,
    name: "Clarissa Putri",
    role: "Pasien Tambal Estetik",
    rating: 5,
    avatarColor: "#EDE9FE",
    avatarText: "CP",
    comment:
      "Tambalan gigi depanku rapi pol, warnanya bener-bener menyatu sama gigi asli gak kelihatan belang sama sekali. Harganya juga sangat transparan dan ramah kantong mahasiswa.",
  },
  {
    id: 4,
    name: "Pak Hendra Kurniawan",
    role: "Pasien Rutin Keluarga",
    rating: 5,
    avatarColor: "#FEF3C7",
    avatarText: "HK",
    comment:
      "Suka banget sama sistem appointment lewat WhatsApp. Respon adminnya cepet dan ramah. Kalau mau datang tinggal cek status WA dulu seperti yang tertera di poster jadwal. Recommended!",
  },
];

export const FAQS = [
  {
    q: "Apakah wajib membuat janji (booking) sebelum datang?",
    a: "Sangat disarankan untuk melakukan reservasi melalui WhatsApp terlebih dahulu agar Anda mendapatkan nomor antrean dan tidak perlu menunggu lama di klinik.",
  },
  {
    q: "Bagaimana cara mengetahui jika klinik sedang libur atau tutup mendadak?",
    a: "Sesuai informasi di jadwal kami, silakan cek Status WhatsApp kami (0838-5648-0982) atau akun TikTok kami secara berkala. Setiap update operasional atau hari libur akan selalu diumumkan di sana.",
  },
  {
    q: "Apakah melayani anak-anak yang memiliki trauma atau takut dokter gigi?",
    a: "Tentu! OKAY Dental Therapist mengutamakan pendekatan gentle, ramah, dan komunikatif. Kami mengondisikan anak agar merasa santai seperti sedang bermain sebelum melakukan tindakan.",
  },
  {
    q: "Metode pembayaran apa saja yang diterima?",
    a: "Kami menerima pembayaran tunai (cash), QRIS (BCA, Mandiri, GoPay, OVO, ShopeePay), dan transfer bank.",
  },
  {
    q: "Berapa lama waktu yang dibutuhkan untuk 1 kali perawatan?",
    a: "Rata-rata perawatan memakan waktu antara 20 hingga 50 menit tergantung jenis tindakan (misal scaling sekitar 30-40 menit, tambal gigi sekitar 30 menit).",
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: "heart-handshake",
    title: "Pendekatan Gentle & Ramah",
    desc: "Suasana santai dan penjelasan yang menenangkan, membuat anak maupun dewasa bebas dari kecemasan ke klinik gigi.",
    bg: "#FFF0F5",
    accent: "#E11D48",
  },
  {
    icon: "shield-check",
    title: "Alat Steril Standar Medis",
    desc: "Semua instrumen melewati proses sterilisasi autoclave berstandar kesehatan ketat demi keamanan maksimal setiap pasien.",
    bg: "#EFF6FF",
    accent: "#0284C7",
  },
  {
    icon: "sparkles",
    title: "Hasil Rapi & Estetik",
    desc: "Dikerjakan dengan ketelitian tinggi untuk hasil senyum yang bersih, alami, dan mengembalikan rasa percaya diri.",
    bg: "#FAF5FF",
    accent: "#7C3AED",
  },
  {
    icon: "wallet",
    title: "Konsultasi Ramah & Fleksibel",
    desc: "Tanya jawab kondisi gigi dan penyesuaian jadwal tindakan dilakukan secara ramah via WhatsApp sebelum kedatangan.",
    bg: "#FEFCE8",
    accent: "#CA8A04",
  },
];
