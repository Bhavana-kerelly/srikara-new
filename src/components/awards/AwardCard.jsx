import React from 'react'
import { ArrowRight } from 'lucide-react'

export function AwardCard({ award, onSelect }) {
  return (
    <div
      onClick={() => onSelect(award)}
      className="group relative flex flex-col justify-between w-[280px] sm:w-[310px] lg:w-[320px] shrink-0 rounded-2xl p-4 sm:p-5 bg-white border border-slate-200/90 hover:border-[#E91E83]/40 shadow-[0_8px_25px_rgba(7,59,104,0.05)] hover:shadow-[0_16px_40px_rgba(7,59,104,0.1)] transition-all duration-300 hover:-translate-y-1 cursor-pointer select-text"
    >
      <div>
        {/* Exact Cropped Visual Image from Mockup */}
        <div className="w-full h-40 sm:h-44 rounded-xl overflow-hidden mb-4 bg-slate-50 border border-slate-100/80">
          <img
            src={award.image}
            alt={award.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Year in Bold Magenta / Pink */}
        <span className="block text-sm font-bold text-[#E91E83] font-sans tracking-wide">
          {award.year}
        </span>

        {/* Award Title in Deep Navy Serif */}
        <h3
          className="font-serif text-lg sm:text-[19px] font-bold text-[#073B68] tracking-tight leading-snug mt-1 mb-1.5 group-hover:text-[#073B68]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {award.title}
        </h3>

        {/* Organization Citation */}
        <p className="text-xs text-slate-500 font-medium mb-3">
          {award.organization}
        </p>

        {/* Short Description */}
        <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3 mb-4">
          {award.shortDescription}
        </p>
      </div>

      {/* Card Action Link: VIEW RECOGNITION in Srikara Pink */}
      <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#E91E83] group-hover:gap-2.5 transition-all">
        <span className="tracking-wider uppercase text-[11px]">VIEW RECOGNITION</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </div>
  )
}
