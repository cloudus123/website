"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { QrCode, Clock, Coffee, CheckCircle } from "lucide-react"

const steps = [
  {
    title: "Scan & Join Instantly",
    description: "Simply scan the QR code at the location to join the virtual queue.",
    icon: QrCode,
    color: "#008CFF",
  },
  {
    title: "Real-Time Updates & Notifications",
    description: "Track your position in the queue and receive notifications as your turn approaches.",
    icon: Clock,
    color: "#00D1FF",
  },
  {
    title: "Freedom While Waiting",
    description: "Enjoy your time elsewhere instead of standing in line. Shop, relax, or grab a coffee.",
    icon: Coffee,
    color: "#1E1B3A",
  },
  {
    title: "Seamless Check-In",
    description: "Receive a notification when it's your turn, then head to the counter for service.",
    icon: CheckCircle,
    color: "#008CFF",
  },
]

export default function HowItWorks() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  return (
    <section id="how-it-works" ref={containerRef} className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D1FF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#008CFF]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A0A23] mb-4">How It Works</h2>
          <p className="text-xl text-[#1E1B3A]/70 max-w-2xl mx-auto">
            QVuew transforms the waiting experience with a simple, intuitive process
          </p>
        </motion.div>

        {/* Scrollytelling steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <StepItem key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StepItem({ step, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [60, 0, 0, -60])

  const isEven = index % 2 === 0
  const Icon = step.icon

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 mb-20`}
    >
      {/* Step number and icon */}
      <motion.div
        className="flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center relative"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ backgroundColor: `${step.color}20` }}
      >
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0A0A23] flex items-center justify-center text-white font-bold">
          {index + 1}
        </div>
        <Icon size={36} style={{ color: step.color }} />
      </motion.div>

      {/* Step content */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: isEven ? 20 : -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold text-[#0A0A23] mb-3">{step.title}</h3>
        <p className="text-lg text-[#1E1B3A]/70">{step.description}</p>

        {/* Step visualization */}
        <div className="mt-6 bg-white rounded-xl shadow-lg p-4 relative">
          {index === 0 && (
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#F4F7FC] rounded-lg flex items-center justify-center">
                <QrCode className="h-8 w-8 text-[#0A0A23]" />
              </div>
              <motion.div
                className="flex-1"
                animate={{
                  opacity: [0, 1],
                  x: [-20, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
              >
                <div className="h-4 w-3/4 bg-[#F4F7FC] rounded mb-2"></div>
                <div className="h-4 w-1/2 bg-[#F4F7FC] rounded"></div>
              </motion.div>
            </div>
          )}

          {index === 1 && (
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">Your Position</span>
                <motion.span
                  className="text-[#008CFF] font-bold"
                  animate={{
                    opacity: [1, 0.5, 1],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                  }}
                >
                  #4 in line
                </motion.span>
              </div>
              <div className="w-full bg-[#F4F7FC] rounded-full h-2.5">
                <motion.div
                  className="bg-[#008CFF] h-2.5 rounded-full"
                  style={{ width: "60%" }}
                  animate={{ width: ["60%", "70%", "80%"] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                ></motion.div>
              </div>
              <div className="flex justify-between text-sm text-[#1E1B3A]/70">
                <span>Joined</span>
                <span>~15 min remaining</span>
              </div>
            </div>
          )}

          {index === 2 && (
            <div className="flex items-center gap-4">
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <Coffee className="h-10 w-10 text-[#1E1B3A]" />
              </motion.div>
              <div className="flex-1">
                <div className="h-4 w-3/4 bg-[#F4F7FC] rounded mb-2"></div>
                <div className="h-4 w-1/2 bg-[#F4F7FC] rounded"></div>
              </div>
              <motion.div
                className="px-3 py-1 bg-[#008CFF] text-white text-sm rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1.1, 1, 0.8],
                  y: [10, 0, 0, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                }}
              >
                You're next!
              </motion.div>
            </div>
          )}

          {index === 3 && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 1,
                  }}
                >
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </motion.div>
                <div>
                  <div className="font-medium">Now Serving</div>
                  <div className="text-sm text-[#1E1B3A]/70">Counter #3</div>
                </div>
              </div>
              <motion.div
                className="h-10 w-10 rounded-full bg-[#008CFF]/20 flex items-center justify-center"
                animate={{
                  x: [0, -60],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                }}
              >
                <span className="text-[#0A0A23] font-bold">You</span>
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

