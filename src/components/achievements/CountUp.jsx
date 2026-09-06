import React, { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

/**
 * Smooth number count up animation with formatting (supports commas and +)
 */
export function CountUp({ end, duration = 1.8, prefix = '', suffix = '', className = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!isInView) return

    let startTime = null
    let animationFrameId

    const numEnd = typeof end === 'number' ? end : parseInt(String(end).replace(/\D/g, ''), 10) || 0

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * numEnd))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount)
      } else {
        setCount(numEnd)
      }
    }

    animationFrameId = requestAnimationFrame(updateCount)

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [isInView, end, duration])

  const formatted = count.toLocaleString()

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
