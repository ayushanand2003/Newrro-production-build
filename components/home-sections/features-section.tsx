"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, Zap, Target, Rocket, Star } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="w-12 h-12" />,
    title: "Innovative Learning",
    description: "Cutting-edge educational methods that adapt to your learning style"
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience"
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Hands-on Experience",
    description: "Practical projects and real-world applications"
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: "Personalized Learning",
    description: "Tailored curriculum to meet your specific goals"
  },
  {
    icon: <Rocket className="w-12 h-12" />,
    title: "Career Advancement",
    description: "Gain skills that are in high demand in the robotics industry"
  },
  {
    icon: <Star className="w-12 h-12" />,
    title: "Quality Resources",
    description: "Access to top-notch educational materials and equipment"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Why Choose NEWRRO?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the power of innovative robotics education
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 glass-effect hover:shadow-lg">
                <div className="relative z-10">
                  <div className="mb-4 text-[#df5bd3] group-hover:text-[#7e5bf6] transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}