"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { User, Users } from "lucide-react"

export default function QueueReduction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Transform values for the queue reduction effect
  const queueLength = useTransform(scrollYProgress, [0, 0.7], [10, 0])
  const queueOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0])
  const processedCount = useTransform(scrollYProgress, [0, 0.7], [0, 10])

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#008CFF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00D1FF]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A0A23] mb-4">Queue Transformation</h2>
          <p className="text-xl text-[#1E1B3A]/70 max-w-2xl mx-auto">
            Watch how QVuew transforms long physical lines into an efficient digital experience
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative h-[400px] md:h-[500px]">
          {/* Physical Queue Side */}
          <div className="absolute left-0 top-0 bottom-0 w-1/2 flex flex-col items-center justify-center">
            <motion.div
              className="mb-8 text-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-[#0A0A23] mb-2">Physical Queue</h3>
              <p className="text-[#1E1B3A]/70">Long wait times, frustrated customers</p>
            </motion.div>

            <div className="relative w-full max-w-[200px] h-[300px]">
              {/* Generate queue of people based on queueLength */}
              {Array.from({ length: 10 }).map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{
                    top: `${index * 30}px`,
                    opacity: index < queueLength ? 1 : 0,
                    scale: index < queueLength ? 1 : 0.5,
                  }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: index < queueLength ? 1 : 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#F4F7FC] rounded-full border border-[#1E1B3A]/20 flex items-center justify-center shadow-sm">
                      <User className="h-5 w-5 text-[#1E1B3A]/70" />
                    </div>
                    {index === 0 && <div className="mt-1 px-2 py-1 bg-[#1E1B3A]/10 rounded-md text-xs">Waiting...</div>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Center Transformation */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              className="w-20 h-20 bg-[#008CFF] rounded-full flex items-center justify-center shadow-lg"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(0, 140, 255, 0)",
                  "0 0 0 20px rgba(0, 140, 255, 0.2)",
                  "0 0 0 0 rgba(0, 140, 255, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <span className="text-white text-3xl font-bold">Q</span>
            </motion.div>

            {/* Animated arrows pointing to the Q */}
            <motion.div
              className="absolute -left-8 top-1/2 transform -translate-y-1/2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#008CFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute -right-8 top-1/2 transform -translate-y-1/2 rotate-180"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="#008CFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>

          {/* Digital Queue Side */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 flex flex-col items-center justify-center">
            <motion.div
              className="mb-8 text-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-[#0A0A23] mb-2">Digital Queue</h3>
              <p className="text-[#1E1B3A]/70">Freedom to relax, real-time updates</p>
            </motion.div>

            <div className="relative w-full max-w-[250px]">
              <motion.div
                className="bg-white rounded-xl shadow-md p-4 border border-[#F4F7FC]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-[#008CFF]" />
                    <span className="font-medium text-[#0A0A23]">Queue Status</span>
                  </div>
                  <motion.div className="px-2 py-1 bg-[#008CFF]/10 rounded-full text-xs font-medium text-[#008CFF]">
                    <motion.span>{processedCount.get().toFixed(0)}</motion.span> processed
                  </motion.div>
                </div>

                <div className="space-y-2 mb-3">
                  {/* Show remaining people in queue */}
                  {Array.from({ length: 3 }).map((_, index) => {
                    const queueValue = queueLength.get()
                    const shouldShow = index < queueValue && queueValue > 0

                    return (
                      <motion.div
                        key={index}
                        className="flex justify-between items-center p-2 bg-[#F4F7FC] rounded"
                        style={{
                          opacity: shouldShow ? 1 : 0,
                          height: shouldShow ? "auto" : 0,
                          marginBottom: shouldShow ? 8 : 0,
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-[#1E1B3A]/10 rounded-full flex items-center justify-center">
                            <User className="h-3 w-3 text-[#1E1B3A]/70" />
                          </div>
                          <span className="text-sm text-[#1E1B3A]/70">Customer {index + 1}</span>
                        </div>
                        <span className="text-xs text-[#1E1B3A]/50">~{(index + 1) * 5} min</span>
                      </motion.div>
                    )
                  })}

                  {/* Your position */}
                  <motion.div
                    className="flex justify-between items-center p-2 bg-[#008CFF]/10 rounded border border-[#008CFF]/20"
                    style={{ opacity: queueLength.get() > 0 ? 1 : 0 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#008CFF]/20 rounded-full flex items-center justify-center">
                        <User className="h-3 w-3 text-[#008CFF]" />
                      </div>
                      <span className="text-sm font-medium text-[#0A0A23]">You</span>
                    </div>
                    <span className="text-xs font-medium text-[#008CFF]">
                      {queueLength.get() > 0 ? `~${Math.max(1, queueLength.get() * 5)} min` : "Now serving"}
                    </span>
                  </motion.div>
                </div>

                <div className="text-center text-xs text-[#1E1B3A]/50">
                  {queueLength.get() > 0 ? "We'll notify you when it's your turn" : "It's your turn now!"}
                </div>

                {/* Notification that appears when queue is almost empty */}
                {queueLength.get() <= 2 && queueLength.get() > 0 && (
                  <motion.div
                    className="absolute -top-10 right-0 bg-[#008CFF] text-white px-3 py-2 rounded-lg text-sm shadow-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-xs">!</span>
                      </div>
                      <span>You're next!</span>
                    </div>
                    <div className="absolute -bottom-2 right-4 w-4 h-4 bg-[#008CFF] transform rotate-45"></div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>

          {/* Moving people animation */}
          {Array.from({ length: 10 }).map((_, index) => {
            const progress = scrollYProgress.get()
            const shouldAnimate = progress > index * 0.07 && progress < 0.7

            return (
              <motion.div
                key={`moving-${index}`}
                className="absolute left-1/4 top-1/2"
                style={{
                  opacity: shouldAnimate ? 1 : 0,
                  x: shouldAnimate ? [0, 100] : 0,
                  y: shouldAnimate ? [-150 + index * 30, 0] : -150 + index * 30,
                  scale: shouldAnimate ? [1, 0.5] : 1,
                }}
                animate={
                  shouldAnimate
                    ? {
                        x: [0, 100],
                        y: [-150 + index * 30, 0],
                        scale: [1, 0.5],
                        opacity: [1, 0],
                      }
                    : {}
                }
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
              >
                <div className="w-8 h-8 bg-[#F4F7FC] rounded-full border border-[#1E1B3A]/20 flex items-center justify-center shadow-sm">
                  <User className="h-4 w-4 text-[#1E1B3A]/70" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <StatCard value="85%" label="Reduction in perceived wait time" color="#008CFF" />
          <StatCard value="40%" label="Increase in customer satisfaction" color="#00D1FF" />
          <StatCard value="25%" label="More customers served per hour" color="#1E1B3A" />
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({ value, label, color }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.8 })

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl shadow-md p-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
    >
      <motion.div
        className="text-3xl md:text-4xl font-bold mb-2"
        style={{ color }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {value}
      </motion.div>
      <p className="text-[#1E1B3A]/70">{label}</p>
    </motion.div>
  )
}

