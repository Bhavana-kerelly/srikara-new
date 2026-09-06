import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, X } from 'lucide-react'
import { StickyNavbar } from '@/components/layout/StickyNavbar'
import { Footer } from '@/components/layout/Footer'
import { MobileBottomNav } from '@/components/layout/MobileBottomNav'
import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

import { BLOGS_DATA } from '@/data/blogsData'

const blogs = BLOGS_DATA

const CATEGORIES = [
  'All',
  'Healthcare',
  'Multispeciality',
  'Clinical Excellence',
  'Patient Care',
  'Hospital Network',
  'Facilities & Infrastructure',
  'Medical Technology',
  'Minimally Invasive Surgery',
  'Orthopedics & Robotic Care',
  'Spine Care',
  'Emergency & Critical Care',
  'Integrated Care'
]

function BlogModal({ blog, onClose }) {
  // Format plain text into HTML paragraphs if blog.content doesn't contain HTML tags
  const renderContent = () => {
    if (!blog.content) return null
    if (blog.content.includes('<p>') || blog.content.includes('<h3>')) {
      return <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    }
    return (
      <div className="space-y-4">
        {blog.content.split('\n\n').map((paragraph, index) => {
          if (paragraph.startsWith('* ')) {
            const listItems = paragraph.split('\n').map(item => item.replace('* ', ''))
            return (
              <ul key={index} className="list-disc pl-5 space-y-1 my-2">
                {listItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )
          }
          if (paragraph.length < 100 && !paragraph.endsWith('.')) {
            return <h3 key={index} className="text-lg font-bold text-[#1A202C] mt-6 mb-2">{paragraph}</h3>
          }
          return <p key={index} className="text-[#475569] text-sm leading-relaxed">{paragraph}</p>
        })}
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        onClick={e => e.stopPropagation()}
        className="w-full max-w-[760px] max-h-[88vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
      >
        <div className="relative h-56 flex-shrink-0">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover"
            onError={e => { e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-white shadow">
            <X size={16} />
          </button>
          <span className="absolute top-4 left-4 bg-[#8B1A4A] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">{blog.tag || blog.category}</span>
        </div>
        <div className="flex-1 overflow-y-auto px-8 pb-10">
          <div className="flex items-center gap-4 text-xs text-[#94A3B8] mt-4 mb-4">
            <span className="flex items-center gap-1"><Calendar size={12} />{blog.date}</span>
            <span className="flex items-center gap-1"><Clock size={12} />{blog.readTime}</span>
            <span className="text-[#8B1A4A] font-semibold">{blog.category}</span>
          </div>
          <h2 className="text-2xl font-bold text-[#1A202C] mb-6 leading-tight">{blog.title}</h2>
          <div className="text-[#475569] text-sm leading-relaxed [&_h3]:text-[#1A202C] [&_h3]:font-bold [&_h3]:text-base [&_h3]:mt-5 [&_h3]:mb-2 [&_p]:mb-3 [&_blockquote]:border-l-4 [&_blockquote]:border-[#8B1A4A] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-[#8B1A4A] [&_strong]:text-[#1A202C]">
            {renderContent()}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export function BlogsPage() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedBlog, setSelectedBlog] = useState(null)

  const [allBlogs, setAllBlogs] = useState(blogs)

  useEffect(() => {
    const loadDynamicBlogs = async () => {
      try {
        if (db) {
          const docSnap = await getDocs(collection(db, 'blogs'))
          if (!docSnap.empty) {
            const fbDocs = docSnap.docs.map(d => ({ id: d.id, ...d.data() }))
            const formatted = fbDocs.map(b => {
              const matchedStatic = blogs.find(sb => sb.title.toLowerCase() === (b.title || '').toLowerCase() || String(sb.id) === String(b.id))
              return {
                ...b,
                tag: b.tag || 'Clinical',
                readTime: b.readTime || '5 min read',
                image: (matchedStatic ? matchedStatic.image : b.image),
                content: b.body || b.content
              }
            })
            const filteredStatic = blogs.filter(sb => 
              !formatted.some(fb => fb.title.toLowerCase() === sb.title.toLowerCase() || String(fb.id) === String(sb.id))
            )
            setAllBlogs([...filteredStatic, ...formatted].filter(b => b.status !== 'Deleted'))
            return // success
          }
        }
      } catch (err) {
        console.warn('Firestore fetch failed in BlogsPage, falling back to local storage:', err)
      }

      try {
        const cached = localStorage.getItem('srikara_cms_data')
        if (cached) {
          const parsed = JSON.parse(cached)
          if (parsed.blogs && parsed.blogs.length > 0) {
            const formatted = parsed.blogs.map(b => {
              const matchedStatic = blogs.find(sb => sb.title.toLowerCase() === (b.title || '').toLowerCase() || String(sb.id) === String(b.id))
              return {
                ...b,
                tag: b.tag || 'Clinical',
                readTime: b.readTime || '5 min read',
                image: (matchedStatic ? matchedStatic.image : b.image),
                content: b.body || b.content
              }
            })
            const filteredStatic = blogs.filter(sb => 
              !formatted.some(fb => fb.title.toLowerCase() === sb.title.toLowerCase() || String(fb.id) === String(sb.id))
            )
            setAllBlogs([...filteredStatic, ...formatted].filter(b => b.status !== 'Deleted'))
          }
        }
      } catch (e) {
        console.warn('Error loading dynamic blogs in BlogsPage:', e)
      }
    }
    loadDynamicBlogs()
  }, [])

  const filtered = activeCategory === 'All' ? allBlogs : allBlogs.filter(b => b.category === activeCategory)

  return (
    <>
      <Helmet><title>Blogs & Case Studies | Srikara Hospitals</title></Helmet>

      {selectedBlog && <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />}

      <div className="min-h-screen bg-[#F8FAFC] font-body text-[#1A202C] antialiased">
        <StickyNavbar />

        {/* Hero */}
        <section className="pt-24 pb-16 px-8 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-[#8B1A4A] text-[11px] font-black uppercase tracking-[0.5em] mb-4 block">Clinical Insights</span>
              <h1 className="text-5xl md:text-6xl font-bold text-[#1A202C] tracking-tight leading-tight mb-4">
                Blogs &amp; <span className="text-[#8B1A4A]">Case Studies</span>
              </h1>
              <p className="text-[#64748B] text-lg max-w-2xl">
                Real patient stories, clinical insights, and health guides from the specialists at Srikara Hospitals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category filter */}
        <div className="sticky top-16 z-20 bg-white/90 backdrop-blur-md border-b border-[#EDF2F7] px-8 py-4">
          <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat ? 'bg-[#8B1A4A] text-white' : 'bg-[#F1F5F9] text-[#4A4A4A] hover:bg-[#8B1A4A]/10'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <section className="py-16 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((blog, i) => (
              <motion.article key={blog.id}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                onClick={() => setSelectedBlog(blog)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] hover:border-[#8B1A4A]/30 hover:shadow-[0_16px_48px_rgba(139,26,74,0.1)] transition-all duration-300 cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden bg-[#F1F5F9]">
                  <img src={blog.image} alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={e => { e.target.src = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800' }}
                  />
                  <span className="absolute top-4 left-4 bg-[#8B1A4A] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">{blog.tag}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#94A3B8] mb-3">
                    <span className="text-[#8B1A4A] font-semibold">{blog.category}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1"><Calendar size={11} />{blog.date}</span>
                    <span className="flex items-center gap-1"><Clock size={11} />{blog.readTime}</span>
                  </div>
                  <h2 className="font-bold text-[#1A202C] text-lg leading-snug mb-3 group-hover:text-[#8B1A4A] transition-colors">{blog.title}</h2>
                  <p className="text-[#64748B] text-sm leading-relaxed line-clamp-3 mb-5">{blog.excerpt}</p>
                  <div className="flex items-center gap-2 text-[#8B1A4A] text-xs font-bold uppercase tracking-wider">
                    Read More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-8 bg-[#0D1B2A]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-white text-3xl font-bold mb-2">Have a health concern?</p>
              <p className="text-white/40 text-sm">Our specialists are available across all 9 Srikara centres.</p>
            </div>
            <button onClick={() => navigate('/book')} className="bg-[#8B1A4A] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-[#8B1A4A] transition-all">
              Book a Consultation
            </button>
          </div>
        </section>

        <Footer />
        <MobileBottomNav />
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  )
}
