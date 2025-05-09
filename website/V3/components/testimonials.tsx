"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Restaurant Owner",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "QVuew transformed our busy restaurant. Customers love the freedom to shop nearby while waiting for a table. Our staff is less stressed and we've seen a 20% increase in customer satisfaction!",
    stars: 5,
  },
  {
    name: "Michael Chen",
    role: "Retail Manager",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Implementing QVuew at our store has eliminated congestion at checkout counters. Customers can browse while waiting, leading to increased sales. The analytics help us staff appropriately during peak hours.",
    stars: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Healthcare Administrator",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Our clinic waiting room used to be overcrowded and stressful. With QVuew, patients can wait in their cars or take a walk. The real-time updates keep everyone informed and have reduced complaints by 35%.",
    stars: 4,
  },
  {
    name: "David Wilson",
    role: "Bank Branch Manager",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "QVuew has streamlined our customer service process. Clients appreciate the transparency of knowing exactly how long they'll wait, and our staff can focus on providing quality service rather than managing lines.",
    stars: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#008CFF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00D1FF]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A0A23] mb-4">What Our Clients Say</h2>
          <p className="text-xl text-[#1E1B3A]/70 max-w-2xl mx-auto">
            Discover how QVuew has transformed businesses across industries
          </p>
        </motion.div>

        {/* Before & After Case Study */}
        <motion.div
          className="mb-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-white rounded-xl shadow-lg p-6 relative">
              <div className="absolute -top-3 -left-3 bg-[#1E1B3A] text-white text-sm font-bold px-3 py-1 rounded">
                BEFORE
              </div>
              <h3 className="text-xl font-bold text-[#0A0A23] mb-4">Traditional Queue System</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 text-red-500" />
                  </div>
                  <p className="text-[#1E1B3A]/70">Long physical lines causing frustration</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 text-red-500" />
                  </div>
                  <p className="text-[#1E1B3A]/70">Customers leaving due to visible long waits</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 text-red-500" />
                  </div>
                  <p className="text-[#1E1B3A]/70">No data insights on wait times or patterns</p>
                </div>
              </div>

              <div className="relative h-40 bg-[#F4F7FC] rounded-lg overflow-hidden">
                <motion.div
                  className="absolute inset-0 flex flex-col"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 border-b border-gray-200">
                      <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                      <div className="h-3 w-24 bg-gray-300 rounded"></div>
                    </div>
                  ))}
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F4F7FC] to-transparent"></div>
              </div>
            </div>

            {/* After */}
            <div className="bg-white rounded-xl shadow-lg p-6 relative">
              <div className="absolute -top-3 -left-3 bg-[#008CFF] text-white text-sm font-bold px-3 py-1 rounded">
                AFTER
              </div>
              <h3 className="text-xl font-bold text-[#0A0A23] mb-4">QVuew Smart Queue</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-[#1E1B3A]/70">Virtual queues eliminate physical waiting</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-[#1E1B3A]/70">20-35% increase in customer satisfaction</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <ChevronRight className="h-4 w-4 text-green-500" />
                  </div>
                  <p className="text-[#1E1B3A]/70">Valuable analytics for business optimization</p>
                </div>
              </div>

              <div className="relative h-40 bg-[#F4F7FC] rounded-lg overflow-hidden">
                <div className="p-3">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-[#0A0A23]">Current Queue</span>
                    <span className="text-xs bg-[#008CFF]/10 text-[#008CFF] px-2 py-1 rounded">4 people</span>
                  </div>

                  <motion.div
                    className="space-y-2"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex justify-between items-center p-2 bg-white rounded shadow-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-[#F4F7FC]"></div>
                          <div className="h-3 w-16 bg-[#F4F7FC] rounded"></div>
                        </div>
                        <div className="text-xs text-[#1E1B3A]/70">~{(i + 1) * 5} min</div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials slider */}
        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="bg-white rounded-xl shadow-lg p-8 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Quote className="absolute top-6 right-6 h-12 w-12 text-[#F4F7FC]" />

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#0A0A23]">{testimonial.name}</h4>
                        <p className="text-[#1E1B3A]/70">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < testimonial.stars ? "text-yellow-400" : "text-gray-300"}`}
                              fill={i < testimonial.stars ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-[#1E1B3A]/80 italic">"{testimonial.quote}"</p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#0A0A23] hover:bg-[#F4F7FC] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#008CFF]" : "bg-[#F4F7FC]"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#0A0A23] hover:bg-[#F4F7FC] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

