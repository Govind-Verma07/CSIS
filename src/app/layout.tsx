import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSIS – Computer Science & Innovation Society",
  description:
    "Building Innovation. Enabling Virtual Learning. The official website of CSIS and Prayukti-VLab.",
  keywords: ["CSIS", "Prayukti-VLab", "Virtual Lab", "Technical Society", "Innovation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
