import React from 'react'

/**
 * Luminous flowing waves background for the dark Board of Directors section
 */
export function FlowingWaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg
        className="absolute w-full h-full object-cover opacity-20"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c7256b" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="wavePinkGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c7256b" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#f472b6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.1" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient background glows */}
        <circle cx="180" cy="280" r="300" fill="#0ea5e9" opacity="0.08" filter="url(#softGlow)" />
        <circle cx="1250" cy="450" r="350" fill="#c7256b" opacity="0.12" filter="url(#softGlow)" />
        <circle cx="650" cy="780" r="260" fill="#06b6d4" opacity="0.06" filter="url(#softGlow)" />

        {/* Flowing elegant sine / contour waves */}
        <path
          d="M-100 220 C 280 90, 580 340, 920 180 C 1180 70, 1380 240, 1600 160"
          stroke="url(#waveCyanGrad)"
          strokeWidth="1.8"
          strokeDasharray="4 6"
          fill="none"
        />
        <path
          d="M-100 300 C 240 450, 560 160, 980 330 C 1280 440, 1480 290, 1650 320"
          stroke="url(#wavePinkGrad)"
          strokeWidth="2.2"
          fill="none"
        />
        <path
          d="M-50 620 C 330 480, 720 740, 1120 560 C 1320 460, 1490 590, 1650 550"
          stroke="url(#waveCyanGrad)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M-80 480 C 260 590, 600 400, 950 530 C 1220 630, 1420 500, 1620 510"
          stroke="url(#wavePinkGrad)"
          strokeWidth="1.2"
          opacity="0.65"
          fill="none"
        />
      </svg>
    </div>
  )
}

/**
 * Organic decorative petal cluster matching the reference image's pink and cyan petal accents
 */
export function PetalCluster({ className = '', variant = 'light' }) {
  const isDark = variant === 'dark'

  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id={`petalPink-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c7256b" stopOpacity={isDark ? "0.9" : "0.8"} />
            <stop offset="100%" stopColor="#f472b6" stopOpacity={isDark ? "0.45" : "0.3"} />
          </linearGradient>
          <linearGradient id={`petalCyan-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity={isDark ? "0.85" : "0.75"} />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity={isDark ? "0.4" : "0.25"} />
          </linearGradient>
          <linearGradient id={`petalPurple-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity={isDark ? "0.75" : "0.6"} />
            <stop offset="100%" stopColor="#ec4899" stopOpacity={isDark ? "0.35" : "0.2"} />
          </linearGradient>
        </defs>

        {/* Petal 1 - Pink / Magenta (main leaf) */}
        <path
          d="M20 140 C 20 80, 70 30, 130 20 C 140 80, 90 130, 20 140 Z"
          fill={`url(#petalPink-${variant})`}
          style={{ mixBlendMode: isDark ? 'screen' : 'multiply' }}
        />

        {/* Petal 2 - Cyan / Aqua (overlapping left) */}
        <path
          d="M20 140 C 30 85, 95 65, 145 75 C 135 125, 75 145, 20 140 Z"
          fill={`url(#petalCyan-${variant})`}
          style={{ mixBlendMode: isDark ? 'screen' : 'multiply' }}
        />

        {/* Petal 3 - Purple / Soft Pink (slender accent leaf) */}
        <path
          d="M20 140 C 45 95, 115 105, 150 120 C 120 148, 65 150, 20 140 Z"
          fill={`url(#petalPurple-${variant})`}
          style={{ mixBlendMode: isDark ? 'screen' : 'multiply' }}
        />

        {/* Small floating seed droplet */}
        <circle
          cx="142"
          cy="42"
          r="4"
          fill="#38bdf8"
          opacity={isDark ? "0.85" : "0.65"}
        />
        <circle
          cx="150"
          cy="92"
          r="3"
          fill="#c7256b"
          opacity={isDark ? "0.8" : "0.5"}
        />
      </svg>
    </div>
  )
}

/**
 * Organic decorative blob shape with dual translucent tones
 */
export function OrganicAuraBlob({ className = '', color = 'pink' }) {
  const isPink = color === 'pink'
  return (
    <div
      className={`absolute pointer-events-none blur-3xl rounded-full transition-all duration-700 ${
        isPink
          ? 'bg-gradient-to-tr from-[#8B1A4A]/25 via-[#c7256b]/20 to-[#f472b6]/15'
          : 'bg-gradient-to-tr from-[#0ea5e9]/25 via-[#06b6d4]/18 to-[#38bdf8]/12'
      } ${className}`}
    />
  )
}

/**
 * Elegant SVG brush underline for handwritten statements
 */
export function ScriptUnderline({ className = '' }) {
  return (
    <svg
      viewBox="0 0 240 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full max-w-[200px] h-3 text-[#c7256b] opacity-80 ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M3 11.5C45.5 5.5 130.5 3 237 13.5M30 14.5C80 9.5 145 8.5 210 14"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
