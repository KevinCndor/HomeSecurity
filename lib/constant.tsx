// ─── Información de contacto ───────────────────────────────────────────────
export const PHONE_RAW      = "0995555053";          
export const PHONE_DISPLAY  = "0995 555 053";        
export const PHONE_HREF     = "tel:+593995555053";   
export const EMAIL          = "ventashs@yahoo.com";  
export const ADDRESS        = "Quito, Ecuador";

// ─── WhatsApp ─────────────────────────────────────────────────────────────
const WA_NUMBER = "593995555053"; 

export const WHATSAPP_URL = (msg = "Hola, quiero una cotización para seguridad electrónica") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

// URLs prearmadas (compatibles con el uso actual)
export const WA_GENERAL   = WHATSAPP_URL();
export const WA_HOME      = WHATSAPP_URL("Hola, quiero una cotización para seguridad electrónica en mi hogar");
export const WA_SERVICIOS = WHATSAPP_URL("Hola, quiero una cotización para seguridad electrónica");

/** Genera URL de WhatsApp para cotizar un servicio específico */
export const waService = (title: string) =>
  WHATSAPP_URL(`Hola, quiero cotizar ${title}`);
