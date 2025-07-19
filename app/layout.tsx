import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Abhi's Portfolio - Full-Stack Developer",
  description: "Abhisekh Nayek's personal portfolio showcasing Full-Stack Development, UI/UX, and ambitious projects.",
  keywords: [
    "Abhisekh Nayek",
    "Full-Stack Developer",
    "Web Developer",
    "MERN Stack",
    "React Native",
    "Cloud Engineer",
    "Portfolio",
    "JavaScript",
    "Next.js",
    "UI/UX",
    "Animations",
  ],
  openGraph: {
    title: "Abhi's Portfolio - Full-Stack Developer",
    description:
      "Abhisekh Nayek's personal portfolio showcasing Full-Stack Development, UI/UX, and ambitious projects.",
    url: "https://your-portfolio-url.com",
    siteName: "Abhi's Portfolio",
    images: [
      {
        url: "/images/profile.png",
        width: 800,
        height: 600,
        alt: "Abhisekh Nayek Profile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhi's Portfolio - Full-Stack Developer",
    description:
      "Abhisekh Nayek's personal portfolio showcasing Full-Stack Development, UI/UX, and ambitious projects.",
    images: ["/images/profile.png"], 
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
