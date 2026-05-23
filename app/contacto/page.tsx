"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import { MapPin, Phone, Clock, CheckCircle2, Send, Shield, ArrowRight } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/593995555053?text=Hola%2C%20quiero%20una%20cotizaci%C3%B3n%20para%20seguridad%20electr%C3%B3nica%20en%20mi%20hogar";
const PHONE      = "0995 555 053";
const PHONE_HREF = "tel:+593995555053";

const sectorOptions = [
  "Norte de Quito","Centro de Quito","Sur de Quito",
  "Cumbayá / Tumbaco","Los Chillos / Sangolquí",
  "Calderón","Pomasqui / San Antonio","Otro sector",
];

const serviceOptions = [
  "Cámaras de Seguridad","Sistemas de Alarmas","Control de Acceso",
  "Video Porteros y Citófonos","Cercas Eléctricas","Detección de Incendios",
  "Redes y Cableado","Puertas Automáticas","Paquete integral (varios servicios)",
];

const cameraOptions = ["1–2 cámaras","3–4 cámaras","5–8 cámaras","Más de 8","No aplica / No sé aún"];

function WaIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.845L0 24l6.335-1.502A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-4.988-1.363l-.358-.212-3.762.893.955-3.682-.233-.379A9.818 9.818 0 1112 21.818z" />
    </svg>
  );
}

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", sector: "", service: "", cameras: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.sector) return;
    const msg =
`Hola, quiero una cotización de seguridad electrónica.
👤 Nombre: ${form.name}
📱 Teléfono: ${form.phone}
📍 Sector: ${form.sector}
🔧 Servicio: ${form.service || "No especificado"}
📷 Cámaras aprox.: ${form.cameras || "No aplica"}${form.message ? `\n💬 Mensaje: ${form.message}` : ""}`;
    window.open(`https://wa.me/593995555053?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  const isValid = form.name.trim() && form.phone.trim() && form.sector;
  const showCameras = !form.service || form.service === "Cámaras de Seguridad" || form.service === "Paquete integral (varios servicios)";

  return (
    <main className="bg-surface-100 min-h-screen">

      {/* Header */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cobalt-500/20 to-transparent" />
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cobalt-500/5 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="section-tag justify-center">Cotización Gratuita</span>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-navy-900 mb-5">
            Cuéntanos qué necesitas<br />
            <span className="gradient-text">y te cotizamos gratis</span>
          </h1>
          <p className="font-body text-navy-800/55 text-xl max-w-xl mx-auto">
            Respondemos en menos de 1 hora. Sin compromiso, sin costo de visita.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* ── Form column ────────────────────────────────── */}
            <div className="lg:col-span-3 space-y-5">

              {submitted ? (
                <div className="card text-center py-16 px-8">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h2 className="font-display font-bold text-2xl text-navy-900 mb-3">¡Mensaje enviado!</h2>
                  <p className="font-body text-navy-800/55 text-base leading-relaxed mb-6 max-w-sm mx-auto">
                    Te hemos redirigido a WhatsApp con tu información. Nuestro equipo te responderá en menos de 1 hora.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-secondary mx-auto">
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <div className="card">
                  <h2 className="font-display font-bold text-xl text-navy-900 mb-6">Formulario de cotización</h2>

                  <div className="space-y-5">

                    {/* Name + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-display font-semibold text-navy-800/60 text-xs uppercase tracking-wide mb-2">
                          Nombre completo <span className="text-orange-500">*</span>
                        </label>
                        <input type="text" name="name" value={form.name} onChange={handleChange}
                          placeholder="Ej: Carlos Méndez"
                          className="input" />
                      </div>
                      <div>
                        <label className="block font-display font-semibold text-navy-800/60 text-xs uppercase tracking-wide mb-2">
                          Teléfono / WhatsApp <span className="text-orange-500">*</span>
                        </label>
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                          placeholder="Ej: 0999 123 456"
                          className="input" />
                      </div>
                    </div>

                    {/* Sector */}
                    <div>
                      <label className="block font-display font-semibold text-navy-800/60 text-xs uppercase tracking-wide mb-2">
                        Sector en Quito <span className="text-orange-500">*</span>
                      </label>
                      <select name="sector" value={form.sector} onChange={handleChange}
                        className="input appearance-none cursor-pointer">
                        <option value="">Selecciona tu sector</option>
                        {sectorOptions.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    {/* Service selector */}
                    <div>
                      <label className="block font-display font-semibold text-navy-800/60 text-xs uppercase tracking-wide mb-2">
                        Servicio de interés
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {serviceOptions.map(opt => (
                          <button key={opt} type="button"
                            onClick={() => setForm({ ...form, service: opt })}
                            className={`text-left py-2.5 px-3.5 rounded-xl font-body text-sm border transition-all ${
                              form.service === opt
                                ? "bg-cobalt-500/10 border-cobalt-500/40 text-cobalt-600 font-medium"
                                : "bg-white border-surface-300 text-navy-800/60 hover:border-cobalt-500/30 hover:text-navy-900"
                            }`}>
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Cameras */}
                    {showCameras && (
                      <div>
                        <label className="block font-display font-semibold text-navy-800/60 text-xs uppercase tracking-wide mb-2">
                          ¿Cuántas cámaras necesitas?
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {cameraOptions.map(opt => (
                            <button key={opt} type="button"
                              onClick={() => setForm({ ...form, cameras: opt })}
                              className={`py-2 px-4 rounded-xl font-body text-sm border transition-all ${
                                form.cameras === opt
                                  ? "bg-cobalt-500/10 border-cobalt-500/40 text-cobalt-600 font-medium"
                                  : "bg-white border-surface-300 text-navy-800/60 hover:border-cobalt-500/30 hover:text-navy-900"
                              }`}>
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Message */}
                    <div>
                      <label className="block font-display font-semibold text-navy-800/60 text-xs uppercase tracking-wide mb-2">
                        Mensaje adicional (opcional)
                      </label>
                      <textarea name="message" value={form.message} onChange={handleChange}
                        rows={3}
                        placeholder="Cuéntanos más: ¿hogar, negocio, empresa? ¿cuántos pisos, perímetro, etc.?"
                        className="input resize-none" />
                    </div>

                    {/* Submit */}
                    <button onClick={handleSubmit} disabled={!isValid}
                      className="btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none">
                      <Send className="w-5 h-5" />
                      Quiero mi cotización gratis
                    </button>

                    <p className="text-navy-800/35 text-xs font-body text-center">
                      Al enviar serás redirigido a WhatsApp con tu información precargada.
                    </p>
                  </div>
                </div>
              )}

              {/* WhatsApp direct */}
              <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                    <WaIcon className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-navy-900 text-sm">¿Prefieres escribirnos directamente?</p>
                    <p className="font-body text-navy-800/45 text-xs">Respuesta inmediata · Sin formularios</p>
                  </div>
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-display font-semibold text-sm rounded-xl transition-colors shadow-sm">
                  <WaIcon className="w-4 h-4" />
                  Abrir WhatsApp directamente
                </a>
              </div>
            </div>

            {/* ── Sidebar ────────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-5">

              {/* Contact info */}
              <div className="card">
                <h3 className="font-display font-semibold text-navy-900 mb-5 text-sm">Información de contacto</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-cobalt-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-cobalt-500" />
                    </div>
                    <div>
                      <p className="font-body text-navy-800/45 text-xs mb-0.5">Teléfono / WhatsApp</p>
                      <a href={PHONE_HREF} className="font-display font-bold text-navy-900 text-xl hover:text-cobalt-500 transition-colors">
                        {PHONE}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-cobalt-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-cobalt-500" />
                    </div>
                    <div>
                      <p className="font-body text-navy-800/45 text-xs mb-0.5">Área de cobertura</p>
                      <p className="font-display font-semibold text-navy-900 text-sm">
                        Quito, Cumbayá, Tumbaco,<br />Los Chillos, Calderón y más
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-cobalt-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-cobalt-500" />
                    </div>
                    <div>
                      <p className="font-body text-navy-800/45 text-xs mb-0.5">Horario de atención</p>
                      <p className="font-display font-semibold text-navy-900 text-sm">Lun–Sáb: 8:00 – 18:00</p>
                      <p className="font-body text-navy-800/40 text-xs mt-0.5">Soporte 24/7 para clientes activos</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Next steps */}
              <div className="card">
                <h3 className="font-display font-semibold text-navy-900 mb-4 text-sm">¿Qué pasa después?</h3>
                <ol className="space-y-3.5">
                  {[
                    "Recibimos tu mensaje y respondemos en < 1 hora",
                    "Evaluamos tu espacio (visita gratuita o fotos)",
                    "Enviamos cotización detallada sin letras chiquitas",
                    "Agendamos la instalación a tu horario",
                    "Instalamos, configuramos y te enseñamos a usar todo",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-cobalt-500/10 border border-cobalt-500/25 rounded-full flex items-center justify-center text-cobalt-500 text-xs font-display font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="font-body text-navy-800/60 text-sm leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Services list */}
              <div className="card">
                <h3 className="font-display font-semibold text-navy-900 mb-4 text-sm">Servicios disponibles</h3>
                <ul className="space-y-2">
                  {serviceOptions.filter(s => s !== "Paquete integral (varios servicios)").map(s => (
                    <li key={s} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cobalt-500/50 shrink-0" />
                      <span className="font-body text-navy-800/60 text-sm">{s}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-surface-200">
                  <a href="/servicios" className="inline-flex items-center gap-1.5 text-cobalt-500 hover:text-cobalt-600 font-body text-sm font-medium transition-colors">
                    Ver todos los servicios en detalle
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="w-5 h-5 text-orange-500" />
                  <h3 className="font-display font-semibold text-navy-900 text-sm">Garantía incluida</h3>
                </div>
                <p className="font-body text-navy-800/60 text-sm leading-relaxed">
                  Todos nuestros equipos e instalaciones incluyen{" "}
                  <strong className="text-navy-900">garantía de 12 meses</strong>.
                  Si algo falla, lo reparamos sin costo adicional.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

