import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "michipepper | Portfolio",
  description: "Developer portfolio of michipepper. Projects, skills, and contact info.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
