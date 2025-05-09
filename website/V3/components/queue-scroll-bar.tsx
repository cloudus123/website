"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { User, Users } from "lucide-react"

export default function QueueScrollBar() {
  const [queueSize, setQueueSize] = useState(10)
  const [isVisible, setIsVisible] = useState(true)
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll()

  // Transform the scroll progress to queue size (10 to 0)
  const dynamicQueueSize = useTransform(
    scrollYProgress,
    [0, 0.9], // Use 0.9 instead of 1 to ensure queue is empty before reaching the bottom
    [10, 0],
  )

  // Update queue size based on scroll position
  useEffect(() => {
    const unsubscribe = dynamicQueueSize.onChange((latest) => {
      setQueueSize(Math.round(latest))
    })

    return () => unsubscribe()
  }, [dynamicQueueSize])

  // Hide the queue scroll bar when at the very bottom of the page
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setIsVisible(latest < 0.98)
    })

    return () => unsubscribe()
  }, [scrollYProgress])

  // Handle window resize to hide on very small screens
  const [isMobileSmall, setIsMobileSmall] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileSmall(window.innerWidth < 640)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)

    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  if (isMobileSmall) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Left side queue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed left-0 top-0 bottom-0 w-12 md:w-16 z-40 pointer-events-none"
            style={{
              background: "linear-gradient(to right, rgba(244, 247, 252, 0.8), rgba(244, 247, 252, 0))",
            }}
          >
            <div className="h-full flex flex-col items-center justify-center relative">
              {/* Queue figures */}
              <div className="relative h-[60vh]">
                {Array.from({ length: 10 }).map((_, index) => {
                  const shouldShow = index < queueSize
                  const position = index * (100 / 10) // Distribute evenly in the container

                  return (
                    <motion.div
                      key={`left-${index}`}
                      className="absolute left-1/2 transform -translate-x-1/2"
                      style={{
                        top: `${position}%`,
                        opacity: shouldShow ? 1 : 0,
                        scale: shouldShow ? 1 : 0.5,
                        zIndex: 10 - index,
                      }}
                      animate={{
                        opacity: shouldShow ? 1 : 0,
                        scale: shouldShow ? 1 : 0.5,
                        x: shouldShow ? 0 : -20,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative">
                        {/* 3D-like figure with shadow */}
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md flex items-center justify-center transform perspective-500 rotateY-10">
                          <User className="h-4 w-4 md:h-5 md:w-5 text-[#1E1B3A]/70" />
                        </div>
                        {/* Shadow beneath */}
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-black/10 rounded-full blur-sm"></div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Service entry point at bottom */}
              <motion.div
                className="absolute bottom-[20vh] left-1/2 transform -translate-x-1/2"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(0, 140, 255, 0)",
                    "0 0 0 8px rgba(0, 140, 255, 0.2)",
                    "0 0 0 0 rgba(0, 140, 255, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#008CFF] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs md:text-sm font-bold">Q</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side queue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed right-0 top-0 bottom-0 w-12 md:w-16 z-40 pointer-events-none"
            style={{
              background: "linear-gradient(to left, rgba(244, 247, 252, 0.8), rgba(244, 247, 252, 0))",
            }}
          >
            <div className="h-full flex flex-col items-center justify-center relative">
              {/* Queue figures */}
              <div className="relative h-[60vh]">
                {Array.from({ length: 10 }).map((_, index) => {
                  const shouldShow = index < queueSize
                  const position = index * (100 / 10) // Distribute evenly in the container

                  return (
                    <motion.div
                      key={`right-${index}`}
                      className="absolute left-1/2 transform -translate-x-1/2"
                      style={{
                        top: `${position}%`,
                        opacity: shouldShow ? 1 : 0,
                        scale: shouldShow ? 1 : 0.5,
                        zIndex: 10 - index,
                      }}
                      animate={{
                        opacity: shouldShow ? 1 : 0,
                        scale: shouldShow ? 1 : 0.5,
                        x: shouldShow ? 0 : 20,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative">
                        {/* 3D-like figure with shadow */}
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md flex items-center justify-center transform perspective-500 rotateY-10">
                          <User className="h-4 w-4 md:h-5 md:w-5 text-[#1E1B3A]/70" />
                        </div>
                        {/* Shadow beneath */}
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-black/10 rounded-full blur-sm"></div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Service entry point at bottom */}
              <motion.div
                className="absolute bottom-[20vh] left-1/2 transform -translate-x-1/2"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(0, 140, 255, 0)",
                    "0 0 0 8px rgba(0, 140, 255, 0.2)",
                    "0 0 0 0 rgba(0, 140, 255, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#008CFF] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xs md:text-sm font-bold">Q</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Queue counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
          >
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
              <Users className="h-4 w-4 text-[#008CFF]" />
              <span className="text-sm font-medium text-[#0A0A23]">
                Queue: <span className="text-[#008CFF]">{queueSize}</span> {queueSize === 1 ? "person" : "people"}
              </span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

