import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export function AwardsHero() {
  const scrollToContent = () => {
    const section = document.getElementById('awards-collection')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollBy({ top: 600, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[68vh] flex items-center justify-center bg-[#F7FBFD] text-[#073B68] overflow-hidden select-text pt-24 pb-14 sm:pt-28 sm:pb-20 border-b border-slate-100/80">
      {/* ── Soft Atmospheric Ambient Glows ── */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-[#5CCFE8]/[0.07] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#E91E83]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 text-center flex flex-col items-center">
        
        {/* Flanked Eyebrow: — AWARDS & RECOGNITION — */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center gap-2.5 mb-5"
        >
          <span className="w-8 sm:w-10 h-[1.5px] bg-[#E91E83]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.28em] text-[#E91E83] uppercase font-sans">
            AWARDS & RECOGNITION
          </span>
          <span className="w-8 sm:w-10 h-[1.5px] bg-[#E91E83]" />
        </motion.div>

        {/* Main Editorial Heading: Celebrating Excellence. Building Trust. */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#073B68] tracking-tight leading-[1.1] mb-6"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Celebrating{' '}
          <span className="text-[#E91E83] italic font-serif font-normal">Excellence.</span> <br className="hidden sm:inline" />
          Building Trust.
        </motion.h1>

        {/* Centered Supporting Sentence */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-600 font-sans text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal mb-8"
        >
          Every recognition reflects our commitment to clinical excellence, innovation and better outcomes — and the people who make that journey possible.
        </motion.p>

        {/* Bottom Signature Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-center gap-3 text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#073B68]/70 uppercase mb-8"
        >
          <span className="text-[#073B68] font-black">SRIKARA HOSPITALS</span>
          <span className="text-[#E91E83]">·</span>
          <span>EXCELLENCE</span>
          <span className="text-[#5CCFE8]">·</span>
          <span>INNOVATION</span>
          <span className="text-[#E91E83]">·</span>
          <span>IMPACT</span>
        </motion.div>

        {/* Centered Interactive Scroll Indicator */}
        <motion.button
          type="button"
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-slate-400 hover:text-[#E91E83] transition-colors cursor-pointer group"
          title="Scroll down to awards"
        >
          <span>EXPLORE RECOGNITION</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#E91E83]" />
        </motion.button>

      </div>
    </section>
  )
}
