const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with Next.js and Tailwind CSS, deployed on GitHub Pages.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/michipepper/michipepper",
  },
  {
    title: "Project Two",
    description:
      "A sample project showcasing modern web development patterns and best practices.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Project Three",
    description:
      "An open-source tool designed to streamline developer workflows and boost productivity.",
    tags: ["Python", "CLI", "Open Source"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-2 font-mono text-sm text-accent">02.</h2>
      <h3 className="mb-8 text-3xl font-bold text-foreground">Projects</h3>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-xl border border-card-border bg-card-bg p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
          >
            <div className="mb-4 text-accent">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
            </div>
            <h4 className="mb-2 text-lg font-semibold text-foreground group-hover:text-accent">
              {project.title}
            </h4>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
