export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center"
    >
      <p className="mb-4 font-mono text-sm text-accent">Hi, my name is</p>
      <h1 className="mb-4 text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-7xl">
        michipepper
      </h1>
      <p className="mb-8 max-w-xl text-lg text-muted">
        Developer &amp; creator. I build things for the web and beyond.
        Welcome to my portfolio.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-hover"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
