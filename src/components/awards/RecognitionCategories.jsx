import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Award, Sparkles } from 'lucide-react'
import { RECOGNITION_CATEGORIES, AWARDS_DATA } from '@/data/awardsData'

export function RecognitionCategories() {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#FAFBFD] text-[#062A4A] overflow-hidden select-text border-t border-slate-100">
      {/* ── Ambient Background Lighting ── */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#D41472]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* ── Section Eyebrow & Editorial Heading ── */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062A4A]/[0.04] border border-[#062A4A]/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D41472]" />
            <span className="text-[11px] font-black tracking-[0.25em] text-[#062A4A] uppercase font-sans">
              EVALUATED DOMAINS
            </span>
          </div>

          <h2
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#062A4A] tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            What We Are <br />
            <span className="italic text-[#D41472] font-normal">Recognized For</span>
          </h2>
          <p className="mt-4 text-slate-600 font-sans text-sm sm:text-base leading-relaxed max-w-xl">
            Our accolades span four core clinical pillars — reflecting consistency in surgical mastery, technology, patient safety, and institutional governance.
          </p>
        </div>

        {/* ── 4 Interactive Expandable Category Zones ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {RECOGNITION_CATEGORIES.map((cat, idx) => {
            const isHovered = activeCategory === cat.id
            const count = AWARDS_DATA.filter(
              (a) => a.categoryId === cat.id || a.category.toLowerCase().includes(cat.id)
            ).length

            return (
              <motion.div
                key={cat.id}
                onMouseEnter={() => setActiveCategory(cat.id)}
                onMouseLeave={() => setActiveCategory(null)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative rounded-[32px] p-8 sm:p-9 flex flex-col justify-between transition-all duration-500 overflow-hidden cursor-pointer border ${
                  isHovered
                    ? 'bg-white shadow-[0_25px_60px_rgba(6,42,74,0.12)] border-[#D41472]/50'
                    : 'bg-white/80 hover:bg-white border-slate-200/80 shadow-sm'
                }`}
              >
                {/* Abstract Circular Graphic Behind */}
                <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full border border-dashed border-slate-200/80 group-hover:border-[#D41472]/40 group-hover:scale-125 transition-all duration-700 pointer-events-none" />
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-[#D41472]/5 to-[#19BFD3]/5 group-hover:from-[#D41472]/15 group-hover:to-[#19BFD3]/15 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Category Number & Count */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="font-serif text-3xl sm:text-4xl font-black text-[#062A4A] group-hover:text-[#D41472] transition-colors"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {cat.number}
                    </span>

                    <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#062A4A] group-hover:text-[#19BFD3] transition-colors">
                      {count > 0 ? `${count} ${count === 1 ? 'Award' : 'Awards'}` : 'Core Domain'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-serif text-xl sm:text-2xl font-bold text-[#062A4A] tracking-tight leading-snug mb-2 group-hover:text-[#062A4A]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {cat.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#D41472] uppercase tracking-wider mb-4">
                    {cat.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-8">
                    {cat.description}
                  </p>
                </div>

                {/* Bottom Tag Strip */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {cat.tag}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#D41472] text-slate-500 group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
