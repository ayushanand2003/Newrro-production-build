'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BackgroundLines } from "@/components/ui/background-lines";

export function HeroSection() {
  const [responsiveScale, setResponsiveScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setResponsiveScale(window.innerWidth < 768 ? 0.8 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative flex items-center justify-center bg-white overflow-hidden px-4 min-h-screen pt-[var(--navbar-height)]">
      <BackgroundLines className="absolute inset-0 z-0 pointer-events-none" />

      <div className="text-center max-w-4xl mx-auto space-y-6 relative z-10">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#df5bd3] to-[#7e5bf6]">
            ABOUT US
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white-700 font-medium leading-relaxed"
        >
          &quot;We are a passionate team dedicated to revolutionizing the way you learn robotics. Our mission is to make robotics education accessible, engaging, and fun for everyone.&quot;
        </motion.p>
      </div>
    </section>
  );
}
