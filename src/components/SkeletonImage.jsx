import { useState } from 'react'

/**
 * <img> wrapped in a shimmering skeleton placeholder that stays visible
 * until the image has actually decoded, then cross-fades out. Prevents the
 * layout-shift-and-pop-in you get from lazy-loaded images on a slow link.
 */
export default function SkeletonImage({
  src,
  alt = '',
  className = '',
  imgClassName = '',
  loading = 'lazy',
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        aria-hidden="true"
        className={`skeleton-shimmer absolute inset-0 transition-opacity duration-500 ${
          loaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setLoaded(true)}
        className={`h-full w-full transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
      />
    </div>
  )
}
