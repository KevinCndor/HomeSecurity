import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Syne, DM_Sans } from "next/font/google";

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://home-security-orpin.vercel.app");

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Home Security — Seguridad Electrónica en Ecuador",
  description:
    "Cámaras, alarmas, control de acceso, cercas eléctricas y más. Protegemos lo que más te importa en todo Ecuador. Cotización gratis por WhatsApp.",
  keywords: "seguridad electrónica Ecuador, cámaras de seguridad, sistemas de alarmas, control de acceso, cercas eléctricas, video portero",
  openGraph: {
    title: "Home Security — Seguridad Electrónica en Ecuador",
    description: "Cámaras, alarmas, cercas eléctricas y más. Cotización GRATIS por WhatsApp. Respondemos en menos de 1 hora en todo Ecuador.",
    url: siteUrl,
    siteName: "Home Security",
    locale: "es_EC",
    type: "website",
    images: [
      { url: new URL("/images/og-image.png", siteUrl).toString(), width: 1200, height: 630, alt: "Home Security Ecuador" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Security — Seguridad Electrónica en Ecuador",
    description:
      "Cámaras, alarmas, control de acceso y cercas eléctricas. Cotización gratis por WhatsApp. Respondemos en menos de 1 hora en todo Ecuador.",
    images: [new URL("/images/og-image.png", siteUrl).toString()],
  },
};

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-dm",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F430208%2Fpexels-photo-430208.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D800&w=750&q=75"
          fetchPriority="high"
        />
        <meta name="robots" content="index,follow" />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Home Security",
              description:
                "Cámaras, alarmas, control de acceso y cercas eléctricas en todo Ecuador. Cotización gratis por WhatsApp.",
              url: siteUrl.toString(),
              telephone: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "",
              logo: new URL("/images/og-image.png", siteUrl).toString(),
              address: { "@type": "PostalAddress", addressCountry: "EC" },
            }),
          }}
        />
      </head>
      <body className={`${syne.variable} ${dmSans.variable} font-body bg-surface-100 text-navy-900 antialiased`}>
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
