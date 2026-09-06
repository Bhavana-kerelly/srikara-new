import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Sparkles, Plus } from 'lucide-react'
import { MORE_MILESTONES } from '@/data/achievementsData'

export function MoreMilestonesSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="relative w-full py-8 md:py-12 bg-[#FAFBFD] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Toggle Bar / Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-2 mb-1.5">
              <span className="w-4 h-[2px] bg-[#D41472]" />
              <span className="text-[10px] font-black tracking-[0.24em] text-[#D41472] uppercase font-sans">
                HISTORICAL TIMELINE
              </span>
            </div>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#062A4A] tracking-tight">
              More Milestones & Institutional Growth
            </h3>
            <p className="text-slate-500 font-sans text-xs sm:text-sm mt-1">
              Explore the key benchmarks that shaped Srikara Hospitals into South India's premier orthopedic network.
            </p>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white hover:bg-[#062A4A] text-[#062A4A] hover:text-white border border-slate-200 shadow-sm transition-all duration-300 font-sans text-xs font-bold uppercase tracking-wider group flex-shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D41472] group-hover:text-[#19BFD3] transition-colors" />
            <span>{isOpen ? 'Collapse Milestones' : 'View Milestones Timeline'}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {/* Expandable Grid */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden pt-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {MORE_MILESTONES.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ y: -5 }}
                    className="group rounded-2xl bg-white p-5 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_30px_rgba(6,42,74,0.08)] hover:border-[#D41472]/30 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Year & Category Pill */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono font-black text-xs px-2.5 py-1 rounded-full bg-[#062A4A]/5 text-[#062A4A]">
                          {item.year}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#D41472]">
                          {item.category}
                        </span>
                      </div>

                      {/* Number Callout */}
                      <p className="font-serif font-black text-2xl text-[#062A4A] mb-1.5 group-hover:text-[#D41472] transition-colors">
                        {item.number}
                      </p>

                      {/* Title */}
                      <h4 className="font-serif font-bold text-sm text-slate-800 mb-2">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-slate-600 font-sans text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-3 mt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      <span>Srikara Archives</span>
                      <span className="text-[#19BFD3]">Verified</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
