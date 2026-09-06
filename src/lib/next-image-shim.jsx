import React from 'react'

/**
 * Compatibility shim for Next.js `next/image` in Vite/React SPA environments.
 * Maps Next.js Image properties (src, alt, width, height, fill, priority, etc.) to standard img elements.
 */
export function Image({ src, alt = '', width, height, className = '', style = {}, priority, fill, ...props }) {
  const combinedStyle = {
    ...(fill
      ? {
          position: 'absolute',
          height: '100%',
          width: '100%',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        }
      : {}),
    ...style,
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={combinedStyle}
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  )
}

export default Image
