import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function BoardMemberCard({ member, index = 0, onSelect }) {
  const isRose = member.theme === 'rose'
  const isCyan = member.theme === 'cyan'
  const isIndigo = member.theme === 'indigo'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      onClick={() => onSelect?.(member)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-[26px] bg-white p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer h-full border border-white/20"
    >
      <div>
        {/* ── Monogram Circle Avatar with Glow ── */}
        <div className="relative mb-5 flex justify-center">
          {/* Subtle colored glow behind avatar */}
          <div
            className={`absolute inset-0 m-auto w-16 h-16 rounded-full blur-md opacity-60 transition-opacity duration-300 group-hover:opacity-100 ${
              isRose
                ? 'bg-rose-400'
                : isCyan
                ? 'bg-sky-400'
                : 'bg-indigo-400'
            }`}
          />
          <div
            className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-md transition-transform duration-300 group-hover:scale-105 ${
              isRose
                ? 'bg-gradient-to-br from-[#C7256B] to-[#E11D48]'
                : isCyan
                ? 'bg-gradient-to-br from-[#0284C7] to-[#0EA5E9]'
                : 'bg-gradient-to-br from-[#6366F1] to-[#4F46E5]'
            }`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {member.initials}
          </div>
        </div>

        {/* ── Board Member Tag ── */}
        <div className="text-center sm:text-left mb-2">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
            {member.badge || 'BOARD MEMBER'}
          </span>
        </div>

        {/* ── Name & Role ── */}
        <h3 className="font-serif font-bold text-lg text-[#0A1628] leading-tight mb-1 group-hover:text-[#8B1A4A] transition-colors">
          {member.name}
        </h3>
        <p className="text-xs font-semibold text-slate-600 mb-3">
          {member.designation}
        </p>

        {/* ── Short Description ── */}
        <p className="text-slate-500 font-sans text-xs leading-relaxed mb-4">
          {member.description}
        </p>
      </div>

      {/* ── Action Arrow Button ── */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
        <div
          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isRose
              ? 'border-rose-200 text-[#C7256B] group-hover:bg-[#C7256B] group-hover:text-white'
              : isCyan
              ? 'border-sky-200 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white'
              : 'border-indigo-200 text-[#6366F1] group-hover:bg-[#6366F1] group-hover:text-white'
          }`}
        >
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  )
}

export default BoardMemberCard
