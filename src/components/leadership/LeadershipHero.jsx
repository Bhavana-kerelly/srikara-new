import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Heart } from 'lucide-react'
import { assetUrl } from '@/lib/assetUrl'

export function LeadershipHero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#FBFBFC] via-[#F8F9FB] to-white pt-28 pb-16 sm:pt-32 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 border-b border-slate-100">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-pink-100/50 to-rose-50/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-sky-100/40 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── LEFT COLUMN: Vision Typography & Highlights ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[#8B1A4A] rounded-full" />
              <span className="text-[11px] sm:text-xs font-black tracking-[0.24em] text-[#8B1A4A] uppercase font-sans">
                OUR VISION
              </span>
              <span className="w-5 h-[2px] bg-[#8B1A4A] rounded-full" />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] text-[#0A1628] font-bold tracking-tight mb-5">
              Guided by{' '}
              <span
                className="text-[#8B1A4A] italic font-serif"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Vision.
              </span>
              <br />
              Driven by Care.
            </h1>

            {/* Description */}
            <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-lg">
              Meet the dedicated leaders behind Srikara Hospital, who bring expertise, compassion and a shared vision to build a healthier tomorrow.
            </p>

            {/* Value Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-xs font-semibold text-slate-800 hover:border-[#8B1A4A]/30 transition-colors">
                <div className="w-6 h-6 rounded-full bg-[#8B1A4A]/10 flex items-center justify-center text-[#8B1A4A]">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <span>World-Class Medical Expertise</span>
              </div>

              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-slate-200/90 shadow-sm text-xs font-semibold text-slate-800 hover:border-[#8B1A4A]/30 transition-colors">
                <div className="w-6 h-6 rounded-full bg-rose-50 flex items-center justify-center text-[#E11D48]">
                  <Heart className="w-3.5 h-3.5 fill-[#E11D48]" />
                </div>
                <span>Patient First. Always.</span>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Doctor Holding Heart Illustration & Compassion Badge ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-[460px] sm:max-w-[500px]">
              
              {/* Soft decorative background circles */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-pink-200/30 via-rose-100/20 to-sky-100/30 blur-2xl pointer-events-none" />

              {/* Floating Top-Right "Compassion Builds Health" Glass Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-2 sm:top-4 right-2 sm:-right-2 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:px-4 sm:py-3 shadow-[0_12px_32px_rgba(0,0,0,0.1)] border border-white/80 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#8B1A4A] to-[#C7256B] flex items-center justify-center text-white shadow-sm">
                  <Heart className="w-4 h-4 fill-white" />
                </div>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-[#0A1628] leading-tight">
                    Compassion
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-medium text-slate-500">
                    Builds Health
                  </p>
                </div>
              </motion.div>

              {/* Masked Doctor Photo with Curved Organic Cutout */}
              <div className="relative w-full aspect-[4/3.8] rounded-[40px] overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100 border-4 border-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                <img
                  src={assetUrl('images/leadership/hero-doctor.jpg')}
                  alt="Doctor with heart"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default LeadershipHero
