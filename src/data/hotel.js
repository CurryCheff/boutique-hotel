// Central content for Msasa House. Keeping copy here (not scattered through
// components) makes it easy for the client to review/edit without touching JSX.

export const hotel = {
  name: 'Msasa House',
  tagline: 'A nine-room guesthouse in Highlands, Harare',
  suburb: 'Highlands',
  city: 'Harare',
  addressLine1: '17 Rolf Avenue, Highlands',
  addressLine2: 'Harare, Zimbabwe',
  phoneDisplay: '+263 77 245 8890',
  phoneHref: 'tel:+263772458890',
  whatsappDisplay: '+263 77 245 8890',
  whatsappNumber: '263772458890', // wa.me format, no leading +
  email: 'stay@msasahouse.co.zw',
  mapsQuery: 'Rolf Avenue, Highlands, Harare, Zimbabwe',
}

export function waLink(prefilledText) {
  const base = `https://wa.me/${hotel.whatsappNumber}`
  return prefilledText ? `${base}?text=${encodeURIComponent(prefilledText)}` : base
}

export const images = {
  heroExterior:
    'https://images.unsplash.com/photo-1737513441823-dd966e9b514d?w=2400&q=80&auto=format&fit=crop',
  jacaranda:
    'https://images.unsplash.com/photo-1760527064081-fbc7676253c5?w=2400&q=80&auto=format&fit=crop',
  lounge:
    'https://images.unsplash.com/photo-1779729739460-d499a28cc427?w=2000&q=80&auto=format&fit=crop',
  gardenRoom:
    'https://images.unsplash.com/photo-1774280954999-9758f11f3d41?w=2000&q=80&auto=format&fit=crop',
  heritageSuite:
    'https://images.unsplash.com/photo-1774175927628-40e82ee8fe13?w=2000&q=80&auto=format&fit=crop',
  twinRoom:
    'https://images.unsplash.com/photo-1787396032419-3f26e9710244?w=2000&q=80&auto=format&fit=crop',
  verandahSuite:
    'https://images.unsplash.com/photo-1760573776062-7d2a7baeb49d?w=2000&q=80&auto=format&fit=crop',
  bathroom:
    'https://images.unsplash.com/photo-1717497043540-d45bf85e5d38?w=2000&q=80&auto=format&fit=crop',
  pool:
    'https://images.unsplash.com/photo-1781245176235-a0b22cd7aa53?w=2200&q=80&auto=format&fit=crop',
  diningTerrace:
    'https://images.unsplash.com/photo-1786609900261-2779385423ac?w=2200&q=80&auto=format&fit=crop',
  conference:
    'https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=2000&q=80&auto=format&fit=crop',
  bedroomWindow:
    'https://images.unsplash.com/photo-1731357217768-cae6e6f94d90?w=2000&q=80&auto=format&fit=crop',
  lobby:
    'https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=2000&q=80&auto=format&fit=crop',
}

export const rooms = [
  {
    slug: 'garden-room',
    name: 'Garden Room',
    image: images.gardenRoom,
    priceFrom: 105,
    size: '22m²',
    bed: 'One queen bed',
    occupancy: 'Sleeps 2',
    view: 'Faces the side garden and the msasa trees along the boundary wall',
    blurb:
      "The smallest of the rooms and the one we book out first for return guests — quiet, garden-facing, ceiling fan rather than aircon (Highlands doesn't often need it). En-suite shower, writing desk by the window.",
    features: ['En-suite shower', 'Ceiling fan', 'Writing desk', 'Free WiFi', 'Safe'],
  },
  {
    slug: 'verandah-suite',
    name: 'Verandah Suite',
    image: images.verandahSuite,
    priceFrom: 155,
    size: '32m²',
    bed: 'One king bed',
    occupancy: 'Sleeps 2',
    view: 'Private verandah opening onto the back lawn, west-facing for the evening light',
    blurb:
      'Part of the garden wing, added in 2016. Steps straight out onto your own verandah — most guests end up having their coffee out there rather than in the dining room. Roll-top bath plus a separate shower.',
    features: ['Roll-top bath + shower', 'Private verandah', 'Air conditioning', 'Free WiFi', 'Safe', 'Nespresso machine'],
  },
  {
    slug: 'msasa-suite',
    name: 'The Msasa Suite',
    image: images.heritageSuite,
    priceFrom: 210,
    size: '40m²',
    bed: 'One king four-poster bed',
    occupancy: 'Sleeps 2, extra bed available for a child',
    view: 'Corner room, windows on two sides — catches the morning sun over the garden',
    blurb:
      "The original main bedroom of the house, restored rather than redone — the four-poster is the one piece of furniture that never left. Our one true suite: separate sitting area, free-standing bath, and the only room with a mini-bar. Only one of these, so it books out weeks ahead in msasa season (August–September).",
    features: ['Free-standing bath', 'Separate sitting area', 'Mini-bar', 'Air conditioning', 'Free WiFi', 'Safe'],
  },
  {
    slug: 'twin-room',
    name: 'Twin Room',
    image: images.twinRoom,
    priceFrom: 115,
    size: '24m²',
    bed: 'Two three-quarter beds',
    occupancy: 'Sleeps 2, not interconnecting',
    view: 'Faces the driveway side, closest room to reception',
    blurb:
      "Booked mostly by colleagues travelling together for site visits or a workshop across town — it's the room closest to the front office and the easiest for late check-ins. Work desk, blackout curtains for people arriving off overnight buses or early flights.",
    features: ['En-suite shower', 'Work desk', 'Blackout curtains', 'Air conditioning', 'Free WiFi', 'Safe'],
  },
]

export const amenities = [
  {
    name: 'Breakfast & dinner',
    image: images.diningTerrace,
    description:
      "Breakfast is included and cooked to order — eggs how you want them, plus whatever's come off the garden that week (avocados most of the year, guavas in autumn). Served on the verandah when it's warm, in the dining room when it isn't. Dinner isn't a standing menu; tell reception by 3pm and the kitchen will put something together — usually Zimbabwean-influenced, sometimes not.",
  },
  {
    name: 'Garden pool',
    image: images.pool,
    description:
      'Ten metres, unheated, open October through April. Loungers under the msasa trees rather than umbrellas — most of the shade is natural. Not a lap pool for serious swimmers; it\'s there for cooling off after a day of meetings or the drive in from the airport.',
  },
  {
    name: 'Library & lounge',
    image: images.lounge,
    description:
      "The old sitting room, kept as one — bookshelves, a fireplace that gets used from June to August, and the quietest spot in the house for a call. Help-yourself tea and coffee all day.",
  },
  {
    name: 'Small conference room',
    image: images.conference,
    description:
      'Seats up to 12 boardroom-style. Used most weeks by NGOs and embassies for site-visit debriefs and small workshops — projector, whiteboard, and a separate entrance so meetings don\'t cross paths with other guests. Half and full-day rates on request.',
  },
]

export const practical = [
  { label: 'Free WiFi', detail: 'Throughout the house and garden' },
  { label: 'Backup power', detail: 'Generator covers the whole property during loadshedding' },
  { label: 'Secure parking', detail: 'Gated, on-site, guarded overnight' },
  { label: 'Airport transfers', detail: 'Arranged on request — about 25 minutes from RGM' },
  { label: 'Laundry service', detail: 'Same-day if dropped off before 9am' },
  { label: 'Airtime & data top-up', detail: 'Available at reception for Econet and NetOne' },
]

export const roomOptions = [
  ...rooms.map((r) => r.name),
  "Not sure yet — help me choose",
]
