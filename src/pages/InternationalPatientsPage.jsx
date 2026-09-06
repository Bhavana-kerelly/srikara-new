import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Globe, Plane, FileCheck2, Languages, Hotel, Stethoscope,
  PhoneCall, Mail, MessageCircle, ArrowRight, HeartHandshake,
  BadgeDollarSign, Calendar, Heart, ShieldCheck, Sparkles,
  X, CheckCircle2, Send, UserCheck, Eye
} from 'lucide-react'
import { PageShell } from '@/components/shared/PageShell'
import {
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealFooter,
  CardCurtainRevealTitle,
  CardCurtainRevealDescription,
  CardCurtain,
} from '@/components/ui/card-curtain-reveal'

const SERVICES = [
  {
    id: 'visa',
    title: 'Visa & Travel Assistance',
    desc: "Medical visa invitation letters, FRRO registration support and airport pick-up & drop for patient's and attendants.",
    icon: Plane,
    accentColor: 'text-indigo-600',
    accentBg: 'bg-indigo-50',
    accentBorder: 'border-indigo-100',
    arrowBg: 'bg-rose-50 text-[#8B1A4A] hover:bg-[#8B1A4A] hover:text-white',
    watermarkType: 'plane',
    image: `${import.meta.env.BASE_URL}hospital-gallery/gallery-2.jpg`,
    tag: 'Airport & Travel Desk',
    details: [
      'Official Medical Visa Invitation Letter issued within 24 hours of report confirmation',
      'Assistance with Embassy documentation & priority visa endorsement',
      'Dedicated airport pick-up with ambulance or private sanitized vehicle',
      'End-to-end FRRO (Foreigners Regional Registration Office) registration and extension guidance',
      'Complimentary airport drop upon discharge and safe return'
    ]
  },
  {
    id: 'estimates',
    title: 'Treatment Cost Estimates',
    desc: 'Transparent, all-inclusive package estimates shared before you travel — no hidden costs, ever.',
    icon: BadgeDollarSign,
    accentColor: 'text-emerald-600',
    accentBg: 'bg-emerald-50',
    accentBorder: 'border-emerald-100',
    arrowBg: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white',
    watermarkType: 'clipboard',
    image: `${import.meta.env.BASE_URL}images/robotic_joint.png`,
    tag: 'Robotic Precision & Value',
    details: [
      'Comprehensive pre-travel package quotation covering surgery, surgeon fee, and implants',
      'Zero hidden charges — room tariff, nursing, meds, and physio clearly itemized',
      'Flexible international payment options (Bank Wire, USD/EUR cards, Traveler cheques)',
      'Assistance with International Health Insurance claims and cashless approvals',
      'Cost comparison report demonstrating 60-80% savings compared to Western healthcare'
    ]
  },
  {
    id: 'opinion',
    title: 'Remote Opinion Before You Fly',
    desc: 'Share your reports online and receive detailed feedback from our senior specialists.',
    icon: Stethoscope,
    accentColor: 'text-rose-600',
    accentBg: 'bg-rose-50',
    accentBorder: 'border-rose-100',
    arrowBg: 'bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white',
    watermarkType: 'opinion',
    image: `${import.meta.env.BASE_URL}hospital-gallery/gallery-4.jpg`,
    tag: 'Specialist Video Consult',
    details: [
      'Review of MRI, CT scans, and X-rays by Chief Orthopedic & Robotic Surgeons',
      'Detailed preliminary diagnosis and recommended surgical protocol within 48 hours',
      '1-on-1 scheduled Video Consultation with the treating specialist',
      'Clear estimation of total days needed for hospital stay and rehabilitation',
      'Direct WhatsApp connectivity with international clinical coordinators'
    ]
  },
  {
    id: 'interpreters',
    title: 'Language Interpreters',
    desc: 'Dedicated interpreters for Arabic, French, Swahili, Bengali and more, available throughout your stay.',
    icon: Languages,
    accentColor: 'text-amber-600',
    accentBg: 'bg-amber-50',
    accentBorder: 'border-amber-100',
    arrowBg: 'bg-amber-50 text-amber-700 hover:bg-amber-600 hover:text-white',
    watermarkType: 'translate',
    image: `${import.meta.env.BASE_URL}hospital-gallery/gallery-1.jpg`,
    tag: 'International Guest Support',
    details: [
      'Fluent native translators for Arabic, French, Swahili, Somali, Russian, and Bengali',
      'In-person translation during clinical consultations, doctor rounds, and discharge briefings',
      'Translation of medical discharge summaries and prescriptions into your preferred language',
      '24/7 telephonic on-call interpreter support for inpatient needs',
      'Cultural briefing and religious dietary coordination'
    ]
  },
  {
    id: 'accommodation',
    title: 'Accommodation & Cuisine',
    desc: 'Guest-house and hotel tie-ups near the hospital with meal options that respect your dietary preferences.',
    icon: Hotel,
    accentColor: 'text-teal-600',
    accentBg: 'bg-teal-50',
    accentBorder: 'border-teal-100',
    arrowBg: 'bg-teal-50 text-teal-700 hover:bg-teal-600 hover:text-white',
    watermarkType: 'hotel',
    image: `${import.meta.env.BASE_URL}hospital-gallery/gallery-5.jpg`,
    tag: 'Hospitality & Nutrition',
    details: [
      'Special discounted corporate tariffs at 3-star, 4-star, and luxury service apartments near the hospital',
      'Fully furnished kitchenette apartments for accompanying family members',
      'Customized meals catering to Halal, Continental, African, and vegetarian dietary requirements',
      'High-speed Wi-Fi, laundry service, and local SIM card assistance',
      'Daily dedicated shuttle transport between accommodation and the hospital'
    ]
  },
  {
    id: 'caremanager',
    title: 'Dedicated Care Manager',
    desc: 'A single point of contact who coordinates appointments, admissions, billing and follow-up care, so you feel at home.',
    icon: HeartHandshake,
    accentColor: 'text-[#8B1A4A]',
    accentBg: 'bg-pink-50',
    accentBorder: 'border-pink-100',
    arrowBg: 'bg-purple-50 text-purple-700 hover:bg-purple-600 hover:text-white',
    watermarkType: 'manager',
    image: `${import.meta.env.BASE_URL}images/spine_navigation.png`,
    tag: 'Personal Care Pathway',
    details: [
      'Personal Guest Relations Executive assigned right from your arrival at Hyderabad',
      'Priority admission desk — zero waiting time for room allocation',
      'Seamless coordination of all lab investigations, scans, and specialist consults',
      'Daily billing transparency updates and currency exchange assistance',
      'Continuous post-discharge telemedicine follow-ups once you return home'
    ]
  },
]

const STEPS = [
  {
    step: '01',
    title: 'Share Your Reports',
    desc: 'Email or WhatsApp your medical reports to our international desk.',
    icon: Mail,
  },
  {
    step: '02',
    title: 'Get a Treatment Plan',
    desc: 'Receive a specialist opinion, cost estimate and visa invitation letter.',
    icon: Calendar,
  },
  {
    step: '03',
    title: 'Fly to Hyderabad',
    desc: 'We receive you at the airport and manage your admission and logistics.',
    icon: Plane,
  },
  {
    step: '04',
    title: 'Treat & Recover',
    desc: 'World-class surgery, rehabilitation and follow-up that continues back home.',
    icon: Heart,
  },
]

export function InternationalPatientsPage() {
  const [selectedService, setSelectedService] = useState(null)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [inquirySent, setInquirySent] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', country: '', condition: '' })

  const handleSubmitInquiry = (e) => {
    e.preventDefault()
    setInquirySent(true)
    setTimeout(() => {
      setInquirySent(false)
      setContactModalOpen(false)
      setFormData({ name: '', email: '', phone: '', country: '', condition: '' })
    }, 2500)
  }

  return (
    <PageShell
      seoTitle="International Connections | Srikara Hospitals"
      seoDescription="World-class orthopedic and multi-specialty care for international connections — visa assistance, interpreters, transparent packages and dedicated care manager."
      wide={true}
    >
      {/* ─────────────────────────────────────────────────────────
          HERO SECTION (Spacious & Prominent Layout)
          ───────────────────────────────────────────────────────── */}
      <section className="relative -mt-16 md:-mt-20 pt-10 md:pt-16 pb-28 md:pb-36 overflow-hidden">
        
        {/* Subtle background ambient warmth */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-rose-100/35 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-pink-100/25 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Hero Two-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            
            {/* Left Column: Headings, Copy, Action Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Sub-tagline */}
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="text-xs md:text-[13px] font-bold uppercase tracking-[0.28em] text-[#8B1A4A]">
                  WORLD-CLASS CARE, CLOSER TO YOU
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-[#1A202C] leading-[1.12] mb-7 tracking-tight">
                International Connections<br />
                Welcome to <span className="text-[#8B1A4A]">Srikara Hospital</span>
              </h1>

              {/* Paragraph */}
              <p className="text-[#4A5568] text-base md:text-lg leading-relaxed font-light max-w-2xl mb-12">
                Patients from over 20 countries choose Srikara for robotic joint replacement and advanced surgical care — at a fraction of western costs, with zero compromise on outcomes.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                
                {/* 1. Phone Pill (Solid Brand Burgundy) */}
                <a
                  href="tel:+914068328888"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-[#8B1A4A] text-white font-semibold text-sm md:text-[15px] hover:bg-[#6e133a] transition-all shadow-md shadow-[#8B1A4A]/25 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                >
                  <PhoneCall className="w-4 h-4 text-white flex-shrink-0" />
                  <span className="tracking-wide font-bold">+91 40 6832 8888</span>
                </a>

                {/* 2. Email Us Pill (Frosted White Card) */}
                <a
                  href="mailto:info@srikara.com?subject=International%20Patient%20Inquiry"
                  className="inline-flex items-center gap-3.5 px-6 py-3 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 hover:border-[#8B1A4A]/40 text-[#1A202C] hover:bg-white transition-all shadow-sm hover:shadow-md hover:scale-[1.02] group"
                >
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-[#8B1A4A] group-hover:bg-[#8B1A4A] group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[13px] font-bold leading-tight">Email Us</span>
                    <span className="text-[11px] text-gray-500 font-medium leading-tight">info@srikara.com</span>
                  </div>
                </a>

                {/* 3. WhatsApp Support Pill (Frosted Card with Emerald Accent) */}
                <a
                  href="https://wa.me/914068328888?text=Hello%20Srikara%20International%20Desk,%20I%20would%20like%20to%20inquire%20about%20medical%20treatment."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3.5 px-6 py-3 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/80 hover:border-emerald-400 text-[#1A202C] hover:bg-white transition-all shadow-sm hover:shadow-md hover:scale-[1.02] group"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[13px] font-bold leading-tight">WhatsApp Support</span>
                    <span className="text-[11px] text-gray-500 font-medium leading-tight">Chat with our team</span>
                  </div>
                </a>

              </div>
            </motion.div>

            {/* Right Column: Doctor Portrait + Translucent Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="lg:col-span-5 relative flex justify-center items-center"
            >
              {/* Globe Graphic & Flight Trajectory Background Layer */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
                {/* Translucent Globe Vector */}
                <svg className="w-[420px] h-[420px] sm:w-[490px] sm:h-[490px] text-slate-300/40 opacity-70" viewBox="0 0 200 200" fill="currentColor">
                  {/* Continents silhouette stylized */}
                  <circle cx="100" cy="100" r="90" fill="#F0F4F8" fillOpacity="0.4" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3"/>
                  <ellipse cx="100" cy="100" rx="90" ry="35" fill="none" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="4 4"/>
                  <ellipse cx="100" cy="100" rx="35" ry="90" fill="none" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="4 4"/>
                  <path d="M 45,75 Q 65,40 100,45 Q 135,50 145,85 Q 160,110 135,135 Q 105,150 70,135 Q 35,110 45,75 Z" fill="#E2E8F0" fillOpacity="0.6"/>
                  <path d="M 85,90 Q 115,75 130,95 Q 140,115 115,125 Q 90,120 85,90 Z" fill="#CBD5E1" fillOpacity="0.7"/>
                </svg>

                {/* Dotted Flight Arc with Airplane */}
                <svg className="absolute w-[460px] h-[310px] -top-8 -right-6 overflow-visible" viewBox="0 0 300 200" fill="none">
                  <path
                    d="M 20 180 Q 140 20 280 40"
                    stroke="#8B1A4A"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    strokeOpacity="0.6"
                  />
                  {/* Small Airplane Icon flying along path */}
                  <g transform="translate(275, 38) rotate(15)">
                    <path
                      d="M0 0 L14 4 L6 6 L4 14 L0 0 Z"
                      fill="#8B1A4A"
                    />
                  </g>
                </svg>
              </div>

              {/* Doctor Profile Image Container */}
              <div className="relative z-10 w-[320px] sm:w-[400px] md:w-[450px] lg:w-[470px] aspect-square rounded-[40px] overflow-hidden shadow-2xl shadow-rose-950/12 border-4 border-white bg-white">
                <img
                  src={`${import.meta.env.BASE_URL}images/international-doctor.png`}
                  alt="Srikara Hospitals International Doctor Profile"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}images/international-doctor.jpg`
                  }}
                />
              </div>

            </motion.div>

          </div>
        </div>

        {/* Organic Bottom Wave Divider */}
        <div className="w-full overflow-hidden leading-none mt-16 md:mt-20 -mb-28 md:-mb-36 pointer-events-none">
          <svg className="relative block w-full h-14 md:h-20 text-[#FFF9FA]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,90 350,-40 500,60 C650,140 900,10 1200,40 L1200,120 L0,120 Z" fill="currentColor"></path>
          </svg>
        </div>

      </section>


      {/* ─────────────────────────────────────────────────────────
          SECTION 1: "Everything Handled, From Touchdown to Take-off"
          (6 Glass Cards Grid with Faint Topic Watermarks)
          ───────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8B1A4A]">
              — WHY CHOOSE SRIKARA —
            </span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A202C] mb-4">
            Everything Handled, From Touchdown to Take-off
          </h2>
          <p className="text-[#5A6270] text-sm md:text-base font-light leading-relaxed">
            Our international patient services desk manages every non-clinical detail so you can focus on getting better.
          </p>
        </div>

        {/* 6 Glass Cards Grid with Curtain Reveal Effect on Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="h-full"
            >
              <CardCurtainReveal className="min-h-[360px] h-full rounded-[28px] border border-rose-100/70 bg-white/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(139,26,74,0.12)] hover:border-[#8B1A4A]/30 transition-all duration-300">
                
                {/* Default Visible Card Body */}
                <CardCurtainRevealBody className="p-7 md:p-8 flex flex-col justify-between h-full z-10">
                  
                  {/* Watermark Illustration in Top-Right Background */}
                  <div className="absolute -top-4 -right-4 w-32 h-32 opacity-[0.07] transition-all duration-500 pointer-events-none text-[#8B1A4A]">
                    {service.watermarkType === 'plane' && <Plane className="w-full h-full stroke-[1.2]" />}
                    {service.watermarkType === 'clipboard' && <FileCheck2 className="w-full h-full stroke-[1.2]" />}
                    {service.watermarkType === 'opinion' && <Stethoscope className="w-full h-full stroke-[1.2]" />}
                    {service.watermarkType === 'translate' && <Languages className="w-full h-full stroke-[1.2]" />}
                    {service.watermarkType === 'hotel' && <Hotel className="w-full h-full stroke-[1.2]" />}
                    {service.watermarkType === 'manager' && <UserCheck className="w-full h-full stroke-[1.2]" />}
                  </div>

                  <div>
                    {/* Top-Left Colored Icon Container */}
                    <div className={`w-12 h-12 rounded-2xl ${service.accentBg} ${service.accentBorder} border flex items-center justify-center mb-6 shadow-sm`}>
                      <service.icon className={`w-5 h-5 ${service.accentColor}`} />
                    </div>

                    {/* Card Title */}
                    <CardCurtainRevealTitle className="font-['Cormorant_Garamond',serif] text-xl md:text-2xl font-bold text-[#1A202C] mb-3">
                      {service.title}
                    </CardCurtainRevealTitle>

                    {/* Card Description */}
                    <CardCurtainRevealDescription className="text-[#5A6270] text-[13.5px] leading-relaxed font-light mb-8">
                      <p>{service.desc}</p>
                    </CardCurtainRevealDescription>
                  </div>

                  {/* Card Footer: "Learn more" + Arrow Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100/80 mt-auto">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-xs font-bold text-[#8B1A4A] hover:text-[#5E0F30] transition-colors flex items-center gap-1 hover:underline cursor-pointer"
                    >
                      Learn more
                    </button>
                    <button
                      onClick={() => setSelectedService(service)}
                      aria-label={`Learn more about ${service.title}`}
                      className={`w-8 h-8 rounded-full ${service.arrowBg} flex items-center justify-center transition-all duration-300 shadow-sm cursor-pointer`}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </CardCurtainRevealBody>

                {/* Curtain Reveal Layer with Real Hospital Photo */}
                <CardCurtainRevealFooter className="w-full h-full">
                  <div className="relative w-full h-full">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `${import.meta.env.BASE_URL}hospital-gallery/gallery-1.jpg`
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/40" />
                    <div className="absolute inset-0 p-7 flex flex-col justify-end text-white z-20">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-rose-300 mb-1.5 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-rose-300" /> {service.tag}
                      </span>
                      <h4 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-white mb-2 leading-tight">
                        {service.title}
                      </h4>
                      <p className="text-xs text-white/80 line-clamp-2 mb-5 font-light leading-relaxed">
                        {service.desc}
                      </p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setSelectedService(service)}
                          className="px-4 py-2 rounded-full bg-[#8B1A4A] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-white hover:text-[#8B1A4A] transition-all flex items-center gap-1.5 shadow-lg"
                        >
                          <Eye className="w-3.5 h-3.5" /> Full Details
                        </button>
                        <button
                          onClick={() => {
                            setSelectedService(null)
                            setContactModalOpen(true)
                          }}
                          className="px-4 py-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#8B1A4A] text-[11px] font-bold uppercase tracking-wider transition-all backdrop-blur-md"
                        >
                          Inquire Now
                        </button>
                      </div>
                    </div>
                  </div>
                </CardCurtainRevealFooter>

              </CardCurtainReveal>
            </motion.div>
          ))}
        </div>

      </section>


      {/* ─────────────────────────────────────────────────────────
          SECTION 2: "Your Journey in Four Simple Steps"
          (Connected 4-Step Flow Cards)
          ───────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8B1A4A]">
              — YOUR JOURNEY —
            </span>
          </div>
          <h2 className="font-['Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A202C] mb-4">
            <span className="text-[#8B1A4A]">Your Journey</span> in Four Simple Steps
          </h2>
          <p className="text-[#5A6270] text-sm md:text-base font-light leading-relaxed">
            From your first email to your follow-up consult back home — a clear, guided path.
          </p>
        </div>

        {/* 4 Connected Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Subtle Horizontal Connecting Track for Large Screens */}
          <div className="hidden lg:block absolute top-[42px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-rose-200/80 -z-0" />

          {STEPS.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/85 backdrop-blur-xl border border-rose-100/80 rounded-[24px] p-6 md:p-7 flex flex-col justify-between shadow-[0_8px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_35px_rgba(139,26,74,0.07)] hover:border-[#8B1A4A]/25 transition-all duration-300 relative z-10"
            >
              {/* Card Top Row: Step Badge + Accent Icon */}
              <div className="flex items-center justify-between mb-5">
                {/* Number Badge (Solid Burgundy Circle) */}
                <div className="w-9 h-9 rounded-full bg-[#8B1A4A] text-white font-black text-xs flex items-center justify-center shadow-md shadow-[#8B1A4A]/25">
                  {s.step}
                </div>
                {/* Step Icon in soft box */}
                <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-100/80 flex items-center justify-center text-[#8B1A4A]">
                  <s.icon className="w-4 h-4" />
                </div>
              </div>

              {/* Step Title */}
              <h3 className="font-['Cormorant_Garamond',serif] text-lg md:text-xl font-bold text-[#1A202C] mb-2.5">
                {s.title}
              </h3>

              {/* Step Description */}
              <p className="text-[#5A6270] text-[13px] font-light leading-relaxed mb-6">
                {s.desc}
              </p>

              {/* Bottom Right Arrow Pill */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setContactModalOpen(true)}
                  aria-label={`Get started with step ${s.step}`}
                  className="w-7 h-7 rounded-full bg-rose-50 text-[#8B1A4A] hover:bg-[#8B1A4A] hover:text-white flex items-center justify-center transition-colors shadow-sm"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}

        </div>

      </section>


      {/* ─────────────────────────────────────────────────────────
          SECTION 3: Bottom Stats Strip & Calligraphy
          (4 Key Stats + Calligraphy Text)
          ───────────────────────────────────────────────────────── */}
      <section className="relative z-10 py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/90 backdrop-blur-xl border border-rose-100/90 rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-[0_15px_35px_rgba(139,26,74,0.06)] flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* 4 Key Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 flex-1 w-full text-center lg:text-left">
            
            {/* Stat 1: 20+ Countries Served */}
            <div className="flex flex-col items-center lg:items-start px-2">
              <div className="w-8 h-8 rounded-full bg-rose-50 text-[#8B1A4A] flex items-center justify-center mb-2">
                <Globe className="w-4 h-4" />
              </div>
              <span className="text-xl sm:text-2xl font-black text-[#8B1A4A] leading-tight font-['Manrope']">
                20+
              </span>
              <span className="text-[11px] text-[#5A6270] font-medium uppercase tracking-wider mt-0.5">
                Countries Served
              </span>
            </div>

            {/* Stat 2: Advanced Robotic Surgery */}
            <div className="flex flex-col items-center lg:items-start px-2 border-l border-slate-100">
              <div className="w-8 h-8 rounded-full bg-rose-50 text-[#8B1A4A] flex items-center justify-center mb-2">
                <Heart className="w-4 h-4" />
              </div>
              <span className="text-sm sm:text-base font-bold text-[#1A202C] leading-tight">
                Advanced
              </span>
              <span className="text-[11px] text-[#5A6270] font-medium uppercase tracking-wider mt-0.5">
                Robotic Surgery
              </span>
            </div>

            {/* Stat 3: Trusted by Thousands */}
            <div className="flex flex-col items-center lg:items-start px-2 border-l border-slate-100">
              <div className="w-8 h-8 rounded-full bg-rose-50 text-[#8B1A4A] flex items-center justify-center mb-2">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-sm sm:text-base font-bold text-[#1A202C] leading-tight">
                Trusted
              </span>
              <span className="text-[11px] text-[#5A6270] font-medium uppercase tracking-wider mt-0.5">
                by Thousands
              </span>
            </div>

            {/* Stat 4: Affordable World-Class Care */}
            <div className="flex flex-col items-center lg:items-start px-2 border-l border-slate-100">
              <div className="w-8 h-8 rounded-full bg-rose-50 text-[#8B1A4A] flex items-center justify-center mb-2">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-sm sm:text-base font-bold text-[#1A202C] leading-tight">
                Affordable
              </span>
              <span className="text-[11px] text-[#5A6270] font-medium uppercase tracking-wider mt-0.5">
                World-Class Care
              </span>
            </div>

          </div>

          {/* Right: Handwritten Script Calligraphy */}
          <div className="text-center lg:text-right flex-shrink-0 px-4">
            <span className="font-['Caveat',cursive] text-[#8B1A4A] text-2xl sm:text-3xl font-bold leading-tight block rotate-[-3deg]">
              Your Health<br />
              Our Global<br />
              <span className="text-[#A02057]">Priority</span>
            </span>
          </div>

        </motion.div>
      </section>


      {/* ─────────────────────────────────────────────────────────
          INTERACTIVE MODAL: Service Details Breakdown
          ───────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-[32px] p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-rose-100 relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Service Header */}
              <div className="flex items-center gap-3.5 mb-5">
                <div className={`w-12 h-12 rounded-2xl ${selectedService.accentBg} ${selectedService.accentBorder} border flex items-center justify-center`}>
                  <selectedService.icon className={`w-6 h-6 ${selectedService.accentColor}`} />
                </div>
                <div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#1A202C]">
                    {selectedService.title}
                  </h3>
                  <span className="text-xs text-[#8B1A4A] font-semibold uppercase tracking-wider">
                    Srikara International Desk
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#4A5568] leading-relaxed mb-6 font-light">
                {selectedService.desc}
              </p>

              {/* Bullet Details */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Included Services & Highlights</h4>
                {selectedService.details?.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#8B1A4A] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    setSelectedService(null)
                    setContactModalOpen(true)
                  }}
                  className="flex-1 py-3 px-5 rounded-full bg-[#8B1A4A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#6e133a] transition-all text-center flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" /> Inquire About This
                </button>
                <a
                  href="https://wa.me/914068328888"
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-600 hover:text-white text-xs font-bold uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Desk
                </a>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ─────────────────────────────────────────────────────────
          INTERACTIVE MODAL: Direct Medical Inquiry Form
          ───────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {contactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-[32px] p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-rose-100 relative"
            >
              <button
                onClick={() => setContactModalOpen(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {inquirySent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-[#1A202C] mb-2">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-slate-600 max-w-xs mx-auto">
                    Our international patient coordinator will contact you via WhatsApp and Email within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#8B1A4A]">Fast Response Within 24h</span>
                    <h3 className="font-['Cormorant_Garamond',serif] text-2xl md:text-3xl font-bold text-[#1A202C] mt-1">
                      Connect with International Desk
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Share your details to receive an initial surgical opinion and comprehensive cost estimate.
                    </p>
                  </div>

                  <form onSubmit={handleSubmitInquiry} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Patient Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Johnathan Smith"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#8B1A4A]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#8B1A4A]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 / +966 / +44 ..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#8B1A4A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Country of Residence *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. Kenya, Oman, UAE, USA, Bangladesh"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#8B1A4A]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Medical Condition / Treatment Needed
                      </label>
                      <textarea
                        rows="3"
                        value={formData.condition}
                        onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                        placeholder="Briefly describe your symptoms, knee/hip joint pain, or upload scan details..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#8B1A4A] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-full bg-[#8B1A4A] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#6e133a] transition-all shadow-md shadow-[#8B1A4A]/20 mt-2"
                    >
                      Submit International Inquiry
                    </button>
                  </form>
                </>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </PageShell>
  )
}
