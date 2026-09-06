import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Layout, ShieldCheck, Activity } from 'lucide-react'
import { INNOVATION_CARDS } from '@/data/achievementsData'

export function InnovationSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'bot':
        return <Bot className="w-5 h-5 text-[#D41472]" />
      case 'layout':
        return <Layout className="w-5 h-5 text-[#19BFD3]" />
      case 'shield-check':
        return <ShieldCheck className="w-5 h-5 text-[#D41472]" />
      default:
        return <Activity className="w-5 h-5 text-[#19BFD3]" />
    }
  }

  return (
    <div className="flex flex-col justify-between h-full">
      {/* Header Eyebrow */}
      <div className="mb-4">
        <div className="inline-flex items-center gap-2 mb-1">
          <span className="w-4 h-[2px] bg-[#D41472]" />
          <span className="text-[10px] font-black tracking-[0.24em] text-[#D41472] uppercase font-sans">
            INNOVATION & TECHNOLOGY
          </span>
        </div>
        <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#062A4A] tracking-tight">
          Pioneering Surgical Tech
        </h3>
      </div>

      {/* 2x2 Grid of Innovation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 flex-1">
        {INNOVATION_CARDS.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
            className="group p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(6,42,74,0.08)] hover:border-[#D41472]/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Icon Container with subtle gradient */}
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-[#FFF0F5] transition-all duration-300">
                {getIcon(card.icon)}
              </div>

              {/* Title */}
              <h4 className="font-serif font-bold text-xs sm:text-sm text-[#062A4A] leading-snug mb-1.5 group-hover:text-[#D41472] transition-colors">
                {card.title}
              </h4>

              {/* Description */}
              <p className="text-slate-600 font-sans text-[11px] sm:text-xs leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Badge pill */}
            <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400">
                {card.badge}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#19BFD3] group-hover:bg-[#D41472] transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
