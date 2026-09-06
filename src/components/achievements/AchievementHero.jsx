import React from 'react'
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero'

export function AchievementHero() {
  return (
    <div className="relative w-full bg-[#031525] select-text">
      {/* 
        ScrollExpandMedia Hero:
        - Keeps ONLY the video (/hero.mp4)
        - NO background photo (bgImageSrc="")
        - Video pinned in the EXACT MIDDLE of the hero section throughout the expansion
        - Interactive scroll expansion
      */}
      <ScrollExpandMedia
        mediaType="video"
        mediaSrc="/hero.mp4"
        posterSrc="/hero-poster.jpg"
        bgImageSrc=""
        title="Numbers that Build Trust"
        date="SRIKARA HOSPITALS • CLINICAL MILESTONES"
        scrollToExpand="Scroll to Expand Media"
        textBlend={false}
      />
    </div>
  )
}

export default AchievementHero

