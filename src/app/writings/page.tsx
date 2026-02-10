import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writings",
};

const articles = [
  {
    title: "Building a Portfolio with Next.js and GitHub Pages",
    description:
      "A walkthrough of how I set up this portfolio site using Next.js static export and deployed it to GitHub Pages.",
    date: "2025-01-15",
    slug: "#",
  },
  {
    title: "Why TypeScript Makes You a Better Developer",
    description:
      "Exploring how static typing improves code quality, developer experience, and long-term maintainability.",
    date: "2024-12-01",
    slug: "#",
  },
  {
    title: "A Practical Guide to Tailwind CSS",
    description:
      "Tips and patterns for getting the most out of utility-first CSS without sacrificing readability.",
    date: "2024-10-20",
    slug: "#",
  },
  {
    title: "Lessons Learned from Open Source Contributions",
    description:
      "Reflections on contributing to open-source projects and what I&apos;ve picked up along the way.",
    date: "2024-09-05",
    slug: "#",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Writings() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Writings
      </h1>
      <p className="mb-12 text-muted">
        Thoughts on development, design, and technology.
      </p>

      <div className="divide-y divide-card-border">
        {articles.map((article) => (
          <Link
            key={article.title}
            href={article.slug}
            className="group block py-6 first:pt-0"
          >
            <time className="text-xs text-muted">{formatDate(article.date)}</time>
            <h2 className="mt-1 text-lg font-semibold text-foreground group-hover:text-accent">
              {article.title}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
