import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import ServicesSection from "@/components/ServicesSection";
import BookingCalculator from "@/components/BookingCalculator";
import WhyChooseUs from "@/components/WhyChooseUs";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Primary Jadwal Section (Matching Reference Image) */}
      <ScheduleSection />

      {/* Services List */}
      <ServicesSection />

      {/* Interactive Booking & Cost Estimator */}
      <BookingCalculator />

      {/* Value Pillars (Why Choose Us) */}
      <WhyChooseUs />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp CTA Button */}
      <FloatingWhatsApp />
    </main>
  );
}
