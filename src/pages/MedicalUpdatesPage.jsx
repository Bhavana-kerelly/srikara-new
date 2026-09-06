import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  Activity,
  Heart,
  Calendar,
  ArrowRight,
  Send,
  CheckCircle2,
  X,
  Mail,
  Newspaper,
  Stethoscope,
  Sparkles,
  Users,
  Shield,
  Layers,
  Baby,
  Brain,
  Bone,
  Microscope,
} from 'lucide-react'
import { StickyNavbar } from '@/components/layout/StickyNavbar'
import { Footer } from '@/components/layout/Footer'
import { MobileBottomNav } from '@/components/layout/MobileBottomNav'
import { assetUrl } from '@/lib/assetUrl'
import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

const CATEGORIES = [
  { id: 'All', name: 'All', icon: Users },
  { id: 'Robotic Surgery', name: 'Robotic Surgery', icon: Activity },
  { id: 'Cardiology', name: 'Cardiology', icon: Heart },
  { id: 'Orthopedics', name: 'Orthopedics', icon: Bone },
  { id: 'Oncology', name: 'Oncology', icon: Sparkles },
  { id: 'Neurology', name: 'Neurology', icon: Brain },
  { id: 'Women & Child', name: 'Women & Child', icon: Baby },
  { id: 'General Surgery', name: 'General Surgery', icon: Shield },
  { id: 'Internal Medicine', name: 'Internal Medicine', icon: Stethoscope },
  { id: 'Preventive Care', name: 'Preventive Care', icon: Shield },
]

const DEFAULT_ARTICLES = [
  {
    id: 'robotic-era',
    title: 'A New Era of Robotic Surgery Begins',
    category: 'Robotic Surgery',
    date: 'Mar 14, 2025',
    image: assetUrl('images/medical-updates/robotic-banner.jpg'),
    description:
      'Advanced da Vinci® robotic system brings greater precision, less pain and faster recovery — now available at Srikara.',
    featured: true,
    fullContent:
      'Srikara Hospitals announces the deployment of the latest multi-arm da Vinci® surgical robotic console. Offering 3D high-definition magnification, tremor filtration, and wristed instruments that bend and rotate far beyond the human hand, our surgical teams achieve unprecedented millimeter accuracy in complex joint reconstructions, oncology resections, and urological interventions.',
    author: 'Srikara Surgical Innovations Bureau',
  },
  {
    id: 'nellore-launch',
    title: 'Srikara Hospital is coming to Nellore',
    category: 'Neurology',
    pillColor: 'bg-sky-100 text-sky-700',
    date: 'Mar 12, 2025',
    image: assetUrl('images/medical-updates/neurology.jpg'),
    description:
      'A new chapter in advanced healthcare — Srikara Hospital is set to bring world-class medical services closer to you.',
    fullContent:
      'Expanding our footprint to provide state-of-the-art super specialty clinical infrastructure, Srikara Hospitals announces its upcoming tertiary care facility in Nellore. The hospital will feature advanced neuro-navigation suites, full-spectrum robotic orthopedic surgical capabilities, and 24/7 cardiac emergency triage.',
    author: 'Hospital Expansion Cell',
  },
  {
    id: 'cardiac-protocol',
    title: 'New 2nd Cardiac Emergency Protocol Adopted',
    category: 'Cardiology',
    pillColor: 'bg-rose-100 text-rose-700',
    date: 'Mar 10, 2025',
    image: assetUrl('images/medical-updates/cardiology.jpg'),
    description:
      'Srikara introduces an advanced cardiac emergency protocol to ensure faster response and better outcomes.',
    fullContent:
      'Under the newly adopted STEMI Rapid-Response 2.0 protocol, all Srikara emergency centers have slashed door-to-balloon intervals to below 50 minutes. Leveraging real-time cloud ECG telemetry between ambulances and our catheterization labs, critical cardiac interventions begin the moment patients arrive.',
    author: 'Department of Cardiology',
  },
  {
    id: 'joint-breakthrough',
    title: 'Breakthrough in Joint Replacement Surgery',
    category: 'Orthopedics',
    pillColor: 'bg-emerald-100 text-emerald-700',
    date: 'Mar 08, 2025',
    image: assetUrl('images/medical-updates/orthopedics.jpg'),
    description:
      'Minimally invasive techniques and customized implants for a stronger, healthier tomorrow.',
    fullContent:
      'Our orthopedic research team, led by Dr. Akhil Dadi, has unveiled a new sub-vastus tissue-sparing approach coupled with bio-compatible titanium joint implants. Patients experience significantly reduced postoperative blood loss and achieve independent unassisted walking within 6 hours of surgery.',
    author: 'Institute of Orthopaedics & Joint Replacement',
  },
  {
    id: 'safe-pregnancy',
    title: 'Safe Pregnancy, Healthy Tomorrow',
    category: 'Women & Child',
    pillColor: 'bg-pink-100 text-pink-700',
    date: 'Mar 05, 2025',
    image: assetUrl('images/medical-updates/women-child.jpg'),
    description:
      'Expert care and personalized support for every stage of your pregnancy journey.',
    fullContent:
      'The Department of Obstetrics and Fetal Medicine at Srikara launches its Comprehensive Maternity Wellness Path, integrating non-invasive prenatal screening (NIPT), fetal echocardiography, dedicated lactation consulting, and Level-III neonatal intensive care backup for high-risk pregnancies.',
    author: 'Center for Women & Child Health',
  },
  {
    id: 'liver-research',
    title: 'New Research on Liver Health Published',
    category: 'Research',
    pillColor: 'bg-indigo-100 text-indigo-700',
    date: 'Mar 02, 2025',
    image: assetUrl('images/medical-updates/research.jpg'),
    description:
      'Our research team’s latest study sheds light on early detection and better management of liver conditions.',
    fullContent:
      'Published in the International Journal of Clinical Hepatology, Srikara’s clinical study on non-invasive transient elastography benchmarks key early metabolic biomarkers in non-alcoholic fatty liver disease (NAFLD), enabling timely reversal therapies before fibrotic progression.',
    author: 'Clinical Research & Publications Wing',
  },
  {
    id: 'laparoscopic-surgery',
    title: 'Advanced Laparoscopic Surgery for Faster Recovery',
    category: 'General Surgery',
    pillColor: 'bg-amber-100 text-amber-700',
    date: 'Feb 28, 2025',
    image: assetUrl('images/medical-updates/surgery.jpg'),
    description:
      'Experience less pain, shorter hospital stays and a quicker return to your daily life.',
    fullContent:
      'Featuring ultra-high-definition 4K 3D laparoscopic optical towers with indocyanine green (ICG) fluorescence imaging, Srikara’s surgical division elevates gastrointestinal, bariatric, and hernia repairs to microscopic clarity with minimal incision footprints and rapid next-day discharges.',
    author: 'Department of Minimally Invasive Surgery',
  },
]

export function MedicalUpdatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [articles, setArticles] = useState(DEFAULT_ARTICLES)
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)

  // Fetch dynamic news from Firebase if available
  useEffect(() => {
    const fetchNews = async () => {
      try {
        if (db) {
          const snap = await getDocs(collection(db, 'news'))
          if (!snap.empty) {
            const liveNews = snap.docs.map((d) => ({ id: d.id, ...d.data() }))
            const valid = liveNews.filter((n) => n.status !== 'Deleted' && (n.title || n.headline))
            if (valid.length > 0) {
              const formatted = valid.map((n, i) => ({
                id: n.id || `live-${i}`,
                title: n.title || n.headline,
                category: n.type || n.category || 'General',
                date: n.date || n.publishDate || 'Recent',
                image: n.image || assetUrl('images/medical-updates/robotic-banner.jpg'),
                description: n.desc || n.description || n.excerpt,
                fullContent: n.content || n.desc || n.description,
                author: n.author || 'Srikara Editorial Team',
                featured: i === 0,
              }))
              setArticles((prev) => {
                const nonDupes = prev.filter((p) => !formatted.some((f) => f.title === p.title))
                return [...formatted, ...nonDupes]
              })
            }
          }
        }
      } catch (err) {
        console.warn('Firestore fetch error in MedicalUpdatesPage:', err)
      }
    }
    fetchNews()
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!newsletterEmail) return
    setNewsletterSuccess(true)
    setNewsletterEmail('')
    setTimeout(() => setNewsletterSuccess(false), 4000)
  }

  // Filter logic
  const filteredArticles = articles.filter((item) => {
    if (selectedCategory === 'All') return true
    return item.category?.toLowerCase() === selectedCategory.toLowerCase()
  })

  const featuredArticle =
    articles.find((a) => a.featured) || articles[0] || DEFAULT_ARTICLES[0]

  const gridArticles =
    selectedCategory === 'All'
      ? filteredArticles.filter((a) => a.id !== featuredArticle.id)
      : filteredArticles

  return (
    <div className="w-full min-h-screen bg-white text-[#0A1628] font-sans antialiased flex flex-col justify-between overflow-x-hidden selection:bg-[#8B1A4A] selection:text-white">
      {/* ── SEO Metadata ── */}
      <Helmet>
        <title>Medical Updates & Clinical News | Srikara Hospitals</title>
        <meta
          name="description"
          content="New technology, published research, robotic surgical advancements, and clinical milestones from Srikara Hospitals."
        />
        <meta property="og:title" content="Medical Updates | Srikara Hospitals" />
        <meta
          property="og:description"
          content="Stay informed with breakthroughs in robotic surgery, cardiology, orthopedics, and healthcare innovations."
        />
      </Helmet>

      {/* ── Navigation Header ── */}
      <StickyNavbar />

      {/* ── Main Content Container ── */}
      <main className="flex-1 w-full pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* ──────────────── SECTION 1: HERO HEADER ──────────────── */}
          <div className="relative mb-12 sm:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Eyebrow, Title, Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-8 flex flex-col items-start"
              >
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50/80 border border-rose-200/70 text-[#8B1A4A] text-[11px] font-extrabold uppercase tracking-wider mb-4 shadow-sm">
                  <Activity className="w-3.5 h-3.5" />
                  <span>NEWS & UPDATES</span>
                </div>

                {/* Main Heading */}
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-bold text-[#0A1628] leading-[1.08] tracking-tight mb-4">
                  Medical{' '}
                  <span
                    className="text-[#8B1A4A] italic font-serif"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Updates
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                  New technology, published research and clinical milestones — the latest from inside Srikara’s departments.
                </p>
              </motion.div>

              {/* Right Column: Hero Doctor Photo with Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="lg:col-span-4 flex justify-center lg:justify-end relative"
              >
                <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                  {/* Soft pink circular background blob */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-200/40 via-rose-100/30 to-sky-100/30 blur-xl pointer-events-none" />

                  {/* Floating Knowledge Glass Badge */}
                  <div className="absolute -top-3 -left-12 sm:-left-16 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-rose-50 flex items-center justify-center text-[#8B1A4A]">
                      <Heart className="w-3.5 h-3.5 fill-[#8B1A4A]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-[#0A1628] leading-tight">
                        Better Knowledge
                      </p>
                      <p className="text-[9px] font-medium text-slate-500">
                        for Better Care
                      </p>
                    </div>
                  </div>

                  {/* Circular Masked Doctor Image */}
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100">
                    <img
                      src={assetUrl('images/medical-updates/hero-doctor.jpg')}
                      alt="Doctor holding medical tablet"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </motion.div>

            </div>

            {/* ── Category Filter Pills Row ── */}
            <div className="mt-10 sm:mt-12 flex flex-wrap gap-2.5 sm:gap-3">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id
                const IconComponent = cat.icon
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 shadow-sm ${
                      isSelected
                        ? 'bg-[#8B1A4A] text-white shadow-[#8B1A4A]/25 border border-[#8B1A4A]'
                        : 'bg-white border border-slate-200/90 text-slate-700 hover:border-[#8B1A4A]/40 hover:text-[#8B1A4A]'
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{cat.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* ──────────────── SECTION 2: FEATURED HERO BANNER ──────────────── */}
          {featuredArticle && selectedCategory === 'All' && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-full rounded-3xl overflow-hidden mb-14 shadow-2xl group border border-slate-800/20"
            >
              {/* Background Image Container */}
              <div className="relative w-full min-h-[360px] md:min-h-[400px] flex items-center bg-[#071324]">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Radial Gradient Overlay for crisp text legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#071324] via-[#071324]/90 to-transparent z-10" />

                {/* Content Overlay */}
                <div className="relative z-20 p-8 sm:p-12 lg:p-14 max-w-2xl text-white">
                  
                  {/* Badges Row */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-rose-500/20 border border-rose-400/40 text-rose-300">
                      FEATURED
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-sky-900/60 border border-sky-400/30 text-sky-200">
                      {featuredArticle.category}
                    </span>
                    <span className="text-xs text-slate-300/80 font-medium flex items-center gap-1 ml-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featuredArticle.date}
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-white">
                    {featuredArticle.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-7 font-normal">
                    {featuredArticle.description}
                  </p>

                  {/* Button */}
                  <button
                    onClick={() => setSelectedArticle(featuredArticle)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1A4A] text-white text-xs font-bold hover:bg-[#A31F57] shadow-lg shadow-[#8B1A4A]/40 transition-all duration-300"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                </div>

                {/* Circular Arrow Indicator Bottom Right */}
                <div
                  onClick={() => setSelectedArticle(featuredArticle)}
                  className="absolute bottom-6 right-6 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md flex items-center justify-center cursor-pointer transition-all duration-300 shadow-md"
                >
                  <ArrowRight className="w-4 h-4" />
                </div>

              </div>
            </motion.div>
          )}

          {/* ──────────────── SECTION 3: ARTICLE CARDS GRID ──────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {gridArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Meta Tags: Category + Date */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                          article.pillColor || 'bg-rose-50 text-[#8B1A4A]'
                        }`}
                      >
                        {article.category}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-[#0A1628] leading-snug mb-2 group-hover:text-[#8B1A4A] transition-colors">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer: Read More Link + Arrow Button */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B1A4A] hover:text-[#70133A] transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => setSelectedArticle(article)}
                    aria-label={`Open ${article.title}`}
                    className="w-7 h-7 rounded-full border border-slate-200 text-slate-500 group-hover:border-[#8B1A4A] group-hover:bg-[#8B1A4A] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* ──────────────── SECTION 4: STAY INFORMED NEWSLETTER BANNER ──────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7 }}
            className="relative w-full rounded-3xl bg-gradient-to-r from-[#FFF4F7] via-[#FFF0F4] to-[#FFEBF0] border border-rose-200/80 p-8 sm:p-10 lg:p-12 shadow-md overflow-hidden"
          >
            {/* Background Glows */}
            <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-pink-300/20 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left / Center Info */}
              <div className="lg:col-span-8">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#8B1A4A] mb-2">
                  <Mail className="w-3.5 h-3.5" />
                  <span>STAY INFORMED</span>
                </div>

                {/* Heading */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A1628] leading-tight mb-2">
                  Never Miss an{' '}
                  <span
                    className="text-[#8B1A4A] italic font-serif"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Update
                  </span>
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mb-6">
                  Get the latest medical news, health tips and exclusive updates from Srikara delivered to your inbox.
                </p>

                {/* Email Form */}
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-lg mb-5">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-xs bg-white rounded-full border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A]/20 focus:border-[#8B1A4A] shadow-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#8B1A4A] text-white text-xs font-bold hover:bg-[#70133A] shadow-md transition-all duration-300"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>

                {newsletterSuccess && (
                  <p className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5 mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                    Thank you! You have been subscribed to Srikara Medical Updates.
                  </p>
                )}

                {/* 3 Pills below Form */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-[11px] font-semibold text-slate-600">
                  <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1 rounded-full border border-rose-100">
                    <Newspaper className="w-3.5 h-3.5 text-[#8B1A4A]" />
                    <span>Latest News</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1 rounded-full border border-rose-100">
                    <Heart className="w-3.5 h-3.5 text-[#8B1A4A]" />
                    <span>Health Tips</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/70 px-3 py-1 rounded-full border border-rose-100">
                    <Sparkles className="w-3.5 h-3.5 text-[#8B1A4A]" />
                    <span>Expert Insights</span>
                  </div>
                </div>

              </div>

              {/* Right: 3D Cute Envelope & Love Letter Illustration */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
                  
                  {/* Decorative flying paper plane */}
                  <div className="absolute top-0 right-2 text-[#8B1A4A] -rotate-12 animate-bounce">
                    <Send className="w-6 h-6 fill-[#8B1A4A]/20" />
                  </div>

                  {/* Envelope Base Card */}
                  <div className="relative w-32 h-28 sm:w-36 sm:h-32 bg-gradient-to-br from-[#8B1A4A] to-[#C7256B] rounded-2xl p-3 shadow-xl flex flex-col justify-end items-center text-white transform hover:rotate-2 transition-transform duration-300">
                    
                    {/* Popping Letter with Heart */}
                    <div className="absolute -top-6 w-24 h-16 sm:w-28 sm:h-18 bg-white rounded-xl shadow-lg border border-rose-100 flex flex-col items-center justify-center p-2">
                      <Heart className="w-6 h-6 fill-[#8B1A4A] text-[#8B1A4A] animate-pulse" />
                      <div className="w-10 h-1 bg-slate-200 rounded-full mt-1.5" />
                    </div>

                    <div className="w-full flex justify-between items-center text-[10px] font-bold text-white/90 pt-1">
                      <span>SRIKARA</span>
                      <span>NEWS</span>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </main>

      {/* ── ARTICLE DETAIL MODAL ── */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Bar with Close Button */}
              <div className="relative w-full h-48 sm:h-60 bg-slate-900 overflow-hidden flex-shrink-0">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-black text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#8B1A4A] text-white inline-block mb-2">
                    {selectedArticle.category}
                  </span>
                  <h3 className="font-serif font-bold text-xl sm:text-2xl leading-snug">
                    {selectedArticle.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {selectedArticle.date} • By {selectedArticle.author || 'Srikara Medical Board'}
                  </p>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-slate-700 leading-relaxed text-sm space-y-4">
                <p className="font-semibold text-slate-900 text-base">
                  {selectedArticle.description}
                </p>
                <p>
                  {selectedArticle.fullContent}
                </p>
                <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100 flex items-start gap-3">
                  <Activity className="w-5 h-5 text-[#8B1A4A] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-600 leading-normal">
                    For inquiries regarding clinical protocols, robotic surgical consultations, or media briefings, reach out to our communications bureau at Srikara Hospitals.
                  </p>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between flex-shrink-0">
                <Link
                  to="/book"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8B1A4A] text-white text-xs font-bold hover:bg-[#70133A] transition-colors"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-300 transition-colors"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Global Footer ── */}
      <Footer />
      <MobileBottomNav />
    </div>
  )
}

export default MedicalUpdatesPage
