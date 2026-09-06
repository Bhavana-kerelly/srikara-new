import React from 'react'

export function AwardsFooterClosing() {
  return (
    <section className="relative w-full py-12 sm:py-16 bg-[#F7FBFD] text-[#073B68] overflow-hidden select-text border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10 text-center">
        {/* Brand Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs mb-5">
          <span className="w-2 h-2 rounded-full bg-[#E91E83]" />
          <span className="text-[11px] font-black tracking-[0.25em] text-[#073B68] uppercase font-sans">
            SRIKARA HOSPITALS
          </span>
        </div>

        {/* Heading */}
        <h2
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#073B68] tracking-tight leading-[1.12] mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Advancing Care. <br />
          <span className="text-[#E91E83] italic font-serif font-normal">Earning Trust.</span>
        </h2>

        {/* Small Text */}
        <p className="text-slate-600 font-sans text-sm sm:text-base font-normal max-w-md mx-auto mb-6">
          “Srikara Hospitals — Healing Today. Building Tomorrow.”
        </p>

        {/* Minimal Accent Divider */}
        <div className="w-16 h-[2px] bg-gradient-to-r from-[#E91E83] to-[#5CCFE8] mx-auto rounded-full" />
      </div>
    </section>
  )
}
