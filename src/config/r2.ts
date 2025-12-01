// Cloudflare R2 Configuration
// URL pública de tu bucket R2 (desde variable de entorno)
export const R2_PUBLIC_URL = import.meta.env.VITE_R2_PUBLIC_URL || 'https://pub-9dfbf62c091746ec886cc815fa379d74.r2.dev';

// Helper function to get R2 URL
export function getR2Url(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${R2_PUBLIC_URL}/${cleanPath}`;
}
