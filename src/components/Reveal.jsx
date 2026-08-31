import { useEffect, useRef } from 'react'
import anime from 'animejs'

/**
 * Staggered entrance animation for a group of children, triggered once when
 * scrolled into view. Uses anime.js (distinct from GSAP's continuous
 * scroll-scrubbed parallax) since this is a one-shot triggered animation,
 * not something tied to scroll position.
 */
export default function Reveal({ children, className = '', stagger = 90, y = 22, ...rest }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const targets = node.children.length ? Array.from(node.children) : [node]
    anime.set(targets, { opacity: 0, translateY: y })

    let done = false
    const play = () => {
      if (done) return
      done = true
      anime({
        targets,
        opacity: [0, 1],
        translateY: [y, 0],
        duration: 700,
        delay: anime.stagger(stagger),
        easing: 'easeOutCubic',
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            play()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(node)

    // Safety net: if the observer never fires (e.g. the tab started
    // backgrounded), don't leave content permanently invisible.
    const fallback = setTimeout(play, 1800)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [stagger, y])

  return (
    <div ref={ref} className={className} {...rest}>
      {children}
    </div>
  )
}
