import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, Activity, ChevronDown, BarChart2 } from 'lucide-react'
import { BIGGEST_MILESTONE } from '@/data/achievementsData'
import { CountUp } from './CountUp'

export function FeaturedMilestone() {
  const [showBranches, setShowBranches] = useState(false)

  return (
    <section id="featured-milestone" className="relative w-full py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#041628] via-[#062A4A] to-[#0A3D68] text-white shadow-[0_30px_70px_-15px_rgba(6,42,74,0.4)] border border-white/10"
        >
          {/* Ambient luminous mesh in background */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#19BFD3]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#D41472]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Subtle wave contours */}
          <div className="absolute inset-0 pointer-events-none opacity-10 select-none">
            <svg viewBox="0 0 1200 600" fill="none" className="w-full h-full object-cover">
              <path d="M0 300 Q 300 100 600 350 T 1200 200" stroke="#19BFD3" strokeWidth="2" />
              <path d="M0 450 Q 400 250 800 500 T 1200 300" stroke="#D41472" strokeWidth="2" />
            </svg>
          </div>

          <div className="relative z-10 p-8 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* ── LEFT: Realistic Luminous Knee Visual in Circular/Organic Crop ── */}
              <div className="lg:col-span-4 flex items-center justify-center">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                  {/* Outer glowing aura ring */}
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#19BFD3]/35 to-[#D41472]/35 blur-xl pointer-events-none animate-pulse" />
                  
                  {/* Organic circular crop */}
                  <div
                    className="relative w-full h-full overflow-hidden shadow-2xl border-2 border-white/25 bg-[#031525]"
                    style={{
                      borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%',
                    }}
                  >
                    <img
                      src={BIGGEST_MILESTONE.kneeImage}
                      alt="Luminous 3D Orthopedic Knee Joint Visualization"
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                    />
                    {/* Glass vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041628]/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* ── CENTER: Milestone Numbers & Narrative ── */}
              <div className="lg:col-span-5 flex flex-col justify-center text-left">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-5 h-[2px] bg-[#D41472]" />
                  <span className="text-[11px] font-black tracking-[0.26em] text-[#D41472] uppercase font-sans">
                    {BIGGEST_MILESTONE.eyebrow}
                  </span>
                </div>

                {/* Very Large Number */}
                <div className="font-serif text-5xl sm:text-6xl lg:text-[76px] font-extrabold text-white tracking-tight leading-none mb-3">
                  <CountUp end={BIGGEST_MILESTONE.rawValue} suffix="+" />
                </div>

                {/* Heading & Emphasized Line */}
                <h2 className="font-serif text-2xl sm:text-3xl text-white font-bold leading-tight mb-4">
                  {BIGGEST_MILESTONE.title} <br />
                  <span className="text-[#D41472] italic font-serif">
                    {BIGGEST_MILESTONE.highlight}
                  </span>
                </h2>

                {/* Description */}
                <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed max-w-md mb-6">
                  {BIGGEST_MILESTONE.description}
                </p>

                {/* Toggle Branch Breakdown Visualizer */}
                <div>
                  <button
                    onClick={() => setShowBranches(!showBranches)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#D41472] text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 border border-white/15"
                  >
                    <BarChart2 className="w-3.5 h-3.5" />
                    <span>{showBranches ? 'Hide Branch Distribution' : 'View 9-Branch Distribution'}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${showBranches ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              {/* ── RIGHT: Three Compact Stat Blocks with Elegant Separators ── */}
              <div className="lg:col-span-3 flex flex-col justify-center gap-4 border-t lg:border-t-0 lg:border-l border-white/15 pt-6 lg:pt-0 lg:pl-8">
                {BIGGEST_MILESTONE.stats.map((stat, idx) => (
                  <div
                    key={stat.id}
                    className="group bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 rounded-2xl p-4 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#19BFD3] group-hover:text-[#D41472] transition-colors flex-shrink-0">
                        {stat.icon === 'calendar' && <Calendar className="w-5 h-5" />}
                        {stat.icon === 'map-pin' && <MapPin className="w-5 h-5" />}
                        {stat.icon === 'activity' && <Activity className="w-5 h-5" />}
                      </div>
                      <div>
                        <p className="font-serif font-bold text-lg sm:text-xl text-white leading-tight">
                          {stat.rawValue ? <CountUp end={stat.rawValue} suffix={stat.value.includes('+') ? '+' : ''} /> : stat.value}
                        </p>
                        <p className="text-[11px] font-sans font-medium text-slate-300 uppercase tracking-wider mt-0.5">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Expandable Visual Branch Distribution (No generic Excel table) ── */}
            <AnimatePresence>
              {showBranches && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden pt-8 mt-8 border-t border-white/15"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h4 className="font-serif font-bold text-base text-white">
                        Surgical Performance by Center (Jan–Jun 2026)
                      </h4>
                      <p className="text-xs text-slate-300">
                        Cumulative total of 2,559 successful knee arthroplasty procedures
                      </p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#19BFD3] px-3 py-1 rounded-full bg-[#19BFD3]/15">
                      9 Centers
                    </span>
                  </div>

                  {/* Horizontal Bar Chart Visualizer */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {BIGGEST_MILESTONE.branchBreakdown.map((b) => (
                      <div
                        key={b.name}
                        className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-white/25 transition-all"
                      >
                        <div className="flex justify-between items-baseline mb-1.5 text-xs">
                          <span className="font-bold text-white">{b.name}</span>
                          <span className="font-serif font-extrabold text-[#D41472]">
                            {b.count} TKRs
                          </span>
                        </div>
                        {/* Animated progress bar */}
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#19BFD3] to-[#D41472] rounded-full transition-all duration-1000"
                            style={{ width: `${Math.min((b.count / 961) * 100, 100)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
