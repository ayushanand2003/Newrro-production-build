'use client';

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function CallToActionSection() {
  return (
    <section className="bg-teal-600 text-white py-20">
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-extrabold"
        >
          Ready to Learn Robotics?
        </motion.h2>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <a href="/contact">
            <button className="bg-[#df5bd3] hover:bg-[#c74ebe] text-white px-6 py-3 md:px-8 md:py-4 text-lg font-semibold rounded-full flex items-center gap-2 shadow-md transition-transform transform hover:scale-105">
              Get in Touch
              <ChevronRight className="w-5 h-5" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
