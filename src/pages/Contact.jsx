import { useState } from 'react'
import Parallax from '../components/Parallax'
import ContactCTAs from '../components/ContactCTAs'
import MapPlaceholder from '../components/MapPlaceholder'
import { hotel, images, roomOptions, waLink } from '../data/hotel'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  guests: 2,
  roomType: roomOptions[0],
  message: '',
}

function buildEnquiryText(form) {
  const lines = [
    `Hi Msasa House, I'd like to enquire about a stay.`,
    '',
    `Name: ${form.name || '—'}`,
    `Check-in: ${form.checkIn || '—'}`,
    `Check-out: ${form.checkOut || '—'}`,
    `Guests: ${form.guests}`,
    `Room type: ${form.roomType}`,
  ]
  if (form.message) lines.push('', form.message)
  return lines.join('\n')
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [sent, setSent] = useState(null) // 'whatsapp' | 'email' | null

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleWhatsApp = (e) => {
    e.preventDefault()
    window.open(waLink(buildEnquiryText(form)), '_blank', 'noreferrer')
    setSent('whatsapp')
  }

  const handleEmail = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Booking enquiry — ${form.name || 'Msasa House'}`)
    const body = encodeURIComponent(buildEnquiryText(form))
    window.location.href = `mailto:${hotel.email}?subject=${subject}&body=${body}`
    setSent('email')
  }

  return (
    <div>
      <Parallax
        src={images.jacaranda}
        alt="The jacaranda tree at the Msasa House gate"
        heightClass="h-[46vh] min-h-[340px]"
        overlayClass="bg-forest-deep/45"
        amount={16}
      >
        <div className="px-6 text-center text-cream">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cream/70">
            Contact &amp; Booking
          </p>
          <h1 className="font-display mt-4 text-4xl sm:text-5xl">
            Tell us your dates
          </h1>
        </div>
      </Parallax>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-14 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl text-ink">Send an enquiry</h2>
            <p className="mt-2 text-sm text-ink/60">
              This isn't a live booking engine — fill in what you can and
              we'll reply to confirm availability and rates.
            </p>

            <form className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="text-xs font-medium uppercase tracking-wide text-ink/50">
                  Full name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-lg border border-stone-dark bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-rust focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium uppercase tracking-wide text-ink/50">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border border-stone-dark bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-rust focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium uppercase tracking-wide text-ink/50">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="+263 77 000 0000"
                  className="mt-2 w-full rounded-lg border border-stone-dark bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-rust focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium uppercase tracking-wide text-ink/50">
                  Check-in
                </label>
                <input
                  type="date"
                  value={form.checkIn}
                  onChange={update('checkIn')}
                  className="mt-2 w-full rounded-lg border border-stone-dark bg-white px-4 py-2.5 text-sm text-ink focus:border-rust focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium uppercase tracking-wide text-ink/50">
                  Check-out
                </label>
                <input
                  type="date"
                  value={form.checkOut}
                  onChange={update('checkOut')}
                  className="mt-2 w-full rounded-lg border border-stone-dark bg-white px-4 py-2.5 text-sm text-ink focus:border-rust focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium uppercase tracking-wide text-ink/50">
                  Guests
                </label>
                <input
                  type="number"
                  min={1}
                  max={8}
                  value={form.guests}
                  onChange={update('guests')}
                  className="mt-2 w-full rounded-lg border border-stone-dark bg-white px-4 py-2.5 text-sm text-ink focus:border-rust focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium uppercase tracking-wide text-ink/50">
                  Room type
                </label>
                <select
                  value={form.roomType}
                  onChange={update('roomType')}
                  className="mt-2 w-full rounded-lg border border-stone-dark bg-white px-4 py-2.5 text-sm text-ink focus:border-rust focus:outline-none"
                >
                  {roomOptions.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="text-xs font-medium uppercase tracking-wide text-ink/50">
                  Anything else
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Airport transfer, dietary needs, early check-in — whatever's useful for us to know."
                  className="mt-2 w-full rounded-lg border border-stone-dark bg-white px-4 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-rust focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:col-span-2 sm:flex-row">
                <button
                  onClick={handleWhatsApp}
                  className="rounded-full bg-forest px-7 py-3 text-sm font-medium text-cream transition-colors hover:bg-forest-deep"
                >
                  Send via WhatsApp
                </button>
                <button
                  onClick={handleEmail}
                  className="rounded-full border border-forest px-7 py-3 text-sm font-medium text-forest transition-colors hover:bg-forest hover:text-cream"
                >
                  Send via Email
                </button>
              </div>

              {sent && (
                <p className="text-sm text-forest sm:col-span-2">
                  {sent === 'whatsapp'
                    ? 'Opening WhatsApp with your enquiry filled in — send it across and we\'ll reply as soon as we can.'
                    : 'Opening your email app with the enquiry filled in — just hit send.'}
                </p>
              )}
            </form>
          </div>

          {/* Direct contact + map */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl text-ink">Prefer to reach us directly?</h2>
            <div className="mt-6">
              <ContactCTAs stack />
            </div>

            <div className="mt-10">
              <MapPlaceholder />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
