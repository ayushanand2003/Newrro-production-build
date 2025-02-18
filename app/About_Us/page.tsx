import { HeroSection } from "@/components/About-us-sections/hero-section";
import { TeamSection } from "@/components/About-us-sections/team-section";
import { MissionSection } from "@/components/About-us-sections/mission-section";
import { ValuesSection } from "@/components/About-us-sections/values-section";
import { CallToActionSection } from "@/components/About-us-sections/call-to-action-section";


import dynamic from 'next/dynamic';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* <HeroSection /> */}
      <TeamSection />
      <MissionSection />
      <ValuesSection />
      <CallToActionSection />
      
    </div>
  );
}

