import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { LeadershipCard } from './LeadershipCard'
import { assetUrl } from '@/lib/assetUrl'

const LEADERS_DATA = [
  {
    id: 'mahi-dadi',
    name: 'Dr. Mahi Dadi',
    degree: 'MBBS, MD (Medicine)',
    role: 'FOUNDER & CHAIRMAN',
    department: 'Internal Medicine',
    departmentIcon: '🩺',
    description:
      'With a vision to make quality healthcare accessible, Dr. Mahi Dadi leads our mission with compassion and purpose.',
    image: assetUrl('doctors/akhil-dadi.png'),
    theme: 'maroon',
    link: '/doctors/dr-akhil-dadi',
    fullBio: 'A visionary leader with profound clinical expertise, pioneering advanced patient-centric medical protocols and expanding accessible healthcare excellence across regions.',
  },
  {
    id: 'vikasini-patel',
    name: 'Dr. Vikasini Patel',
    degree: 'MBBS, DGO',
    role: 'MEDICAL DIRECTOR',
    department: 'Obstetrics & Gynaecology',
    departmentIcon: '🩺',
    description:
      'Known for her expertise and compassion, Dr. Vikasini Patel ensures every woman receives personalized and safe care.',
    image: assetUrl('doctors/vilasini-patel.png'),
    theme: 'blue',
    link: '/doctors/dr-vilasini-patel',
    fullBio: 'Dedicated to clinical quality, comprehensive maternal-fetal care, and hospital-wide patient safety initiatives with over 20 years of clinical leadership.',
  },
  {
    id: 'suresh-babu',
    name: 'M.V. Suresh Babu',
    degree: 'MBBS, MS (Orthopaedics)',
    role: 'ASSOCIATE DIRECTOR',
    department: 'Orthopaedics',
    departmentIcon: '🦴',
    description:
      'With a focus on mobility and better lives, Dr. Suresh Babu brings advanced orthopaedic care to every patient.',
    initials: 'MS',
    initialsSub: 'DEDICATED TO CARE',
    theme: 'rose',
    link: null,
    fullBio: 'Leading orthopedic programs and clinical operational efficiency, empowering surgical teams to deliver world-class joint restoration care.',
  },
]

export function LeadershipSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedLeader, setSelectedLeader] = useState(null)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : LEADERS_DATA.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < LEADERS_DATA.length - 1 ? prev + 1 : 0))
  }

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-28 bg-[#FAF9F7] overflow-hidden border-b border-slate-100">
      
      {/* Soft background aura */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] rounded-full bg-rose-100/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] rounded-full bg-sky-100/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ──────────────── LEFT COLUMN: Editorial & Handwritten Accent ──────────────── */}
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
                <span className="w-5 h-[2px] bg-[#8B1A4A] rounded-full" />
                <span className="text-[11px] sm:text-xs font-black tracking-[0.24em] text-[#8B1A4A] uppercase font-sans">
                  OUR LEADERSHIP
                </span>
                <span className="w-5 h-[2px] bg-[#8B1A4A] rounded-full" />
              </div>

              {/* Heading */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-[1.12] text-[#0A1628] font-bold tracking-tight mb-4">
                The Minds <br />
                Behind Our <br />
                <span
                  className="text-[#8B1A4A] italic font-serif"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Mission
                </span>
              </h2>

              {/* Description */}
              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed font-normal mb-8 max-w-sm">
                Our leadership team brings together years of experience, deep domain knowledge and a genuine commitment to people’s health and well-being.
              </p>
            </div>

            {/* Handwritten-Style Quote / Badge */}
            <div className="pt-2 mb-6 sm:mb-8">
              <div
                className="text-2xl sm:text-3xl text-[#0A1628] leading-tight select-none -rotate-2 transform"
                style={{
                  fontFamily: "'Playfair Display', 'Caveat', Georgia, cursive, serif",
                  fontStyle: 'italic',
                  fontWeight: 600,
                }}
              >
                Better Health <br />
                <span className="text-[#8B1A4A]">Brighter Future</span>
              </div>
            </div>

            {/* Navigation Arrows for Carousel */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous Leader"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-[#8B1A4A] hover:text-white hover:border-[#8B1A4A] transition-all duration-300 shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Leader"
                className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 flex items-center justify-center hover:bg-[#8B1A4A] hover:text-white hover:border-[#8B1A4A] transition-all duration-300 shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </motion.div>

          {/* ──────────────── RIGHT COLUMN: Leadership Cards ──────────────── */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
              {LEADERS_DATA.map((leader, idx) => (
                <LeadershipCard
                  key={leader.id}
                  leader={leader}
                  onSelect={(item) => setSelectedLeader(item)}
                />
              ))}
            </div>

            {/* Pagination Dots below cards */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {LEADERS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? 'w-6 bg-[#8B1A4A]'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Modal for Selected Leader / Director Bio ── */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100"
            >
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-[#8B1A4A] font-serif font-bold text-xl">
                  {selectedLeader.initials || 'MS'}
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#8B1A4A] text-white">
                    {selectedLeader.role}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#0A1628] mt-1">
                    {selectedLeader.name}
                  </h3>
                  <p className="text-xs text-slate-500">{selectedLeader.degree}</p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <p className="text-sm font-semibold text-[#8B1A4A] mb-2">
                  {selectedLeader.department}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedLeader.fullBio || selectedLeader.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedLeader(null)}
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

export default LeadershipSection
