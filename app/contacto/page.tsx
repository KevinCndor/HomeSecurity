"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import WaIcon from "@/components/WaIcon";
import { MapPin, Phone, Clock, CheckCircle2, Send, Shield, ArrowRight } from "lucide-react";
import { WHATSAPP_URL, WA_HOME, PHONE_DISPLAY, PHONE_HREF } from "@/lib/constant";

const ECUADOR_PROVINCIAS: Record<string, string[]> = {
  "Azuay":            ["Cuenca","Gualaceo","Paute","Sígsig","Santa Isabel","Girón"],
  "Bolívar":          ["Guaranda","Chillanes","San Miguel","Chimbo"],
  "Cañar":            ["Azogues","Biblián","Cañar","La Troncal","El Tambo"],
  "Carchi":           ["Tulcán","Montúfar","Espejo","Mira","Bolívar"],
  "Chimborazo":       ["Riobamba","Alausí","Colta","Chambo","Guano","Pallatanga"],
  "Cotopaxi":         ["Latacunga","La Maná","Pujilí","Salcedo","Saquisilí"],
  "El Oro":           ["Machala","Huaquillas","Pasaje","Santa Rosa","Arenillas","Zaruma","Piñas"],
  "Esmeraldas":       ["Esmeraldas","Atacames","Quinindé","Muisne","San Lorenzo"],
  "Guayas":           ["Guayaquil","Samborondón","Daule","Durán","Milagro","Playas","Naranjito","El Triunfo","Nobol","Balzar","Salitre"],
  "Imbabura":         ["Ibarra","Otavalo","Cotacachi","Antonio Ante","Pimampiro","Urcuquí"],
  "Loja":             ["Loja","Catamayo","Macará","Calvas","Saraguro","Celica","Paltas"],
  "Los Ríos":         ["Babahoyo","Quevedo","Vinces","Ventanas","Buena Fe","Mocache","Urdaneta"],
  "Manabí":           ["Portoviejo","Manta","Chone","El Carmen","Bahía de Caráquez","Pedernales","Jipijapa","Rocafuerte"],
  "Morona Santiago":  ["Macas","Sucúa","Gualaquiza","Méndez","Palora","Limón Indanza"],
  "Napo":             ["Tena","Archidona","El Chaco","Quijos"],
  "Orellana":         ["Francisco de Orellana","Loreto","La Joya de los Sachas","Aguarico"],
  "Pastaza":          ["Puyo","Mera","Santa Clara","Arajuno"],
  "Pichincha":        ["Quito","Cayambe","Mejía","Pedro Moncayo","Rumiñahui","San Miguel de los Bancos","Puerto Quito"],
  "Santa Elena":      ["Santa Elena","La Libertad","Salinas"],
  "Santo Domingo":    ["Santo Domingo"],
  "Sucumbíos":        ["Nueva Loja (Lago Agrio)","Gonzalo Pizarro","Putumayo","Shushufindi","Sucumbíos","Cascales","Cuyabeno"],
  "Tungurahua":       ["Ambato","Baños","Pelileo","Píllaro","Patate","Cevallos","Mocha","Quero","Tisaleo"],
  "Zamora Chinchipe": ["Zamora","Yantzaza","El Pangui","Chinchipe","Nangaritza"],
};

const serviceOptions = [
  "Cámaras de Seguridad","Sistemas de Alarmas","Control de Acceso",
  "Video Porteros y Citófonos","Cercas Eléctricas","Detección de Incendios",
  "Redes y Cableado","Puertas Automáticas","Paquete integral (varios servicios)",
];

const cameraOptions = ["1–2 cámaras","3–4 cámaras","5–8 cámaras","Más de 8","No aplica / No sé aún"];


/** Validates an Ecuadorian mobile number (09XXXXXXXX or +5939XXXXXXXX) */
function isValidPhone(value: string): boolean {
  const clean = value.replace(/[\s\-().+]/g, "");
  return /^(0[9][0-9]{8}|5939[0-9]{8})$/.test(clean);
}

export default function ContactoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", provincia: "", ciudad: "", service: "", cameras: "", message: "",
  });
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "provincia") {
      setForm({ ...form, provincia: value, ciudad: "" });
    } else {
      setForm({ ...form, [name]: value });
    }
    if (name === "phone") {
      setPhoneError(value && !isValidPhone(value) ? "Ingresa un número válido" : "");
    }
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone || !form.provincia) return;
    const ubicacion = form.ciudad ? `${form.ciudad}, ${form.provincia}` : form.provincia;
    const msg =
`Hola, quiero una cotización de seguridad electrónica.
👤 Nombre: ${form.name}
📱 Teléfono: ${form.phone}
📍 Ubicación: ${ubicacion}
🔧 Servicio: ${form.service || "No especificado"}
📷 Cámaras aprox.: ${form.cameras || "No aplica"}${form.message ? `\n💬 Mensaje: ${form.message}` : ""}`;
    window.open(WHATSAPP_URL(msg), "_blank");
    setSubmitted(true);
  };

  const isValid = form.name.trim() && form.phone.trim() && form.provincia && !phoneError;
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
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">

            {/* ── Form column ────────────────────────────────── */}
            <div className="lg:col-span-3 space-y-5 flex h-full flex-col">

              {submitted ? (
                <div className="card h-full flex flex-col justify-center text-center py-16 px-8">
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
                <div className="card h-full flex flex-col">
                  <h2 className="font-display font-bold text-xl text-navy-900 mb-6">Formulario de cotización</h2>

                  <div className="space-y-5 flex-1 flex flex-col">

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
                          className={`input ${phoneError ? "border-red-400 focus:border-red-500" : ""}`}
                          aria-invalid={!!phoneError}
                          aria-describedby={phoneError ? "phone-error" : undefined}
                        />
                        {phoneError && (
                          <p id="phone-error" className="text-red-600 text-xs mt-2">{phoneError}</p>
                        )}
                      </div>
                    </div>

                    {/* Provincia + Ciudad */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-display font-semibold text-navy-800/60 text-xs uppercase tracking-wide mb-2">
                          Provincia <span className="text-orange-500">*</span>
                        </label>
                        <select name="provincia" value={form.provincia} onChange={handleChange}
                          className="input appearance-none cursor-pointer">
                          <option value="">Selecciona una provincia</option>
                          {Object.keys(ECUADOR_PROVINCIAS).map(p => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block font-display font-semibold text-navy-800/60 text-xs uppercase tracking-wide mb-2">
                          Ciudad / Cantón
                        </label>
                        <select name="ciudad" value={form.ciudad} onChange={handleChange}
                          disabled={!form.provincia}
                          className="input appearance-none cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed">
                          <option value="">{form.provincia ? "Selecciona una ciudad" : "Elige primero la provincia"}</option>
                          {form.provincia && ECUADOR_PROVINCIAS[form.provincia].map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
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
              <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-sm h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                    <WaIcon className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-navy-900 text-sm">¿Prefieres escribirnos directamente?</p>
                    <p className="font-body text-navy-800/45 text-xs">Respuesta inmediata · Sin formularios</p>
                  </div>
                </div>
                <a href={WA_HOME} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-display font-semibold text-sm rounded-xl transition-colors shadow-sm">
                  <WaIcon className="w-4 h-4" />
                  Abrir WhatsApp directamente
                </a>
              </div>
            </div>

            {/* ── Sidebar ────────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-5 flex h-full flex-col">

              {/* Contact info */}
              <div className="card h-full flex flex-col">
                <h3 className="font-display font-semibold text-navy-900 mb-5 text-sm">Información de contacto</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-cobalt-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-cobalt-500" />
                    </div>
                    <div>
                      <p className="font-body text-navy-800/45 text-xs mb-0.5">Teléfono / WhatsApp</p>
                      <a href={PHONE_HREF} className="font-display font-bold text-navy-900 text-xl hover:text-cobalt-500 transition-colors">
                        {PHONE_DISPLAY}
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
                        Cobertura en todo Ecuador,<br />según la ubicación del proyecto
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
              <div className="card h-full flex flex-col">
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
              <div className="card h-full flex flex-col">
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
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 h-full flex flex-col">
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