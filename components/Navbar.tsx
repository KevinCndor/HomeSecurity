"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Shield } from "lucide-react";

const links = [
  { href: "/",         label: "Inicio" },
  { href: "/servicios",label: "Servicios" },
  { href: "/contacto", label: "Cotización" },
];

const WHATSAPP_URL =
  "https://wa.me/593995555053?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20para%20seguridad%20electr%C3%B3nica";

function WaIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L0 24l6.335-1.502A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-4.988-1.363l-.358-.212-3.762.893.955-3.682-.233-.379A9.818 9.818 0 1112 21.818z" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-white/95 backdrop-blur-md border-b border-surface-300 shadow-sm"
        : "bg-white/80 backdrop-blur-sm border-b border-surface-200"
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-cobalt-500 to-cobalt-600 rounded-xl flex items-center justify-center shadow-[0_2px_12px_rgba(29,78,216,0.3)] group-hover:shadow-[0_2px_20px_rgba(29,78,216,0.45)] transition-shadow">
              <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <span className="block font-display font-extrabold text-sm text-navy-900 tracking-tight uppercase">Home Security</span>
              <span className="block font-body text-[10px] text-cobalt-500 tracking-widest uppercase">Seguridad Electrónica</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link key={l.href} href={l.href}
                className="font-display font-semibold text-navy-800/70 hover:text-navy-900 transition-colors text-sm tracking-wide relative group">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-cobalt-500 group-hover:w-full transition-all duration-200" />
              </Link>
            ))}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+593995555053"
              className="flex items-center gap-2 text-navy-800/60 hover:text-navy-900 transition-colors text-sm font-body">
              <div className="w-7 h-7 bg-cobalt-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-cobalt-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              0995 555 053
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-5 py-2.5">
              <WaIcon />
              Cotiza GRATIS
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-navy-800/70 hover:text-navy-900">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-surface-200 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="font-display font-semibold text-navy-800 hover:text-cobalt-500 py-2 text-base transition-colors">
                {l.label}
              </Link>
            ))}
            <a href="tel:+593995555053" className="flex items-center gap-2 text-navy-800/60 font-body text-sm py-1">
              📞 0995 555 053
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center mt-1">
              Cotiza por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
