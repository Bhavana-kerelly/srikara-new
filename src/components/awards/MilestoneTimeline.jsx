import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, ChevronRight, Sparkles } from 'lucide-react'
import { MILESTONES_DATA } from '@/data/awardsData'

export function MilestoneTimeline() {
  return (
    <section id="milestone-timeline" className="relative w-full py-16 sm:py-24 bg-[#F7FBFD] text-[#073B68] overflow-hidden select-text border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        
        {/* ── Eyebrow & Timeline Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E91E83]" />
              <span className="text-[11px] font-black tracking-[0.25em] text-[#073B68] uppercase font-sans">
                INSTITUTIONAL EVOLUTION
              </span>
            </div>
            <h3
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#073B68] tracking-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Milestone Timeline
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-sm">
            A chronological continuum of surgical milestones, healthcare awards, and forward-looking clinical initiatives.
          </p>
        </div>

        {/* ── Reusable Horizontal Timeline (Scrollable if many milestones) ── */}
        <div className="relative">
          {/* Subtle connecting line across desktop */}
          <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-[2px] bg-slate-200 z-0 pointer-events-none" />

          <div className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth">
            {MILESTONES_DATA.map((milestone, idx) => {
              const isUpcoming = milestone.status === 'upcoming'

              return (
                <div
                  key={milestone.id}
                  className={`group relative flex-1 min-w-[240px] sm:min-w-[270px] rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between border ${
                    isUpcoming
                      ? 'bg-white/60 border-dashed border-slate-300 hover:border-[#E91E83]/60'
                      : 'bg-white border-slate-200/90 hover:border-[#E91E83]/50 shadow-[0_8px_25px_rgba(7,59,104,0.04)] hover:shadow-[0_15px_35px_rgba(7,59,104,0.08)]'
                  }`}
                >
                  <div>
                    {/* Top Node Indicator & Year */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="relative z-10 flex items-center gap-2.5">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                            isUpcoming
                              ? 'border-slate-300 bg-white'
                              : 'border-[#073B68] bg-[#073B68] group-hover:border-[#E91E83] group-hover:bg-[#E91E83]'
                          }`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${isUpcoming ? 'bg-slate-300' : 'bg-white'}`} />
                        </div>
                        <span
                          className={`font-serif text-xl sm:text-2xl font-black ${
                            isUpcoming ? 'text-slate-400' : 'text-[#073B68] group-hover:text-[#E91E83]'
                          } transition-colors`}
                          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                        >
                          {milestone.year}
                        </span>
                      </div>

                      <span
                        className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full ${
                          isUpcoming
                            ? 'bg-slate-100 text-slate-400'
                            : 'bg-[#073B68]/[0.05] text-[#073B68]'
                        }`}
                      >
                        {isUpcoming ? 'FORWARD' : `0${idx + 1}`}
                      </span>
                    </div>

                    {/* Milestone Title */}
                    <h4
                      className={`font-serif text-base sm:text-lg font-bold tracking-tight mb-1.5 ${
                        isUpcoming ? 'text-slate-500' : 'text-[#073B68]'
                      }`}
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {milestone.title}
                    </h4>

                    {/* Organization / Context */}
                    <p className="text-[11px] font-semibold text-[#E91E83] mb-3">
                      {milestone.organization}
                    </p>

                    {/* Summary */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {milestone.summary}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <span>{isUpcoming ? 'Future Direction' : 'Archived Milestone'}</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:text-[#E91E83] transition-colors" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
