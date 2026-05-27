"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import WaIcon from "@/components/WaIcon";
import { WA_HOME, PHONE_HREF, PHONE_DISPLAY } from "@/lib/constant";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Cotización" },
];



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/95 backdrop-blur-md border-b border-surface-300 shadow-sm"
        : "bg-white/80 backdrop-blur-sm border-b border-surface-200"
      }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative w-[160px] h-[53px] lg:w-[200px] lg:h-[66px] logo-soft">
              <Image
                src="/images/logo1.png"
                alt="Home Security — Seguridad Electrónica"
                fill
                sizes="220px"
                className="object-cover object-right"
                priority
              />
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
            <a href={PHONE_HREF}
              className="flex items-center gap-2 text-navy-800/60 hover:text-navy-900 transition-colors text-sm font-body">
              <div className="w-7 h-7 bg-cobalt-500/10 rounded-lg flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-cobalt-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              {PHONE_DISPLAY}
            </a>
            <a href={WA_HOME} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-5 py-2.5">
              <WaIcon className="w-4 h-4" />
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
            <a href={PHONE_HREF} className="flex items-center gap-2 text-navy-800/60 font-body text-sm py-1">
              📞 {PHONE_DISPLAY}
            </a>
            <a href={WA_HOME} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center mt-1">
              Cotiza por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
