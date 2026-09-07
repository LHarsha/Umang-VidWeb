export default function Footer() {
  return (
    /* FOOTER — year and legal line. */
    <footer className="border-t border-border px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} BeaztMotions. All rights reserved.</p>
        <p>Editing · Color · Motion</p>
      </div>
    </footer>
  );
}
