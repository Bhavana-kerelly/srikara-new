import React from 'react'
import { motion } from 'framer-motion'
import { MAJOR_MILESTONE } from '@/data/achievementsData'
import { CountUp } from './CountUp'

export function MajorMilestoneCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7 }}
      className="relative flex flex-col justify-between rounded-[32px] bg-gradient-to-br from-white via-[#F9FBFC] to-[#F2F7FA] p-6 sm:p-8 shadow-[0_12px_40px_rgba(6,42,74,0.06)] border border-slate-200/80 h-full overflow-hidden group"
    >
      {/* Ambient background accent */}
      <div className="absolute -top-10 -left-10 w-44 h-44 bg-[#D41472]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Top implant image container */}
      <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 bg-white border border-slate-100 flex items-center justify-center shadow-inner">
        <img
          src={MAJOR_MILESTONE.implantImage}
          alt="Precision Knee Implant Replacement"
          className="w-full h-full object-contain p-2 transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-4 h-[2px] bg-[#D41472]" />
            <span className="text-[10px] font-black tracking-[0.24em] text-[#D41472] uppercase font-sans">
              {MAJOR_MILESTONE.eyebrow}
            </span>
          </div>

          {/* Large Number */}
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#062A4A] tracking-tight leading-none mb-1">
            Over <CountUp end={MAJOR_MILESTONE.rawValue} suffix="" />
          </h3>

          <p className="font-serif font-bold text-xl sm:text-2xl text-[#062A4A] mb-4">
            {MAJOR_MILESTONE.title}
          </p>

          <p className="text-slate-600 font-sans text-xs sm:text-[13px] leading-relaxed">
            {MAJOR_MILESTONE.description}
          </p>
        </div>

        {/* Bottom Accent Line */}
        <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center justify-between text-[11px] font-semibold text-slate-400">
          <span>Benchmark Orthopedic Care</span>
          <span className="font-bold text-[#D41472]">12+ Years Legacy</span>
        </div>
      </div>
    </motion.div>
  )
}
