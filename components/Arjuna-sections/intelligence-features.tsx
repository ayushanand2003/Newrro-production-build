"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Navigation,
  Mic,
  QrCode,
  Globe,
  Eye,
  MapPin,
  ScanEye,
  Truck,
  X,
  Bot,
} from "lucide-react";

// Step 1: Define a type for the feature
type Feature = {
  icon: JSX.Element;
  title: string;
  description: string;
  video: string;
};

// Step 2: Define your feature array with type safety
const intelligenceFeatures: Feature[] = [
  {
    icon: <Navigation className="w-12 h-12" />,
    title: "Smart Autonomous Navigation",
    description:
      "Navigate precisely to any point using advanced path planning with real-time obstacle avoidance.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    icon: <ScanEye className="w-12 h-12" />,
    title: "Vision-Based Object Tracking",
    description:
      "Follow colored objects or shapes using AI-powered camera or LiDAR recognition systems.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    icon: <Truck className="w-12 h-12" />,
    title: "Multi-Destination Delivery",
    description:
      "Deliver items to up to 4 locations via intelligent routing, avoiding obstacles on the go.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    icon: <QrCode className="w-12 h-12" />,
    title: "Auto-Docking System",
    description:
      "Return to the charging station autonomously and dock with high precision using coordinate-based logic.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    icon: <Mic className="w-12 h-12" />,
    title: "Voice Activated Control",
    description:
      "Give simple voice commands like 'move forward' to control the robot effortlessly.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Remote Web Interface",
    description:
      "Access and control the robot remotely through a responsive web dashboard or VNC client.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    icon: <Bot className="w-12 h-12 " />,
    title: "Master–Slave Coordination",
    description:
      "Enable collaborative delivery between two robots via Wi-Fi—one plans, the other executes.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    icon: <MapPin className="w-12 h-12" />,
    title: "Manual Drive Mode",
    description:
      "Override autonomy and take full control with real-time speed and direction tuning.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    icon: <Eye className="w-12 h-12" />,
    title: "Dynamic Color Recognition",
    description:
      "Detect and track objects based on their color for responsive, adaptive motion.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export function IntelligenceFeatures() {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedFeature ? "hidden" : "";
  }, [selectedFeature]);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Arjuna’s Intelligent Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the advanced features that make Arjuna a powerful companion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {intelligenceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedFeature(feature)}
            >
              <div className="relative h-60 flex flex-col justify-center items-center text-center p-6 bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 rounded-2xl glass-effect hover:shadow-lg">
                <div className="mb-4 text-[#df5bd3] group-hover:text-[#7e5bf6] transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modern Modal Style */}
        <AnimatePresence>
          {selectedFeature && (
            <motion.div
              className="fixed inset-0  flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
            >
              <motion.div
                className="relative w-full max-w-4xl z-50 bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 0 }}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  className="absolute top-4 right-4 z-50 p-2 rounded-md bg-white/20 hover:bg-white/30 border border-white/20 shadow backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedFeature(null)}
                  aria-label="Close Modal"
                >
                  <X className="w-5 h-5 text-foreground" />
                </motion.button>

                <div className="flex flex-col gap-6">
                  <div className="text-[#df5bd3]">{selectedFeature.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedFeature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedFeature.description}
                  </p>
                  <div className="aspect-video w-full rounded-md overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={selectedFeature.video}
                      title="Feature Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
