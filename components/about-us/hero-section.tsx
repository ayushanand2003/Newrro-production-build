"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BackgroundLines } from "@/components/ui/background-lines"; // ✅ Import BackgroundLines

export function HeroSection() {
  return (
    <div className="relative h-[70vh] bg-gradient-to-r from-[hsl(var(--chart-1))] to-[hsl(var(--chart-2))]">
      <div className="absolute inset-0 bg-black/50" />
      <BackgroundLines className="absolute inset-0 opacity-20">
        <></> {/* ✅ Empty fragment to satisfy required `children` prop */}
      </BackgroundLines>{/* ✅ Apply BackgroundLines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10 mx-auto px-4 h-full flex items-center"
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
          Improving Everyday Life With Robotics
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Since 1995, we&apos;ve been at the forefront of innovation, crafting solutions that shape the future of technology and business.
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            Join Our Journey
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
