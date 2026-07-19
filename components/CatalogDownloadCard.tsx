import { FileText, Download, Eye } from "lucide-react";
import {
  CATALOG_PDF_URL,
  CATALOG_PDF_FILENAME,
  CATALOG_PDF_SIZE_MB,
} from "@/lib/catalogo";

/**
 * Tarjeta de descarga del catálogo técnico PDF.
 *
 * Estilo deliberadamente secundario: borde fino, fondo claro, sin
 * gradiente. NO debe verse como el CTA principal (WhatsApp).
 *
 * El botón abre en pestaña nueva con `download` para forzar descarga.
 */
export default function CatalogDownloadCard() {
  const sizeLabel = `${CATALOG_PDF_SIZE_MB} MB`;
  const ariaLabel = `Descargar catálogo técnico en PDF, ${sizeLabel}`;

  return (
    <div className="bg-surface-100 border border-surface-300 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-sm">
      {/* Ícono de documento */}
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 bg-white border border-surface-300 rounded-xl flex items-center justify-center shrink-0"
        aria-hidden="true"
      >
        <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-cobalt-500" />
      </div>

      {/* Texto */}
      <div className="flex-1 min-w-0">
        <p className="font-display font-semibold text-navy-900 text-base sm:text-lg mb-1">
          ¿Quieres ver todos los modelos disponibles?
        </p>
        <p className="font-body text-navy-800/60 text-sm leading-relaxed">
          Catálogo técnico completo con especificaciones de cada equipo.
        </p>
      </div>

      {/* Botón secundario de descarga */}
      <a
        href={CATALOG_PDF_URL}
        download={CATALOG_PDF_FILENAME}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        title={`${ariaLabel} — se abrirá en una pestaña nueva`}
        className="inline-flex items-center justify-center gap-2 bg-white border border-cobalt-500/30 text-cobalt-600 hover:bg-cobalt-500/5 hover:border-cobalt-500/50 font-display font-semibold text-sm px-5 py-3 rounded-xl transition-colors w-full sm:w-auto shrink-0"
      >
        <Download className="w-4 h-4" aria-hidden="true" />
        <span>Descargar catálogo PDF ({sizeLabel})</span>
      </a>
    </div>
  );
}

/**
 * Versión compacta para insertar en espacios reducidos
 * (ej. cerca de "¿Prefieres escribirnos directamente?" en /contacto).
 */
export function CatalogDownloadLinkInline() {
  const sizeLabel = `${CATALOG_PDF_SIZE_MB} MB`;
  const ariaLabel = `Ver catálogo técnico en PDF, ${sizeLabel}`;

  return (
    <a
      href={CATALOG_PDF_URL}
      download={CATALOG_PDF_FILENAME}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="inline-flex items-center justify-center gap-2 w-full py-3 border border-surface-300 text-navy-800/70 hover:border-cobalt-500/40 hover:text-cobalt-600 bg-white font-display font-medium text-sm rounded-xl transition-colors"
    >
      <Eye className="w-4 h-4" aria-hidden="true" />
      Ver catálogo técnico ({sizeLabel})
    </a>
  );
}
