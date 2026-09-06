import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronDown, Award, Plus, CheckCircle2 } from 'lucide-react'
import { AWARDS_DATA } from '@/data/awardsData'

export function AwardsArchive() {
  const [expandedId, setExpandedId] = useState(null)
  const [displayedCount, setDisplayedCount] = useState(6)
  const [isLoadedAll, setIsLoadedAll] = useState(false)

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  const handleLoadMore = () => {
    // In production, this can fetch more paginated archive entries from CMS
    setIsLoadedAll(true)
  }

  return (
    <section className="relative w-full py-24 sm:py-32 bg-white text-[#062A4A] overflow-hidden select-text border-t border-slate-100">
      {/* ── Background Aesthetics ── */}
      <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-[#19BFD3]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* ── Section Eyebrow & Editorial Heading ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062A4A]/[0.04] border border-[#062A4A]/10 mb-4">
              <Award className="w-3.5 h-3.5 text-[#D41472]" />
              <span className="text-[11px] font-black tracking-[0.25em] text-[#062A4A] uppercase font-sans">
                OFFICIAL REGISTRY
              </span>
            </div>

            <h2
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#062A4A] tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              The Recognition <br />
              <span className="italic text-[#D41472] font-normal">Archive</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              An institutional ledger of awards, medical citations, and industry rankings earned by Srikara Hospitals over the years.
            </p>
          </div>
        </div>

        {/* ── Editorial Archive Accordion List ── */}
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {AWARDS_DATA.slice(0, displayedCount).map((award, index) => {
            const isExpanded = expandedId === award.id

            return (
              <div
                key={award.id}
                className="group relative transition-all duration-300 overflow-hidden"
              >
                {/* Animated Left-to-Right Magenta Accent Trace Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D41472] to-[#19BFD3] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left pointer-events-none z-10" />

                {/* Main Interactive Row Header */}
                <button
                  type="button"
                  onClick={() => toggleExpand(award.id)}
                  className={`w-full text-left py-6 sm:py-8 px-4 sm:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 cursor-pointer transition-colors duration-200 ${
                    isExpanded ? 'bg-slate-50/80' : 'hover:bg-slate-50/50'
                  }`}
                >
                  {/* Left Metadata: Year & Title */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8 md:w-3/5">
                    <span
                      className="font-serif text-2xl sm:text-3xl font-black text-[#062A4A] group-hover:text-[#D41472] transition-colors shrink-0 w-24"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {award.year}
                    </span>

                    <div className="space-y-1">
                      <h3
                        className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#062A4A] tracking-tight leading-snug group-hover:text-[#062A4A]"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {award.title}
                      </h3>
                      <p className="text-xs text-[#D41472] font-semibold sm:hidden">
                        {award.organization}
                      </p>
                    </div>
                  </div>

                  {/* Right Metadata: Organization & Category & Expand Arrow */}
                  <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-8 md:w-2/5">
                    <span className="hidden sm:block text-xs sm:text-sm font-semibold text-slate-600 line-clamp-1">
                      {award.organization}
                    </span>

                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                      {award.category}
                    </span>

                    {/* Animated Rotating Indicator */}
                    <div
                      className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isExpanded
                          ? 'bg-[#D41472] border-[#D41472] text-white rotate-180'
                          : 'group-hover:border-[#062A4A] group-hover:bg-[#062A4A] group-hover:text-white text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expandable Deep Synopsis Area */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-slate-50/90 border-t border-slate-200/60"
                    >
                      <div className="px-6 sm:px-12 py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        <div className="md:col-span-8 space-y-3">
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#D41472] block">
                            ARCHIVAL RECORD DESCRIPTION
                          </span>
                          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                            {award.fullDescription || award.shortDescription}
                          </p>
                          {award.recipient && (
                            <p className="text-xs text-slate-500 font-medium">
                              Designated Recipient: <strong className="text-slate-800">{award.recipient}</strong> {award.recipientRole ? `(${award.recipientRole})` : ''}
                            </p>
                          )}
                        </div>

                        <div className="md:col-span-4 p-4 rounded-2xl bg-white border border-slate-200 text-xs space-y-2 shadow-sm">
                          <div className="flex justify-between text-slate-500">
                            <span className="font-semibold">Region:</span>
                            <span className="text-slate-800 font-bold">{award.region || 'National'}</span>
                          </div>
                          <div className="flex justify-between text-slate-500">
                            <span className="font-semibold">Classification:</span>
                            <span className="text-slate-800 font-bold">{award.category}</span>
                          </div>
                          <div className="flex justify-between text-slate-500">
                            <span className="font-semibold">Verification:</span>
                            <span className="text-emerald-600 font-bold">Authenticated Citation</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* ── "LOAD MORE RECOGNITIONS" Button (Prepared for future dynamic data) ── */}
        <div className="mt-12 flex flex-col items-center justify-center text-center">
          <button
            type="button"
            onClick={handleLoadMore}
            className={`group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer shadow-sm ${
              isLoadedAll
                ? 'bg-slate-100 text-slate-500 border border-slate-200 cursor-default'
                : 'bg-[#062A4A] hover:bg-[#D41472] text-white hover:shadow-xl'
            }`}
          >
            {isLoadedAll ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>ALL RECOGNITIONS DISPLAYED</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
                <span>LOAD MORE RECOGNITIONS</span>
              </>
            )}
          </button>
          
          <span className="text-[11px] text-slate-400 font-medium mt-3 block">
            Archival citations are updated on an ongoing institutional evaluation basis
          </span>
        </div>
      </div>
    </section>
  )
}
