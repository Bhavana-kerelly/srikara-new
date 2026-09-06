import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { AWARDS_DATA } from '@/data/awardsData'
import { AwardCard } from './AwardCard'
import { AwardFilters } from './AwardFilters'
import { AwardDetailModal } from './AwardDetailModal'

export function AwardCarousel() {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [selectedAward, setSelectedAward] = useState(null)
  const scrollContainerRef = useRef(null)

  // Filter awards based on category
  const filteredAwards = AWARDS_DATA.filter((award) => {
    if (activeCategory === 'ALL') return true
    return award.categories?.includes(activeCategory)
  })

  // Horizontal scroll controls
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="awards-collection" className="relative w-full py-20 sm:py-28 bg-[#F7FBFD] text-[#073B68] overflow-hidden select-text border-t border-slate-100">
      {/* ── Background Subtle Light Accent ── */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#5CCFE8]/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#E91E83]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* ── Editorial Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 sm:w-8 h-[1.5px] bg-[#E91E83]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#E91E83] uppercase font-sans">
                AWARDS & RECOGNITION
              </span>
              <span className="w-6 sm:w-8 h-[1.5px] bg-[#E91E83]" />
            </div>

            <h2
              className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#073B68] tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Recognition <span className="text-[#E91E83] italic font-serif font-normal">That Speaks.</span>
            </h2>

            <p className="mt-4 text-slate-600 font-sans text-sm sm:text-base leading-relaxed max-w-lg">
              Milestones, honours and recognitions earned along our journey.
            </p>
          </div>

          {/* Carousel Navigation Buttons (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 hover:border-[#E91E83] hover:text-[#E91E83] text-[#073B68] flex items-center justify-center shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
              aria-label="Previous awards"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full bg-white border border-slate-200 hover:border-[#E91E83] hover:text-[#E91E83] text-[#073B68] flex items-center justify-center shadow-sm transition-all duration-200 cursor-pointer active:scale-95"
              aria-label="Next awards"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Category Filter Pills ── */}
        <div className="mb-8 sm:mb-10">
          <AwardFilters
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* ── Horizontal Scrolling Card Collection ── */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth"
          tabIndex={0}
          role="region"
          aria-label="Awards collection carousel"
        >
          {filteredAwards.map((award) => (
            <AwardCard
              key={award.id}
              award={award}
              onSelect={(selected) => setSelectedAward(selected)}
            />
          ))}

          {filteredAwards.length === 0 && (
            <div className="w-full py-12 text-center text-slate-400 text-sm font-medium">
              No recognitions cataloged under this filter yet.
            </div>
          )}
        </div>

        {/* Swipe cue for mobile */}
        <div className="sm:hidden flex items-center justify-center gap-1.5 text-slate-400 text-[11px] font-bold tracking-wider uppercase mt-4">
          <span>Swipe horizontally to browse</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#E91E83]" />
        </div>
      </div>

      {/* ── Interactive Detail Modal ── */}
      <AwardDetailModal
        award={selectedAward}
        isOpen={Boolean(selectedAward)}
        onClose={() => setSelectedAward(null)}
      />
    </section>
  )
}
