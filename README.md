# Msasa House

Demo site for a boutique guesthouse in Highlands, Harare — three pages
(Home, Rooms & Amenities, Contact & Booking) built to show how a small,
independently run property could present itself online without falling
back on generic hospitality-site language.

## Stack

- React + Vite
- Tailwind CSS v4
- GSAP ScrollTrigger — slow, deliberate parallax on the hero and section
  dividers
- animejs `3.2.2` (pinned) — triggered entrance animations (scroll
  reveals, mobile menu)
- React Router — client-side routing across the three pages

## Running locally

```bash
npm install
npm run dev
```

## Notes

- All content (room types, rates, amenities, contact details) lives in
  [`src/data/hotel.js`](src/data/hotel.js) so it can be edited without
  touching component code.
- There's no booking backend — the enquiry form on the Contact page opens
  a pre-filled WhatsApp message or email instead of submitting anywhere.
- Images are sourced from Unsplash for demo purposes and should be
  replaced with real property photography before this goes live.
