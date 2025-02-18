"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        const video = videoRef.current;
        if (video) {
          video.play().catch((error) => {
            console.error("Video autoplay failed:", error);
          });
        }
      });
    } else {
      const video = videoRef.current;
      if (video) {
        video.play().catch((error) => {
          console.error("Video autoplay failed:", error);
        });
      }
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video-thumbnail.jpg" // Use a lightweight poster image
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <source src="/v3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-8 text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#df5bd3] to-[#7e5bf6]">
              NEWRRO
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white font-semibold max-w-3xl mx-auto mb-6 relative z-10"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
          >
            &quot;Bring your imaginations to life with us.&quot;
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-white/90 font-medium max-w-3xl mx-auto mb-12 relative z-10"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
          >
            Let us be your #1 stepping-stone towards the endless possibilities
            of your creations.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <Link href="https://wa.link/dr12f8" passHref>
              <Button
                size="lg"
                className="bg-[#df5bd3] hover:bg-[#c74ebe] text-white px-8 py-6 text-lg rounded-full group relative overflow-hidden transition-all duration-300 ease-in-out"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
