import { useLayoutEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Full-bleed image section with a slow, deliberate parallax drift.
 * The image sits taller than its container and drifts vertically as the
 * section scrolls through the viewport, scrubbed to scroll position with a
 * long lag (scrub ~1.6) so it reads as a slow settle, not a scroll-linked
 * snap — closer to how a still photograph would feel if it could breathe.
 */
export default function Parallax({
  src,
  alt = '',
  children,
  heightClass = 'h-[70vh] min-h-[520px]',
  overlayClass = 'bg-forest-deep/35',
  amount = 18,
  className = '',
}) {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)
  const [loaded, setLoaded] = useState(false)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { yPercent: -amount },
        {
          yPercent: amount,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.6,
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [amount])

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${heightClass} ${className}`}
    >
      <div
        aria-hidden="true"
        className={`skeleton-shimmer absolute inset-0 transition-opacity duration-500 ${
          loaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-[140%] w-full object-cover object-center will-change-transform transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="eager"
      />
      <div className={`absolute inset-0 ${overlayClass}`} />
      {children && (
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          {children}
        </div>
      )}
    </section>
  )
}
