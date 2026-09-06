import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight, Heart, Brain, Droplets, Activity } from 'lucide-react'
import { SPECIALTY_ACHIEVEMENTS } from '@/data/achievementsData'
import { CountUp } from './CountUp'

export function SpecialtySection() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef
      const scrollAmount = direction === 'left' ? -320 : 320
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const getIcon = (id) => {
    switch (id) {
      case 'cardiovascular':
        return <Heart className="w-4 h-4 text-[#D41472]" />
      case 'neurosciences':
        return <Brain className="w-4 h-4 text-[#19BFD3]" />
      case 'nephrology':
        return <Droplets className="w-4 h-4 text-[#D41472]" />
      default:
        return <Activity className="w-4 h-4 text-[#D41472]" />
    }
  }

  return (
    <section className="relative w-full py-12 md:py-16 bg-[#F5FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* ──────────────── LEFT: Dark Navy Curved Feature Panel ──────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75 }}
            className="lg:col-span-4 rounded-[32px] bg-gradient-to-br from-[#041628] via-[#062A4A] to-[#0A3258] text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl border border-white/10 relative overflow-hidden"
          >
            {/* Background luminous ambient gradient */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D41472]/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#19BFD3]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-5 h-[2px] bg-[#D41472]" />
                <span className="text-[11px] font-black tracking-[0.26em] text-[#D41472] uppercase font-sans">
                  BEYOND ORTHOPEDICS
                </span>
              </div>

              {/* Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-[1.12] mb-5">
                Expert Care <br />
                <span className="text-[#D41472] italic font-serif">
                  Across Specialties.
                </span>
              </h2>

              {/* Supporting text */}
              <p className="text-slate-300 font-sans text-xs sm:text-sm leading-relaxed mb-8">
                From heart to brain, kidneys to lungs — our specialised teams
                deliver advanced treatments and better outcomes across multiple
                disciplines.
              </p>
            </div>

            {/* Bottom Controls / Link */}
            <div className="relative z-10 pt-6 border-t border-white/15 flex items-center justify-between">
              <Link
                to="/specialties"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#D41472] transition-colors"
              >
                <span>Explore Our Specialties</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D41472]" />
              </Link>

              {/* Slider Arrows */}
              <div className="hidden sm:flex items-center gap-2">
                <button
                  onClick={() => scroll('left')}
                  className="w-8 h-8 rounded-full border border-white/20 hover:border-[#D41472] hover:bg-[#D41472] text-white flex items-center justify-center transition-colors"
                  aria-label="Previous specialties"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-8 h-8 rounded-full border border-white/20 hover:border-[#D41472] hover:bg-[#D41472] text-white flex items-center justify-center transition-colors"
                  aria-label="Next specialties"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* ──────────────── RIGHT: Four Premium Specialty Cards ──────────────── */}
          <div className="lg:col-span-8 flex items-center">
            <div
              ref={scrollRef}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 w-full overflow-x-auto pb-2 scrollbar-none"
            >
              {SPECIALTY_ACHIEVEMENTS.map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col justify-between rounded-[28px] bg-white border border-slate-200/80 p-5 shadow-[0_10px_30px_rgba(6,42,74,0.05)] hover:shadow-[0_20px_45px_rgba(6,42,74,0.12)] hover:border-[#D41472]/30 transition-all duration-300"
                >
                  <div>
                    {/* 3D Medical Visual at Card Top */}
                    <div className="relative w-full h-32 sm:h-36 mb-4 rounded-2xl bg-gradient-to-b from-slate-50 via-slate-100/50 to-white flex items-center justify-center overflow-hidden border border-slate-100">
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent pointer-events-none" />
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-24 h-24 sm:w-28 sm:h-28 object-contain filter drop-shadow-md transform transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Specialty Header + Title */}
                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-200">
                        {getIcon(card.id)}
                      </div>
                      <h3 className="font-serif font-bold text-xs sm:text-sm text-[#062A4A] tracking-tight">
                        {card.title}
                      </h3>
                    </div>

                    {/* Numeric Highlights */}
                    {card.dualMetrics ? (
                      <div className="grid grid-cols-2 gap-2 my-2 py-2 border-y border-slate-100">
                        {card.dualMetrics.map((dm) => (
                          <div key={dm.label}>
                            <p className="font-serif font-black text-lg sm:text-xl text-[#D41472] leading-none">
                              <CountUp end={dm.rawValue} suffix="+" />
                            </p>
                            <p className="text-[10px] font-sans font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                              {dm.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="my-2 py-2 border-y border-slate-100">
                        <p
                          className={`font-serif font-black text-2xl sm:text-3xl leading-none ${
                            card.theme === 'cyan' ? 'text-[#19BFD3]' : 'text-[#D41472]'
                          }`}
                        >
                          <CountUp end={card.rawValue} suffix="+" />
                        </p>
                        <p className="text-[11px] font-sans font-semibold text-slate-500 uppercase tracking-wider mt-1">
                          {card.metricLabel}
                        </p>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-slate-600 font-sans text-xs leading-relaxed mt-2">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
