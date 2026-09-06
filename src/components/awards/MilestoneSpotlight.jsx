import React from 'react'
import { motion } from 'framer-motion'
import { Activity, ShieldCheck, Cpu, Heart } from 'lucide-react'
import { CountUp } from '@/components/achievements/CountUp'
import { BEYOND_AWARDS_DATA } from '@/data/awardsData'

export function MilestoneSpotlight() {
  const { heading, number, metricTitle, bodyText, supportingLabels } = BEYOND_AWARDS_DATA

  const ICONS = [Cpu, Activity, ShieldCheck, Heart]

  return (
    <section className="relative w-full py-24 sm:py-32 bg-white text-[#062A4A] overflow-hidden select-text border-t border-slate-100">
      {/* ── Background Subtle Ambient Lighting ── */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#19BFD3]/[0.05] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#D41472]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* ── Section Eyebrow & Editorial Heading ── */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#062A4A]/[0.04] border border-[#062A4A]/10 mb-5">
            <span className="w-2 h-2 rounded-full bg-[#19BFD3] animate-pulse" />
            <span className="text-[11px] font-black tracking-[0.25em] text-[#062A4A] uppercase font-sans">
              THE CLINICAL FOUNDATION BEHIND OUR HONORS
            </span>
          </div>

          <h2
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#062A4A] tracking-tight leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Recognition is <br />
            <span className="italic text-[#D41472] font-normal">Built on Results.</span>
          </h2>
        </div>

        {/* ── Core Achievement Spotlight Card with Abstract Robotic Surgical Art ── */}
        <div className="relative rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#062A4A] via-[#041628] to-[#020B14] text-white p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_25px_70px_rgba(6,42,74,0.25)] border-2 border-white/10">
          
          {/* Abstract Orthopedic & Robotic Surgical Line-Art Geometry in Background */}
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none opacity-20 select-none overflow-hidden flex items-center justify-center">
            <svg
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[120%] h-[120%] stroke-current text-[#19BFD3]"
            >
              {/* Concentric Precision Coordinates */}
              <circle cx="300" cy="300" r="220" strokeWidth="1" strokeDasharray="6 6" />
              <circle cx="300" cy="300" r="160" strokeWidth="1.5" />
              <circle cx="300" cy="300" r="100" strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="300" cy="300" r="40" strokeWidth="2" stroke="#D41472" />

              {/* Sub-Millimeter Axis Crosshairs */}
              <line x1="80" y1="300" x2="520" y2="300" strokeWidth="1" />
              <line x1="300" y1="80" x2="300" y2="520" strokeWidth="1" />

              {/* Biomechanical Arc Contours */}
              <path d="M 180,180 Q 300,120 420,180" strokeWidth="1.5" stroke="#19BFD3" />
              <path d="M 180,420 Q 300,480 420,420" strokeWidth="1.5" stroke="#D41472" />
              <path d="M 140,240 C 220,180 380,180 460,240" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M 140,360 C 220,420 380,420 460,360" strokeWidth="1" strokeDasharray="4 4" />

              {/* Robotic Arm Ray Guides */}
              <line x1="300" y1="300" x2="480" y2="120" strokeWidth="1.5" stroke="#D41472" />
              <circle cx="480" cy="120" r="6" fill="#D41472" />
              <line x1="300" y1="300" x2="120" y2="460" strokeWidth="1.5" stroke="#19BFD3" />
              <circle cx="120" cy="460" r="6" fill="#19BFD3" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl">
            {/* Architectural Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#19BFD3] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
              <Cpu className="w-3.5 h-3.5 text-[#19BFD3]" />
              PIONEERING ROBOTIC JOINT REGISTRY
            </div>

            {/* Oversized Editorial Number with Live Count-Up */}
            <div
              className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#19BFD3] tracking-tighter leading-none mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <CountUp end={number} suffix="+" duration={2.2} />
            </div>

            {/* Metric Label */}
            <h3
              className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {metricTitle}
            </h3>

            {/* Narrative Foundation Statement */}
            <p className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed font-light mb-10 max-w-xl">
              {bodyText}
            </p>

            {/* Crucial Distinguisher Notice */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-xs text-slate-400 font-normal">
              <span className="text-[#D41472] font-black uppercase tracking-wider block mb-0.5">
                Institutional Note
              </span>
              This surgical registry volume represents verified clinical procedures performed across Srikara network hospitals, serving as the empirical foundation for our institutional honors.
            </div>
          </div>

          {/* ── 4 Supporting Clinical Labels / Pillars ── */}
          <div className="relative z-10 mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {supportingLabels.map((label, idx) => {
              const Icon = ICONS[idx % ICONS.length]
              return (
                <div key={label} className="flex flex-col gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/10 text-[#19BFD3] flex items-center justify-center border border-white/15 shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D41472]">
                    PILLAR 0{idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                    {label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
