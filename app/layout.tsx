import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "www.example.com");

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
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Home Security Ecuador" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" data-scroll-behavior="smooth" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-surface-100 text-navy-900 antialiased">
        <Navbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
