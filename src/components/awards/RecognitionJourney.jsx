import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Award, Sparkles, ChevronRight, ArrowRight } from 'lucide-react'
import { AWARDS_DATA, JOURNEY_TIMELINE_YEARS } from '@/data/awardsData'

export function RecognitionJourney() {
  const [activeYear, setActiveYear] = useState('2024–25')

  // Filter awards corresponding to selected year
  const activeAwards = AWARDS_DATA.filter((award) => award.year === activeYear)
  const currentTimelineItem = JOURNEY_TIMELINE_YEARS.find((y) => y.year === activeYear)

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#FAFBFD] text-[#062A4A] overflow-hidden select-text border-t border-slate-100">
      {/* ── Background Subtle Glows ── */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#19BFD3]/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#D41472]/[0.05] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062A4A]/[0.04] border border-[#062A4A]/10 mb-4">
            <Calendar className="w-3.5 h-3.5 text-[#D41472]" />
            <span className="text-[11px] font-black tracking-[0.25em] text-[#062A4A] uppercase font-sans">
              MILESTONES OVER TIME
            </span>
          </div>

          <h2
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#062A4A] tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The Recognition <br />
            <span className="italic text-[#D41472] font-normal">Journey.</span>
          </h2>
          <p className="mt-4 text-slate-600 font-sans text-sm sm:text-base leading-relaxed max-w-xl">
            Navigate through the milestone years to explore the honors that have punctuated our clinical evolution across South India.
          </p>
        </div>

        {/* ── Flowing Curved Interactive Path with Milestone Years ── */}
        <div className="relative mb-16 sm:mb-20">
          {/* Subtle curved background SVG line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-20 pointer-events-none z-0">
            <svg viewBox="0 0 1000 80" fill="none" className="w-full h-full preserve-3d" preserveAspectRatio="none">
              <path
                d="M 0,40 Q 250,10 500,40 T 1000,40"
                stroke="rgba(6, 42, 74, 0.12)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          {/* Horizontal Track of Milestone Nodes */}
          <div className="relative z-10 flex items-center justify-between gap-4 overflow-x-auto pb-4 no-scrollbar">
            {JOURNEY_TIMELINE_YEARS.map((item, idx) => {
              const isActive = item.year === activeYear
              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setActiveYear(item.year)}
                  className={`group relative flex-1 min-w-[200px] sm:min-w-[240px] text-left p-6 sm:p-7 rounded-3xl transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-white shadow-[0_20px_50px_rgba(212,20,114,0.15)] border-[#D41472] scale-[1.03] ring-4 ring-[#D41472]/10'
                      : 'bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-serif text-3xl sm:text-4xl font-black transition-colors ${
                        isActive ? 'text-[#D41472]' : 'text-[#062A4A] group-hover:text-slate-900'
                      }`}
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {item.year}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? 'bg-[#D41472] text-white shadow-md'
                          : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                      }`}
                    >
                      <span className="text-[10px] font-bold">0{idx + 1}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-bold text-[#062A4A] line-clamp-1">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5 font-normal">
                    {item.tagline}
                  </p>

                  {/* Active Indicator Glow Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeJourneyBar"
                      className="absolute bottom-0 left-6 right-6 h-1 rounded-full bg-gradient-to-r from-[#D41472] to-[#19BFD3]"
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* ── Dynamically Revealed Awards for the Selected Year ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            {/* Year Context Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#062A4A] text-white flex items-center justify-center shadow-sm">
                  <Sparkles className="w-5 h-5 text-[#19BFD3]" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#062A4A]">
                    Milestone Citations Conferred in {activeYear}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {activeAwards.length} Recognized Distinction{activeAwards.length > 1 ? 's' : ''} in Official Record
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-[#D41472]">
                <span>Srikara Hospitals Historical Archive</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Awards Grid for Current Year */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {activeAwards.map((award, index) => (
                <div
                  key={award.id}
                  className="group relative rounded-[28px] p-8 sm:p-10 bg-white border border-slate-200/80 hover:border-[#D41472]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#062A4A]/[0.05] text-[#062A4A] border border-[#062A4A]/10">
                        {award.category}
                      </span>
                      <span className="text-xs font-bold text-slate-400 font-mono">
                        {award.region || 'Regional'}
                      </span>
                    </div>

                    <h4
                      className="font-serif text-2xl sm:text-3xl font-bold text-[#062A4A] tracking-tight leading-snug mb-3 group-hover:text-[#D41472] transition-colors"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {award.title}
                    </h4>

                    <p className="text-xs sm:text-sm font-semibold text-[#062A4A]/80 mb-4">
                      {award.organization}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {award.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">
                      Conferred: <strong className="text-slate-700">{award.year}</strong>
                    </span>
                    <span className="inline-flex items-center gap-1 font-bold text-[#D41472] uppercase tracking-wider text-[11px]">
                      Archived Honor
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
