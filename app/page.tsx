import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import WaIcon from "@/components/WaIcon";
import { WA_HOME, PHONE_HREF, PHONE_DISPLAY } from "@/lib/constant";
import {
  Shield, Camera, Smartphone, Wrench, Star, CheckCircle2,
  ArrowRight, Phone, Eye, Zap, Clock, Award, Users, ThumbsUp,
  ChevronRight, AlertTriangle, Bell, Lock, Wifi, Flame, DoorOpen,
} from "lucide-react";

export const metadata = {
  title: "Home Security — Seguridad Electrónica en Ecuador",
  description:
    "Cámaras, alarmas, control de acceso y cercas eléctricas. Cotización gratis por WhatsApp. Respondemos en menos de 1 hora en todo Ecuador.",
};



// ─── Hero ──────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-white">
      {/* Subtle grid + gradient */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid-40" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt-500/20 to-transparent" />
      {/* Soft orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cobalt-500/6 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-orange-500/6 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Copy */}
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 bg-cobalt-500/8 border border-cobalt-500/20 text-cobalt-500 text-xs font-display font-semibold tracking-widest uppercase px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-cobalt-500 animate-pulse" />
              Soluciones Integrales · Ecuador
            </div>

            <div>
              <p className="font-display font-bold text-orange-500 text-lg uppercase tracking-widest mb-1">Home Security</p>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-navy-900">
                Seguridad<br />
                <span className="gradient-text">Electrónica</span>
              </h1>
            </div>

            <p className="font-display font-semibold text-xl text-navy-800/80">
              Protegemos lo que <span className="text-cobalt-500">más te importa</span>
            </p>

            {/* 4 pillars */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Eye,         label: "Vigilancia",  sub: "24/7" },
                { icon: Bell,        label: "Alertas",     sub: "Inmediatas" },
                { icon: Smartphone,  label: "Control",     sub: "Desde tu móvil" },
                { icon: Shield,      label: "Tecnología",  sub: "Confiable" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3 bg-surface-100 border border-surface-200 rounded-xl px-3 py-2.5 hover:border-cobalt-500/30 transition-colors">
                  <div className="w-9 h-9 bg-cobalt-500/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-cobalt-500" />
                  </div>
                  <div className="leading-tight">
                    <p className="font-display font-semibold text-navy-900 text-sm">{label}</p>
                    <p className="font-body text-cobalt-500 text-xs">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WA_HOME} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <WaIcon />Cotiza GRATIS por WhatsApp
              </a>
              <a href={PHONE_HREF} className="btn-secondary">
                <Phone className="w-4 h-4" />{PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="relative rounded-2xl overflow-hidden border border-surface-300 shadow-[0_8px_40px_rgba(29,78,216,0.12)]">
                <div className="aspect-[4/3] bg-surface-200 relative">
                  <Image
                    src="https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Sistema de seguridad instalado"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-navy-900 text-xs font-body font-semibold">EN VIVO</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-navy-900/80 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-white/70 text-xs font-body">SISTEMA ARMADO</span>
                    <div className="flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-cobalt-400" />
                      <span className="text-cobalt-400 text-xs font-body">Activo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-6 top-1/3 bg-white border border-surface-200 rounded-xl p-3 shadow-lg animate-float">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                    <Shield className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-navy-900 text-xs font-display font-semibold">Protegido</p>
                    <p className="text-navy-800/40 text-[10px] font-body">Sistema activo 24/7</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 bottom-1/4 bg-white border border-surface-200 rounded-xl p-3 shadow-lg animate-float" style={{animationDelay:"1.5s"}}>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-navy-900 text-xs font-display font-semibold">Control total</p>
                    <p className="text-navy-800/40 text-[10px] font-body">Desde tu celular</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface-100 to-transparent" />
    </section>
  );
}

// ─── Problem ───────────────────────────────────────────────────────────────
function ProblemSection() {
  return (
    <section className="py-20 bg-surface-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-cobalt-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/25 text-orange-400 text-xs font-display font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                <AlertTriangle className="w-3.5 h-3.5" />¿Sabías que...?
              </div>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-display font-extrabold text-7xl text-orange-400">7</span>
                <span className="font-display font-bold text-2xl text-white/60">de cada 10</span>
              </div>
              <p className="font-display font-bold text-2xl text-white mb-3">
                robos ocurren en propiedades{" "}
                <span className="text-orange-400">sin sistemas de seguridad</span>
              </p>
              <p className="font-body text-white/50 text-base leading-relaxed">
                En todo Ecuador, la delincuencia sigue en aumento. Un sistema integral reduce el riesgo hasta en un 80%.
              </p>
            </div>
            <div>
              <p className="font-display font-semibold text-xl text-white mb-3">La solución integral está a tu alcance</p>
              <p className="font-body text-white/50 leading-relaxed mb-6">
                Cámaras, alarmas y cercas eléctricas trabajan juntas para disuadir, detectar y alertar.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Zap,        label: "Instalación en 1 día" },
                  { icon: Eye,        label: "Visión nocturna HD" },
                  { icon: Smartphone, label: "App en tu celular" },
                  { icon: Bell,       label: "Alertas en tiempo real" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 bg-white/8 rounded-xl p-3">
                    <Icon className="w-4 h-4 text-cobalt-400 shrink-0" />
                    <span className="text-white/70 text-sm font-body">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────
const services = [
  { icon: Camera,   title: "Cámaras de Seguridad",      desc: "Interior/exterior, HD 1080p–4K, visión nocturna.",           tag: "Popular",      tc: "text-cobalt-500 bg-cobalt-500/8 border-cobalt-500/20"},
  { icon: Bell,     title: "Sistemas de Alarmas",        desc: "Panel central, sensores PIR, sirena 120 dB.",                tag: "Esencial",     tc: "text-orange-500 bg-orange-500/8 border-orange-500/20"},
  { icon: Lock,     title: "Control de Acceso",          desc: "Biométrico, RFID, teclado, apertura remota.",               tag: "Empresas",     tc: "text-indigo-500 bg-indigo-500/8 border-indigo-500/20"},
  { icon: Phone,    title: "Video Porteros",             desc: "Video HD, audio bidireccional, apertura desde app.",        tag: "Comodidad",    tc: "text-emerald-600 bg-emerald-500/8 border-emerald-500/20"},
  { icon: Zap,      title: "Cercas Eléctricas",          desc: "Alto voltaje, bajo amperaje, alarma integrada.",            tag: "Disuasión",    tc: "text-amber-600 bg-amber-500/8 border-amber-500/20"},
  { icon: Flame,    title: "Detección de Incendios",     desc: "Sensores de humo, temperatura y gas. Alerta inmediata.",    tag: "Seguridad",    tc: "text-red-500 bg-red-500/8 border-red-500/20"},
  { icon: Wifi,     title: "Redes y Cableado",           desc: "Cat6, WiFi empresarial, rack estructurado.",                tag: "Conectividad", tc: "text-sky-600 bg-sky-500/8 border-sky-500/20"},
  { icon: DoorOpen, title: "Puertas Automáticas",        desc: "Portones, barreras vehiculares, garajes motorizados.",      tag: "Automación",   tc: "text-violet-600 bg-violet-500/8 border-violet-500/20"},
];

function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-tag justify-center">Soluciones Integrales</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-900 mb-4">
            8 servicios para una<br />
            <span className="gradient-text">protección total</span>
          </h2>
          <p className="font-body text-navy-800/55 text-lg max-w-xl mx-auto">
            Diseñamos el sistema que tu hogar o negocio realmente necesita.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {services.map(({ icon: Icon, title, desc, tag, tc}) => (
            <div key={title} className="card group h-full flex flex-col hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 bg-cobalt-500/8 rounded-xl flex items-center justify-center group-hover:bg-cobalt-500/15 transition-colors">
                  <Icon className="w-5 h-5 text-cobalt-500" />
                </div>
                <span className={`text-xs font-display font-semibold px-2.5 py-1 rounded-full border ${tc}`}>{tag}</span>
              </div>
              <h3 className="font-display font-bold text-base text-navy-900 mb-2">{title}</h3>
              <p className="font-body text-navy-800/50 text-sm leading-relaxed mb-4">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/servicios" className="btn-secondary">
            Ver todos los servicios en detalle
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Process ──────────────────────────────────────────────────────────────
const steps = [
  { icon: Phone,  title: "Nos contactas",        desc: `Escríbenos por WhatsApp o llama al ${PHONE_DISPLAY}. Respondemos en menos de 1 hora.` },
  { icon: Eye,    title: "Evaluamos tu espacio",  desc: "Visita técnica gratuita o evaluación por fotos. Cotización clara y sin sorpresas." },
  { icon: Wrench, title: "Instalamos y listo",    desc: "Técnico certificado instala en un día. Te enseñamos a usar la app." },
];

function ProcessSection() {
  return (
    <section className="py-20 bg-surface-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-tag justify-center">Cómo funciona</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-900 mb-4">
            Tan simple como <span className="gradient-text">1, 2, 3</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-cobalt-500/10 via-cobalt-500/40 to-cobalt-500/10" />
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative text-center group">
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-cobalt-500/8 rounded-full group-hover:bg-cobalt-500/15 transition-colors" />
                <div className="absolute inset-0 rounded-full border-2 border-cobalt-500/20 group-hover:border-cobalt-500/40 transition-colors" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-cobalt-500" />
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 bg-white border border-cobalt-500/30 rounded-full flex items-center justify-center text-cobalt-500 text-xs font-display font-bold shadow-sm">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-navy-900 mb-3">{title}</h3>
              <p className="font-body text-navy-800/50 text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href={WA_HOME} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Empezar ahora <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Why us ───────────────────────────────────────────────────────────────
const reasons = [
  { icon: Award,    title: "Garantía 12 meses",      desc: "Equipos e instalaciones con garantía de un año completo." },
  { icon: Clock,    title: "Soporte 24/7",            desc: "Te ayudamos cualquier día, a cualquier hora." },
  { icon: ThumbsUp, title: "+5 años de experiencia",  desc: "Más de 100 hogares y negocios protegidos en todo Ecuador." },
  { icon: Zap,      title: "Instalación en 1 día",    desc: "Completamos la mayoría de instalaciones sin interrumpir tu rutina." },
  { icon: Shield,   title: "Equipos certificados",    desc: "Hikvision, Dahua, DSC — marcas certificadas internacionalmente." },
];

function WhyUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-tag justify-center">¿Por qué elegirnos?</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-navy-900 mb-2">
            Innovación, tecnología y{" "}
            <span className="gradient-text">confianza</span>
          </h2>
          <p className="font-body text-navy-800/50 text-lg">Para tu tranquilidad</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card group flex gap-4">
              <div className="w-10 h-10 bg-cobalt-500/8 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-cobalt-500/15 transition-colors mt-0.5">
                <Icon className="w-5 h-5 text-cobalt-500" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-navy-900 mb-1.5">{title}</h3>
                <p className="font-body text-navy-800/50 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid-40 opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt-400/30 to-transparent" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cobalt-500/10 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/25 text-orange-400 text-xs font-display font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
          <Zap className="w-3.5 h-3.5" />
          Cotización gratis · Sin compromiso
        </div>

        <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4">
          Agenda tu instalación<br />
          <span className="bg-gradient-to-r from-cobalt-400 to-cobalt-300 bg-clip-text text-transparent">hoy mismo</span>
        </h2>
        <p className="font-body text-white/55 text-xl mb-2 max-w-xl mx-auto leading-relaxed">
          Respondemos en menos de 1 hora.
        </p>
        <p className="font-display font-semibold text-white/30 text-sm mb-10 tracking-widest uppercase">
          Innovación · Tecnología · Confianza
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WA_HOME} target="_blank" rel="noopener noreferrer" className="btn-primary text-xl py-5 px-10 animate-pulse2">
            <WaIcon className="w-6 h-6" />Cotiza GRATIS por WhatsApp
          </a>
          <a href={PHONE_HREF} className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-display font-semibold px-8 py-5 rounded-xl text-base transition-all duration-200 hover:scale-105">
            <Phone className="w-5 h-5" />{PHONE_DISPLAY}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-body text-white/35">
          {["Visita sin costo","Respuesta < 1 hora","Garantía 12 meses","8 servicios disponibles"].map(t => (
            <span key={t} className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cobalt-400/60" />{t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
