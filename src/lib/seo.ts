const DEFAULT_SITE_URL = "https://apurimaytours.com";

export function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  return value.replace(/\/$/, "");
}

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${normalizedPath}`;
}
