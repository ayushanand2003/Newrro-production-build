'use client';

import { motion } from "framer-motion";

export function ValuesSection() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="text-center max-w-4xl mx-auto space-y-10">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-extrabold text-gray-900"
        >
          Our Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
            <p className="text-gray-600">
              We embrace new ideas and technologies to continuously improve and provide cutting-edge education.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800">Integrity</h3>
            <p className="text-gray-600">
              We uphold honesty, transparency, and accountability in all our interactions and work.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800">Collaboration</h3>
            <p className="text-gray-600">
              We believe in the power of teamwork and collaboration to achieve our common goals and vision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
