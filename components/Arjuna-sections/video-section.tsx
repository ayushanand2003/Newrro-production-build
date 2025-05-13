"use client"

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContainerScroll, Card } from "@/components/ui/container-scroll";

export function VideoSection() {
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
    <section
        ref={videoSectionRef}
        className="relative min-h-screen bg-white flex flex-col justify-center items-center text-black px-4 py-32"
      >
        {/* Top Quote */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-4xl font-medium text-center mb-8 max-w-6xl"
        >
          &quot;Revolutionizing How You Learn Robotics, One Step at a Time!&quot;
        </motion.p>

        {/* Video Scroll */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative"
        >
          <ContainerScroll>
            <Card videoSrc="v1.mp4" responsiveScale={responsiveScale} />
          </ContainerScroll>
        </motion.div>

        {/* CTA Text */}
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-4xl font-medium text-center mt-10 max-w-6xl"
        >
          &quot;Get the full scoop on Arjuna! Click below and explore all the possibilities!&quot;
        </motion.p>

        {/* Brochure Button */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <a href="/assets/NR_Arjuna_catalogue.pdf" download>
            <button className="bg-[#df5bd3] hover:bg-[#c74ebe] text-white px-8 py-4 text-lg rounded-full flex items-center group relative overflow-hidden transition-all duration-300 ease-in-out">
              <span className="relative z-10 flex items-center">
                Download Brochure
                <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </a>
        </motion.div>
      </section>
    </>
  );
}