import { motion } from 'framer-motion'
import { Building2, Stethoscope, Users, UserCheck } from 'lucide-react'
import { PageShell } from '@/components/shared/PageShell'
import { assetUrl } from '@/lib/assetUrl'

const LEADERS = [
  {
    name: 'Dr. Akhil Dadi',
    role: 'FOUNDER & CHAIRMAN',
    dept: 'JOINT REPLACEMENT & ROBOTIC SURGERY',
    icon: Building2,
    image: assetUrl('doctors/akhil-dadi.png'),
    bio: 'Visionary orthopedic surgeon and the driving force behind Srikara Hospitals. A pioneer of robotic joint replacement in South India with over 30,000 successful procedures.',
    accent: {
      cardBg: 'bg-[#F4F6F9]',
      border: 'border-[#E2E8F0]',
      avatarBg: 'bg-[#E8EDF5]',
      badgeBg: 'bg-[#8B1A4A]/10',
      badgeText: 'text-[#8B1A4A]',
    },
    isChairman: true,
  },
  {
    name: 'Dr. Vilasini Patel',
    role: 'MEDICAL DIRECTOR',
    dept: 'CLINICAL GOVERNANCE & QUALITY',
    icon: Stethoscope,
    image: assetUrl('doctors/vilasini-patel.png'),
    bio: 'Oversees medical administration, patient safety protocols, and clinical excellence standards across all Srikara hospital branches.',
    accent: {
      cardBg: 'bg-[#F2F4FB]',
      border: 'border-[#E0E5F5]',
      avatarBg: 'bg-[#E3E8F8]',
      badgeBg: 'bg-[#8B1A4A]/10',
      badgeText: 'text-[#8B1A4A]',
    },
  },
  {
    name: 'M.V. Sireesha',
    role: 'MANAGING DIRECTOR & CEO',
    dept: 'EXECUTIVE LEADERSHIP',
    icon: Users,
    image: assetUrl('images/sireesha.jpg'),
    bio: 'Drives overall strategic vision, administrative leadership, and healthcare expansion for the Srikara Hospitals network.',
    accent: {
      cardBg: 'bg-[#FAF6F0]',
      border: 'border-[#F2EAE0]',
      avatarBg: 'bg-[#F5ECE0]',
      badgeBg: 'bg-[#8B1A4A]/10',
      badgeText: 'text-[#8B1A4A]',
    },
  },
  {
    name: 'Rama Saraswathi',
    role: 'DIRECTOR',
    dept: 'BOARD OF DIRECTORS',
    icon: UserCheck,
    image: assetUrl('images/rama-saraswathi.jpg'),
    bio: 'Provides strategic oversight and governance, steering organizational growth and community healthcare initiatives.',
    accent: {
      cardBg: 'bg-[#FAF2F4]',
      border: 'border-[#F4E3E7]',
      avatarBg: 'bg-[#F7E1E6]',
      badgeBg: 'bg-[#8B1A4A]/10',
      badgeText: 'text-[#8B1A4A]',
    },
  },
  {
    name: 'Sumedh Dadi',
    role: 'DIRECTOR',
    dept: 'BOARD OF DIRECTORS',
    icon: UserCheck,
    image: assetUrl('images/sumedh-dadi.jpg'),
    bio: 'Contributes to strategic planning, operational advancement, and technological modernization across hospital departments.',
    accent: {
      cardBg: 'bg-[#F0F7F4]',
      border: 'border-[#E0F0E8]',
      avatarBg: 'bg-[#DDF2E8]',
      badgeBg: 'bg-[#8B1A4A]/10',
      badgeText: 'text-[#8B1A4A]',
    },
  },
  {
    name: 'Samuidha Dadi',
    role: 'DIRECTOR',
    dept: 'BOARD OF DIRECTORS',
    icon: UserCheck,
    image: assetUrl('images/samuidha-dadi.jpg'),
    bio: 'Fosters corporate governance, patient-first care policies, and healthcare service enhancement across all Srikara facilities.',
    accent: {
      cardBg: 'bg-[#EEF7F8]',
      border: 'border-[#DCF0F2]',
      avatarBg: 'bg-[#D8F0F3]',
      badgeBg: 'bg-[#8B1A4A]/10',
      badgeText: 'text-[#8B1A4A]',
    },
  },
]

export function LeadershipTeamPage() {
  return (
    <PageShell
      seoTitle="Leadership Team | Srikara Hospitals"
      seoDescription="Meet the leadership team of Srikara Hospitals — the visionaries guiding our mission of clinical precision and human connection."
      badge="About Srikara"
      title="Our Leadership Team"
      subtitle="Guided by clinicians and administrators who believe healthcare is equal parts precision and compassion."
    >
      <section className="py-8 md:py-14 bg-[#FAF9F6]/60 rounded-[36px] px-4 md:px-10 border border-[#EBE8E1] mb-20 shadow-sm">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-garamond text-3xl md:text-5xl font-bold text-[#1A202C] tracking-tight leading-tight mb-4">
            The People Behind Srikara
          </h2>
          <p className="text-[#64748B] text-sm md:text-base leading-relaxed font-sans mb-5 max-w-2xl mx-auto">
            A leadership collective of surgeons, physicians and administrators shaping the future of accessible super-specialty care.
          </p>
          <div className="w-12 h-[2px] bg-[#8B1A4A] mx-auto rounded-full opacity-80" />
        </div>

        {/* 3-column × 2-row Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {LEADERS.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className={`${leader.accent.cardBg} ${leader.accent.border} border rounded-[28px] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#8B1A4A]/30 relative flex flex-col justify-between group overflow-hidden`}
            >
              {/* Top Right Icon Button */}
              <div className="absolute top-5 right-5 w-8 h-8 rounded-xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center text-[#8B1A4A] z-10">
                <leader.icon className="w-4 h-4" />
              </div>

              {/* Horizontal Card Layout: IMAGE LEFT + INFORMATION RIGHT */}
              <div className="flex items-start gap-4 md:gap-5 mb-3">
                {/* Left Portrait */}
                <div className={`relative flex-shrink-0 ${leader.isChairman ? 'w-24 h-32 md:w-28 md:h-36' : 'w-20 h-24 md:w-24 md:h-28'} rounded-2xl overflow-hidden ${leader.accent.avatarBg} border border-white/80 shadow-sm flex items-center justify-center`}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={e => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className={`hidden w-full h-full items-center justify-center font-garamond font-bold ${leader.isChairman ? 'text-3xl' : 'text-2xl'} ${leader.accent.badgeText}`}>
                    {leader.name.replace(/^(Dr\.|Mr\.|Ms\.)\s*/, '').split(' ').map(w => w[0]).join('')}
                  </div>
                </div>

                {/* Right Info Details */}
                <div className="flex-1 pr-6 pt-1">
                  <h3 className="font-garamond font-bold text-lg md:text-xl text-[#1A202C] leading-snug group-hover:text-[#8B1A4A] transition-colors">
                    {leader.name}
                  </h3>
                  <div className="mt-2 mb-1.5">
                    <span className={`inline-block ${leader.accent.badgeBg} ${leader.accent.badgeText} text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full`}>
                      {leader.role}
                    </span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 leading-tight">
                    {leader.dept}
                  </p>
                </div>
              </div>

              {/* Bio Paragraph */}
              <div className="mt-2 pt-3 border-t border-slate-200/40">
                <p className="text-xs md:text-sm text-slate-600 font-light leading-relaxed">
                  "{leader.bio}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
