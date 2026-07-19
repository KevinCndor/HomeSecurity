// ─── Catálogo técnico PDF ──────────────────────────────────────────────────
// Single source of truth para que el footer, las páginas y el componente
// apunten al mismo archivo. Si cambia el nombre o la ruta, se cambia acá.

/** Ruta pública del PDF (servido como asset estático por Vercel). */
export const CATALOG_PDF_URL = "/catalogo/catalogo-tecnico.pdf";

/** Nombre del archivo que verá el usuario al descargar. */
export const CATALOG_PDF_FILENAME = "catalogo-tecnico.pdf";

/** Peso del archivo en megabytes, mostrado en UI y aria-label. */
export const CATALOG_PDF_SIZE_MB = 14;

/** Peso en bytes (derivado de CATALOG_PDF_SIZE_MB). */
export const CATALOG_PDF_SIZE_BYTES = CATALOG_PDF_SIZE_MB * 1024 * 1024;
