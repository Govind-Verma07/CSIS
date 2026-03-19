import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VLabSection from "@/components/VLabSection";
import VLabCapabilities from "@/components/VLabCapabilities";
import SystemArchitecture from "@/components/SystemArchitecture";
import SecurityLayer from "@/components/SecurityLayer";
import DomainsSection from "@/components/DomainsSection";
import FeaturesSection from "@/components/FeaturesSection";
import LabIntegration from "@/components/LabIntegration";
import ResearchPipeline from "@/components/ResearchPipeline";
import ActivitiesSection from "@/components/ActivitiesSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import TeamSection from "@/components/TeamSection";
import SocietyStructure from "@/components/SocietyStructure";
import InductionProcess from "@/components/InductionProcess";
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
      <VLabCapabilities />
      <SystemArchitecture />
      <SecurityLayer />
      <DomainsSection />
      <FeaturesSection />
      <LabIntegration />
      <ResearchPipeline />
      <ActivitiesSection />
      <AnalyticsSection />
      <TeamSection />
      <SocietyStructure />
      <InductionProcess />
      <StatsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
