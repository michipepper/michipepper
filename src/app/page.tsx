import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-24 text-center sm:py-32">
      <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl">
        Benvenuto nel mio portfolio
      </h1>
      <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted">
        Scopri i miei lavori, leggi i miei scritti e conosci chi sono.
      </p>
      <nav className="flex flex-wrap justify-center gap-4">
        <Link
          href="/works"
          className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Works
        </Link>
        <Link
          href="/about"
          className="rounded-md border border-card-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted-light"
        >
          About
        </Link>
        <Link
          href="/writings"
          className="rounded-md border border-card-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted-light"
        >
          Writings
        </Link>
      </nav>
    </section>
  );
}
