const pieces = [
  {
    title: "Creator documentary cut",
    meta: "YouTube · 18 min",
    tone: "from-[#2a1a12] to-[#0d0d0f]",
  },
  {
    title: "Brand reel — launch week",
    meta: "Reels · 0:32",
    tone: "from-[#1a2230] to-[#0d0d0f]",
  },
  {
    title: "Talking-head series grade",
    meta: "Color · 12 eps",
    tone: "from-[#241820] to-[#0d0d0f]",
  },
  {
    title: "Motion pack — kinetic type",
    meta: "Motion · package",
    tone: "from-[#1c2418] to-[#0d0d0f]",
  },
  {
    title: "Podcast to YouTube",
    meta: "YouTube · 24 min",
    tone: "from-[#1a1a28] to-[#0d0d0f]",
  },
  {
    title: "Product drop short",
    meta: "Shorts · 0:21",
    tone: "from-[#2a2010] to-[#0d0d0f]",
  },
];

export default function Portfolio() {
  return (
    /* PORTFOLIO — styled thumbnail placeholders.
       Replace each card inner gradient with <video> or <img> later.
       Update titles/meta in the `pieces` array. */
    <section id="work" className="scroll-mt-24 border-t border-border px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">Selected work</p>
          <h2 className="font-display mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Frames from the cut
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            Placeholder thumbnails for now — swap these for real stills or embeds when the
            reel is ready.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pieces.map((piece) => (
            <article key={piece.title} className="group cursor-pointer">
              <div
                className={`relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br ${piece.tone} ring-1 ring-border transition-transform duration-500 group-hover:scale-[1.02] group-hover:ring-accent/50`}
              >
                {/* Fake “thumbnail” bars — delete when real media is in */}
                <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                  <div className="absolute left-[12%] top-[20%] h-[42%] w-[28%] rounded-sm bg-white/20" />
                  <div className="absolute right-[10%] top-[28%] h-[18%] w-[40%] rounded-sm bg-white/10" />
                  <div className="absolute bottom-[16%] left-[12%] right-[12%] h-1 rounded-full bg-white/25" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/40 text-foreground backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M8 5.5v13l11-6.5L8 5.5z" />
                    </svg>
                  </span>
                </div>
              </div>
              <h3 className="font-display mt-4 text-lg font-semibold">{piece.title}</h3>
              <p className="mt-1 text-sm text-muted">{piece.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
