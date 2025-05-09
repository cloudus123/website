"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { QrCode, ArrowDown } from "lucide-react"

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden mt-20 pt-20">
      {/* Background elements with parallax effect */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-[#00D1FF]/20 blur-xl" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-[#008CFF]/20 blur-xl" />
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-[#1E1B3A]/20 blur-xl" />

        {/* Digital queue icons */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 15}%`,
              opacity: 0.7 - i * 0.1,
            }}
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 3 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
          >
            <div className="w-12 h-12 bg-white rounded-lg shadow-lg flex items-center justify-center">
              <span className="text-[#0A0A23] font-bold">{i + 1}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Hero content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-[#0A0A23] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Say Goodbye to Waiting! Join Queues Instantly with QVuew 🚀
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-[#1E1B3A]/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Scan. Join. Relax. Let QVuew handle the queue for you.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="bg-[#008CFF] hover:bg-[#008CFF]/90 text-white">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#0A0A23] text-[#0A0A23]"
              onClick={() => {
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              See How It Works <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero image */}
        <motion.div
          className="mt-12 max-w-2xl mx-auto relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#008CFF] rounded-full flex items-center justify-center">
                <QrCode className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[#0A0A23]">QVuew Scanner</h3>
                <p className="text-sm text-[#1E1B3A]/70">Scan to join the queue</p>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-3">
                <span className="font-medium text-[#0A0A23]">Current Queue</span>
                <span className="text-sm bg-[#F4F7FC] px-2 py-1 rounded text-[#1E1B3A]/70">4 people ahead</span>
              </div>

              <div className="space-y-2">
                {["Alex M.", "Taylor S.", "Jordan K.", "Casey P."].map((name, i) => (
                  <div key={i} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span>{name}</span>
                    <span className="text-sm text-[#1E1B3A]/70">~{(i + 1) * 5} min</span>
                  </div>
                ))}

                <div className="flex justify-between items-center p-2 bg-[#008CFF]/10 rounded border border-[#008CFF]">
                  <span className="font-medium text-[#0A0A23]">You</span>
                  <span className="text-sm text-[#008CFF]">~20 min</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-[#1E1B3A]/70">We'll notify you when it's your turn</p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#00D1FF]/30 rounded-full blur-lg" />
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#008CFF]/20 rounded-full blur-lg" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <ArrowDown className="h-6 w-6 text-[#0A0A23]" />
      </motion.div>
    </section>
  )
}

