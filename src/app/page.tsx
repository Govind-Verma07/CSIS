import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VLabSection from "@/components/VLabSection";
import DomainsSection from "@/components/DomainsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import TeamSection from "@/components/TeamSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VLabSection />
      <DomainsSection />
      <FeaturesSection />
      <ActivitiesSection />
      <TeamSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
