import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { StickyNavbar } from '@/components/layout/StickyNavbar'
import { Footer } from '@/components/layout/Footer'
import { MobileBottomNav } from '@/components/layout/MobileBottomNav'
import {
  Users,
  TrendingUp,
  Heart,
  Star,
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  HeartPulse,
  Briefcase,
  User,
  ArrowRight,
  Zap,
  Clock,
  Sparkles,
  Upload,
  CheckCircle2,
  Lock,
  ChevronDown,
  Building2,
  Phone,
  Mail,
  FileText
} from 'lucide-react'

// Value cards data matching the design
const WHY_CHOOSE_ITEMS = [
  {
    title: 'Supportive Culture',
    desc: 'Work with a team that values collaboration, respect and care.',
    icon: Users,
    bg: 'bg-blue-50/80',
    iconBg: 'bg-blue-100/70',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-100/60'
  },
  {
    title: 'Career Growth',
    desc: 'Enhance your skills with continuous learning and development programs.',
    icon: TrendingUp,
    bg: 'bg-emerald-50/80',
    iconBg: 'bg-emerald-100/70',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-100/60'
  },
  {
    title: 'Meaningful Impact',
    desc: 'Be part of a hospital that puts patients first, always.',
    icon: Heart,
    bg: 'bg-rose-50/80',
    iconBg: 'bg-rose-100/70',
    iconColor: 'text-rose-600',
    borderColor: 'border-rose-100/60'
  },
  {
    title: 'Modern Facilities',
    desc: 'Work with advanced technology and world-class infrastructure.',
    icon: Star,
    bg: 'bg-purple-50/80',
    iconBg: 'bg-purple-100/70',
    iconColor: 'text-purple-600',
    borderColor: 'border-purple-100/60'
  },
  {
    title: 'Safe & Healthy Environment',
    desc: 'Your well-being, safety and mental health matter to us.',
    icon: ShieldCheck,
    bg: 'bg-teal-50/80',
    iconBg: 'bg-teal-100/70',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-100/60'
  },
  {
    title: 'Inclusive Workplace',
    desc: 'We celebrate diversity and bring out the best in everyone.',
    icon: HeartHandshake,
    bg: 'bg-amber-50/80',
    iconBg: 'bg-amber-100/70',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-100/60'
  }
]

// Opening categories matching the design
const OPENING_CATEGORIES = [
  {
    id: 'doctors',
    title: 'Doctors & Specialists',
    icon: Stethoscope,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100/80',
    positionValue: 'Doctors & Specialists'
  },
  {
    id: 'nurses',
    title: 'Nurses & Nursing Staff',
    icon: HeartPulse,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-100/80',
    positionValue: 'Nurses & Nursing Staff'
  },
  {
    id: 'clinical',
    title: 'Clinical Support Staff',
    icon: Briefcase,
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100/80',
    positionValue: 'Clinical Support Staff'
  },
  {
    id: 'admin',
    title: 'Administrative & Front Office',
    icon: User,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-100/80',
    positionValue: 'Administrative & Front Office'
  }
]

export function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resumeName: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const fileInputRef = useRef(null)
  const formRef = useRef(null)

  const handleCategoryClick = (positionValue) => {
    setFormData(prev => ({ ...prev, position: positionValue }))
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, resumeName: file.name }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#0d4e68] selection:text-white flex flex-col">
      <Helmet>
        <title>Careers at Srikara Hospital | Build a Healthier Tomorrow With Us</title>
        <meta
          name="description"
          content="Join Srikara Hospital's compassionate, skilled and purpose-driven healthcare team. Explore opportunities for doctors, nurses, clinical and administrative staff."
        />
      </Helmet>

      {/* Main Navbar */}
      <StickyNavbar />

      <main className="flex-1 pt-24 lg:pt-28 pb-16 overflow-hidden">
        {/* ═══════════════════ 1. HERO SECTION ═══════════════════ */}
        <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-16 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 xl:col-span-7 flex flex-col items-start z-10"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d4e68]/5 text-[#0d4e68] text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-5">
                Careers at Srikara Hospital
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 leading-[1.12] tracking-tight mb-6">
                Build a Healthier <br className="hidden sm:inline" />
                Tomorrow With Us
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal">
                At Srikara Hospital, we believe that great healthcare begins with great people.
                Join our team and be a part of a compassionate, skilled and purpose-driven team
                making a difference in people&apos;s lives every day.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    const openingsEl = document.getElementById('openings')
                    openingsEl?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0d4e68] hover:bg-[#093649] text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-md shadow-[#0d4e68]/20 hover:shadow-lg hover:shadow-[#0d4e68]/30 group"
                >
                  <span>Explore Opportunities</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <Link
                  to="/careers/jobs"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-slate-300 hover:border-[#0d4e68] text-slate-700 hover:text-[#0d4e68] font-semibold text-sm sm:text-base transition-all duration-300"
                >
                  <span>View All Openings</span>
                </Link>
              </div>
            </motion.div>

            {/* Right Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-6 xl:col-span-5 relative flex justify-center lg:justify-end"
            >
              {/* Organic Soft Pastel Background Blobs */}
              <div className="absolute -top-6 -right-6 w-80 h-80 bg-teal-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />
              <div className="absolute -bottom-8 -left-6 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />
              
              {/* Decorative Geometric Shapes */}
              <div className="absolute -top-4 right-10 w-28 h-28 bg-[#a7f3d0]/30 rounded-[36px] rotate-12 -z-10" />
              <div className="absolute bottom-12 -right-4 w-44 h-44 bg-[#bae6fd]/30 rounded-full -z-10" />

              {/* Doctor Image Container */}
              <div className="relative w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white">
                <img
                  src="/images/careers/career-hero-doctor.jpg"
                  alt="Doctor at Srikara Hospital"
                  className="w-full h-auto object-cover object-top aspect-[3/4]"
                />

                {/* Handwritten Floating Quote */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-white/60 transform rotate-2 pointer-events-none hidden sm:block">
                  <p className="font-serif italic text-xs font-semibold text-[#0d4e68] leading-tight">
                    Better People<br />
                    Better Care<br />
                    <span className="text-teal-700 font-bold underline decoration-teal-400 decoration-2">
                      Brighter Future
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>


        {/* ═══════════════════ 2. WHY CHOOSE SECTION ═══════════════════ */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#0d4e68] mb-2.5">
              Why Choose Srikara Hospital?
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              More Than Just a Workplace
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We provide an environment where you can grow, learn and make a real impact
              in the lives of our patients and community.
            </p>
          </div>

          {/* 6 Value Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col items-start"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.iconBg} ${item.iconColor} transition-transform duration-300 group-hover:scale-105`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0d4e68] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </section>


        {/* ═══════════════════ 3. CURRENT OPENINGS SECTION ═══════════════════ */}
        <section id="openings" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Header */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                Current Openings
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Explore exciting career opportunities across various departments at Srikara Hospital.
              </p>
              <Link
                to="/careers/jobs"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-slate-300 hover:border-[#0d4e68] text-slate-800 hover:text-[#0d4e68] font-medium text-sm transition-all duration-200 group"
              >
                <span>View All Jobs</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Right 4 Category Cards */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {OPENING_CATEGORIES.map((cat, idx) => {
                const IconComp = cat.icon
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.positionValue)}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="group bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-[#0d4e68]/30 transition-all duration-300 flex flex-col items-center text-center cursor-pointer h-full justify-center"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3.5 ${cat.iconBg} ${cat.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0d4e68] transition-colors leading-snug">
                      {cat.title}
                    </span>
                    <span className="text-[10px] text-teal-600 font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      Apply Now →
                    </span>
                  </motion.button>
                )
              })}
            </div>

          </div>
        </section>


        {/* ═══════════════════ 4. APPLICATION FORM SECTION ═══════════════════ */}
        <section ref={formRef} id="apply" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
          <div className="relative bg-[#f0f7fa] rounded-[32px] p-6 sm:p-10 lg:p-14 border border-sky-100 shadow-xl shadow-slate-200/40 overflow-hidden">
            
            {/* Soft decorative background shapes */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-teal-200/30 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Left Column: Info & Highlights */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full">
                <div>
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-[#0d4e68] mb-3">
                    Apply Now
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                    Start Your Journey <br />
                    With Srikara Hospital
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                    Fill in your details and take the first step towards a rewarding career with us.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                        <Zap className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">
                        Quick &amp; Easy Application
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">
                        We&apos;ll Get Back to You Soon
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                        <Heart className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">
                        Your Future Starts Here
                      </span>
                    </div>
                  </div>
                </div>

                {/* Script "Join Our Team" accent */}
                <div className="pt-6 border-t border-sky-200/50 mt-4">
                  <div className="inline-block transform -rotate-3">
                    <p className="font-serif italic text-2xl font-bold text-[#0d4e68] select-none">
                      Join Our Team ~
                    </p>
                    <div className="w-full h-1 bg-teal-400 rounded-full mt-0.5" />
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="lg:col-span-7 bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/80 shadow-md">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-4"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Application Submitted!
                    </h3>
                    <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                      Thank you for applying to Srikara Hospital. Our HR and talent acquisition team will review your profile and reach out shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          position: '',
                          experience: '',
                          message: '',
                          resumeName: ''
                        })
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#0d4e68] text-white font-semibold text-sm hover:bg-[#093649] transition-colors"
                    >
                      Submit Another Application
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0d4e68]/20 focus:border-[#0d4e68] transition-all bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0d4e68]/20 focus:border-[#0d4e68] transition-all bg-white"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Position */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        <input
                          required
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0d4e68]/20 focus:border-[#0d4e68] transition-all bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Position Applying For <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            required
                            value={formData.position}
                            onChange={e => setFormData({ ...formData, position: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d4e68]/20 focus:border-[#0d4e68] transition-all appearance-none bg-white pr-8"
                          >
                            <option value="">Select position</option>
                            <option value="Doctors & Specialists">Doctors &amp; Specialists</option>
                            <option value="Nurses & Nursing Staff">Nurses &amp; Nursing Staff</option>
                            <option value="Clinical Support Staff">Clinical Support Staff</option>
                            <option value="Administrative & Front Office">Administrative &amp; Front Office</option>
                            <option value="Fellowship in Arthroplasty">Fellowship in Arthroplasty</option>
                            <option value="Pharmacy & Diagnostics">Pharmacy &amp; Diagnostics</option>
                            <option value="Other">Other Department</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Experience & Resume Upload */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Experience (Years)
                        </label>
                        <div className="relative">
                          <select
                            value={formData.experience}
                            onChange={e => setFormData({ ...formData, experience: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0d4e68]/20 focus:border-[#0d4e68] transition-all appearance-none bg-white pr-8"
                          >
                            <option value="">Select experience</option>
                            <option value="Fresher / < 1 Year">Fresher / &lt; 1 Year</option>
                            <option value="1 - 3 Years">1 - 3 Years</option>
                            <option value="3 - 5 Years">3 - 5 Years</option>
                            <option value="5 - 10 Years">5 - 10 Years</option>
                            <option value="10+ Years">10+ Years</option>
                          </select>
                          <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Upload Resume <span className="text-rose-500">*</span>
                        </label>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:border-[#0d4e68] cursor-pointer transition-all text-sm group"
                        >
                          <button
                            type="button"
                            className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors"
                          >
                            Choose File
                          </button>
                          <span className="text-xs text-slate-500 truncate max-w-[140px] sm:max-w-[170px] ml-2">
                            {formData.resumeName || 'No file chosen'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Row 4: Message */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Message (Optional)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about yourself..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0d4e68]/20 focus:border-[#0d4e68] transition-all bg-white resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#0d4e68] hover:bg-[#093649] text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md shadow-[#0d4e68]/20 disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-1.5 pt-2 text-[11px] text-slate-500">
                      <Lock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Your information is safe with us.</span>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
      <MobileBottomNav />
    </div>
  )
}
