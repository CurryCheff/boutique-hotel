import { hotel, waLink } from '../data/hotel'

const items = [
  {
    label: 'Call the front desk',
    value: hotel.phoneDisplay,
    href: hotel.phoneHref,
    note: 'Answered 7am–9pm daily',
    icon: (
      <path d="M4 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 12l5 2v4a2 2 0 0 1-2 2C9.5 20 3 13.5 3 5a2 2 0 0 1 1-2Z" />
    ),
  },
  {
    label: 'WhatsApp',
    value: hotel.whatsappDisplay,
    href: waLink("Hi Msasa House, I'd like to make an enquiry."),
    note: 'Usually replies within the hour',
    external: true,
    icon: (
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Zm0 16.2a7.2 7.2 0 0 1-3.7-1l-.3-.2-2.7.7.7-2.6-.2-.3A7.2 7.2 0 1 1 12 19.2Zm3.9-5.4c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1s-.6.7-.8.8-.3.2-.5.1a5.8 5.8 0 0 1-1.7-1.1 6.5 6.5 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.3-.4.2-.3a.5.5 0 0 0 0-.4c-.1-.1-.5-1.3-.7-1.7-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.6.3 2.8 2.8 0 0 0-.9 2.1c0 1.2.9 2.4 1 2.6.1.1 1.8 2.8 4.4 3.9a5 5 0 0 0 2.6.5c.8-.1 1.3-.5 1.5-1a1.6 1.6 0 0 0 .1-1c-.1-.1-.2-.2-.4-.3Z" />
    ),
  },
  {
    label: 'Email',
    value: hotel.email,
    href: `mailto:${hotel.email}`,
    note: 'Best for group bookings & invoices',
    icon: (
      <path d="M3 5h18v14H3V5Zm2 2 7 6 7-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
]

export default function ContactCTAs({ stack = false }) {
  return (
    <div className={`grid gap-4 ${stack ? 'grid-cols-1' : 'sm:grid-cols-3'}`}>
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noreferrer' : undefined}
          className="group flex flex-col gap-3 rounded-2xl border border-stone-dark bg-white/60 p-6 transition-colors hover:border-rust hover:bg-white"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-forest group-hover:bg-rust/10 group-hover:text-rust">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              {item.icon}
            </svg>
          </span>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-ink/50">
              {item.label}
            </p>
            <p className="mt-1 font-display text-lg text-ink">{item.value}</p>
            <p className="mt-1 text-xs text-ink/50">{item.note}</p>
          </div>
        </a>
      ))}
    </div>
  )
}
