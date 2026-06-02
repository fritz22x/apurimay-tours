import type { Metadata } from "next";
import { SiteHeader } from "@/src/components/layout/SiteHeader";
import { SiteFooter } from "@/src/components/layout/SiteFooter";
import { absoluteUrl, getSiteUrl } from "@/src/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "ApuRimay Tours | Tours en Apurímac desde Abancay",
    template: "%s | ApuRimay Tours",
  },
  description:
    "Tours en Apurímac con salidas desde Abancay. Explora rutas de un día, experiencias culturales, naturaleza y reservas directas por WhatsApp.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      {
        url: "/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon-192.png",
  },
  openGraph: {
    title: "ApuRimay Tours | Tours en Apurímac desde Abancay",
    description:
      "Explora tours en Apurímac con salidas desde Abancay, rutas claras y reserva directa por WhatsApp.",
    url: absoluteUrl("/"),
    siteName: "ApuRimay Tours",
    locale: "es_PE",
    type: "website",
    images: [
      {
        url: absoluteUrl(
          "/tours/casa-pitufos-bosque-piedras-pumachaca-chicha-ccasa/turismo-casa-pitufos-apurimac-peru.jpg"
        ),
        width: 1200,
        height: 630,
        alt: "ApuRimay Tours en Apurímac",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ApuRimay Tours | Tours en Apurímac desde Abancay",
    description:
      "Tours en Apurímac con naturaleza, cultura local y reserva directa por WhatsApp.",
    images: [
      absoluteUrl(
        "/tours/casa-pitufos-bosque-piedras-pumachaca-chicha-ccasa/turismo-casa-pitufos-apurimac-peru.jpg"
      ),
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="page-shell">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
