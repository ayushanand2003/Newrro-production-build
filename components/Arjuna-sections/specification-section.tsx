'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Cpu, Radar, MoveUpRight, Wifi, Monitor, BatteryFull } from 'lucide-react';

const groupedSpecs = [
  {
    group: 'Computing & AI',
    icon: <Cpu className="w-5 h-5 mr-2 text-[#df5bd3]" />, 
    items: [
      {
        title: 'Jetson Nano',
        image: '/assets/specific_images/jetson.jpg',
        description: 'AI edge computing with 128-core GPU for robotics & ML.',
      },
      {
        title: 'Smart Robot Manager Board',
        image: '/assets/specific_images/smart-robot-manager.jpg',
        description: 'Monitors battery, power, and safety mechanisms for robots.',
      },
    ],
  },
  {
    group: 'Sensing & Perception',
    icon: <Radar className="w-5 h-5 mr-2 text-[#df5bd3]" />, 
    items: [
      {
        title: 'LiDAR',
        image: '/assets/specific_images/lidar.jpg',
        description: '360° laser scanner for precise mapping and object detection.',
      },
      {
        title: 'Ultrasonic Sensor',
        image: '/assets/specific_images/ultrasonic.jpg',
        description: 'Real-time distance measurement & obstacle detection.',
      },
      {
        title: '2K USB Camera',
        image: '/assets/specific_images/camera.jpg',
        description: 'High-res 2K camera with wide-angle lens and microphones.',
      },
      {
        title: 'Proximity Sensor',
        image: '/assets/specific_images/proximity.jpg',
        description: 'Detects nearby objects to enhance navigation.',
      },
      {
        title: 'IMU BNO055',
        image: '/assets/specific_images/imu-bno.jpg',
        description: '9-axis orientation sensor with sensor fusion algorithms.',
      },
    ],
  },
  {
    group: 'Motion & Control',
    icon: <MoveUpRight className="w-5 h-5 mr-2 text-[#df5bd3]" />, 
    items: [
      {
        title: 'Smart Actuators',
        image: '/assets/specific_images/actuator.jpg',
        description: 'High-torque servos with magnetic encoders for precise motion.',
      },
      {
        title: 'Servo Driver Expansion Board',
        image: '/assets/specific_images/servo-driver.jpg',
        description: 'Controls up to 253 servos with WiFi and Bluetooth support.',
      },
      {
        title: 'Motor Driver',
        image: '/assets/specific_images/motor-driver.jpg',
        description: 'PWM control for smooth and responsive motion.',
      },
    ],
  },
  {
    group: 'Connectivity & Interface',
    icon: <Wifi className="w-5 h-5 mr-2 text-[#df5bd3]" />, 
    items: [
      {
        title: 'AC8265 Wireless NIC',
        image: '/assets/specific_images/wifi-nic.jpg',
        description: 'Dual-band WiFi and Bluetooth NIC for low-latency connectivity.',
      },
    ],
  },
  {
    group: 'Display & User Interface',
    icon: <Monitor className="w-5 h-5 mr-2 text-[#df5bd3]" />, 
    items: [
      {
        title: 'Display',
        image: '/assets/specific_images/display.jpg',
        description: 'Touchscreen and OLED displays for visual feedback and control.',
      },
    ],
  },
  {
    group: 'Power Supply',
    icon: <BatteryFull className="w-5 h-5 mr-2 text-[#df5bd3]" />, 
    items: [
      {
        title: '10,000 mAh Li-Ion Battery',
        image: '/assets/specific_images/battery.jpg',
        description: 'Battery with BMS for overcharge and thermal protection.',
      },
    ],
  },
];

export default function GroupedSpecCards() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Component Categories</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Click a category to explore all hardware modules inside Arjuna.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-6">
        {groupedSpecs.map((group, index) => (
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            key={group.group}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => setExpanded(expanded === group.group ? null : group.group)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-gray-800 hover:bg-gray-50 transition"
            >
              <div className="flex items-center">{group.icon}{group.group}</div>
              {expanded === group.group ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <AnimatePresence>
              {expanded === group.group && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-6 pb-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        className="bg-gray-100 border border-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition"
                      >
                        <div className="relative w-full h-40 mb-3 overflow-hidden rounded-md">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
