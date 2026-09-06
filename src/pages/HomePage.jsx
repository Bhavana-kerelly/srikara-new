import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, MapPin } from 'lucide-react'
import { StickyNavbar } from '@/components/layout/StickyNavbar'
import { BranchSideNav } from '@/components/layout/BranchSideNav'
import { Footer } from '@/components/layout/Footer'
import { MobileBottomNav } from '@/components/layout/MobileBottomNav'
import { AppointmentWidget } from '@/components/sections/AppointmentWidget'
import { VideoHero } from '@/components/sections/VideoHero'
import { PremiumDiseasesSearch } from '@/components/sections/PremiumDiseasesSearch'
import { FounderChairmanCard } from '@/components/sections/FounderChairmanCard'
import { PremiumDoctorFinder } from '@/components/sections/PremiumDoctorFinder'
import { PremiumCaseStudies } from '@/components/sections/PremiumCaseStudies'
import { PremiumLocation } from '@/components/sections/PremiumLocation'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { DepartmentSearch } from '@/components/sections/DepartmentSearch'
import { UnevenDepartmentCollage } from '@/components/sections/UnevenDepartmentCollage'
import { AnnouncementPreloader } from '@/components/shared/AnnouncementPreloader'
import { ecil as initialBranch } from '@/data/branches/ecil'
import { db } from '@/lib/firebase'
import { doc, getDoc, collection, getDocs } from 'firebase/firestore'

const DEFAULT_ANNOUNCEMENTS = [
  'Bringing Trusted Healthcare Closer to Nellore — Srikara Hospitals proudly announces its new branch in Nellore.',
  'A New Era of Robotic Surgery Begins — Advanced Robotic Care for Urology, General Surgery & Oncology at Lakdikapul & Miyapur, Hyderabad'
]

export function HomePage() {
  const navigate = useNavigate()
  const [branch, setBranch] = useState(initialBranch)
  const [announcements, setAnnouncements] = useState(DEFAULT_ANNOUNCEMENTS)
  const [scrolled, setScrolled] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const parseTime = (item) => {
      if (item.createdAt) {
        const t = new Date(item.createdAt).getTime()
        if (!isNaN(t)) return t
      }
      if (item.date) {
        const t = new Date(item.date).getTime()
        if (!isNaN(t)) return t
      }
      const num = Number(item.id)
      if (!isNaN(num) && num > 100000) return num
      return 0
    }

    const loadDynamicHomepage = async () => {
      let liveNews = []

      // 1. Try to load from Firestore 'news'
      try {
        if (db) {
          const newsSnap = await getDocs(collection(db, 'news'))
          if (!newsSnap.empty) {
            liveNews = newsSnap.docs
              .map(d => ({ id: d.id, ...d.data() }))
              .filter(n => n.status !== 'Deleted' && (n.title || n.headline))
          }
        }
      } catch (e) {
        console.warn('Firestore announcement fetch error:', e)
      }

      // 2. Fallback to localStorage cache
      if (liveNews.length === 0) {
        try {
          const cached = localStorage.getItem('srikara_cms_data')
          if (cached) {
            const parsed = JSON.parse(cached)
            if (parsed.news && Array.isArray(parsed.news)) {
              liveNews = parsed.news.filter(n => n.status !== 'Deleted' && (n.title || n.headline))
            }
          }
        } catch (e) {
          console.warn('Cache announcement fetch error:', e)
        }
      }

      // 3. Process announcements for the scrollable ticker:
      // Sort newest first and strictly keep only the latest 3 to 4 alerts
      if (liveNews.length > 0) {
        const sorted = [...liveNews].sort((a, b) => parseTime(b) - parseTime(a))
        const latestTickerItems = sorted.slice(0, 4)

        const combinedList = latestTickerItems.map(n => {
          let titleStr = (n.title || n.headline || '').trim()
          let descStr = (n.desc || n.description || n.excerpt || n.content || '').trim()
          if (titleStr.toLowerCase().includes('nellore')) {
            titleStr = 'Bringing Trusted Healthcare Closer to Nellore'
            descStr = 'Srikara Hospitals proudly announces its new branch in Nellore.'
          }
          if (descStr && !titleStr.includes(descStr) && !descStr.includes(titleStr)) {
            return `${titleStr} — ${descStr}`
          }
          return titleStr || descStr
        }).filter(Boolean)

        if (combinedList.length > 0) {
          setAnnouncements(combinedList)
        }
      }

      // 4. Load page content if available
      try {
        if (db) {
          const docRef = doc(db, 'site_contents', 'pages')
          const docSnap = await getDoc(docRef)
          if (docSnap.exists()) {
            const data = docSnap.data()
            if (data.homepage) {
              setBranch({
                ...initialBranch,
                ...data.homepage
              })
              return
            }
          }
        }
      } catch (err) {
        console.warn('Firestore homepage load failed:', err)
      }

      try {
        const cached = localStorage.getItem('srikara_cms_data')
        if (cached) {
          const parsed = JSON.parse(cached)
          if (parsed.pageData && parsed.pageData.homepage) {
            setBranch({
              ...initialBranch,
              ...parsed.pageData.homepage
            })
          }
        }
      } catch (e) {
        console.warn('Error loading dynamic homepage data:', e)
      }
    }

    loadDynamicHomepage()

    window.addEventListener('srikara_news_updated', loadDynamicHomepage)
    window.addEventListener('storage', loadDynamicHomepage)

    return () => {
      window.removeEventListener('srikara_news_updated', loadDynamicHomepage)
      window.removeEventListener('storage', loadDynamicHomepage)
    }
  }, [])

  return (
    <>
      <AnnouncementPreloader />
      <Helmet>
        <title>Srikara Hospitals | Multi-Specialty Healthcare Excellence</title>
        <meta name="description" content={branch.description} />
      </Helmet>

      <div className="min-h-screen bg-surface font-body text-on-surface antialiased">
        <StickyNavbar currentBranch={branch} />
        <BranchSideNav currentSlug={branch.slug} />

        <div>

          {/* 1. HERO WITH TICKER DIRECTLY BELOW NAVBAR */}
          <div className="relative pt-[76px]">
            {/* ── TICKER OVERLAY (BELOW FIXED NAVBAR, SPANNING FULL WIDTH) ── */}
            <div
              onClick={() => navigate('/news/medical-updates')}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="w-full bg-[#8B1A4A] border-b border-white/20 py-4 md:py-5 px-4 md:px-8 cursor-pointer group shadow-lg transition-all duration-300 flex items-center justify-between gap-3 overflow-hidden relative z-30 min-h-[52px]"
            >
              <div className="flex items-center gap-2 bg-[#0a1628] text-white text-[10px] md:text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full flex-shrink-0 shadow-md z-10">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                LATEST UPDATE
              </div>

              <span className="text-white/40 text-xs font-light flex-shrink-0 z-10">•</span>

              {/* Continuous Smooth Scrolling Marquee Area Across Full Width (Seamless Loop with Clean Spacing between Items) */}
              <div className="overflow-hidden relative flex-1 flex items-center">
                <motion.div
                  animate={isPaused ? false : { x: ['0%', '-50%'] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 40,
                    ease: 'linear'
                  }}
                  className="whitespace-nowrap font-medium text-sm md:text-base text-white group-hover:text-white/90 transition-colors flex items-center shrink-0"
                >
                  {/* Set 1 */}
                  <div className="flex items-center">
                    {announcements.map((item, idx) => (
                      <span key={`a-${idx}`} className="inline-flex items-center gap-6 px-10">
                        <span>{item}</span>
                        <span className="text-white/40 text-xs select-none">✦</span>
                      </span>
                    ))}
                  </div>
                  {/* Set 2 (Duplicate for seamless loop) */}
                  <div className="flex items-center">
                    {announcements.map((item, idx) => (
                      <span key={`b-${idx}`} className="inline-flex items-center gap-6 px-10">
                        <span>{item}</span>
                        <span className="text-white/40 text-xs select-none">✦</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="flex items-center gap-1.5 text-white/90 group-hover:text-white text-xs md:text-sm font-bold uppercase tracking-wider ml-2 flex-shrink-0 group-hover:translate-x-1 transition-transform z-10 bg-[#8B1A4A] pl-3">
                <span className="hidden sm:inline">VIEW</span>
                <span>→</span>
              </div>
            </div>

            <VideoHero branch={branch}>
              <div className={`max-w-2xl transition-all duration-500 ease-out ${scrolled ? 'mt-0 pt-6 md:pt-10' : '-mt-16 md:-mt-24'}`}>
                <h1 className="font-headline font-extrabold tracking-tighter mb-5 md:mb-6">
                  <span className="hero-line-1 block text-[28px] md:text-5xl lg:text-7xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                    {branch.heroHeadline}
                  </span>
                  <span className="hero-line-2 block text-[26px] md:text-5xl lg:text-7xl hero-gradient-text">
                    {branch.heroHighlight}
                  </span>
                </h1>
                <p className="hero-desc text-sm md:text-lg text-white/70 max-w-xl mb-6 md:mb-8 leading-relaxed">
                  {branch.description}
                </p>
                <div className="hero-btn-wrap flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-4">
                  <button
                    onClick={() => navigate('/book')}
                    className="w-full sm:w-auto min-h-[48px] bg-[#8B1A4A] text-white px-8 py-3 md:py-4 rounded-full font-label font-bold uppercase tracking-widest shadow-lg hover:bg-[#2D3A4A] transition-all duration-300 text-sm md:text-base"
                  >
                    Book an Appointment
                  </button>
                  <button
                    onClick={() => navigate('/specialties')}
                    className="w-full sm:w-auto min-h-[48px] bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 md:py-4 rounded-full font-label font-bold uppercase tracking-widest hover:bg-white/20 transition-all text-sm md:text-base"
                  >
                    Explore Specialties
                  </button>
                </div>
              </div>
            </VideoHero>
        </div>

          {/* 1.5 DEPARTMENT SEARCH */}
          <DepartmentSearch />
          {/* ── FOUNDER & CHAIRMAN SPOTLIGHT ── */}
          <FounderChairmanCard />

          {/* 2. CENTERS OF EXCELLENCE (Uneven Department Collage) */}
          <UnevenDepartmentCollage />

          {/* 3. CLINICAL ENCYCLOPEDIA */}
          <section className="pt-12 pb-0 px-8">
            <div className="max-w-7xl mx-auto">
              <PremiumDiseasesSearch />
            </div>
          </section>

          {/* 5. PREMIUM DOCTOR FINDER */}
          <PremiumDoctorFinder branchTitle="Hospitals" branchId="Hospitals" />

          {/* 6. INFRASTRUCTURE */}
          {branch.infrastructure && (
            <section className="pt-12 pb-20 bg-surface-container-low px-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                  <h2 className="editorial-title text-4xl font-black tracking-tight leading-none mb-4">
                    <span className="block text-[#2D3A4A]">Precision</span>
                    <span className="block text-[#8B1A4A] mt-2">Ecosystem</span>
                  </h2>
                  <div className="w-16 h-[2px] bg-[#8B1A4A]/25 mx-auto mb-6" />
                  <p className="text-[#4A4A4A] max-w-2xl mx-auto">
                    We invest in the future of healthcare so you can invest in your health.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {branch.infrastructure.map((item, i) => (
                    <div key={i} className="group relative rounded-3xl overflow-hidden h-80">
                      <video
                        src={i === 0
                          ? 'https://assets.mixkit.co/videos/preview/mixkit-doctor-analysing-a-brain-mri-on-a-screen-40032-large.mp4'
                          : 'https://assets.mixkit.co/videos/preview/mixkit-surgeons-performing-a-surgery-with-a-surgical-monitor-35515-large.mp4'
                        }
                        poster={item.image || (i === 0
                          ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsy4QyvBAKqMc5jm3QR4_8UqR5L8nBrBgSREo9VuccfjCP3HBJs0ziEeXOzXDxHo0B3FHdgZ94q_LEkHTkaduFMpK7zhxxI5IWdcvN-1EW4X966vG-PKPso_lzppnnHlGyDyIMsO28rwYH6wDicKFOGBFapr15cRMuWLdd7kHDCSeiZIIlZVlSJHQkqMo4S7-j0KlCMmDIP3hLCOb2cYxW_Hg7zw1YIrLHAd8sA7shqELw9iCyfi6M_vOzb255-_fJs3YgQtG8S1g'
                          : 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkocaQxiMvMjVnD-a1ILZHkSv0qki-DziBAXey5cwaDbJPVJvUPjnQjskOai_Q8_37liZrGjoFcMZ8_ODtSqXvJiNU2tF5rt-YivEOSUkYsCfTRhxw7tIRSaqIU_zuodeWQLdnc0uAaaD3izQ6GubO1gO8RfpQyAGriwKDkRABilUPTxf1BlBpDfHmSA4rKljqGXmFIZu_9LwdTZcG6j84B2RphtdSEII3i5Oc5ICvuC_nANM4MerXxn9dvzbIe4fwaYrRonxFrbs'
                        )}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} to-transparent flex flex-col justify-end p-8`}>
                        <h4 className="text-white font-headline text-2xl font-bold mb-2">{item.title}</h4>
                        <p className="text-white/80 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 6.5 CASE STUDIES */}
          <PremiumCaseStudies />

          <TestimonialsSection category="Home" />

          {/* 7. PREMIUM LOCATION & REVIEWS */}
          <PremiumLocation branch={branch} />

        </div>

        <AppointmentWidget currentBranch={branch} />
        <Footer />
        <MobileBottomNav />
      </div>
    </>
  )
}
