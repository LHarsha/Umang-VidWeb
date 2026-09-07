export default function Contact() {
  return (
    /* CONTACT — update email and social hrefs before going live. */
    <section id="contact" className="scroll-mt-24 border-t border-border px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent">Start a project</p>
        <h2 className="font-display mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Send the footage.
          <span className="block text-accent">We’ll make it land.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted">
          New YouTube series, a reel pack, or a full grade — tell me the goal and the deadline.
        </p>

        <a
          href="mailto:hello@beaztmotions.com"
          className="font-display mt-10 inline-block text-2xl font-semibold text-foreground underline decoration-accent/40 decoration-2 underline-offset-8 transition-colors hover:text-accent hover:decoration-accent sm:text-3xl"
        >
          hello@beaztmotions.com
        </a>

        <ul className="mt-12 flex flex-wrap gap-3">
          {[
            { label: "Instagram", href: "https://instagram.com" },
            { label: "YouTube", href: "https://youtube.com" },
            { label: "X", href: "https://x.com" },
          ].map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-border px-5 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
