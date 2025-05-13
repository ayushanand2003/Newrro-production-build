'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import { products } from '@/lib/productList';
import Image from 'next/image';
import { Star, Shield, Zap, Clock, ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';

export default function LabsPage() {
  const slideData = products.map((product) => ({
    title: product.name,
    button: 'Explore Product',
    src: product.image,
    route: product.route,
    short: product.short,
  }));

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section Styled Like Arjuna */}
      <section className="relative h-[60vh] pt-16 pb-4 bg-gradient-to-r from-[#df5bd3] to-[#7e5bf6]">
        <div className="absolute inset-0 bg-black/50 z-0" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 mx-auto px-4 h-full flex flex-col items-start justify-center text-left"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-9xl font-bold mb-6 text-left"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#df5bd3] to-[#7e5bf6]">
              Newrro Lab
            </span>
          </motion.h1>
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-4xl text-white/90 mb-4"
          >
            The Future of Home-Grown Robotics
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm md:text-2xl text-white/80 max-w-2xl mb-6"
          >
            Dive into our lineup of AI-powered robots, built by Newrro for research, learning, and future innovation.
          </motion.p>
        </motion.div>
      </section>

      {/* Carousel Product Section */}
      <section className="relative overflow-hidden w-full h-full py-20 bg-neutral-100">
        <div className="max-w-6xl mx-auto px-4">
          <Carousel>
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.slug} className="pl-4">
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden h-[500px] flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/2 h-64 md:h-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8 md:w-1/2 flex flex-col justify-center text-left">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">{product.name}</h3>
                      <p className="text-gray-700 mb-4">{product.short}</p>
                      <Link
                        href={product.route}
                        className="w-full mt-4 inline-block bg-[#7e5bf6] hover:bg-[#6747c8] text-white text-lg font-semibold text-center px-6 py-3 rounded-xl transition duration-300"
                      >
                        Explore Product
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Why Newrro Lab - Styled Section */}
      <section className="bg-gray-100 py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Choose Newrro Lab?</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            We are redefining robotics education and innovation through cutting-edge tools and practical applications.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Star className="w-10 h-10 text-[#df5bd3]" />, title: 'Designed to Build',
                desc: 'Hands-on kits and labs that empower you to create, not just learn.'
              },
              {
                icon: <Shield className="w-10 h-10 text-[#df5bd3]" />, title: 'Engineered for Exploration',
                desc: 'Our systems are built for flexibility, robustness, and deep experimentation.'
              },
              {
                icon: <Zap className="w-10 h-10 text-[#df5bd3]" />, title: 'Innovation Unleashed',
                desc: 'AI, ROS, and real-time systems packed into platforms that challenge convention.'
              },
              {
                icon: <Clock className="w-10 h-10 text-[#df5bd3]" />, title: 'Mentorship-Driven',
                desc: 'Supportive guidance throughout your build journey — from concept to deployment.'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white bg-opacity-30 backdrop-blur-md border border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-[1.05] transform flex flex-col items-center text-center h-full"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                  className="mb-6 text-[#df5bd3] group-hover:text-[#7e5bf6] transition-all duration-300"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#df5bd3] group-hover:shadow-lg rounded-2xl transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20 bg-gradient-to-t from-[#7e5bf6] to-[#df5bd3]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 sm:p-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
          Have an Idea for a Robot?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          We collaborate with institutions and innovators to bring their ideas to life. Reach out to co-create with us!
          </p>
          <Link href="https://wa.link/dr12f8" passHref>

            <Button size="lg" className="bg-[#7e5bf6] hover:bg-[#6f4fe0] text-white w-full sm:w-auto">
              Get In Touch<ArrowRight className="ml-2" />
            </Button>
          </Link>

        </motion.div>
      </div>
    </section>
    </main>
  );
}