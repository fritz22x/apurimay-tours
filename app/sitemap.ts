import type { MetadataRoute } from "next";
import { tours } from "@/src/data/tours";
import { getSiteUrl } from "@/src/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticRoutes = [
    "",
    "/tours",
    "/contacto",
    "/sobre-nosotros",
    "/testimonios",
    "/libro-de-reclamaciones",
    "/terminos-y-condiciones",
  ];

  return [
    ...staticRoutes.map((path): MetadataRoute.Sitemap[number] => {
      const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
        path === "" ? "weekly" : "monthly";

      return {
        url: `${siteUrl}${path}`,
        lastModified: now,
        changeFrequency,
        priority: path === "" ? 1 : path === "/tours" ? 0.9 : 0.7,
      };
    }),
    ...tours.map((tour) => ({
      url: `${siteUrl}/tours/${tour.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
