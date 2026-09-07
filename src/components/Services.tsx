const services = [
  {
    num: "01",
    title: "YouTube editing",
    copy: "Long-form cuts with tight pacing, pattern interrupts, and retention-first structure so viewers stay through the end.",
  },
  {
    num: "02",
    title: "Reels & Shorts",
    copy: "Hook-in-the-first-second vertical edits built for the feed — captions, jump cuts, and sound design included.",
  },
  {
    num: "03",
    title: "Color grading",
    copy: "Cinematic looks that match the brand. From clean creator grades to stylized looks that feel like a film, not a filter.",
  },
  {
    num: "04",
    title: "Motion graphics",
    copy: "Lower thirds, intros, kinetic type, and brand packages that make the cut feel finished — not just assembled.",
  },
];

export default function Services() {
  return (
    /* SERVICES — update titles and copy in the `services` array above. */
    <section id="services" className="scroll-mt-24 border-t border-border px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">What I do</p>
            <h2 className="font-display mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              The full post stack
            </h2>
          </div>
          <p className="max-w-sm text-muted">
            From raw footage to a publish-ready piece — one editor, one standard.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((item) => (
            <article
              key={item.num}
              className="group rounded-2xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-accent/60"
            >
              <span className="font-display text-sm tracking-widest text-accent">{item.num}</span>
              <h3 className="font-display mt-4 text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
