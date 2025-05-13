"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ContainerScroll, Card } from "@/components/ui/container-scroll";

export function HeroSection() {
  const [responsiveScale, setResponsiveScale] = useState(1);

  // Scroll animation trigger
  const videoSectionRef = useRef(null);
  const isInView = useInView(videoSectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleResize = () => {
      setResponsiveScale(window.innerWidth < 768 ? 0.8 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* 🟣 Hero Section */}
      <section className="relative h-[60vh] pt-16 pb-4 bg-gradient-to-r from-[hsl(var(--chart-1))] to-[hsl(var(--chart-2))]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 mx-auto px-4 h-full flex flex-col items-left justify-center text-left"
        >
          {/* ARJUNA Gradient Heading */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-9xl font-bold mb-6 text-left"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#df5bd3] to-[#7e5bf6]">
              ARJUNA
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-4xl text-white/90 mb-4"
          >
            The Future of Robotics Starts Here
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm md:text-2xl text-white/80 max-w-2xl mb-6"
          >
            Explore the technology powering ARJUNA, our most advanced and visionary robotics solution yet.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" variant="secondary" className="text-lg">
              Join Our Journey
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
