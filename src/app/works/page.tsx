import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works",
};

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
  {
    title: "Project Four",
    description:
      "A mobile-first web application with real-time data synchronization and offline support.",
    tags: ["TypeScript", "Firebase", "PWA"],
    link: "#",
  },
  {
    title: "Project Five",
    description:
      "REST API service with authentication, rate limiting, and comprehensive documentation.",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "#",
  },
  {
    title: "Project Six",
    description:
      "Data visualization dashboard for monitoring and analyzing key performance metrics.",
    tags: ["D3.js", "React", "WebSockets"],
    link: "#",
  },
];

export default function Works() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Works
      </h1>
      <p className="mb-12 text-muted">
        A selection of projects I&apos;ve built and contributed to.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-lg border border-card-border bg-card-bg p-6 transition-all hover:border-muted hover:shadow-sm"
          >
            <div className="mb-3 text-muted">
              <svg
                className="h-6 w-6"
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
            <h2 className="mb-2 text-base font-semibold text-foreground group-hover:text-accent">
              {project.title}
            </h2>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted-light px-2.5 py-0.5 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
