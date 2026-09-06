import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Cpu, Activity, ShieldCheck, Heart, Sparkles } from 'lucide-react'
import { CountUp } from '@/components/achievements/CountUp'
import { FEATURED_MILESTONE_DATA } from '@/data/awardsData'

export function MilestonesSection() {
  const {
    eyebrow,
    mainHeading,
    highlightHeading,
    supportingText,
    featuredNumber,
    rawNumber,
    featuredLabel,
    featuredTitle,
    featuredDescription,
    supportingLabels,
  } = FEATURED_MILESTONE_DATA

  const scrollToTimeline = () => {
    const el = document.getElementById('milestone-timeline')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const ICONS = [Cpu, Activity, ShieldCheck, Heart]

  return (
    <section id="milestones-foundation" className="relative w-full py-20 sm:py-28 bg-white text-[#073B68] overflow-hidden select-text border-t border-slate-100">
      {/* ── Background Subtle Aesthetics ── */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#5CCFE8]/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-[#E91E83]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* ── Two-Column Editorial Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ════ LEFT COLUMN: Narrative & Action ════ */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Section Eyebrow: KEY MILESTONES — */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#E91E83] uppercase font-sans">
                {eyebrow}
              </span>
              <span className="w-8 h-[1.5px] bg-[#E91E83]" />
            </div>

            {/* Heading with Pink Highlight */}
            <h2
              className="font-serif text-3xl sm:text-5xl lg:text-5xl font-bold text-[#073B68] tracking-tight leading-[1.12] mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {mainHeading} <br />
              <span className="text-[#E91E83] italic font-serif font-normal">{highlightHeading}</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-md">
              {supportingText}
            </p>

            {/* Outlined Pill Button: OUR JOURNEY → in Srikara Pink */}
            <div>
              <button
                type="button"
                onClick={scrollToTimeline}
                className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#E91E83]/60 hover:border-[#E91E83] hover:bg-[#E91E83]/5 text-[#E91E83] text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-xs"
              >
                <span>OUR JOURNEY</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* ════ RIGHT COLUMN: Large Featured Milestone (27,000+) & Exact 3D Knee Visual ════ */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[32px] bg-[#F7FBFD] border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-[0_15px_45px_rgba(7,59,104,0.04)] overflow-hidden">
              
              {/* Subtle Ambient Glow inside Card */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#5CCFE8]/15 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Milestone Details & 4 Badges */}
                <div className="md:col-span-7 lg:col-span-8">
                  {/* Small Label */}
                  <span className="text-[11px] font-bold tracking-wider text-[#073B68] block mb-1">
                    {featuredLabel}
                  </span>

                  {/* Oversized Editorial Number "27,000+" */}
                  <div
                    className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-[#073B68] tracking-tight leading-none mb-3"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    <CountUp end={rawNumber} suffix="+" duration={2.0} />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-serif text-lg sm:text-xl font-bold text-[#073B68] tracking-tight mb-3"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {featuredTitle}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-6">
                    {featuredDescription}
                  </p>

                  {/* 4 Supporting Badges with Pink Outlined Icons */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-slate-200/80">
                    {supportingLabels.map((label, idx) => {
                      const Icon = ICONS[idx % ICONS.length]
                      return (
                        <div key={label} className="flex flex-col items-start gap-1.5">
                          <div className="w-7 h-7 rounded-lg bg-pink-50/70 border border-[#E91E83]/20 flex items-center justify-center shrink-0">
                            <Icon className="w-3.5 h-3.5 text-[#E91E83]" />
                          </div>
                          <span className="text-[9px] font-bold text-[#073B68] tracking-wider leading-tight">
                            {label}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Exact 3D Knee Joint Visual Extracted from Mockup */}
                <div className="md:col-span-5 lg:col-span-4 flex items-center justify-center">
                  <div className="relative w-full max-w-[200px] sm:max-w-[220px] rounded-2xl overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}images/awards/milestone-knee-3d.jpg`}
                      alt="Robotic Joint Replacement 3D Precision"
                      className="w-full h-auto object-contain rounded-2xl select-none"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
