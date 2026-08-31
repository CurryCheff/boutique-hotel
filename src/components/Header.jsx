import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import anime from 'animejs'
import { hotel, waLink } from '../data/hotel'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/rooms', label: 'Rooms & Amenities' },
  { to: '/contact', label: 'Contact & Booking' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuRef.current) return
    if (open) {
      anime({
        targets: menuRef.current,
        translateY: ['-12px', '0px'],
        opacity: [0, 1],
        duration: 320,
        easing: 'easeOutQuad',
      })
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-cream/95 shadow-sm backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="font-display text-xl tracking-tight text-forest md:text-2xl">
          {hotel.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-colors ${
                  isActive ? 'text-rust' : 'text-ink/80 hover:text-rust'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={hotel.phoneHref} className="text-sm text-ink/70 hover:text-rust">
            {hotel.phoneDisplay}
          </a>
          <a
            href={waLink("Hi Msasa House, I'd like to check availability.")}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-forest-deep"
          >
            WhatsApp Us
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <path d="M0 1H22" stroke="currentColor" strokeWidth="1.5" />
            <path d="M0 8H22" stroke="currentColor" strokeWidth="1.5" />
            <path d="M0 15H22" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      {open && (
        <div ref={menuRef} className="border-t border-stone-dark bg-cream px-5 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base ${isActive ? 'text-rust' : 'text-ink/80'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3 border-t border-stone-dark pt-5">
            <a href={hotel.phoneHref} className="text-sm text-ink/70">
              Call {hotel.phoneDisplay}
            </a>
            <a
              href={waLink("Hi Msasa House, I'd like to check availability.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-forest px-5 py-2.5 text-center text-sm font-medium text-cream"
            >
              WhatsApp Us
            </a>
            <a href={`mailto:${hotel.email}`} className="text-sm text-ink/70">
              {hotel.email}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
