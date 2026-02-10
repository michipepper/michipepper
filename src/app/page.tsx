import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start justify-center px-6 py-24 sm:py-32">
      <p className="mb-4 text-sm font-medium text-accent">Hi, I&apos;m</p>
      <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl">
        michipepper
      </h1>
      <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted">
        Developer &amp; creator. I build clean, efficient applications for the
        web and beyond. I care about thoughtful design, performance, and
        writing code that lasts.
      </p>
      <div className="flex gap-4">
        <Link
          href="/works"
          className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          View Works
        </Link>
        <Link
          href="/about"
          className="rounded-md border border-card-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted-light"
        >
          About Me
        </Link>
      </div>
    </section>
  );
}
