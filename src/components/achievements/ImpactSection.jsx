import React from 'react'
import { motion } from 'framer-motion'
import { Users, ShieldCheck, HeartPulse, Globe } from 'lucide-react'
import { IMPACT_DATA } from '@/data/achievementsData'

export function ImpactSection() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'users':
        return <Users className="w-5 h-5 text-[#D41472]" />
      case 'shield-check':
        return <ShieldCheck className="w-5 h-5 text-[#19BFD3]" />
      case 'heart-pulse':
        return <HeartPulse className="w-5 h-5 text-[#D41472]" />
      default:
        return <Globe className="w-5 h-5 text-[#19BFD3]" />
    }
  }

  return (
    <section className="relative w-full py-16 md:py-24 bg-white overflow-hidden border-t border-slate-100">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#19BFD3]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D41472]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ──────────────── LEFT SIDE: Heading & Four Impact Pillars ──────────────── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-4">
              <span className="w-6 h-[2px] bg-[#D41472] rounded-full" />
              <span className="text-[11px] sm:text-xs font-black tracking-[0.28em] text-[#D41472] uppercase font-sans">
                {IMPACT_DATA.eyebrow}
              </span>
              <span className="w-6 h-[2px] bg-[#D41472] rounded-full" />
            </div>

            {/* Large Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.08] text-[#062A4A] font-bold tracking-tight mb-8">
              {IMPACT_DATA.titlePart1} <br />
              <span className="text-[#D41472] italic font-serif inline-block">
                {IMPACT_DATA.titlePart2}
              </span>
            </h2>

            {/* Four Impact Pillars in a Responsive 4-column row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 pt-2">
              {IMPACT_DATA.pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex flex-col items-center sm:items-start text-center sm:text-left group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FFF0F5] group-hover:border-[#D41472]/30 shadow-sm">
                    {getIcon(pillar.icon)}
                  </div>
                  <p className="font-serif font-bold text-sm sm:text-base text-[#062A4A] leading-tight group-hover:text-[#D41472] transition-colors">
                    {pillar.title}
                  </p>
                  <p className="font-sans text-[11px] text-slate-500 font-medium leading-tight mt-1">
                    {pillar.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ──────────────── RIGHT SIDE: Healthcare Vitality / Nature Visual ──────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[440px] aspect-[4/3] sm:aspect-[1.15/1]">
              {/* Outer decorative halo */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#19BFD3]/20 via-[#D41472]/15 to-transparent rounded-[44px] blur-xl opacity-80 pointer-events-none" />

              {/* Organic Curved Container */}
              <div
                className="relative w-full h-full overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group"
                style={{
                  borderRadius: '36px 60px 42px 54px / 48px 36px 54px 40px',
                }}
              >
                <img
                  src={IMPACT_DATA.lifestyleImage}
                  alt="Healthy Active Vitality and Recovery"
                  className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
                />

                {/* Soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#062A4A]/40 via-transparent to-transparent pointer-events-none" />

                {/* Overlay Quote / Caption */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/80 text-center">
                  <p className="text-xs font-serif font-bold text-[#062A4A]">
                    "Restoring Mobility, Rebuilding Lives"
                  </p>
                  <p className="text-[10px] font-sans text-slate-500 uppercase tracking-widest mt-0.5">
                    Our Mission in Every Procedure
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand Tagline Banner */}
        <div className="pt-12 mt-12 border-t border-slate-100 text-center">
          <p className="text-[11px] font-extrabold tracking-[0.25em] text-slate-400 uppercase">
            {IMPACT_DATA.footerTagline}
          </p>
        </div>
      </div>
    </section>
  )
}
