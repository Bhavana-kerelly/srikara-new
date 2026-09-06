import React from 'react'
import { motion } from 'framer-motion'
import { SPEED_RECORDS } from '@/data/achievementsData'
import { CountUp } from './CountUp'
import { Zap, Award } from 'lucide-react'

export function SpeedRecordsSection() {
  const { block1, block2, surgeryImage } = SPEED_RECORDS

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7 }}
      className="relative flex flex-col justify-between rounded-[32px] bg-gradient-to-br from-[#031528] via-[#062A4A] to-[#0A3860] text-white p-6 sm:p-7 shadow-[0_15px_45px_rgba(6,42,74,0.3)] border border-white/10 h-full overflow-hidden group"
    >
      {/* Background ambient lighting */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#D41472]/25 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#19BFD3]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Top Surgical Photo Visual */}
      <div className="relative w-full h-40 sm:h-44 rounded-2xl overflow-hidden mb-5 border border-white/15 bg-slate-900 shadow-inner">
        <img
          src={surgeryImage}
          alt="Advanced Surgical Team in Operating Theatre"
          className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031528]/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-[#19BFD3] uppercase border border-white/15">
          Surgical Precision
        </div>
      </div>

      {/* Two Data Visualization Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
        {/* BLOCK 1: High-Speed Volume */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/[0.08] transition-all">
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Zap className="w-3.5 h-3.5 text-[#D41472]" />
              <span className="text-[9px] font-black tracking-widest text-[#D41472] uppercase">
                {block1.badge}
              </span>
            </div>

            <p className="font-serif font-black text-3xl sm:text-4xl text-white leading-none">
              <CountUp end={block1.primaryRaw} suffix="+" />
            </p>
            <p className="text-xs font-sans font-medium text-slate-300 mt-1">
              {block1.primaryLabel}
            </p>
            <span className="text-[10px] font-mono text-slate-400">
              ({block1.timeframe})
            </span>
          </div>

          <div className="pt-3 mt-3 border-t border-white/10">
            <p className="font-serif font-black text-xl text-[#19BFD3] leading-none">
              <CountUp end={block1.secondaryRaw} suffix="+" />
            </p>
            <p className="text-[11px] font-sans text-slate-300">
              {block1.secondaryLabel}
            </p>
          </div>
        </div>

        {/* BLOCK 2: Single-Day Record */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/[0.08] transition-all">
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Award className="w-3.5 h-3.5 text-[#19BFD3]" />
              <span className="text-[9px] font-black tracking-widest text-[#19BFD3] uppercase">
                {block2.badge}
              </span>
            </div>

            <p className="font-serif font-black text-4xl sm:text-5xl text-white leading-none">
              <CountUp end={block2.rawNumber} />
            </p>
            <p className="text-xs font-serif font-bold text-white mt-1 leading-snug">
              {block2.heading}
            </p>
            <p className="text-xs text-[#D41472] font-semibold">
              {block2.subheading}
            </p>
          </div>

          <div className="pt-3 mt-3 border-t border-white/10">
            <p className="text-[10px] sm:text-[11px] font-sans text-slate-300 leading-relaxed italic">
              "{block2.description}"
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
