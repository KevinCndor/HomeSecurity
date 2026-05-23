import Link from "next/link";
import Footer from "@/components/Footer";
import {
  Camera, Bell, Lock, Phone, Zap, Flame, Wifi, DoorOpen,
  Eye, Smartphone, HardDrive, CheckCircle2, ArrowRight, Shield,
  Moon, Droplets, Cpu, Server, Volume2, Fingerprint, CreditCard,
  Video, PhoneCall, Thermometer, Wind, BarChart2, Network, Cable,
  Car, KeySquare,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/593995555053?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20para%20seguridad%20electr%C3%B3nica";
const PHONE_HREF = "tel:+593995555053";
const PHONE = "0995 555 053";

function WaIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L0 24l6.335-1.502A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-4.988-1.363l-.358-.212-3.762.893.955-3.682-.233-.379A9.818 9.818 0 1112 21.818z" />
    </svg>
  );
}

function Clock({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/></svg>;
}

type ColorKey = "cobalt"|"orange"|"indigo"|"emerald"|"amber"|"red"|"sky"|"violet";

const colorMap: Record<ColorKey, { bg: string; border: string; text: string; light: string }> = {
  cobalt:  { bg: "bg-cobalt-500/10",  border: "border-cobalt-500/25",  text: "text-cobalt-500",  light: "bg-cobalt-50" },
  orange:  { bg: "bg-orange-500/10",  border: "border-orange-500/25",  text: "text-orange-500",  light: "bg-orange-50" },
  indigo:  { bg: "bg-indigo-500/10",  border: "border-indigo-500/25",  text: "text-indigo-600",  light: "bg-indigo-50" },
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/25", text: "text-emerald-600", light: "bg-emerald-50" },
  amber:   { bg: "bg-amber-500/10",   border: "border-amber-500/25",   text: "text-amber-600",   light: "bg-amber-50" },
  red:     { bg: "bg-red-500/10",     border: "border-red-500/25",     text: "text-red-600",     light: "bg-red-50" },
  sky:     { bg: "bg-sky-500/10",     border: "border-sky-500/25",     text: "text-sky-600",     light: "bg-sky-50" },
  violet:  { bg: "bg-violet-500/10",  border: "border-violet-500/25",  text: "text-violet-600",  light: "bg-violet-50" },
};

const serviceDetails = [
  { id:"camaras",      icon:Camera,   color:"cobalt",  title:"Cámaras de Seguridad",      subtitle:"CCTV · IP · HD · 4K",                price:"Desde $45 por cámara",
    desc:"Vigilancia continua 24/7 con imagen cristalina de día y de noche. Accede en tiempo real desde tu celular y recibe alertas automáticas ante movimiento.",
    features:[{icon:Eye,label:"Resolución HD 1080p o 4K Ultra HD"},{icon:Moon,label:"Visión nocturna infrarroja hasta 25 m"},{icon:Droplets,label:"Resistente al agua IP66 (exterior)"},{icon:Bell,label:"Detección de movimiento inteligente"},{icon:Smartphone,label:"App iOS & Android incluida"},{icon:HardDrive,label:"Grabación local (NVR/DVR) o nube"},{icon:Cpu,label:"Compatible con Alexa y Google Home"},{icon:Wifi,label:"Conectividad WiFi o cable (IP)"}],
    packages:[{name:"Kit Básico",cameras:"2 cámaras",price:"$120",tag:null},{name:"Kit Hogar",cameras:"4 cámaras",price:"$220",tag:"Popular"},{name:"Kit Completo",cameras:"8 cámaras",price:"$390",tag:null}] },
  { id:"alarmas",      icon:Bell,     color:"orange",  title:"Sistemas de Alarmas",        subtitle:"Detección · Sirena · Panel central", price:"Desde $80",
    desc:"Panel central programable, sensores de movimiento PIR, contactos magnéticos, sirena de 120 dB y notificaciones instantáneas en tu celular.",
    features:[{icon:Shield,label:"Panel central programable con zonas"},{icon:Bell,label:"Sirena interior y exterior 120 dB"},{icon:Eye,label:"Detectores de movimiento PIR"},{icon:Lock,label:"Contactos magnéticos puertas/ventanas"},{icon:Smartphone,label:"App de control y notificaciones push"},{icon:Phone,label:"Llamada automática ante intrusión"},{icon:Volume2,label:"Alerta sonora y luminosa"},{icon:Server,label:"Batería de respaldo (sin luz eléctrica)"}],
    packages:null },
  { id:"acceso",       icon:Lock,     color:"indigo",  title:"Control de Acceso",          subtitle:"Biométrico · RFID · Teclado",        price:"Desde $120",
    desc:"Gestiona quién entra y cuándo. Registros detallados, horarios por usuario y apertura remota desde el celular.",
    features:[{icon:Fingerprint,label:"Lectores biométricos de huella"},{icon:CreditCard,label:"Tarjetas y llaveros RFID"},{icon:KeySquare,label:"Teclados PIN independientes"},{icon:Smartphone,label:"Apertura remota desde app"},{icon:BarChart2,label:"Registro de entradas y salidas"},{icon:Clock,label:"Horarios y permisos por usuario"}],
    packages:null },
  { id:"videoportero", icon:Video,    color:"emerald", title:"Video Porteros y Citófonos", subtitle:"Audio · Video · Apertura remota",    price:"Desde $90",
    desc:"Visualiza y habla con quien llega a tu puerta desde cualquier lugar. Abre el acceso remotamente y guarda grabaciones de cada visita.",
    features:[{icon:Video,label:"Cámara HD con visión nocturna"},{icon:PhoneCall,label:"Audio bidireccional en tiempo real"},{icon:Smartphone,label:"Notificación y apertura desde el móvil"},{icon:HardDrive,label:"Historial de visitas grabado"},{icon:DoorOpen,label:"Compatible con cerraduras eléctricas"},{icon:Wifi,label:"Conexión WiFi, sin cableado extra"}],
    packages:null },
  { id:"cerca",        icon:Zap,      color:"amber",   title:"Cercas Eléctricas",          subtitle:"Perímetro · Alta tensión · Alarma",  price:"Desde $5 por metro lineal",
    desc:"Barrera disuasiva de alto voltaje y bajo amperaje. Completamente segura para personas y mascotas. Integrada con sirena y panel de alarma.",
    features:[{icon:Zap,label:"Alto voltaje, bajo amperaje (seguro)"},{icon:Bell,label:"Sirena integrada ante contacto"},{icon:Shield,label:"Panel de control con zonas"},{icon:Eye,label:"Indicador luminoso de estado"},{icon:Droplets,label:"Instalación resistente a la intemperie"},{icon:CheckCircle2,label:"Certificada bajo normas internacionales"}],
    packages:null },
  { id:"incendios",    icon:Flame,    color:"red",     title:"Detección de Incendios",     subtitle:"Humo · Temperatura · Gas",          price:"Desde $60",
    desc:"Detección temprana de incendios con sensores de humo iónico, temperatura diferencial y gas. Alerta inmediata y llamada automática.",
    features:[{icon:Flame,label:"Detectores de humo iónicos y ópticos"},{icon:Thermometer,label:"Sensores de temperatura diferencial"},{icon:Wind,label:"Detectores de gas (CO, GLP)"},{icon:Bell,label:"Sirena de evacuación 100 dB"},{icon:Smartphone,label:"Alerta push y llamada automática"},{icon:Server,label:"Panel central con batería de respaldo"}],
    packages:null },
  { id:"redes",        icon:Wifi,     color:"sky",     title:"Redes y Cableado",           subtitle:"Cat6 · Fibra · WiFi empresarial",   price:"Consultar según proyecto",
    desc:"Infraestructura de red estructurada para hogares y empresas. Cableado Cat6, equipos WiFi de alto rendimiento y configuración profesional.",
    features:[{icon:Cable,label:"Cableado estructurado Cat6 / Cat6A"},{icon:Wifi,label:"Puntos de acceso WiFi de alto rendimiento"},{icon:Network,label:"Configuración de switches y routers"},{icon:Server,label:"Rack de comunicaciones ordenado"},{icon:Shield,label:"Segmentación de red (VLANs)"},{icon:Eye,label:"Monitoreo y mantenimiento de la red"}],
    packages:null },
  { id:"puertas",      icon:DoorOpen, color:"violet",  title:"Puertas Automáticas",        subtitle:"Portones · Barreras · Garajes",     price:"Desde $350",
    desc:"Automatiza el acceso vehicular y peatonal. Portones corredizos, batientes, barreras de parqueo y puertas de garaje.",
    features:[{icon:Car,label:"Portón corredizo o batiente motorizado"},{icon:DoorOpen,label:"Barreras de parqueo automáticas"},{icon:KeySquare,label:"Control por control remoto o app"},{icon:Eye,label:"Sensor de seguridad anti-aplastamiento"},{icon:Smartphone,label:"Apertura remota desde el móvil"},{icon:Zap,label:"Motor con batería de respaldo"}],
    packages:null },
];

const tableData = [
  { service:"Cámaras de Seguridad",      desc:"Interior, exterior, HD/4K, visión nocturna" },
  { service:"Sistemas de Alarmas",        desc:"Panel central, sensores, sirena 120 dB" },
  { service:"Control de Acceso",          desc:"Biométrico, RFID, teclado, apertura remota" },
  { service:"Video Porteros y Citófonos", desc:"Video HD, audio bidireccional, app móvil" },
  { service:"Cercas Eléctricas",          desc:"Alto voltaje, bajo amperaje, alarma integrada" },
  { service:"Detección de Incendios",     desc:"Humo, temperatura, gas, alerta inmediata" },
  { service:"Redes y Cableado",           desc:"Cat6, WiFi empresarial, rack estructurado" },
  { service:"Puertas Automáticas",        desc:"Portones, barreras vehiculares, garajes" },
];

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
            Diseñamos, instalamos y mantenemos sistemas a la medida de tu hogar o negocio en Quito.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WaIcon />Cotizar por WhatsApp
            </a>
            <a href={PHONE_HREF} className="btn-secondary">
              <Phone className="w-4 h-4" />{PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Quick table */}
      <section className="py-10 border-y border-surface-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-semibold text-navy-800/50 text-xs uppercase tracking-widest mb-6 text-center">
            Resumen de servicios
          </h2>
          <div className="overflow-x-auto rounded-xl border border-surface-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-surface-200 bg-surface-100">
                  <th className="text-left py-3 px-5 font-display font-semibold text-navy-800/50 text-xs uppercase tracking-wide">Servicio</th>
                  <th className="text-left py-3 px-5 font-display font-semibold text-navy-800/50 text-xs uppercase tracking-wide">Descripción breve</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map(({ service, desc }, i) => (
                  <tr key={service} className={`border-b border-surface-200 hover:bg-cobalt-500/3 transition-colors ${i % 2 === 0 ? "" : "bg-surface-50"}`}>
                    <td className="py-3.5 px-5">
                      <a href={`#${serviceDetails[i].id}`} className="font-display font-semibold text-cobalt-500 hover:text-cobalt-600 text-sm transition-colors">
                        {service}
                      </a>
                    </td>
                    <td className="py-3.5 px-5 font-body text-navy-800/55 text-sm">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Service details */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {serviceDetails.map(({ id, icon: Icon, color, title, subtitle, desc, price, features, packages }, idx) => {
            const c = colorMap[color as ColorKey];
            const isEven = idx % 2 === 0;
            return (
              <div key={id} id={id} className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Text */}
                <div className={isEven ? "" : "lg:order-2"}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className={`w-8 h-8 ${c.bg} border ${c.border} ${c.text} rounded-xl flex items-center justify-center font-display font-bold text-sm`}>
                      {String(idx + 1).padStart(2,"0")}
                    </span>
                    <span className={`text-xs font-display font-semibold tracking-widest uppercase ${c.text}`}>{subtitle}</span>
                  </div>
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 mb-4">{title}</h2>
                  <p className="font-body text-navy-800/55 text-lg leading-relaxed mb-5">{desc}</p>
                  <p className="font-display font-bold text-2xl text-orange-500 mb-8">{price}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={`https://wa.me/593995555053?text=Hola%2C%20quiero%20cotizar%20${encodeURIComponent(title)}`}
                      target="_blank" rel="noopener noreferrer" className="btn-primary">
                      <WaIcon />Cotizar {title}
                    </a>
                    <Link href="/contacto" className="btn-secondary">
                      Ver formulario <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Feature card */}
                <div className={isEven ? "" : "lg:order-1"}>
                  <div className="bg-white border border-surface-200 rounded-2xl p-6 shadow-sm">
                    <div className={`h-1 w-16 rounded-full mb-5 ${c.bg}`} />
                    <h3 className="font-display font-semibold text-navy-800/60 text-xs uppercase tracking-widest mb-5">
                      Características incluidas
                    </h3>
                    <ul className="space-y-3">
                      {features.map(({ icon: FIcon, label }) => (
                        <li key={label} className="flex items-center gap-3">
                          <div className={`w-7 h-7 ${c.bg} rounded-lg flex items-center justify-center shrink-0`}>
                            <FIcon className={`w-3.5 h-3.5 ${c.text}`} />
                          </div>
                          <span className="font-body text-navy-800/65 text-sm">{label}</span>
                        </li>
                      ))}
                    </ul>

                    {packages && (
                      <div className="mt-8 pt-6 border-t border-surface-200">
                        <h3 className="font-display font-semibold text-navy-800/60 text-xs uppercase tracking-widest mb-4">
                          Paquetes disponibles
                        </h3>
                        <div className="grid grid-cols-3 gap-3">
                          {packages.map(({ name, cameras, price: pkgPrice, tag }) => (
                            <div key={name} className={`rounded-xl p-3 text-center border relative ${tag ? "bg-cobalt-500/8 border-cobalt-500/25" : "bg-surface-100 border-surface-200"}`}>
                              {tag && (
                                <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] bg-cobalt-500 text-white font-display font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                                  {tag}
                                </span>
                              )}
                              <p className="font-display font-bold text-navy-900 text-xs mb-1">{name}</p>
                              <p className="font-body text-navy-800/45 text-xs mb-2">{cameras}</p>
                              <p className="font-display font-bold text-orange-500 text-base">{pkgPrice}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
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
