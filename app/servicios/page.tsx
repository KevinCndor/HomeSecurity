import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import WaIcon from "@/components/WaIcon";
import { Phone, ArrowRight } from "lucide-react";

import { WA_SERVICIOS, PHONE_HREF, PHONE_DISPLAY, waService } from "@/lib/constant";
import { serviceDetails } from "@/lib/serviceDetails";

export const metadata = {
  title: "Servicios — Home Security | Cámaras, Alarmas y Control de Acceso",
  description: "Diseñamos, instalamos y mantenemos sistemas de seguridad: cámaras, alarmas, control de acceso y más en todo Ecuador.",
};

type ColorKey = "cobalt" | "orange" | "indigo" | "emerald" | "amber" | "red" | "sky" | "violet";

const colorMap: Record<ColorKey, { bg: string; border: string; text: string; badge: string; dot: string }> = {
  cobalt:  { bg: "bg-cobalt-500/10",  border: "border-cobalt-500/20",  text: "text-cobalt-600",  badge: "bg-cobalt-50  border-cobalt-200",  dot: "bg-cobalt-500"  },
  orange:  { bg: "bg-orange-500/10",  border: "border-orange-500/20",  text: "text-orange-600",  badge: "bg-orange-50  border-orange-200",  dot: "bg-orange-500"  },
  indigo:  { bg: "bg-indigo-500/10",  border: "border-indigo-500/20",  text: "text-indigo-600",  badge: "bg-indigo-50  border-indigo-200",  dot: "bg-indigo-500"  },
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-600", badge: "bg-emerald-50 border-emerald-200", dot: "bg-emerald-500" },
  amber:   { bg: "bg-amber-500/10",   border: "border-amber-500/20",   text: "text-amber-600",   badge: "bg-amber-50   border-amber-200",   dot: "bg-amber-500"   },
  red:     { bg: "bg-red-500/10",     border: "border-red-500/20",     text: "text-red-600",     badge: "bg-red-50     border-red-200",     dot: "bg-red-500"     },
  sky:     { bg: "bg-sky-500/10",     border: "border-sky-500/20",     text: "text-sky-600",     badge: "bg-sky-50     border-sky-200",     dot: "bg-sky-500"     },
  violet:  { bg: "bg-violet-500/10",  border: "border-violet-500/20",  text: "text-violet-600",  badge: "bg-violet-50  border-violet-200",  dot: "bg-violet-500"  },
};

export default function ServiciosPage() {
  return (
    <main className="bg-surface-100 min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt-500/20 to-transparent" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cobalt-500/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="section-tag justify-center">Soluciones Integrales</span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy-900 mb-5">
            8 servicios para una<br />
            <span className="gradient-text">protección total</span>
          </h1>
          <p className="font-body text-navy-800/55 text-xl max-w-2xl mx-auto">
            Diseñamos, instalamos y mantenemos sistemas a la medida de tu hogar o negocio en todo Ecuador.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href={WA_SERVICIOS} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WaIcon />Cotizar por WhatsApp
            </a>
            <a href={PHONE_HREF} className="btn-secondary">
              <Phone className="w-4 h-4" />{PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Service details */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {serviceDetails.map(({ id, icon: Icon, color, title, subtitle, desc, features, image, alt }, idx) => {
            const c = colorMap[color as ColorKey];
            const isEven = idx % 2 === 0;

            return (
              <div
                key={id}
                id={id}
                className="scroll-mt-24 bg-white border border-surface-200 rounded-3xl shadow-sm overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2`}>

                  {/* Image side */}
                  <div className={`relative min-h-[320px] lg:min-h-[480px] ${isEven ? "" : "lg:order-2"}`}>
                    <Image
                      src={image}
                      alt={alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/10 to-transparent" />

                    {/* Number badge */}
                    <div className="absolute top-6 left-6">
                      <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-display font-bold border backdrop-blur-md bg-navy-900/75 text-white border-white/30 shadow-[0_8px_24px_rgba(13,27,46,0.35)] ring-1 ring-white/10`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Title overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className={`text-xs font-display font-semibold tracking-widest uppercase mb-1 ${c.text} [text-shadow:0_1px_3px_rgba(0,0,0,.4)]`} style={{ color: undefined }}>
                        <span className={`inline-block px-2 py-0.5 rounded-md ${c.bg} ${c.text} backdrop-blur-sm border ${c.border}`}>
                          {subtitle}
                        </span>
                      </p>
                      <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight drop-shadow-lg">
                        {title}
                      </h2>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`flex flex-col p-8 lg:p-10 ${isEven ? "" : "lg:order-1"}`}>
                    {/* Icon */}
                    <div className={`w-11 h-11 ${c.bg} border ${c.border} rounded-2xl flex items-center justify-center mb-5`}>
                      <Icon className={`w-5 h-5 ${c.text}`} />
                    </div>

                    <p className="font-body text-navy-800/60 text-base leading-relaxed mb-7">{desc}</p>

                    {/* Features grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                      {features.map(({ icon: FIcon, label }) => (
                        <div key={label} className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl border ${c.border} ${c.bg}`}>
                          <FIcon className={`w-4 h-4 ${c.text} shrink-0`} />
                          <span className="font-body text-navy-800/70 text-sm leading-tight">{label}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="mt-auto flex flex-col sm:flex-row gap-3">
                      <a
                        href={waService(title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <WaIcon />Cotizar {title}
                      </a>
                      <Link href="/contacto" className="btn-secondary">
                        Ver formulario <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">¿Necesitas varios servicios?</h2>
          <p className="font-body text-white/50 text-lg mb-8">
            Creamos paquetes personalizados combinando múltiples servicios con descuento especial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA_SERVICIOS} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WaIcon />Solicitar paquete integral
            </a>
            <Link href="/contacto" className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-display font-semibold px-6 py-3.5 rounded-xl text-base transition-all duration-200 hover:scale-105">
              Formulario de cotización
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
