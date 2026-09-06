import React from 'react'
import { Helmet } from 'react-helmet-async'
import { StickyNavbar } from '@/components/layout/StickyNavbar'
import { Footer } from '@/components/layout/Footer'
import { MobileBottomNav } from '@/components/layout/MobileBottomNav'

// Achievements Inner Page Modular Sections
import { AchievementHero } from '@/components/achievements/AchievementHero'
import { FeaturedMilestone } from '@/components/achievements/FeaturedMilestone'
import { SpecialtySection } from '@/components/achievements/SpecialtySection'
import { MiddleMilestonesRow } from '@/components/achievements/MiddleMilestonesRow'
import { MoreMilestonesSection } from '@/components/achievements/MoreMilestonesSection'
import { ImpactSection } from '@/components/achievements/ImpactSection'

export function AchievementsPage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#062A4A] selection:bg-[#D41472] selection:text-white font-sans antialiased">
      {/* ── Page SEO Metadata ── */}
      <Helmet>
        <title>Achievements & Milestones | Srikara Hospitals</title>
        <meta
          name="description"
          content="Numbers that Build Trust. Explore Srikara Hospitals' surgical milestones: 30,000+ joint replacements, 2,559+ TKRs in 6 months, and pioneer robotic clinical care."
        />
        <meta property="og:title" content="Achievements — Numbers that Build Trust | Srikara Hospitals" />
        <meta
          property="og:description"
          content="Discover Srikara Hospitals' clinical scale, surgical precision, robotic innovations, and patient outcomes across South India."
        />
      </Helmet>

      {/* ── Existing Sticky Navbar (Header) ── */}
      <StickyNavbar />

      {/* ── Main Editorial Content ── */}
      <main className="w-full">
        {/* 1. Hero Section: Numbers that Build Trust */}
        <AchievementHero />

        {/* 2. Biggest Milestone: 2,559+ Total Knee Replacements in 6 Months */}
        <FeaturedMilestone />

        {/* 3. Beyond Orthopaedics: Expert Care Across Specialties */}
        <SpecialtySection />

        {/* 4, 5, 6. Editorial Milestone Row: 30,000+ Joint Replacements, Innovation, Speed & Records */}
        <MiddleMilestonesRow />

        {/* 7. Future-Ready Expandable Milestones Timeline */}
        <MoreMilestonesSection />

        {/* 8. Our Impact: Advanced Care. Lasting Impact. */}
        <ImpactSection />
      </main>

      {/* ── Existing Footer & Mobile Navigation ── */}
      <Footer />
      <MobileBottomNav />
    </div>
  )
}

export default AchievementsPage
