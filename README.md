# SecureCam Quito — Sitio Web

Sitio web profesional para negocio de cámaras de seguridad en Quito, construido con **Next.js 16** + **Tailwind CSS**.

## 🚀 Inicio rápido

```bash
# 1. Instala dependencias
pnpm install

# 2. Servidor de desarrollo
pnpm dev

# 3. Abre en el navegador
http://localhost:3000
```

## 📁 Estructura

```
securecam/
├── app/
│   ├── layout.tsx          # Layout raíz (Navbar + WhatsApp + fuentes)
│   ├── globals.css         # Estilos globales + clases utilitarias
│   ├── page.tsx            # Home (7 secciones)
│   ├── servicios/
│   │   └── page.tsx        # Página de servicios detallada
│   └── contacto/
│       └── page.tsx        # Formulario de cotización
├── components/
│   ├── Navbar.tsx          # Navegación fija con scroll effect
│   ├── WhatsAppButton.tsx  # Botón flotante de WhatsApp
│   └── Footer.tsx          # Pie de página
├── tailwind.config.ts
└── next.config.js
```

## 📱 Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home con Hero, Problema, Servicios, Proceso, Por qué elegirnos, Testimonios, CTA final |
| `/servicios` | Detalles completos de cada servicio con paquetes |
| `/contacto` | Formulario de cotización + botón WhatsApp directo |

## 🔧 Personalización

### 1. Número de WhatsApp
Busca `593999999999` en todos los archivos y reemplaza con tu número real.

### 2. Imágenes
Las imágenes vienen de Pexels (gratuitas). Para usar las tuyas:
- Colócalas en `/public/`
- Actualiza los `src` en `app/page.tsx`

### 3. Precios
Edita los precios en:
- `app/page.tsx` → `services` array (Sección 3)
- `app/servicios/page.tsx` → `serviceDetails` array

### 4. Datos de contacto
Actualiza en `components/Footer.tsx` y `app/contacto/page.tsx`:
- Teléfono
- Email
- Dirección/sector

## 🌐 Deploy en Vercel (gratis)

```bash
# 1. Instala Vercel CLI
pnpm add -g vercel

# 2. Deploy
vercel

# O conecta tu repositorio GitHub en vercel.com
```

## ✅ Checklist de lanzamiento

- [ ] Reemplazar número de WhatsApp real
- [ ] Actualizar email de contacto
- [ ] Subir fotos reales de instalaciones
- [ ] Registrar dominio (ej: securecamquito.com)
- [ ] Instalar Píxel de Meta (en `app/layout.tsx`)
- [ ] Instalar Google Analytics (en `app/layout.tsx`)
- [ ] Verificar velocidad en PageSpeed Insights
- [ ] Probar en móvil

## 📊 Agregar Píxel de Meta

En `app/layout.tsx`, antes de `</head>`:
```html
<Script id="meta-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s){...}
    fbq('init', 'TU_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

## 🎨 Paleta de colores

| Color | Uso |
|-------|-----|
| `#03070f` navy-950 | Fondo principal |
| `#06b6d4` cyan-500 | Acento principal / íconos |
| `#f97316` orange-500 | CTAs / botones de acción |
| `#25D366` | WhatsApp |
