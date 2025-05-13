'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/lib/productList';

// Arjuna-specific sections
import { HeroSection } from '@/components/Arjuna-sections/hero-section';
import dynamic from 'next/dynamic';
const ModelSection = dynamic(() => import('@/components/Arjuna-sections/model-section'), {
  ssr: false,
  loading: () => <p className="text-center py-16">Loading Arjuna 3D model...</p>
})
import { VideoSection as ArjunaVideo } from '@/components/Arjuna-sections/video-section';
import { IntelligenceFeatures as ArjunaIntel } from '@/components/Arjuna-sections/intelligence-features';
import  ArjunaSpecs  from '@/components/Arjuna-sections/specification-section';
import { ReviewsSectionArjuna as ArjunaReviews } from '@/components/Arjuna-sections/review';



// Babroo-specific sections
// import BabrooHero from '@/components/Babroo-sections/hero-section';
// import BabrooModel from '@/components/Babroo-sections/model-section';
// import BabrooVideo from '@/components/Babroo-sections/video-section';
// import BabrooIntel from '@/components/Babroo-sections/intelligence-features';
// import BabrooSpecs from '@/components/Babroo-sections/specs-timeline';
// import BabrooReviews from '@/components/Babroo-sections/review';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);
  if (!product) return <div className="p-10 text-center text-gray-600">Product not found</div>;

  const isArjuna = slug === 'arjuna';
  const isBabroo = slug === 'babroo';

  return (
    <>

      {/* Arjuna layout */}
      {isArjuna && <>
        <HeroSection />
        <ModelSection />
        <ArjunaVideo />
        <ArjunaIntel />
        <ArjunaSpecs />
        <ArjunaReviews />
      </>}

      {/* Babroo layout */}
      {/* {isBabroo && <>
        <BabrooHero />
        <BabrooModel />
        <BabrooVideo />
        <BabrooIntel />
        <BabrooSpecs />
        <BabrooReviews />
      </>} */}

      {/* Additional products render blocks here... */}
    </>
  );
}
