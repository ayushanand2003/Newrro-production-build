"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Modern close icon

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg transition duration-300 hover:shadow-2xl"
            onClick={() => setSelectedImage(project.image)}
          >
            {/* Image with hover effect */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Click to Preview Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-lg font-semibold text-white"
              >
                🔍 Click to Preview
              </motion.p>
            </div>

            {/* Info Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-white/80">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Zoomed-in Image Modal with Cool Effects */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/40 transition duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>

            {/* Zoomed Image */}
            <motion.img
              src={selectedImage}
              alt="Zoomed Image"
              className="max-w-4xl max-h-[85vh] rounded-lg shadow-xl"
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
