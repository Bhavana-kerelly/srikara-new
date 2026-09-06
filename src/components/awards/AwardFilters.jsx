import React from 'react'
import { motion } from 'framer-motion'
import { AWARD_FILTER_CATEGORIES } from '@/data/awardsData'

export function AwardFilters({ activeCategory, onSelectCategory }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-3 no-scrollbar select-none">
      {AWARD_FILTER_CATEGORIES.map((category) => {
        const isActive = activeCategory === category

        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-200 shrink-0 cursor-pointer ${
              isActive
                ? 'text-[#E91E83] bg-[#E91E83]/[0.08] border border-[#E91E83]/30 shadow-sm'
                : 'text-slate-500 hover:text-[#073B68] bg-transparent hover:bg-slate-100/70 border border-transparent'
            }`}
          >
            <span>{category}</span>

            {/* Subtle active indicator underline */}
            {isActive && (
              <motion.div
                layoutId="activeFilterPill"
                className="absolute bottom-1 left-4 right-4 h-[2px] bg-[#E91E83] rounded-full"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        )
      })}
    </div>
  )
}
