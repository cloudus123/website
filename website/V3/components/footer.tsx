"use client"

import { motion } from "framer-motion"
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0A23] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">QVuew</h3>
            <p className="text-white/70 mb-4">Smart queue management system that transforms waiting experiences.</p>
            <div className="flex space-x-4">
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Linkedin} />
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Integrations</FooterLink>
              <FooterLink href="#">Case Studies</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Guides</FooterLink>
              <FooterLink href="#">API Reference</FooterLink>
              <FooterLink href="#">Support</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">&copy; {currentYear} QVuew. All rights reserved.</p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ icon: Icon }) {
  return (
    <motion.a
      href="#"
      className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#008CFF] transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="h-4 w-4" />
    </motion.a>
  )
}

function FooterLink({ href, children }) {
  return (
    <li>
      <motion.a
        href={href}
        className="text-white/70 hover:text-white transition-colors"
        whileHover={{ x: 3 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.a>
    </li>
  )
}

