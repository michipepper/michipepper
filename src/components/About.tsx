export default function About() {
  const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Git",
    "Python",
    "SQL",
  ];

  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-2 font-mono text-sm text-accent">01.</h2>
      <h3 className="mb-8 text-3xl font-bold text-foreground">About Me</h3>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            I&apos;m a passionate developer who loves building clean, efficient,
            and user-friendly applications. I enjoy tackling complex problems and
            turning ideas into reality through code.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring new technologies,
            contributing to open-source projects, or learning something new.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold text-foreground">
            Technologies I work with:
          </h4>
          <ul className="grid grid-cols-2 gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2 font-mono text-sm text-muted"
              >
                <span className="text-accent">&#9656;</span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
