import {
  Camera, Bell, Lock, Phone, Zap, Flame, Wifi, DoorOpen,
  Eye, Smartphone, HardDrive, CheckCircle2, Shield,
  Moon, Droplets, Cpu, Server, Volume2, Fingerprint, CreditCard,
  Video, PhoneCall, Thermometer, Wind, BarChart2, Network, Cable,
  Car, KeySquare,
} from "lucide-react";

export function Clock({ className }: { className?: string }) {
  return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>;
}

export const serviceDetails = [
  {
    id: "camaras", icon: Camera, color: "cobalt", title: "Cámaras de Seguridad", subtitle: "CCTV · IP · HD · 4K",
    image: "/images/camera.png",
    alt: "Dos cámaras de seguridad bullet montadas en pared de concreto",
    desc: "Vigilancia continua 24/7 con imagen cristalina de día y de noche. Accede en tiempo real desde tu celular y recibe alertas automáticas ante movimiento.",
    features: [{ icon: Eye, label: "Resolución HD 1080p o 4K Ultra HD" }, { icon: Moon, label: "Visión nocturna infrarroja hasta 25 m" }, { icon: Droplets, label: "Resistente al agua IP66 (exterior)" }, { icon: Bell, label: "Detección de movimiento inteligente" }, { icon: Smartphone, label: "App iOS & Android incluida" }, { icon: HardDrive, label: "Grabación local (NVR/DVR) o nube" }, { icon: Cpu, label: "Compatible con Alexa y Google Home" }, { icon: Wifi, label: "Conectividad WiFi o cable (IP)" }],
  },
  {
    id: "alarmas", icon: Bell, color: "orange", title: "Sistemas de Alarmas", subtitle: "Detección · Sirena · Panel central",
    image: "/images/alarm-system.png",
    alt: "Pareja frente a su casa con sistema de seguridad residencial",
    desc: "Panel central programable, sensores de movimiento PIR, contactos magnéticos, sirena de 120 dB y notificaciones instantáneas en tu celular.",
    features: [{ icon: Shield, label: "Panel central programable con zonas" }, { icon: Bell, label: "Sirena interior y exterior 120 dB" }, { icon: Eye, label: "Detectores de movimiento PIR" }, { icon: Lock, label: "Contactos magnéticos puertas/ventanas" }, { icon: Smartphone, label: "App de control y notificaciones push" }, { icon: Phone, label: "Llamada automática ante intrusión" }, { icon: Volume2, label: "Alerta sonora y luminosa" }, { icon: Server, label: "Batería de respaldo (sin luz eléctrica)" }],
  },
  {
    id: "acceso", icon: Lock, color: "indigo", title: "Control de Acceso", subtitle: "Biométrico · RFID · Teclado",
    image: "/images/control-access.png",
    alt: "Profesional usando tarjeta RFID en lector de control de acceso",
    desc: "Gestiona quién entra y cuándo. Registros detallados, horarios por usuario y apertura remota desde el celular.",
    features: [{ icon: Fingerprint, label: "Lectores biométricos de huella" }, { icon: CreditCard, label: "Tarjetas y llaveros RFID" }, { icon: KeySquare, label: "Teclados PIN independientes" }, { icon: Smartphone, label: "Apertura remota desde app" }, { icon: BarChart2, label: "Registro de entradas y salidas" }, { icon: Clock, label: "Horarios y permisos por usuario" }],
  },
  {
    id: "videoportero", icon: Video, color: "emerald", title: "Video Porteros y Citófonos", subtitle: "Audio · Video · Apertura remota",
    image: "/images/intercoms.png",
    alt: "Videoportero con cámara integrada instalado en pared de ladrillo",
    desc: "Visualiza y habla con quien llega a tu puerta desde cualquier lugar. Abre el acceso remotamente y guarda grabaciones de cada visita.",
    features: [{ icon: Video, label: "Cámara HD con visión nocturna" }, { icon: PhoneCall, label: "Audio bidireccional en tiempo real" }, { icon: Smartphone, label: "Notificación y apertura desde el móvil" }, { icon: HardDrive, label: "Historial de visitas grabado" }, { icon: DoorOpen, label: "Compatible con cerraduras eléctricas" }, { icon: Wifi, label: "Conexión WiFi, sin cableado extra" }],
  },
  {
    id: "cerca", icon: Zap, color: "amber", title: "Cercas Eléctricas", subtitle: "Perímetro · Alta tensión · Alarma",
    image: "/images/electric-fences.png",
    alt: "Alambre de púas en techo de vivienda residencial contra cielo azul",
    desc: "Barrera disuasiva de alto voltaje y bajo amperaje. Completamente segura para personas y mascotas. Integrada con sirena y panel de alarma.",
    features: [{ icon: Zap, label: "Alto voltaje, bajo amperaje (seguro)" }, { icon: Bell, label: "Sirena integrada ante contacto" }, { icon: Shield, label: "Panel de control con zonas" }, { icon: Eye, label: "Indicador luminoso de estado" }, { icon: Droplets, label: "Instalación resistente a la intemperie" }, { icon: CheckCircle2, label: "Certificada bajo normas internacionales" }],
  },
  {
    id: "incendios", icon: Flame, color: "red", title: "Detección de Incendios", subtitle: "Humo · Temperatura · Gas",
    image: "/images/fire-control.png",
    alt: "Botón de alarma de incendio rojo en pared gris",
    desc: "Detección temprana de incendios con sensores de humo iónico, temperatura diferencial y gas. Alerta inmediata y llamada automática.",
    features: [{ icon: Flame, label: "Detectores de humo iónicos y ópticos" }, { icon: Thermometer, label: "Sensores de temperatura diferencial" }, { icon: Wind, label: "Detectores de gas (CO, GLP)" }, { icon: Bell, label: "Sirena de evacuación 100 dB" }, { icon: Smartphone, label: "Alerta push y llamada automática" }, { icon: Server, label: "Panel central con batería de respaldo" }],
  },
  {
    id: "redes", icon: Wifi, color: "sky", title: "Redes y Cableado", subtitle: "Cat6 · Fibra · WiFi empresarial",
    image: "/images/networking.png",
    alt: "Cables ethernet organizados en rack de servidor en centro de datos",
    desc: "Infraestructura de red estructurada para hogares y empresas. Cableado Cat6, equipos WiFi de alto rendimiento y configuración profesional.",
    features: [{ icon: Cable, label: "Cableado estructurado Cat6 / Cat6A" }, { icon: Wifi, label: "Puntos de acceso WiFi de alto rendimiento" }, { icon: Network, label: "Configuración de switches y routers" }, { icon: Server, label: "Rack de comunicaciones ordenado" }, { icon: Shield, label: "Segmentación de red (VLANs)" }, { icon: Eye, label: "Monitoreo y mantenimiento de la red" }],
  },
  {
    id: "puertas", icon: DoorOpen, color: "violet", title: "Puertas Automáticas", subtitle: "Portones · Barreras · Garajes",
    image: "/images/automatic-door.png",
    alt: "Vehículo blanco estacionado dentro de garaje residencial automatizado",
    desc: "Automatiza el acceso vehicular y peatonal. Portones corredizos, batientes, barreras de parqueo y puertas de garaje.",
    features: [{ icon: Car, label: "Portón corredizo o batiente motorizado" }, { icon: DoorOpen, label: "Barreras de parqueo automáticas" }, { icon: KeySquare, label: "Control por control remoto o app" }, { icon: Eye, label: "Sensor de seguridad anti-aplastamiento" }, { icon: Smartphone, label: "Apertura remota desde el móvil" }, { icon: Zap, label: "Motor con batería de respaldo" }],
  },
];