import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Award, CheckCircle2 } from 'lucide-react'

export function FeaturedRecognition() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#041628] text-white overflow-hidden select-text">
      {/* ── Oversized Translucent "EXCELLENCE" Typography ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 overflow-hidden w-full text-center">
        <span
          className="font-serif text-[16vw] font-black tracking-tight text-white/[0.03] block leading-none select-none"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          EXCELLENCE
        </span>
      </div>

      {/* ── Ambient Radial Flares ── */}
      <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-[#D41472]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#19BFD3]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ── LEFT COLUMN: Sophisticated Geometric Medal-Like Visual ── */}
          <div className="lg:col-span-6 flex items-center justify-center relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[460px] md:h-[460px] flex items-center justify-center"
            >
              {/* Subtle light sweep beam */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-6 rounded-full bg-gradient-to-tr from-transparent via-[#D41472]/20 to-transparent pointer-events-none"
              />

              {/* Outer Slow Rotating Thin Geometric Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border border-white/20 border-dashed"
              />

              {/* Concentric Thin Rings & Cyan Glow Orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-5 rounded-full border border-[#19BFD3]/35"
              >
                <div className="absolute top-2 left-1/4 w-3.5 h-3.5 rounded-full bg-[#19BFD3] shadow-[0_0_15px_#19BFD3]" />
                <div className="absolute bottom-3 right-1/4 w-3 h-3 rounded-full bg-[#D41472] shadow-[0_0_15px_#D41472]" />
              </motion.div>

              {/* Glassmorphic Layered Disc */}
              <div className="absolute inset-10 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />

              {/* Central Geometric Recognition Medal Seal */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  rotate: [0, 1.5, -1.5, 0],
                }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-[#062A4A] via-[#041628] to-[#020B14] p-2 border-2 border-white/30 shadow-[0_30px_70px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden"
              >
                {/* Internal Luminous Radial Sweep */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,20,114,0.35)_0%,rgba(25,191,211,0.15)_50%,transparent_80%)]" />

                {/* Sunburst Thin Rays */}
                <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
                  {[0, 30, 60, 90, 120, 150].map((deg) => (
                    <div
                      key={deg}
                      className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
                      style={{ transform: `rotate(${deg}deg)` }}
                    />
                  ))}
                </div>

                {/* Inner Bezel Ring */}
                <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-white/30 bg-[#062A4A]/80 backdrop-blur-md flex flex-col items-center justify-center text-center p-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#D41472] to-pink-400 text-white flex items-center justify-center shadow-lg mb-2">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black tracking-[0.25em] text-[#19BFD3] uppercase font-sans">
                    ET INDUSTRY ACHIEVERS
                  </span>
                  <span
                    className="font-serif text-xl sm:text-2xl font-black text-white tracking-tight mt-0.5"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    LEGEND
                  </span>
                  <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest mt-1">
                    2024–25 HONORS
                  </span>
                </div>
              </motion.div>

              {/* Floating Verification Tag */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 right-2 sm:right-6 z-20 px-4 py-2.5 rounded-2xl bg-[#031525]/95 border border-white/20 shadow-2xl backdrop-blur-md flex items-center gap-2.5"
              >
                <ShieldCheck className="w-4 h-4 text-[#19BFD3]" />
                <span className="text-[11px] font-black tracking-wider uppercase text-slate-200">
                  TELANGANA & AP
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Featured Award Narrative ── */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            {/* Small Label & Year */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D41472]/20 border border-[#D41472]/40 text-[#D41472]">
                <Sparkles className="w-3.5 h-3.5 text-[#19BFD3]" />
                <span className="text-[11px] font-black tracking-[0.25em] uppercase text-white font-sans">
                  FEATURED RECOGNITION
                </span>
              </div>

              <span
                className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#19BFD3]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                2024–25
              </span>
            </motion.div>

            {/* Award Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              ET Legend in Robotic Joint Replacement Surgery Award
            </motion.h2>

            {/* Awarded to Recipient Spotlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.05] border border-white/15 backdrop-blur-md mb-6"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-[#19BFD3] block mb-1">
                AWARDED TO
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                Dr. Akhil Dadi
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Chairman & Managing Director, Srikara Group of Hospitals
              </p>
            </motion.div>

            {/* Narrative & Recognition Context */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-4 text-slate-300 font-sans text-sm sm:text-base leading-relaxed font-light"
            >
              <p>
                <strong className="text-white font-semibold">Recognition: </strong>
                Awarded at the ET Industry Achievers Awards (Telangana & AP) for visionary leadership and enduring contribution to robotic joint replacement surgery.
              </p>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                This honor distinguishes the clinical benchmark set by Srikara Hospitals in bringing cutting-edge robotic knee and joint arthroplasty to thousands of patients across Telangana and Andhra Pradesh.
              </p>
            </motion.div>

            {/* Key Clinical Markers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  Category
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#19BFD3]">
                  Robotic Arthroplasty
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  Conferring Body
                </span>
                <span className="text-xs sm:text-sm font-semibold text-white">
                  Economic Times
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                  Territory
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#D41472]">
                  Telangana & AP
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
