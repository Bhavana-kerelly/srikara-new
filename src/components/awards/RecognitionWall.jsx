import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, ArrowUpRight, Sparkles, Trophy } from 'lucide-react'
import { AWARDS_DATA } from '@/data/awardsData'
import { AwardDetailModal } from './AwardDetailModal'

export function RecognitionWall() {
  const [selectedAward, setSelectedAward] = useState(null)

  return (
    <section id="recognition-wall" className="relative w-full py-20 sm:py-28 bg-[#FFFFFF] text-[#062A4A] overflow-hidden select-text border-t border-slate-100">
      {/* ── Background Subtle Aesthetics ── */}
      <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-[#D41472]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-[#19BFD3]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* ── Editorial Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062A4A]/[0.04] border border-[#062A4A]/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D41472]" />
              <span className="text-[11px] font-black tracking-[0.25em] text-[#062A4A] uppercase font-sans">
                INSTITUTIONAL HONORS
              </span>
            </div>

            <h2
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#062A4A] tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Recognized <br />
              <span className="italic text-[#D41472] font-normal">for Excellence.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              “From clinical innovation to institutional excellence, every recognition marks a milestone in Srikara Hospitals’ journey.”
            </p>
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-2 block">
              Click any plaque to inspect the citation
            </span>
          </div>
        </div>

        {/* ── Staggered Floating Recognition Wall Composition ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ════ ROW 1: FEATURED DOMINANT PLAQUE (Spans 8 cols on MD/LG) ════ */}
          {(() => {
            const featuredAward = AWARDS_DATA.find((a) => a.featured) || AWARDS_DATA[0]
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedAward(featuredAward)}
                className="md:col-span-8 group relative rounded-[32px] sm:rounded-[36px] p-8 sm:p-12 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-[#062A4A] via-[#041628] to-[#020B14] text-white shadow-[0_20px_60px_rgba(6,42,74,0.18)] hover:shadow-[0_30px_80px_rgba(6,42,74,0.3)] border-2 border-white/15"
              >
                {/* Luminous hover glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#D41472]/0 via-[#D41472]/30 to-[#19BFD3]/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none" />

                {/* Animated delicate border trace */}
                <div className="absolute inset-0 rounded-[32px] sm:rounded-[36px] border border-white/0 group-hover:border-[#D41472]/60 transition-colors duration-500 pointer-events-none" />

                {/* Background oversized Year Watermark */}
                <span
                  className="absolute -bottom-6 -right-6 font-serif text-7xl sm:text-9xl font-black text-white/[0.04] group-hover:text-white/[0.08] transition-colors duration-500 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {featuredAward.year}
                </span>

                <div className="relative z-10 flex flex-col justify-between min-h-[300px] sm:min-h-[340px]">
                  {/* Plaque Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-[#D41472] to-pink-500 text-white shadow-md">
                        <Sparkles className="w-3 h-3" />
                        FEATURED RECOGNITION
                      </div>
                      <p className="text-xs font-semibold text-[#19BFD3] tracking-wider uppercase pt-1">
                        {featuredAward.category}
                      </p>
                    </div>

                    {/* Oversized Year Typography Anchor */}
                    <div className="text-right">
                      <span
                        className="font-serif text-3xl sm:text-5xl font-black text-white group-hover:text-[#19BFD3] transition-colors duration-300 block leading-tight tracking-tight"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {featuredAward.year}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                        Annual Honor
                      </span>
                    </div>
                  </div>

                  {/* Main Plaque Content */}
                  <div className="my-6">
                    <h3
                      className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight group-hover:text-pink-100 transition-colors"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {featuredAward.title}
                    </h3>

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:text-base font-semibold text-[#19BFD3]">
                      <span>{featuredAward.organization}</span>
                      {featuredAward.region && (
                        <>
                          <span className="text-white/40">•</span>
                          <span className="text-slate-300 font-normal">{featuredAward.region}</span>
                        </>
                      )}
                    </div>

                    {featuredAward.recipient && (
                      <p className="mt-3 text-xs sm:text-sm text-slate-300 font-light max-w-xl">
                        Awarded to: <strong className="text-white font-semibold">{featuredAward.recipient}</strong> ({featuredAward.recipientRole})
                      </p>
                    )}
                  </div>

                  {/* Plaque Footer with Interactive Trigger */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      Pioneering Robotic Arthroplasty Leadership
                    </span>
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#D41472] group-hover:text-[#19BFD3] transition-colors">
                      <span>VIEW RECOGNITION</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })()}

          {/* ════ PLAQUE 2: 2021 Best Multi-Specialty (Spans 4 cols, Taller Editorial Panel) ════ */}
          {(() => {
            const award2021 = AWARDS_DATA.find((a) => a.year === '2021') || AWARDS_DATA[1]
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedAward(award2021)}
                className="md:col-span-4 group relative rounded-[32px] p-8 sm:p-9 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-[#FAFBFD] hover:bg-white text-[#062A4A] shadow-[0_15px_40px_rgba(6,42,74,0.06)] hover:shadow-[0_25px_60px_rgba(6,42,74,0.14)] border border-slate-200/80 hover:border-[#D41472]/40"
              >
                {/* Year Header */}
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="font-serif text-4xl sm:text-5xl font-black text-[#062A4A] group-hover:text-[#D41472] transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {award2021.year}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-[#062A4A] text-slate-600 group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <span className="text-[10px] font-black uppercase tracking-widest text-[#D41472] block mb-2">
                  {award2021.category}
                </span>

                <h3
                  className="font-serif text-2xl sm:text-3xl font-bold text-[#062A4A] tracking-tight leading-snug mb-4 group-hover:text-[#062A4A]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {award2021.title}
                </h3>

                <p className="text-sm font-semibold text-slate-500 mb-6">
                  {award2021.organization}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-8">
                  {award2021.shortDescription}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#062A4A] group-hover:text-[#D41472] transition-colors">
                  <span>VIEW RECOGNITION</span>
                  <span className="text-[10px] font-mono text-slate-400">02 / 06</span>
                </div>
              </motion.div>
            )
          })()}

          {/* ════ ROW 2: ASYMMETRIC STAGGERED ROW (2020 Ortho, 2020 Gastro, 2019 Business Today, 2019 Brand) ════ */}
          
          {/* PLAQUE 3: 2020 Best Orthopedic (Spans 6 cols) */}
          {(() => {
            const awardOrtho = AWARDS_DATA.find((a) => a.id === 'award-best-ortho-2020') || AWARDS_DATA[2]
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedAward(awardOrtho)}
                className="md:col-span-6 group relative rounded-[32px] p-8 sm:p-10 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white via-slate-50/50 to-pink-50/20 text-[#062A4A] shadow-[0_15px_40px_rgba(6,42,74,0.06)] hover:shadow-[0_25px_60px_rgba(6,42,74,0.14)] border border-slate-200/80 hover:border-[#D41472]/40"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#19BFD3] block mb-1">
                      {awardOrtho.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {awardOrtho.organization}
                    </span>
                  </div>
                  <span
                    className="font-serif text-3xl sm:text-5xl font-black text-[#062A4A] group-hover:text-[#D41472] transition-colors"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {awardOrtho.year}
                  </span>
                </div>

                <h3
                  className="font-serif text-2xl sm:text-3xl font-bold text-[#062A4A] tracking-tight leading-snug mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {awardOrtho.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {awardOrtho.shortDescription}
                </p>

                <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#062A4A] group-hover:text-[#D41472] pt-4 border-t border-slate-100 transition-colors">
                  <span>VIEW RECOGNITION</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            )
          })()}

          {/* PLAQUE 4: 2020 Best Gastro (Spans 6 cols) */}
          {(() => {
            const awardGastro = AWARDS_DATA.find((a) => a.id === 'award-best-gastro-2020') || AWARDS_DATA[3]
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedAward(awardGastro)}
                className="md:col-span-6 group relative rounded-[32px] p-8 sm:p-10 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-[#FAFBFD] hover:bg-white text-[#062A4A] shadow-[0_15px_40px_rgba(6,42,74,0.06)] hover:shadow-[0_25px_60px_rgba(6,42,74,0.14)] border border-slate-200/80 hover:border-[#19BFD3]/50"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D41472] block mb-1">
                      {awardGastro.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {awardGastro.organization}
                    </span>
                  </div>
                  <span
                    className="font-serif text-3xl sm:text-5xl font-black text-[#062A4A] group-hover:text-[#19BFD3] transition-colors"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {awardGastro.year}
                  </span>
                </div>

                <h3
                  className="font-serif text-2xl sm:text-3xl font-bold text-[#062A4A] tracking-tight leading-snug mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {awardGastro.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {awardGastro.shortDescription}
                </p>

                <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#062A4A] group-hover:text-[#19BFD3] pt-4 border-t border-slate-100 transition-colors">
                  <span>VIEW RECOGNITION</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            )
          })()}

          {/* ════ ROW 3: DUAL 2019 AWARDS (Spans 6 & 6 cols) ════ */}
          
          {/* PLAQUE 5: 2019 Best Hospital in Telangana (Business Today) */}
          {(() => {
            const awardBT = AWARDS_DATA.find((a) => a.id === 'award-business-today-2019') || AWARDS_DATA[4]
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedAward(awardBT)}
                className="md:col-span-6 group relative rounded-[32px] p-8 sm:p-9 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-[#FAFBFD] hover:bg-white text-[#062A4A] shadow-[0_15px_40px_rgba(6,42,74,0.06)] hover:shadow-[0_25px_60px_rgba(6,42,74,0.14)] border border-slate-200/80 hover:border-[#D41472]/40"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    BUSINESS TODAY HONORS
                  </span>
                  <span
                    className="font-serif text-3xl sm:text-4xl font-black text-[#062A4A] group-hover:text-[#D41472] transition-colors"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {awardBT.year}
                  </span>
                </div>

                <h3
                  className="font-serif text-xl sm:text-2xl font-bold text-[#062A4A] tracking-tight mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {awardBT.title}
                </h3>

                <p className="text-xs font-semibold text-[#D41472] mb-3">
                  {awardBT.organization}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {awardBT.shortDescription}
                </p>

                <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#062A4A] group-hover:text-[#D41472] pt-4 border-t border-slate-100 transition-colors">
                  <span>VIEW RECOGNITION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            )
          })()}

          {/* PLAQUE 6: 2019 Best Healthcare Brand (Business World) */}
          {(() => {
            const awardBW = AWARDS_DATA.find((a) => a.id === 'award-business-world-2019') || AWARDS_DATA[5]
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedAward(awardBW)}
                className="md:col-span-6 group relative rounded-[32px] p-8 sm:p-9 cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-[#FAFBFD] hover:bg-white text-[#062A4A] shadow-[0_15px_40px_rgba(6,42,74,0.06)] hover:shadow-[0_25px_60px_rgba(6,42,74,0.14)] border border-slate-200/80 hover:border-[#19BFD3]/50"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    BUSINESS WORLD SUMMIT
                  </span>
                  <span
                    className="font-serif text-3xl sm:text-4xl font-black text-[#062A4A] group-hover:text-[#19BFD3] transition-colors"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {awardBW.year}
                  </span>
                </div>

                <h3
                  className="font-serif text-xl sm:text-2xl font-bold text-[#062A4A] tracking-tight mb-2"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {awardBW.title}
                </h3>

                <p className="text-xs font-semibold text-[#19BFD3] mb-3">
                  {awardBW.organization}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {awardBW.shortDescription}
                </p>

                <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#062A4A] group-hover:text-[#19BFD3] pt-4 border-t border-slate-100 transition-colors">
                  <span>VIEW RECOGNITION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            )
          })()}
        </div>
      </div>

      {/* ── Interactive Detail Modal Drawer ── */}
      <AwardDetailModal
        award={selectedAward}
        isOpen={Boolean(selectedAward)}
        onClose={() => setSelectedAward(null)}
      />
    </section>
  )
}
