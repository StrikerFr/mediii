import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@/styles.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "MediKiosk - Voice-first patient check-in",
  description:
    "MediKiosk lets patients describe their concern by speaking, in Hindi or English, and prepares a clear case for the clinician.",
  authors: [{ name: "MediKiosk" }],
  openGraph: {
    siteName: "MediKiosk",
    title: "MediKiosk - Voice-first patient check-in",
    description: "Speak your concern in Hindi or English. Your clinician receives a clear case.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Anek+Devanagari:wght@400;500;600;700&display=swap"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
