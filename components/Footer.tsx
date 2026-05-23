import Link from "next/link";
import { Shield, MapPin, Phone, Mail } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/593995555053?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20para%20seguridad%20electr%C3%B3nica";

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
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-cobalt-400 to-cobalt-500 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <span className="block font-display font-extrabold text-sm text-white tracking-tight uppercase">Home Security</span>
                <span className="block font-body text-[10px] text-cobalt-400 tracking-widest uppercase">Seguridad Electrónica</span>
              </div>
            </div>
            <p className="text-white/50 font-body text-sm leading-relaxed max-w-xs mb-3">
              Innovación, tecnología y confianza para tu tranquilidad. Protegemos lo que más te importa en Quito y sus valles.
            </p>
            <p className="text-white/25 font-body text-xs italic mb-5">"Protegemos lo que más te importa"</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#20bd5a] font-body font-medium text-sm transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L0 24l6.335-1.502A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-4.988-1.363l-.358-.212-3.762.893.955-3.682-.233-.379A9.818 9.818 0 1112 21.818z" />
              </svg>
              0995 555 053
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
                <MapPin className="w-4 h-4 text-cobalt-400 mt-0.5 shrink-0" />Quito, Ecuador
              </li>
              <li className="flex items-center gap-2 text-white/45 text-sm font-body">
                <Phone className="w-4 h-4 text-cobalt-400 shrink-0" />0995 555 053
              </li>
              <li className="flex items-center gap-2 text-white/45 text-sm font-body">
                <Mail className="w-4 h-4 text-cobalt-400 shrink-0" />info@homesecurity.ec
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
            © {new Date().getFullYear()} Home Security — Seguridad Electrónica. Quito, Ecuador.
          </p>
          <p className="text-white/20 text-xs font-body">Innovación · Tecnología · Confianza</p>
        </div>
      </div>
    </footer>
  );
}
