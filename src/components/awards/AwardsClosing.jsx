import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart } from 'lucide-react'

export function AwardsClosing() {
  return (
    <section className="relative w-full py-28 sm:py-36 bg-[#FFFFFF] text-[#062A4A] overflow-hidden select-text border-t border-slate-100">
      {/* ── Flowing Abstract Srikara-Inspired Wave Curves in Background ── */}
      <div className="absolute inset-0 pointer-events-none opacity-40 select-none overflow-hidden flex items-center justify-center">
        <svg
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="none"
        >
          {/* Translucent Cyan Wave */}
          <path
            d="M -100,250 C 300,450 600,100 1000,350 C 1200,450 1400,200 1600,300"
            stroke="#19BFD3"
            strokeWidth="2"
            strokeOpacity="0.25"
            fill="none"
          />
          {/* Magenta Curve */}
          <path
            d="M -50,380 C 250,150 700,500 1100,250 C 1300,120 1450,380 1550,200"
            stroke="#D41472"
            strokeWidth="2"
            strokeOpacity="0.2"
            fill="none"
          />
          {/* Thin Navy Arterial Vector */}
          <path
            d="M 0,180 C 400,350 800,150 1200,300 C 1350,360 1450,250 1500,280"
            stroke="#062A4A"
            strokeWidth="1"
            strokeOpacity="0.12"
            strokeDasharray="6 6"
            fill="none"
          />
        </svg>
      </div>

      {/* ── Ambient Radial Glow ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#D41472]/[0.04] to-[#19BFD3]/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 text-center">
        
        {/* Emblem Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#D41472] animate-pulse" />
          <span className="text-xs font-black tracking-[0.25em] text-[#062A4A] uppercase font-sans">
            OUR CONTINUING PROMISE
          </span>
        </motion.div>

        {/* Large Emotional Headline with Magenta Accent on "journey" */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#062A4A] tracking-tight leading-[1.15] mb-8"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Excellence is a <br />
          <span className="italic text-[#D41472] font-serif">journey</span>, not a destination.
        </motion.h2>

        {/* Supporting Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-600 font-sans text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto font-light"
        >
          “Driven by innovation. <br className="hidden sm:inline" />
          Recognized for excellence. <br className="hidden sm:inline" />
          Committed to better health.”
        </motion.p>

        {/* Minimal Signature Accent Bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: '120px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="h-[2px] bg-gradient-to-r from-[#D41472] to-[#19BFD3] mx-auto mt-12 rounded-full"
        />

        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.25em] mt-4">
          SRIKARA GROUP OF HOSPITALS • SOUTH INDIA
        </p>
      </div>
    </section>
  )
}
