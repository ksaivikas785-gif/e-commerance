export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="spotlight-beams">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-24 md:py-32">
        <p className="font-tag text-xs uppercase tracking-[0.3em] text-coral">Fall / Winter drop</p>

        <h1 className="font-display text-6xl leading-[0.95] text-ink sm:text-7xl md:text-8xl">
          FASHION THAT
          <br />
          SPEAKS FIRST
        </h1>

        <p className="max-w-md font-body text-base text-dim">
          Sharp silhouettes, honest fabrics, no noise. The new collection is built for people who
          dress like they mean it.
        </p>

        <div className="flex flex-wrap gap-4">
          
            href="#shop"
            className="rounded-full bg-violet px-8 py-3 font-body text-sm font-semibold text-ink transition hover:bg-coral"
          >
            Shop the drop
          </a>
          
            href="#shop"
            className="rounded-full border border-line px-8 py-3 font-body text-sm font-semibold text-ink transition hover:border-ink"
          >
            View lookbook
          </a>
        </div>
      </div>
    </section>
  )
}