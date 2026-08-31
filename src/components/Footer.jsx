import { Link } from 'react-router-dom'
import { hotel, waLink, devEnquiry } from '../data/hotel'

export default function Footer() {
  return (
    <footer className="bg-forest-deep text-cream/90">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-xl text-cream">{hotel.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
              A nine-room guesthouse in a converted 1950s house in Highlands —
              garden rooms, a small pool, and breakfast on the verandah.
              Five minutes from Sam Levy's, twenty from the airport.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-cream/50">
              Explore
            </p>
            <nav className="mt-4 flex flex-col gap-2 text-sm">
              <Link to="/" className="text-cream/80 hover:text-gold">Home</Link>
              <Link to="/rooms" className="text-cream/80 hover:text-gold">Rooms & Amenities</Link>
              <Link to="/contact" className="text-cream/80 hover:text-gold">Contact & Booking</Link>
            </nav>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-cream/50">
              Reach us
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href={hotel.phoneHref} className="text-cream/80 hover:text-gold">
                Call — {hotel.phoneDisplay}
              </a>
              <a
                href={waLink(devEnquiry.general)}
                target="_blank"
                rel="noreferrer"
                className="text-cream/80 hover:text-gold"
              >
                WhatsApp — {hotel.whatsappDisplay}
              </a>
              <a href={`mailto:${hotel.email}`} className="text-cream/80 hover:text-gold">
                {hotel.email}
              </a>
              <p className="pt-2 text-cream/60">
                {hotel.addressLine1}
                <br />
                {hotel.addressLine2}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/40 md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} {hotel.name}. All rights reserved.</p>
          <p>Demo site — built for review purposes.</p>
        </div>
      </div>
    </footer>
  )
}
