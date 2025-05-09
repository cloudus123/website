"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { QrCode, Clock, BarChart3, Cog, Users } from "lucide-react"

const benefits = [
  {
    icon: QrCode,
    title: "Scan & Join Instantly",
    description: "Say goodbye to long physical lines.",
    color: "#008CFF",
  },
  {
    icon: Clock,
    title: "Real-Time Updates",
    description: "Know your wait time, get notified when it's your turn.",
    color: "#00D1FF",
  },
  {
    icon: BarChart3,
    title: "Smart Data Analytics",
    description: "Track customer flow & optimize service.",
    color: "#1E1B3A",
  },
  {
    icon: Cog,
    title: "Easy Integration",
    description: "Works with existing business systems effortlessly.",
    color: "#008CFF",
  },
  {
    icon: Users,
    title: "Happy Customers, Efficient Businesses",
    description: "Improve experience & reduce stress.",
    color: "#00D1FF",
  },
]

export default function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="benefits" ref={ref} className="py-20 relative overflow-hidden bg-[#0A0A23]">
      {/* Parallax background elements */}
      <motion.div className="absolute inset-0 opacity-10" style={{ y }}>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00D1FF] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#008CFF] blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Choose QVuew?</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Our smart queue management system offers numerous advantages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ benefit, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  const Icon = benefit.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors"
    >
      <div
        className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: `${benefit.color}30` }}
      >
        <Icon className="h-7 w-7 text-white" />
      </div>

      <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
      <p className="text-white/70">{benefit.description}</p>

      {/* Animated checkmark */}
      <motion.div
        className="mt-4 flex items-center gap-2 text-[#00D1FF]"
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M3 8L6.5 11.5L13 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          />
        </svg>
        <span className="text-sm font-medium">Included</span>
      </motion.div>
    </motion.div>
  )
}

