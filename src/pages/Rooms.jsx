import Parallax from '../components/Parallax'
import Reveal from '../components/Reveal'
import SkeletonImage from '../components/SkeletonImage'
import { rooms, amenities, practical, images, waLink } from '../data/hotel'

const dividers = [images.jacaranda, images.pool, images.bedroomWindow]

export default function Rooms() {
  return (
    <div>
      <Parallax
        src={images.lobby}
        alt="Msasa House entrance hall"
        heightClass="h-[52vh] min-h-[380px]"
        overlayClass="bg-forest-deep/45"
        amount={16}
      >
        <div className="px-6 text-center text-cream">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cream/70">
            Rooms &amp; Amenities
          </p>
          <h1 className="font-display mt-4 text-4xl sm:text-5xl">
            Four rooms, one house
          </h1>
        </div>
      </Parallax>

      {/* Room sections */}
      <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
        <div className="flex flex-col">
          {rooms.map((room, i) => (
            <div key={room.slug}>
              <Reveal
                id={room.slug}
                className={`flex scroll-mt-24 flex-col gap-10 py-6 lg:items-center lg:gap-16 ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                <SkeletonImage
                  src={room.image}
                  alt={room.name}
                  className="aspect-[4/3] w-full rounded-2xl lg:w-1/2"
                  imgClassName="object-cover"
                />
                <div className="lg:w-1/2">
                  <h2 className="font-display text-3xl text-ink">{room.name}</h2>
                  <p className="mt-2 text-sm font-medium text-rust">
                    from ${room.priceFrom} / night
                  </p>

                  <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-ink/40">Bed</dt>
                      <dd className="mt-0.5 text-ink/80">{room.bed}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-ink/40">Size</dt>
                      <dd className="mt-0.5 text-ink/80">{room.size}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-ink/40">Occupancy</dt>
                      <dd className="mt-0.5 text-ink/80">{room.occupancy}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-wide text-ink/40">View</dt>
                      <dd className="mt-0.5 text-ink/80">{room.view}</dd>
                    </div>
                  </dl>

                  <p className="mt-6 text-base leading-relaxed text-ink/70">
                    {room.blurb}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {room.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full border border-stone-dark px-3 py-1 text-xs text-ink/70"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(
                      `Hi Msasa House, I'd like to enquire about the ${room.name}.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-block rounded-full bg-forest px-7 py-3 text-sm font-medium text-cream transition-colors hover:bg-forest-deep"
                  >
                    Enquire about this room
                  </a>
                </div>
              </Reveal>

              {i < rooms.length - 1 && (
                <Parallax
                  src={dividers[i % dividers.length]}
                  heightClass="h-[34vh] min-h-[220px]"
                  overlayClass="bg-forest-deep/25"
                  amount={16}
                  className="my-16 rounded-2xl"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-stone/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-widest text-rust">
              Amenities
            </p>
            <h2 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
              Dining, conferencing, and the pool
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {amenities.map((item) => (
              <Reveal
                key={item.name}
                className="flex flex-col overflow-hidden rounded-2xl bg-white"
              >
                <SkeletonImage
                  src={item.image}
                  alt={item.name}
                  className="aspect-[16/9]"
                  imgClassName="object-cover"
                />
                <div className="p-7">
                  <h3 className="font-display text-xl text-ink">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Practical */}
          <div className="mt-16">
            <h3 className="font-display text-xl text-ink">The practical stuff</h3>
            <Reveal className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {practical.map((p) => (
                <div key={p.label} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                  <div>
                    <p className="text-sm font-medium text-ink">{p.label}</p>
                    <p className="text-sm text-ink/60">{p.detail}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
