import React from 'react'
import { Helmet } from 'react-helmet-async'
import { StickyNavbar } from '@/components/layout/StickyNavbar'
import { Footer } from '@/components/layout/Footer'
import { MobileBottomNav } from '@/components/layout/MobileBottomNav'

// Awards & Recognition Editorial Components
import { AwardsHero } from '@/components/awards/AwardsHero'
import { AwardCarousel } from '@/components/awards/AwardCarousel'
import { MilestonesSection } from '@/components/awards/MilestonesSection'
import { MilestoneTimeline } from '@/components/awards/MilestoneTimeline'
import { MoreToComeSection } from '@/components/awards/MoreToComeSection'
import { AwardsFooterClosing } from '@/components/awards/AwardsFooterClosing'

export function AwardsPage() {
  return (
    <div className="w-full min-h-screen bg-white text-[#073B68] selection:bg-[#E91E83] selection:text-white font-sans antialiased">
      {/* ── SEO Metadata ── */}
      <Helmet>
        <title>Awards & Recognition | Srikara Hospitals</title>
        <meta
          name="description"
          content="Celebrating Excellence. Building Trust. Explore Srikara Hospitals' recognition journal, healthcare milestones, and pioneering robotic surgery honors across Telangana and AP."
        />
        <meta property="og:title" content="Awards & Recognition | Srikara Hospitals" />
        <meta
          property="og:description"
          content="A digital archive of Srikara Hospitals' medical milestones, robotic joint replacement leadership, and healthcare honors."
        />
      </Helmet>

      {/* ── Existing Sticky Navbar (Header) ── */}
      <StickyNavbar />

      {/* ── Main Editorial Content ── */}
      <main className="w-full">
        {/* 1. Hero Section: Split Editorial Hero */}
        <AwardsHero />

        {/* 2, 3, 4. Main Awards Section: Horizontal Carousel + Category Filters + Detail Modal */}
        <AwardCarousel />

        {/* 5. Milestones Section: 27,000+ Joint Replacement Procedures & Results Foundation */}
        <MilestonesSection />

        {/* 6. Future Milestones: Horizontal Milestone Timeline */}
        <MilestoneTimeline />

        {/* 7. "More to Come" Future-Proof Section: Open-Ended Timeline */}
        <MoreToComeSection />

        {/* 8. Closing Section: Advancing Care. Earning Trust. */}
        <AwardsFooterClosing />
      </main>

      {/* ── Existing Footer & Mobile Navigation ── */}
      <Footer />
      <MobileBottomNav />
    </div>
  )
}

export default AwardsPage
