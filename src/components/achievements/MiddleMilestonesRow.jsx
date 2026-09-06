import React from 'react'
import { MajorMilestoneCard } from './MajorMilestoneCard'
import { InnovationSection } from './InnovationSection'
import { SpeedRecordsSection } from './SpeedRecordsSection'

export function MiddleMilestonesRow() {
  return (
    <section className="relative w-full py-10 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">
          {/* Column 1: A Major Milestone (Over 30,000 Joint Replacements) ~ 3.5 cols */}
          <div className="lg:col-span-4 flex flex-col">
            <MajorMilestoneCard />
          </div>

          {/* Column 2: Innovation & Technology ~ 4 cols */}
          <div className="lg:col-span-4 flex flex-col">
            <InnovationSection />
          </div>

          {/* Column 3: Speed & Surgical Excellence ~ 4.5 cols */}
          <div className="lg:col-span-4 flex flex-col">
            <SpeedRecordsSection />
          </div>
        </div>
      </div>
    </section>
  )
}
