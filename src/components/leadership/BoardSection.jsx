import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { BoardMemberCard } from './BoardMemberCard'

const BOARD_MEMBERS = [
  {
    number: '01',
    name: 'Bannu Sravanthi',
    badge: 'BOARD MEMBER',
    designation: 'Director',
    description: 'Guiding with vision, building a stronger and healthier tomorrow.',
    initials: 'BS',
    theme: 'rose',
    fullBio: 'A distinguished executive providing governance, social development leadership, and long-range institutional foresight across hospital expansion programs.',
  },
  {
    number: '02',
    name: 'Suresh Dadi',
    badge: 'BOARD MEMBER',
    designation: 'Director',
    description: 'Focus on innovation, quality care and sustainable growth.',
    initials: 'SD',
    theme: 'cyan',
    fullBio: 'Directing strategic infrastructure modernization, cutting-edge healthcare technology deployment, and patient welfare systems.',
  },
  {
    number: '03',
    name: 'Suneetha Dadi',
    badge: 'BOARD MEMBER',
    designation: 'Director',
    description: 'Committed to community health and long-term impact.',
    initials: 'SD',
    theme: 'indigo',
    fullBio: 'Passionate about public health access, community outreach, and ensuring hospital initiatives translate into tangible family wellness across urban and rural centers.',
  },
]

export function BoardSection() {
  const [selectedMember, setSelectedMember] = useState(null)
  const [showBoardModal, setShowBoardModal] = useState(false)

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-28 bg-[#09162A] text-white overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-sky-900/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] rounded-full bg-rose-950/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ──────────────── LEFT: Editorial Header ──────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 flex flex-col justify-between"
          >
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-5 h-[2px] bg-[#F43F5E] rounded-full" />
                <span className="text-[11px] sm:text-xs font-black tracking-[0.24em] text-[#F43F5E] uppercase font-sans">
                  OUR VALUES
                </span>
                <span className="w-5 h-[2px] bg-[#F43F5E] rounded-full" />
              </div>

              {/* Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-white font-bold tracking-tight mb-4">
                Steering Growth <br />
                with{' '}
                <span
                  className="text-[#F43F5E] italic font-serif"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Integrity
                </span>
              </h2>

              {/* Description */}
              <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed font-normal max-w-sm mb-8">
                Our Board of Directors brings diverse perspectives, strategic guidance and a long-term vision to help Srikara Hospital grow and serve better.
              </p>

              {/* Button */}
              <div>
                <button
                  onClick={() => setShowBoardModal(true)}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/30 text-white text-xs font-bold hover:bg-white hover:text-[#09162A] transition-all duration-300 shadow-sm"
                >
                  <span>Meet Our Board</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* ──────────────── RIGHT: Three Board Member White Cards ──────────────── */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
              {BOARD_MEMBERS.map((member, idx) => (
                <BoardMemberCard
                  key={member.name}
                  member={member}
                  index={idx}
                  onSelect={(item) => setSelectedMember(item)}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Modal for Selected Member Detail / Meet Board ── */}
      <AnimatePresence>
        {(selectedMember || showBoardModal) && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100"
            >
              <button
                onClick={() => {
                  setSelectedMember(null)
                  setShowBoardModal(false)
                }}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {selectedMember ? (
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8B1A4A] to-[#C7256B] text-white flex items-center justify-center font-serif font-bold text-xl">
                      {selectedMember.initials}
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8B1A4A]">
                        {selectedMember.badge}
                      </span>
                      <h3 className="font-serif font-bold text-2xl text-[#0A1628]">
                        {selectedMember.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500">
                        {selectedMember.designation}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {selectedMember.fullBio}
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="font-serif font-bold text-2xl text-[#0A1628] mb-2">
                    Board Governance & Vision
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Guiding Srikara Hospital with accountability, ethical governance, and patient-first commitment.
                  </p>
                  <div className="space-y-3">
                    {BOARD_MEMBERS.map((m) => (
                      <div
                        key={m.name}
                        onClick={() => setSelectedMember(m)}
                        className="p-3 rounded-xl border border-slate-100 hover:border-rose-200 hover:bg-rose-50/50 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <p className="text-sm font-bold text-slate-900">{m.name}</p>
                          <p className="text-xs text-slate-500">{m.designation}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedMember(null)
                    setShowBoardModal(false)
                  }}
                  className="px-6 py-2 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  )
}

export default BoardSection
