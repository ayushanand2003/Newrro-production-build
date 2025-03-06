import { HeroSection } from "@/components/about-us/hero-section";
import { TeamSection } from "@/components/about-us/team-section";
import { ValuesSection } from "@/components/about-us/values-section";
import { StatsSection } from "@/components/about-us/stats-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <TeamSection />
      <ValuesSection />
      <StatsSection />
      
    </div>
  );
}
