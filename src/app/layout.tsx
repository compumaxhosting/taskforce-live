import type { Metadata } from "next";
import { Space_Grotesk, Open_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Taskforce Interiors | Complete Interior Fit-out Solutions",
  description:
    "Taskforce Interiors specializes in delivering complete interior fit-out solutions that transform empty spaces into functional, aesthetically refined environments.",
  openGraph: {
    title: "Taskforce Interiors | Interior Fit-out Experts",
    description:
      "We deliver bespoke interior fit-out solutions tailored to your vision — transforming spaces into functional and refined environments.",
    url: "https://taskforceinteriors.com",
    siteName: "Taskforce Interiors",
    images: [
      {
        url: "/og-image.jpg", // replace with your logo or banner path
        width: 1200,
        height: 630,
        alt: "Taskforce Interiors",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taskforce Interiors | Interior Fit-out Experts",
    description:
      "Transforming spaces into functional, aesthetically refined environments.",
    images: ["/og-image.jpg"], // same as above
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${openSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
