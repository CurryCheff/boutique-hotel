import { Link } from 'react-router-dom'
import Parallax from '../components/Parallax'
import Reveal from '../components/Reveal'
import ContactCTAs from '../components/ContactCTAs'
import SkeletonImage from '../components/SkeletonImage'
import { rooms, amenities, images, hotel, waLink } from '../data/hotel'

export default function Home() {
  return (
    <div>
      <Parallax
        src={images.heroExterior}
        alt="Msasa House exterior, a converted 1950s home in Highlands, Harare"
        heightClass="h-[92vh] min-h-[620px]"
        overlayClass="bg-gradient-to-b from-forest-deep/55 via-forest-deep/25 to-forest-deep/60"
        amount={14}
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center text-cream">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cream/70">
            {hotel.suburb}, {hotel.city}
          </p>
          <h1 className="font-display mt-5 text-4xl leading-tight sm:text-6xl">
            {hotel.name}
          </h1>
          <p className="mt-5 max-w-xl text-base text-cream/85 sm:text-lg">
            Nine rooms in a converted 1950s house and garden wing. Five minutes
            from Sam Levy's, twenty from the airport, and quiet enough to hear
            the msasa leaves turn.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink("Hi Msasa House, I'd like to check availability.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-rust px-8 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-rust-dark"
            >
              Enquire on WhatsApp
            </a>
            <a
              href={hotel.phoneHref}
              className="rounded-full border border-cream/50 px-8 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-cream/10"
            >
              Call {hotel.phoneDisplay}
            </a>
          </div>
        </div>
      </Parallax>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <Reveal>
          <p className="font-display text-2xl leading-relaxed text-ink sm:text-3xl">
            The house was built in 1953 and has been a guesthouse since 2011 —
            we kept the verandah, the jacaranda at the gate, and most of the
            original floors. Nine rooms across the main house and a smaller
            garden wing, run by a front-desk team that's mostly been here
            longer than the current owners.
          </p>
        </Reveal>
      </section>

      {/* Rooms snapshot */}
      <section className="bg-stone/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-rust">
                Where you'll sleep
              </p>
              <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
                Four room types, no two alike
              </h2>
            </div>
            <Link
              to="/rooms"
              className="text-sm font-medium text-forest underline decoration-rust/40 underline-offset-4 hover:text-rust"
            >
              See full rates & specs →
            </Link>
          </div>

          <Reveal className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rooms.map((room) => (
              <Link
                key={room.slug}
                to={`/rooms#${room.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <SkeletonImage
                  src={room.image}
                  alt={room.name}
                  className="aspect-[4/5]"
                  imgClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg text-ink">{room.name}</h3>
                  <p className="mt-1 text-xs text-ink/50">
                    {room.bed} · {room.size}
                  </p>
                  <p className="mt-auto pt-4 text-sm font-medium text-rust">
                    from ${room.priceFrom} / night
                  </p>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Parallax divider */}
      <Parallax
        src={images.jacaranda}
        alt="Jacaranda tree in bloom"
        heightClass="h-[46vh] min-h-[320px]"
        overlayClass="bg-forest-deep/30"
        amount={20}
      />

      {/* Amenities / dining highlight */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-rust">
            Beyond the room
          </p>
          <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
            Breakfast, a pool, and somewhere quiet to work
          </h2>
        </div>

        <div className="mt-14 flex flex-col gap-16">
          {amenities.slice(0, 3).map((item, i) => (
            <Reveal
              key={item.name}
              className={`flex flex-col gap-8 md:items-center lg:gap-14 ${
                i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              <SkeletonImage
                src={item.image}
                alt={item.name}
                className="aspect-[16/11] w-full rounded-2xl md:w-1/2"
                imgClassName="object-cover"
              />
              <div className="md:w-1/2">
                <h3 className="font-display text-2xl text-ink">{item.name}</h3>
                <p className="mt-4 text-base leading-relaxed text-ink/70">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/rooms"
            className="text-sm font-medium text-forest underline decoration-rust/40 underline-offset-4 hover:text-rust"
          >
            See all amenities & conferencing →
          </Link>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="bg-forest py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-cream/60">
            Ready when you are
          </p>
          <h2 className="font-display mt-3 text-3xl text-cream sm:text-4xl">
            Send us your dates
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">
            No booking engine, no hold fees — tell us when you're coming and
            how many, and we'll confirm what's free.
          </p>
          <div className="mt-10">
            <ContactCTAs />
          </div>
          <Link
            to="/contact"
            className="mt-8 inline-block text-sm font-medium text-gold underline underline-offset-4 hover:text-cream"
          >
            Or send a full enquiry form →
          </Link>
        </div>
      </section>
    </div>
  )
}
