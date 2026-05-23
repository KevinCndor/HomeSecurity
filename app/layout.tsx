import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Home Security — Seguridad Electrónica en Quito",
  description:
    "Cámaras, alarmas, control de acceso, cercas eléctricas y más. Protegemos lo que más te importa. Cotización gratis por WhatsApp.",
  keywords: "seguridad electrónica Quito, cámaras de seguridad, sistemas de alarmas, control de acceso, cercas eléctricas, video portero",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
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
