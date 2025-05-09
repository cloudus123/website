"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { QrCode, ArrowRight } from "lucide-react"

export default function CallToAction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A23] to-[#1E1B3A]"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#008CFF]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00D1FF]/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Queue Experience?
              </h2>
              <p className="text-white/80 mb-6">
                Join thousands of businesses that have improved customer satisfaction and operational efficiency with
                QVuew.
              </p>

              <Button size="lg" className="bg-[#008CFF] hover:bg-[#008CFF]/90 text-white group">
                Get Started for Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-white/60 text-sm mt-4">No credit card required. Free 14-day trial.</p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex justify-center mb-6">
                  <motion.div
                    className="w-32 h-32 bg-white/10 rounded-lg flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(0, 140, 255, 0)",
                        "0 0 0 10px rgba(0, 140, 255, 0.2)",
                        "0 0 0 0 rgba(0, 140, 255, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <QrCode className="h-16 w-16 text-white" />
                  </motion.div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Scan to Experience QVuew</h3>
                  <p className="text-white/70 mb-4">Try our demo and see how QVuew works in real-time</p>

                  <div className="flex justify-center">
                    <motion.div
                      className="px-4 py-2 bg-[#008CFF]/20 rounded-full text-[#00D1FF] text-sm font-medium"
                      animate={{
                        y: [0, -5, 0],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      Scan me to try!
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#00D1FF]/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#008CFF]/30 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

