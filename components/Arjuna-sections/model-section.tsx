"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { ModelCanvas } from "../3d/model-canvas"
import { ModelControls } from "../3d/model-controls"
import { TypewriterText } from "@/components/ui/typewriter"; // adjust path if needed


export default function ModelSection() {
  const [responsiveScale, setResponsiveScale] = useState(1)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  useEffect(() => {
    const handleResize = () => {
      setResponsiveScale(window.innerWidth < 768 ? 0.8 : 1)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white text-black"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Section */}

          <div className="w-full lg:w-1/2 text-center lg:text-left">
          <TypewriterText
             textParts={[
                 "Introducing ",
                  <span key="arjuna" className="bg-clip-text text-transparent bg-gradient-to-r from-[#df5bd3] to-[#7e5bf6]">
                   ARJUNA{"  "}
                  </span>,
                 " Edu Kit",
              ]}
            />

            <p className="text-md md:text-lg text-gray-800 max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              Introducing the ARJUNA Educational Robotics Kit: a unique and powerful tool designed to equip students with the essential knowledge and skills to excel beyond the competition and tackle real-world challenges.
              <br /><br />
              The ARJUNA features industrial-grade electronics, high-resolution sensors, and advanced smart actuators, ensuring a superior and practical learning experience. This kit is crafted to provide hands-on experience, empowering students to become the innovators and problem-solvers of tomorrow.
            </p>

            {/* Motion Brochure Button */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <a href="/assets/NR_Arjuna_catalogue.pdf" download>
                <button className="bg-[#df5bd3] hover:bg-[#c74ebe] text-white px-8 py-4 text-lg rounded-full flex items-center group relative overflow-hidden transition-all duration-300 ease-in-out">
                  <span className="relative z-10 flex items-center">
                    Buy Now
                    <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </a>
            </motion.div>
          </div>

          {/* Model Viewer Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-xl overflow-hidden  bg-white">
              <ModelCanvas className="absolute inset-0" />
              <ModelControls
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
                onReset={() => {
                  const canvas = document.querySelector("canvas")
                  if (canvas) {
                    const event = new CustomEvent("reset-camera")
                    canvas.dispatchEvent(event)
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
