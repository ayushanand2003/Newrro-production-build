"use client";

import { motion } from "framer-motion";
import { Building2, Users, Target, Award, Rocket, Heart, Brain, Globe } from "lucide-react";
import { BackgroundLines } from "@/components/ui/background-lines"; // ✅ Import BackgroundLines

const values = [
  { icon: <Building2 className="h-8 w-8" />, title: "Innovation First", description: "Pushing boundaries with cutting-edge solutions and forward-thinking approaches." },
  { icon: <Users className="h-8 w-8" />, title: "Collaborative Spirit", description: "Working together seamlessly to achieve extraordinary results." },
  { icon: <Target className="h-8 w-8" />, title: "Excellence Driven", description: "Maintaining the highest standards in every project we undertake." },
  { icon: <Award className="h-8 w-8" />, title: "Unwavering Integrity", description: "Building lasting relationships through honest and ethical practices." },
  { icon: <Rocket className="h-8 w-8" />, title: "Future Ready", description: "Staying ahead of trends to deliver tomorrow's solutions today." },
  { icon: <Heart className="h-8 w-8" />, title: "Client Focused", description: "Putting our clients' needs at the heart of everything we do." },
  { icon: <Brain className="h-8 w-8" />, title: "Creative Solutions", description: "Thinking outside the box to solve complex challenges." },
  { icon: <Globe className="h-8 w-8" />, title: "Global Impact", description: "Making a difference in communities worldwide." },
];

export function ValuesSection() {
  return (
    <div className="relative py-20 bg-muted/50">
      <BackgroundLines className="absolute inset-0 opacity-10" > {/* ✅ BackgroundLines applied */}
        <></> {/* ✅ Empty fragment to satisfy required `children` prop */}
      </BackgroundLines>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-[hsl(var(--chart-1))] mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
