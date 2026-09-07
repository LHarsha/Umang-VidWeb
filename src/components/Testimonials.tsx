const quotes = [
  {
    quote:
      "Retention jumped the week we switched. The cuts feel like they were made by someone who actually watches YouTube.",
    name: "Aisha Rahman",
    role: "Creator · 840K subs",
  },
  {
    quote:
      "Brand films that don’t look like ads. Color, type, and pacing were locked in two rounds — rare for this kind of work.",
    name: "Leo Park",
    role: "Founder, Northline Studio",
  },
  {
    quote:
      "Shorts that actually convert. Hooks, captions, and sound design came as a package, not extras.",
    name: "Maya Cole",
    role: "Head of Content, Lumen",
  },
];

export default function Testimonials() {
  return (
    /* TESTIMONIALS — sample quotes. Replace names, roles, and copy in `quotes`. */
    <section id="testimonials" className="scroll-mt-24 border-t border-border px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">Clients</p>
        <h2 className="font-display mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          On the other side of the timeline
        </h2>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {quotes.map((item) => (
            <blockquote
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-accent/50"
            >
              <p className="text-lg leading-relaxed text-foreground/90">“{item.quote}”</p>
              <footer className="mt-8 border-t border-border pt-5">
                <cite className="not-italic">
                  <span className="block font-display font-semibold">{item.name}</span>
                  <span className="mt-1 block text-sm text-muted">{item.role}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
