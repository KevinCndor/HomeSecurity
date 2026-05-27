import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import WaIcon from "@/components/WaIcon";
import { WA_HOME, PHONE_DISPLAY, EMAIL, ADDRESS } from "@/lib/constant";

const services = [
  "Cámaras de Seguridad",
  "Sistemas de Alarmas",
  "Control de Acceso",
  "Video Porteros y Citófonos",
  "Cercas Eléctricas",
  "Detección de Incendios",
  "Redes y Cableado",
  "Puertas Automáticas",
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <div className="relative w-[180px] h-[59px] logo-soft">
                <Image
                  src="/images/logo.png"
                  alt="Home Security — Seguridad Electrónica"
                  fill
                  sizes="180px"
                  className="object-cover object-right"
                />
              </div>
            </Link>
            <div className="flex items-center gap-2.5 mb-4">
            </div>
            <p className="text-white/50 font-body text-sm leading-relaxed max-w-xs mb-3">
              Innovación, tecnología y confianza para tu tranquilidad. Protegemos lo que más te importa en todo Ecuador.
            </p>
            <p className="text-white/25 font-body text-xs italic mb-5">"Protegemos lo que más te importa"</p>
            <a href={WA_HOME} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#20bd5a] font-body font-medium text-sm transition-colors">
              <WaIcon className="w-4 h-4" />
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide uppercase">Servicios</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/servicios" className="text-white/45 hover:text-cobalt-400 font-body text-sm transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide uppercase">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/45 text-sm font-body">
                <MapPin className="w-4 h-4 text-cobalt-400 mt-0.5 shrink-0" />{ADDRESS}
              </li>
              <li className="flex items-center gap-2 text-white/45 text-sm font-body">
                <Phone className="w-4 h-4 text-cobalt-400 shrink-0" />{PHONE_DISPLAY}
              </li>
              <li className="flex items-center gap-2 text-white/45 text-sm font-body">
                <Mail className="w-4 h-4 text-cobalt-400 shrink-0" />{EMAIL}
              </li>
            </ul>
            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-white/30 text-xs font-body mb-1">Horario de atención</p>
              <p className="text-white/55 text-sm font-body">Lun–Sáb: 8:00 – 18:00</p>
              <p className="text-white/55 text-sm font-body">Soporte 24/7 para clientes</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs font-body">
            © {new Date().getFullYear()} Home Security — Seguridad Electrónica. Ecuador.
          </p>
          <p className="text-white/20 text-xs font-body">Innovación · Tecnología · Confianza</p>
        </div>
      </div>
    </footer>
  );
}
