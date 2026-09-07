export default function Hero() {
  return (
    /* HERO — main pitch. Edit headline, tagline, and CTA label below. */
    <section
      id="top"
      className="hero-glow relative flex min-h-svh flex-col justify-end overflow-hidden px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-accent">
          Freelance video editor
        </p>

        <h1 className="font-display max-w-4xl text-5xl font-extrabold leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          Cuts that
          <span className="block text-accent">hold attention.</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
          Premium editing for YouTube creators and brands — pacing, color, and
          motion that make the work feel expensive.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold tracking-wide text-background transition-transform hover:scale-[1.03] hover:bg-accent-dim"
          >
            Book an edit
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            View selected work
          </a>
        </div>

        <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted">Focus</dt>
            <dd className="mt-1 font-display text-lg font-semibold">YouTube &amp; Reels</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted">Craft</dt>
            <dd className="mt-1 font-display text-lg font-semibold">Color &amp; Motion</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted">Outcome</dt>
            <dd className="mt-1 font-display text-lg font-semibold">Growth</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
