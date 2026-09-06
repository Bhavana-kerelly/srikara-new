import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Compass } from 'lucide-react'

export function MoreToComeSection() {
  return (
    <section className="relative w-full py-20 sm:py-24 bg-white text-[#073B68] overflow-hidden select-text border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Heading & Narrative */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <Compass className="w-3.5 h-3.5 text-[#E91E83]" />
              <span className="text-[11px] font-black tracking-[0.25em] text-[#073B68] uppercase font-sans">
                CONTINUOUS PROGRESS
              </span>
            </div>

            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#073B68] tracking-tight leading-[1.15] mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              More Milestones. <br />
              <span className="text-[#E91E83] italic font-serif">More Reasons to Believe.</span>
            </h2>

            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed font-normal max-w-lg">
              “Our journey continues. As new achievements and recognitions are added, this space will grow with them.”
            </p>
          </div>

          {/* Right: Open-ended timeline visual extending rightwards */}
          <div className="lg:col-span-6 flex items-center">
            <div className="relative w-full rounded-3xl p-6 sm:p-8 bg-[#F7FBFD] border border-slate-200/80 shadow-xs flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#E91E83]/10 text-[#E91E83]">
                  OPEN HORIZON
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Dynamic Archival System
                </span>
              </div>

              {/* Minimal Open-ended Timeline Graphic */}
              <div className="relative py-4">
                <div className="flex items-center gap-3">
                  {/* Node 1 */}
                  <div className="w-3 h-3 rounded-full bg-[#073B68] shrink-0" />
                  <div className="h-[2px] w-12 sm:w-16 bg-[#073B68]" />

                  {/* Node 2 */}
                  <div className="w-3 h-3 rounded-full bg-[#073B68] shrink-0" />
                  <div className="h-[2px] w-12 sm:w-16 bg-[#073B68]" />

                  {/* Active Future Node */}
                  <div className="w-3.5 h-3.5 rounded-full bg-[#E91E83] ring-4 ring-[#E91E83]/20 shrink-0 animate-pulse" />
                  
                  {/* Open-ended dashed gradient line continuing rightward */}
                  <div className="h-[2px] flex-1 bg-gradient-to-r from-[#E91E83] via-[#5CCFE8] to-transparent border-t-2 border-dashed border-[#E91E83]/60" />
                  
                  <ArrowRight className="w-4 h-4 text-[#E91E83] shrink-0 animate-pulse" />
                </div>

                <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mt-3 pt-2">
                  <span>Past Honors</span>
                  <span className="text-[#073B68]">Present Excellence</span>
                  <span className="text-[#E91E83]">Future Benchmarks</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-3 font-normal leading-relaxed">
                As Srikara expands its robotic surgery suites, tertiary hospitals, and clinical fellowship programs, subsequent citations will be appended seamlessly to this digital journal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
