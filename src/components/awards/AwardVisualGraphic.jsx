import React from 'react'
import { Award, Trophy, ShieldCheck, Sparkles, Medal, Star } from 'lucide-react'

/**
 * Clean, abstract geometric visual representing each award without cliché stock photos.
 * Uses Srikara Navy (#073B68), Pink (#E91E83), and Cyan (#5CCFE8).
 */
export function AwardVisualGraphic({ type = 'crystal', year = '2024' }) {
  return (
    <div className="relative w-full h-44 sm:h-48 rounded-2xl bg-gradient-to-br from-[#F7FBFD] via-[#EEF6FA] to-white border border-slate-100 flex items-center justify-center overflow-hidden group-hover:border-[#E91E83]/30 transition-colors duration-300">
      {/* Subtle background circular aura */}
      <div className="absolute w-32 h-32 rounded-full bg-gradient-to-tr from-[#5CCFE8]/15 via-transparent to-[#E91E83]/15 blur-xl pointer-events-none" />

      {/* Thin ambient vector grid coordinates */}
      <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 200 120" className="w-full h-full stroke-current text-[#073B68]">
          <circle cx="100" cy="60" r="45" strokeWidth="0.75" strokeDasharray="3 3" fill="none" />
          <circle cx="100" cy="60" r="28" strokeWidth="0.5" fill="none" />
          <line x1="20" y1="60" x2="180" y2="60" strokeWidth="0.5" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Watermark Year */}
      <span
        className="absolute -bottom-2 -right-1 font-serif text-5xl sm:text-6xl font-black text-[#073B68]/[0.05] select-none pointer-events-none leading-none tracking-tighter"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {year}
      </span>

      {/* Centerpiece Icon Graphic */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white shadow-[0_10px_30px_rgba(7,59,104,0.08)] border border-slate-100 flex items-center justify-center group-hover:scale-105 group-hover:shadow-[0_15px_35px_rgba(233,30,131,0.12)] transition-all duration-300">
          {/* Subtle pink accent dot */}
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#E91E83] border-2 border-white shadow-sm" />

          {type === 'crystal' && <Trophy className="w-8 h-8 text-[#073B68] group-hover:text-[#E91E83] transition-colors" />}
          {type === 'seal' && <ShieldCheck className="w-8 h-8 text-[#073B68] group-hover:text-[#5CCFE8] transition-colors" />}
          {type === 'medal' && <Medal className="w-8 h-8 text-[#073B68] group-hover:text-[#E91E83] transition-colors" />}
          {type === 'trophy' && <Award className="w-8 h-8 text-[#073B68] group-hover:text-[#5CCFE8] transition-colors" />}
          {type === 'plaque' && <Star className="w-8 h-8 text-[#073B68] group-hover:text-[#E91E83] transition-colors" />}
          {type === 'shield' && <ShieldCheck className="w-8 h-8 text-[#073B68] group-hover:text-[#5CCFE8] transition-colors" />}
        </div>

        <span className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 mt-3 font-sans">
          OFFICIAL CITATION
        </span>
      </div>
    </div>
  )
}
