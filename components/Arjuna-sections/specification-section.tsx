'use client';

import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../ui/bentogrid";
import { Cpu, HardDrive, Boxes, Cloud, MapPin, Battery, LoaderPinwheel, Camera, TvMinimal } from "lucide-react";
import { cn } from "@/lib/utils";

const specifications = [
  {
    icon: <Cpu className="w-12 h-12 text-[#4A3EBD]" />,
    title: "Jetson Nano",
    description: "Powered by NVIDIA Jetson Nano, offering high performance for AI applications with low power consumption.",
    imageSrc: "/assets/specific_images/jetson.png",
    imageAlt: "Jetson Nano hardware"
  },
  {
    icon: <MapPin className="w-12 h-12 text-[#4A3EBD]" />,
    title: "IMU (Inertial Measurement Unit)",
    description: "Equipped with a high-precision IMU for real-time motion and orientation tracking.",
    imageSrc: "/assets/specific_images/imu.jpg",
    imageAlt: "IMU module"
  },
  {
    icon: <Battery className="w-12 h-12 text-[#4A3EBD]" />,
    title: "Proximity Sensors",
    description: "Advanced proximity sensors for detecting nearby objects and enhancing navigation capabilities.",
    imageSrc: "/assets/specific_images/proximity.webp",
    imageAlt: "Proximity sensors"
  },
  {
    icon: <Cloud className="w-12 h-12 text-[#4A3EBD]" />,
    title: "LiDAR Representations",
    description: "LiDAR integration for accurate 3D mapping and environment scanning.",
    imageSrc: "/assets/specific_images/lidar.jpg",
    imageAlt: "LiDAR representation"
  },
  {
    icon: <LoaderPinwheel className="w-12 h-12 text-[#4A3EBD]" />,
    title: "High Precision Smart Actuators",
    description: "IAdvanced smart actuators designed for precise control, efficient response, and seamless integration, enabling optimal robotic performance and accurate movement execution.",
    imageSrc: "/assets/specific_images/servo.jpg",
    imageAlt: "High Precision Smart Actuators"
  },
  {
    icon: <Boxes className="w-12 h-12 text-[#4A3EBD]" />,
    title: "Ultrasonics",
    description: "Ultrasonic sensors for precise distance measurement and obstacle detection.",
    imageSrc: "/assets/specific_images/us.webp",
    imageAlt: "Ultrasonic sensors"
  },
  {
    icon: <HardDrive className="w-12 h-12 text-[#4A3EBD]" />,
    title: "Arjuna Motherboard",
    description: "Custom-built Arjuna motherboard that integrates all sensors and computing resources for optimal performance.",
    imageSrc: "/assets/specific_images/mb.webp",
    imageAlt: "Arjuna Motherboard"
  },
  {
    icon: <Camera className="w-12 h-12 text-[#4A3EBD]" />,
    title: "Camera",
    description: "Camera-based systems for precise distance measurement and obstacle detection.",
    imageSrc: "/assets/specific_images/cam.png",
    imageAlt: "Camera"
  },
  {
    icon: <TvMinimal className="w-12 h-12 text-[#4A3EBD]" />,
    title: "Display",
    description: "Integrated display system for real-time status updates, diagnostics, and user interface interaction.",
    imageSrc: "/assets/specific_images/disp.png",
    imageAlt: "Display"
  },
  
];

export function SpecificationSection() {
  return (
    <section className="py-20 bg-[#F3F4F6] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#4A3EBD]">
            Product Specifications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dive into the detailed specifications that power this advanced device.
          </p>
        </motion.div>

        {/* BentoGrid with dynamic cards */}
        <BentoGrid className="max-w-4xl mx-auto">
          {specifications.map((spec, index) => (
            <BentoGridItem
              key={index}
              title={spec.title}
              description={spec.description}
              header={spec.icon}
              className={cn(
                index === 0 ? "md:col-span-1 md:row-span-1" : ""
              )}
              imageSrc={spec.imageSrc}
              imageAlt={spec.imageAlt}
            />
          ))}
          
        </BentoGrid>
      </div>
    </section>
  );
}
