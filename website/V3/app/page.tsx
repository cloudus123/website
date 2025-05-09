"use client"

import { useRef } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import HowItWorks from "@/components/how-it-works"
import QueueReduction from "@/components/queue-reduction"
import Benefits from "@/components/benefits"
import EnquiryForm from "@/components/enquiry-form"
import Testimonials from "@/components/testimonials"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"
import QueueScrollBar from "@/components/queue-scroll-bar"

export default function Home() {
  const containerRef = useRef(null)

  return (
    <main ref={containerRef} className="overflow-hidden bg-[#F4F7FC]">
      <QueueScrollBar />
      <Header />
      <Hero />
      <HowItWorks />
      <QueueReduction />
      <Benefits />
      <EnquiryForm />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  )
}

