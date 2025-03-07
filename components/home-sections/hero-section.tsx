"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const preloadVideo = async () => {
      const video = videoRef.current;
      if (!video) return;

      try {
        // ✅ Prefetch compressed video into cache before rendering
        const response = await fetch("/v3.mp4", { cache: "force-cache" });
        if (response.ok) {
          setVideoLoaded(true);
          video.load(); // Load video into memory before rendering
        }
      } catch (error) {
        console.error("Video preload failed:", error);
      }
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(preloadVideo);
    } else {
      preloadVideo();
    }

    // ✅ Force video to play instantly in the next render cycle
    requestAnimationFrame(() => {
      if (videoRef.current) {
        videoRef.current
          .play()
          .then(() => console.log("Video playing"))
          .catch((error) => console.error("Autoplay failed:", error));
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ✅ Optimized Background Video Loading */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video-thumbnail.jpg"
        className={`absolute inset-0 z-0 w-full h-full object-cover transition-opacity duration-500 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/v3.webm" type="video/webm" />
        <source src="/v3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
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
            className="text-xl md:text-2xl text-white font-semibold max-w-3xl mx-auto mb-6"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
          >
            &quot;Bring your imaginations to life with us.&quot;
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-white/90 font-medium max-w-3xl mx-auto mb-12"
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
