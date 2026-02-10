export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h2 className="mb-2 font-mono text-sm text-accent">03.</h2>
      <h3 className="mb-6 text-3xl font-bold text-foreground">Get In Touch</h3>
      <p className="mb-8 text-muted leading-relaxed">
        I&apos;m always open to new opportunities, collaborations, or just a
        friendly chat. Feel free to reach out and I&apos;ll get back to you as
        soon as I can.
      </p>
      <a
        href="mailto:hello@michipepper.com"
        className="inline-block rounded-full border border-accent px-8 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
      >
        Say Hello
      </a>
    </section>
  );
}
