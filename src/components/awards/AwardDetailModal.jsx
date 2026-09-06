import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Award, ShieldCheck, Sparkles, Building2 } from 'lucide-react'
import { AwardVisualGraphic } from './AwardVisualGraphic'

export function AwardDetailModal({ award, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!award) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#073B68]/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Pink Accent Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#E91E83] to-[#5CCFE8]" />

            {/* Header Area */}
            <div className="relative px-6 sm:px-8 pt-7 pb-5 border-b border-slate-100 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded-full bg-[#E91E83]/10 text-[#E91E83]">
                    {award.primaryCategory || 'Awards'}
                  </span>
                  <span className="text-xs font-bold text-slate-500 font-mono">
                    {award.year}
                  </span>
                </div>

                <h2
                  className="font-serif text-2xl sm:text-3xl font-bold text-[#073B68] tracking-tight leading-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {award.title}
                </h2>

                <p className="text-sm font-semibold text-slate-500 mt-1">
                  {award.organization}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#E91E83] text-slate-500 hover:text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 sm:px-8 py-6 max-h-[65vh] overflow-y-auto space-y-6">
              {/* Award Visual Showcase with Exact Image */}
              <div className="w-full h-52 sm:h-60 rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 relative flex items-center justify-center">
                {award.image ? (
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <AwardVisualGraphic type={award.visualType || 'crystal'} year={award.year} />
                )}
                <div className="absolute bottom-3 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-white tracking-widest uppercase">
                  {award.year}
                </div>
              </div>

              {/* Recipient Details if available */}
              {award.recipient && (
                <div className="p-4 rounded-2xl bg-[#073B68]/[0.03] border border-[#073B68]/10 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#073B68] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Award className="w-5 h-5 text-[#5CCFE8]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block">
                      Recognized Recipient
                    </span>
                    <h4 className="text-sm font-bold text-[#073B68]">
                      {award.recipient}
                    </h4>
                    {award.recipientRole && (
                      <p className="text-xs text-slate-500 mt-0.5">
                        {award.recipientRole}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Full Description / Recognition Details */}
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">
                  Recognition Synopsis
                </span>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  {award.fullDescription || award.shortDescription}
                </p>
              </div>

              {/* Institutional Assurance Badge */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-[#5CCFE8] shrink-0" />
                <span>
                  Official archival record maintained by Srikara Hospitals Governance Board.
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 sm:px-8 py-4 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between">
              <span className="text-[11px] font-medium text-slate-400">
                Srikara Hospitals • Recognition Journal
              </span>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 rounded-full bg-[#073B68] hover:bg-[#E91E83] text-white text-xs font-bold transition-colors shadow-sm cursor-pointer"
              >
                Close Record
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
