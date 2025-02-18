'use client';

import { motion } from "framer-motion";

export function MissionSection() {
  return (
    <section className="bg-white py-20">
      <div className="text-center max-w-4xl mx-auto space-y-10">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-extrabold text-gray-900"
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-700"
        >
          Our mission is to make robotics education accessible to everyone, regardless of age or background. We aim to empower the next generation of engineers and innovators by providing hands-on learning experiences, tools, and mentorship.
        </motion.p>
      </div>
    </section>
  );
}
