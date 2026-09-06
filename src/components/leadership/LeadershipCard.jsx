import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'

export function LeadershipCard({ leader, onSelect }) {
  const [imgError, setImgError] = useState(false)

  const isMaroon = leader.theme === 'maroon'
  const isBlue = leader.theme === 'blue'
  const isRose = leader.theme === 'rose'

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[28px] border bg-white shadow-sm hover:shadow-xl transition-all duration-300 h-full ${
        isMaroon ? 'border-rose-100 hover:border-[#8B1A4A]/30' : 'border-slate-100 hover:border-slate-200'
      }`}
    >
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        
        {/* ── Portrait Frame with Pill Badge Overlay ── */}
        <div className="relative mb-5">
          {/* Badge at top of portrait */}
          <div className="flex justify-center mb-3">
            <span
              className={`px-3.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                isMaroon
                  ? 'bg-[#8B1A4A] text-white'
                  : isBlue
                  ? 'bg-[#0284C7] text-white'
                  : 'bg-[#C7256B] text-white'
              }`}
            >
              {leader.role}
            </span>
          </div>

          {/* Portrait Container with Pastel Tint */}
          <div
            className={`relative mx-auto overflow-hidden w-full h-56 sm:h-60 rounded-2xl flex items-end justify-center ${
              isMaroon
                ? 'bg-gradient-to-b from-rose-50 to-rose-100/60'
                : isBlue
                ? 'bg-gradient-to-b from-sky-50 to-sky-100/60'
                : 'bg-gradient-to-b from-pink-50 to-pink-100/60'
            }`}
          >
            {leader.image && !imgError ? (
              <img
                src={leader.image}
                alt={leader.name}
                onError={() => setImgError(true)}
                className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center select-none">
                <span
                  className="font-serif text-5xl font-light text-[#8B1A4A] transition-transform duration-500 group-hover:scale-110"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {leader.initials || 'MS'}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8B1A4A]/70 mt-3">
                  {leader.initialsSub || 'DEDICATED TO CARE'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ── Name & Qualifications ── */}
        <div className="flex-1 flex flex-col">
          <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0A1628] leading-tight mb-1">
            {leader.name}
          </h3>
          <p className="text-xs text-slate-500 font-medium mb-3">
            {leader.degree}
          </p>

          {/* Department / Specialization Pill */}
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold mb-3">
            <span
              className={`${
                isMaroon
                  ? 'text-[#8B1A4A]'
                  : isBlue
                  ? 'text-[#0284C7]'
                  : 'text-[#C7256B]'
              }`}
            >
              {leader.departmentIcon || '🩺'}
            </span>
            <span
              className={`${
                isMaroon
                  ? 'text-[#8B1A4A]'
                  : isBlue
                  ? 'text-[#0284C7]'
                  : 'text-[#C7256B]'
              }`}
            >
              {leader.department}
            </span>
          </div>

          {/* Bio text */}
          <p className="text-slate-600 font-sans text-xs leading-relaxed line-clamp-3 mb-5">
            {leader.description}
          </p>
        </div>

        {/* ── CTA Action Button ── */}
        <div className="pt-2">
          {leader.link ? (
            <Link
              to={leader.link}
              className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                isMaroon
                  ? 'bg-[#8B1A4A] text-white hover:bg-[#70133A] shadow-sm'
                  : isBlue
                  ? 'border border-[#0284C7]/30 text-[#0284C7] hover:bg-[#0284C7] hover:text-white'
                  : 'border border-[#C7256B]/30 text-[#C7256B] hover:bg-[#C7256B] hover:text-white'
              }`}
            >
              <span>View Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <button
              onClick={() => onSelect?.(leader)}
              className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                isMaroon
                  ? 'bg-[#8B1A4A] text-white hover:bg-[#70133A] shadow-sm'
                  : isBlue
                  ? 'border border-[#0284C7]/30 text-[#0284C7] hover:bg-[#0284C7] hover:text-white'
                  : 'border border-[#C7256B]/30 text-[#C7256B] hover:bg-[#C7256B] hover:text-white'
              }`}
            >
              <span>View Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </motion.div>
  )
}

export default LeadershipCard
