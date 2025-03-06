"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years of Excellence", value: "25+" },
  { label: "Global Clients", value: "500+" },
  { label: "Team Members", value: "150+" },
  { label: "Projects Delivered", value: "1000+" },
];

export function StatsSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
              {stat.value}
            </h3>
            <p className="text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
