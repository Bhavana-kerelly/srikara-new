import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Compass, Shield, ArrowUpRight } from 'lucide-react'

export function FutureRecognition() {
  const PLACEHOLDERS = [
    {
      badge: 'IN PROGRESS',
      title: 'NEXT MILESTONE',
      desc: 'Advancing tertiary subspecialty robotic registrations and clinical outcome studies currently under review.',
      tag: 'Clinical Innovations',
    },
    {
      badge: 'EVALUATION PHASE',
      title: 'NEW RECOGNITION',
      desc: 'National and international quality benchmark audits evaluating regional patient safety and infection metrics.',
      tag: 'Healthcare Governance',
    },
    {
      badge: 'FUTURE EXPANSION',
      title: 'COMING AHEAD',
      desc: 'New multi-city surgical milestones, fellowship accreditations, and super-specialty research papers.',
      tag: 'Academic & Clinical Stature',
    },
  ]

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#FAFBFD] text-[#062A4A] overflow-hidden select-text border-t border-slate-100">
      {/* ── Background Subtle Glow ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#19BFD3]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        
        {/* ── Section Eyebrow & Editorial Heading ── */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062A4A]/[0.04] border border-[#062A4A]/10 mb-4">
            <Compass className="w-3.5 h-3.5 text-[#D41472]" />
            <span className="text-[11px] font-black tracking-[0.25em] text-[#062A4A] uppercase font-sans">
              AN EVOLVING INSTITUTIONAL ARCHIVE
            </span>
          </div>

          <h2
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#062A4A] tracking-tight leading-[1.1] mb-5"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The Journey <br />
            <span className="italic text-[#D41472] font-normal">Continues.</span>
          </h2>

          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            “Every milestone is part of a larger journey. As Srikara Hospitals continues to advance healthcare, this space will grow with every new recognition.”
          </p>
        </div>

        {/* ── 3 Subtle Outlined Intentional Placeholders ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PLACEHOLDERS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-[28px] p-8 sm:p-9 border-2 border-dashed border-slate-300 hover:border-[#D41472]/60 bg-white/50 hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#D41472] px-2.5 py-1 rounded-full bg-[#D41472]/[0.08]">
                    {item.badge}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-[#19BFD3] transition-colors" />
                </div>

                <h3
                  className="font-serif text-xl sm:text-2xl font-bold text-[#062A4A] tracking-tight mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-slate-400 uppercase tracking-widest text-[10px]">
                  {item.tag}
                </span>
                <span className="text-slate-400 font-mono text-[11px]">
                  0{idx + 7} / Registry
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
