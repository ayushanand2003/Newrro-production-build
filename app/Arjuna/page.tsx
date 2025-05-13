import { HeroSection } from "@/components/Arjuna-sections/hero-section";
import { IntelligenceFeatures } from "@/components/Arjuna-sections/intelligence-features";
import  GroupedSpecCards   from "@/components/Arjuna-sections/specification-section";
import { ProductTabs } from "@/components/Arjuna-sections/otherproducts-section";
import dynamic from 'next/dynamic'
import { ReviewsSection } from "@/components/home-sections/reviews-section";
import { ReviewsSectionArjuna } from "@/components/Arjuna-sections/review";
import { VideoSection } from "@/components/Arjuna-sections/video-section";


const ModelSection = dynamic(() => import('@/components/Arjuna-sections/model-section'), {
  ssr: false,
  loading: () => <p className="text-center py-16">Loading Arjuna 3D model...</p>
})

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ModelSection />
      <VideoSection />
      <IntelligenceFeatures />
      <GroupedSpecCards />
      <ReviewsSectionArjuna />
      {/* <ProductTabs /> */}
      
    </div>
  );
}

