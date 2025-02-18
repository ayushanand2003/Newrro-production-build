"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Months of Operation", value: "12" },
  { label: "Students", value: "1500+" },
  { label: "Courses", value: "10+" },
  { label: "Edu Kits Scaled", value: "5+" },
];

export function WhyNewrroSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold  mb-6 text-gray-900">
            A Different Approach, Where Education Meets Innovation!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We design and deliver high-quality educational kits that transform learning into a practical experience. By visualizing the workings of electronics, programming, and design, students gain a comprehensive understanding.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[#df5bd3] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}