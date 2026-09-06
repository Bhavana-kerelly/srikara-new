import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { StickyNavbar } from '@/components/layout/StickyNavbar'
import { Footer } from '@/components/layout/Footer'
import { MobileBottomNav } from '@/components/layout/MobileBottomNav'
import {
  Globe,
  Plane,
  FileCheck2,
  Languages,
  Hotel,
  Stethoscope,
  PhoneCall,
  Mail,
  MessageCircle,
  ChevronRight,
  HeartHandshake,
  BadgeDollarSign,
  Car,
  Heart,
  ShieldCheck,
  FileText,
  UserCheck,
  Calendar,
  ArrowRight,
  Users,
  MessageSquare,
  Sparkles,
  Send,
  X
} from 'lucide-react'

// Support cards data matching the design mockup
const SUPPORT_SERVICES = [
  {
    id: 'visa',
    title: 'Visa & Travel Assistance',
    desc: 'We help with visa process, travel bookings and airport pickup for a hassle-free journey.',
    icon: Plane,
    iconBg: 'bg-rose-50 text-rose-500 border-rose-100',
    blob: 'bg-rose-500/10'
  },
  {
    id: 'stay',
    title: 'Premium Stay & Hospitality',
    desc: 'Comfortable and safe accommodation with dedicated patient support staff.',
    icon: Hotel,
    iconBg: 'bg-teal-50 text-teal-600 border-teal-100',
    blob: 'bg-teal-500/10'
  },
  {
    id: 'cost',
    title: 'Treatment Cost Estimates',
    desc: 'Transparent and detailed cost estimates with no hidden charges.',
    icon: Stethoscope,
    iconBg: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    blob: 'bg-indigo-500/10'
  },
  {
    id: 'interpreters',
    title: 'Language Interpreters',
    desc: 'Professional interpreters to ensure clear communication at every step.',
    icon: MessageSquare,
    iconBg: 'bg-amber-50 text-amber-600 border-amber-100',
    blob: 'bg-amber-500/10'
  },
  {
    id: 'transport',
    title: 'Transportation',
    desc: 'Airport transfers and local transport for your convenience and safety.',
    icon: Car,
    iconBg: 'bg-sky-50 text-sky-600 border-sky-100',
    blob: 'bg-sky-500/10'
  },
  {
    id: 'care-manager',
    title: 'Dedicated Care Manager',
    desc: 'A single point of contact to coordinate all your needs, before, during and after treatment.',
    icon: Heart,
    iconBg: 'bg-rose-50 text-rose-600 border-rose-100',
    blob: 'bg-rose-500/10'
  }
]

// 4-step medical journey data
const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Share Your Report',
    desc: 'Send us your medical reports for review.',
    icon: FileText,
    iconColor: 'bg-[#8B1A4A] text-white shadow-[#8B1A4A]/25'
  },
  {
    step: '02',
    title: 'Get a Treatment Plan',
    desc: 'Receive a customized plan from our experts.',
    icon: UserCheck,
    iconColor: 'bg-indigo-600 text-white shadow-indigo-600/25'
  },
  {
    step: '03',
    title: 'Plan Your Visit',
    desc: 'We assist with travel, visa and stay.',
    icon: Plane,
    iconColor: 'bg-teal-600 text-white shadow-teal-600/25'
  },
  {
    step: '04',
    title: 'Treat & Recover',
    desc: 'World-class care with post-treatment support.',
    icon: Heart,
    iconColor: 'bg-rose-500 text-white shadow-rose-500/25'
  }
]

export function InternationalPatientsPage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEnquiryModalOpen(false)
      setFormData({ name: '', email: '', phone: '', country: '', message: '' })
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-[#FFF9FA] text-slate-800 font-sans selection:bg-[#8B1A4A] selection:text-white flex flex-col">
      <Helmet>
        <title>International Connections | Srikara Hospitals</title>
        <meta
          name="description"
          content="World-class orthopedic and multi-specialty care with seamless international connections — visa assistance, interpreters, transparent packages and dedicated care managers."
        />
      </Helmet>

      {/* Main Global Navbar */}
      <StickyNavbar />

      <main className="flex-1 pt-24 lg:pt-28 pb-16 overflow-hidden">
        
        {/* ═══════════════════ 1. HERO SECTION ═══════════════════ */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 xl:col-span-7 flex flex-col items-start z-10"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-100/80 text-[#8B1A4A] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-5 shadow-sm">
                <Globe className="w-3.5 h-3.5" />
                <span>Global Network</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold leading-[1.08] tracking-tight mb-6 font-serif">
                <span className="text-slate-900 block">International</span>
                <span className="text-[#8B1A4A] block italic font-serif">Connections</span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal">
                Patients from over 30 countries choose Srikara for robotic joint replacement and advanced orthopedic care — a fraction of the cost, with world-class outcomes.
              </p>

              {/* 3 Quick Pill CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#support"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8B1A4A] hover:bg-[#6e133a] text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-md shadow-[#8B1A4A]/20 hover:shadow-lg"
                >
                  <Globe className="w-4 h-4" />
                  <span>Global Reach</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setEnquiryModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-rose-50/50 border border-rose-200/80 text-rose-700 font-semibold text-xs sm:text-sm transition-all duration-300 shadow-sm"
                >
                  <Mail className="w-4 h-4 text-rose-600" />
                  <span>Easy Visa Support</span>
                  <ArrowRight className="w-3.5 h-3.5 text-rose-500" />
                </button>

                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-emerald-50/50 border border-emerald-200/80 text-emerald-700 font-semibold text-xs sm:text-sm transition-all duration-300 shadow-sm"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Personalized Care</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-500" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column: 3D Globe with Connected Trajectories */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="lg:col-span-6 xl:col-span-5 relative flex justify-center lg:justify-end"
            >
              {/* Soft Ambient Radial Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#8B1A4A]/10 rounded-full blur-3xl pointer-events-none -z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

              {/* Floating Badge Top-Right */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 right-2 sm:right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 z-20"
              >
                <div className="w-6 h-6 rounded-full bg-rose-100 text-[#8B1A4A] flex items-center justify-center">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-bold text-slate-800 tracking-tight">
                  Trusted by Patients Worldwide
                </span>
              </motion.div>

              {/* 3D Globe Render */}
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                <motion.img
                  animate={{ y: [-6, 6, -6], rotate: [0, 1.5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  src="/images/international/globe-3d.png"
                  alt="Srikara International Global Care Network"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(139,26,74,0.12)] select-none pointer-events-none"
                />
              </div>
            </motion.div>

          </div>
        </section>


        {/* ═══════════════════ 2. OUR SUPPORT SECTION ═══════════════════ */}
        <section id="support" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
          <div className="text-left mb-12">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8B1A4A]">
                Our Support
              </span>
              <span className="w-10 h-[1.5px] bg-[#8B1A4A]/40" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 font-serif">
              Everything Handled, <br className="hidden sm:inline" />
              From Touchdown to Take-off
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Our international patient services ensure a smooth, stress-free journey — from your arrival to your recovery, we&apos;re with you at every step.
            </p>
          </div>

          {/* 6 Support Cards (2 columns x 3 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {SUPPORT_SERVICES.map((srv, idx) => {
              const IconComponent = srv.icon
              return (
                <motion.div
                  key={srv.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="group bg-white rounded-[24px] p-6 sm:p-7 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(139,26,74,0.07)] hover:border-[#8B1A4A]/20 transition-all duration-300 flex items-center justify-between gap-4"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-5">
                    {/* Icon Container */}
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${srv.iconBg} transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 group-hover:text-[#8B1A4A] transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
                        {srv.desc}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Indicator on right */}
                  <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-[#8B1A4A]/10 text-slate-400 group-hover:text-[#8B1A4A] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>


        {/* ═══════════════════ 3. HOW IT WORKS: 4 SIMPLE STEPS ═══════════════════ */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
          <div className="bg-gradient-to-b from-white to-slate-50/50 rounded-[32px] p-8 sm:p-12 border border-slate-100 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column Text */}
              <div className="lg:col-span-4 flex flex-col items-start">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#8B1A4A]">
                    How It Works
                  </span>
                  <span className="w-8 h-[1.5px] bg-[#8B1A4A]/40" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3 font-serif">
                  Your Journey in Four <br />
                  Simple Steps
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                  From consultation to recovery, we make your medical journey effortless and comfortable.
                </p>
              </div>

              {/* Right Column: 4 Step Cards */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                {JOURNEY_STEPS.map((s, idx) => {
                  const IconComp = s.icon
                  return (
                    <motion.div
                      key={s.step}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: idx * 0.08 }}
                      className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center relative group"
                    >
                      {/* Step Circle with Icon */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-md ${s.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                        <IconComp className="w-5 h-5" />
                      </div>

                      {/* Step Number Tag */}
                      <span className="text-[10px] font-black tracking-wider text-slate-400 uppercase mb-1">
                        {s.step}
                      </span>

                      {/* Step Title */}
                      <h4 className="text-sm font-bold text-slate-900 mb-1.5 leading-snug">
                        {s.title}
                      </h4>

                      {/* Step Description */}
                      <p className="text-slate-500 text-xs leading-relaxed font-normal">
                        {s.desc}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

            </div>
          </div>
        </section>


        {/* ═══════════════════ 4. BOTTOM BANNER CTA ═══════════════════ */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-8">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-[#1c2938] text-white">
            
            {/* Airport Sunset Background Image with Deep Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/international/airport-banner.jpg"
                alt="Global Travel Care"
                className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1c2938] via-[#1c2938]/90 to-[#1c2938]/60" />
            </div>

            {/* Banner Content */}
            <div className="relative z-10 p-8 sm:p-12 lg:p-14">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-white/10">
                
                {/* Left Info */}
                <div className="flex items-start gap-5 max-w-2xl">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                    <Plane className="w-6 h-6 text-rose-300" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2 font-serif tracking-tight">
                      Begin Your Treatment Journey Today
                    </h3>
                    <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-light">
                      Reach out to us for a personalized consultation and start your journey to better health, with global support.
                    </p>
                  </div>
                </div>

                {/* Right Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                  <Link
                    to="/book"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#8B1A4A] hover:bg-[#6e133a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#8B1A4A]/30 w-full sm:w-auto"
                  >
                    <span>Book a Video Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => setEnquiryModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 backdrop-blur-md w-full sm:w-auto"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </div>

              {/* Bottom Assurance Badges */}
              <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-[11px] text-white/60 font-medium">
                <div className="flex flex-wrap items-center gap-6">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-rose-400" />
                    World-Class Care
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-sky-400" />
                    Trusted Globally
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-emerald-400" />
                    Personalized Support
                  </span>
                </div>

                <div className="flex items-center gap-2 text-white/40 italic">
                  <span>Your Health. Our Global Commitment.</span>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* ═══════════════════ ENQUIRY MODAL ═══════════════════ */}
      <AnimatePresence>
        {enquiryModalOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEnquiryModalOpen(false)}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 z-10"
            >
              <button
                onClick={() => setEnquiryModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#8B1A4A] flex items-center justify-center mb-3">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif">
                  International Patient Enquiry
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-1">
                  Share your contact details. Our international coordinator will get in touch within 24 hours.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <FileCheck2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">Enquiry Received!</h4>
                  <p className="text-xs text-slate-500 mt-1">Our international desk will reach out shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A]/20 focus:border-[#8B1A4A]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A]/20 focus:border-[#8B1A4A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                      <input
                        required
                        type="tel"
                        placeholder="+1 234 567 8900"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A]/20 focus:border-[#8B1A4A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Country of Origin *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. United Kingdom, UAE, USA, Kenya"
                      value={formData.country}
                      onChange={e => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A]/20 focus:border-[#8B1A4A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Message / Condition</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about the medical treatment you are seeking..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A]/20 focus:border-[#8B1A4A] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#8B1A4A] hover:bg-[#6e133a] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md shadow-[#8B1A4A]/20"
                  >
                    <span>Submit Enquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer & Mobile Bottom Bar */}
      <Footer />
      <MobileBottomNav />
    </div>
  )
}
