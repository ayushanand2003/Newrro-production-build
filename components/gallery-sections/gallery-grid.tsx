"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface GalleryGridProps {
  projects: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
  }[];
}

export function GalleryGrid({ projects }: GalleryGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-lg"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-white/80 mb-4">{project.description}</p>
            <Button variant="secondary">View Details</Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
