import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

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

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        About
      </h1>
      <p className="mb-12 text-muted">A bit more about me and what I do.</p>

      <div className="space-y-6 text-base leading-relaxed text-muted">
        <p>
          I&apos;m a developer with a focus on building clean, efficient, and
          user-friendly applications. I enjoy working across the full stack,
          from crafting intuitive interfaces to designing robust backend
          systems.
        </p>
        <p>
          My approach to development is grounded in simplicity and
          intentionality. I believe that the best software is the kind that
          gets out of the user&apos;s way &mdash; fast, reliable, and easy to
          understand. I aim to write code that is maintainable, well-tested,
          and a pleasure for other developers to work with.
        </p>
        <p>
          When I&apos;m not coding, you can find me exploring new
          technologies, contributing to open-source projects, reading about
          software architecture, or learning something entirely new. I&apos;m
          always looking for interesting problems to solve and people to
          collaborate with.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          Technologies I work with
        </h2>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-4">
          {skills.map((skill) => (
            <li
              key={skill}
              className="text-sm text-muted before:mr-2 before:text-accent before:content-['—']"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          Get in touch
        </h2>
        <p className="text-sm text-muted">
          I&apos;m always open to new opportunities, collaborations, or just a
          friendly chat. Feel free to reach out at{" "}
          <a
            href="mailto:hello@michipepper.com"
            className="text-accent underline underline-offset-2 hover:text-accent-hover"
          >
            hello@michipepper.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
