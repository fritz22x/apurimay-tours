import type { Metadata } from "next";
import Image from "next/image";
import { ToursHeroCarousel } from "./ToursHeroCarousel";
import { TourCard } from "@/src/components/tours/TourCard";
import { tours } from "@/src/data/tours";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tours disponibles",
  description:
    "Explora tours en Apurímac: Pampachiri, Saywite, Cconoc, Pacucha, Sóndor y Santuario Nacional del Ampay.",
  alternates: {
    canonical: "/tours",
  },
  openGraph: {
    title: "Tours en Apurímac | ApuRimay Tours",
    description:
      "Compara tours full day en Apurímac con rutas de naturaleza, cultura y aventura desde Abancay.",
    url: "/tours",
  },
};

export default function ToursPage() {
  const whatsappLink = buildWhatsAppLink(
    "Hola, quiero información sobre los tours disponibles en ApuRimay Tours."
  );

  return (
    <main className="pb-18 pt-5 text-[#1F2937] sm:pb-20 sm:pt-6">
      <section className="section-wrap">
        <div className="relative overflow-hidden rounded-[32px] border border-[#dbe5ef] bg-[#0B2940] px-5 py-7 shadow-[0_18px_42px_rgba(11,41,64,0.16)] sm:px-7 sm:py-9 lg:px-9 lg:py-10">
          <ToursHeroCarousel />

          <div className="relative z-10 max-w-3xl space-y-4">
            <h1 className="max-w-[13ch] text-[3rem] font-bold leading-[1.01] text-white drop-shadow-[0_10px_24px_rgba(0,0,0,0.2)] sm:text-[3.45rem] lg:text-[3.85rem] [font-family:var(--tours-font-heading)]">
              Explora Apurímac con experiencias auténticas y fáciles de reservar.
            </h1>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex overflow-hidden rounded-[18px] transition-transform duration-200 hover:scale-[1.01] focus-visible:outline-none"
              aria-label="Consultar por WhatsApp"
            >
              <Image
                src="/iconos y botones/btn-pitufo-grande-1.png"
                alt="Consultar por WhatsApp"
                width={960}
                height={240}
                className="h-[88px] w-auto max-w-full object-contain sm:h-[96px]"
                priority
              />
            </a>
          </div>
        </div>
      </section>

      <section className="section-wrap mt-8 sm:mt-10">
        <div className="tone-cool mb-6 rounded-[24px] p-5 sm:mb-7 sm:p-6">
          <div className="space-y-3">
            <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#F97316] [font-family:var(--tours-font-heading)]">
              Por qué elegirnos
            </p>
            <div className="grid gap-3 text-sm text-[#6B7280] sm:grid-cols-2 lg:grid-cols-4 [font-family:var(--tours-font-body)]">
              {[
                "Experiencias organizadas",
                "Guías locales",
                "Atención personalizada",
                "Reserva rápida por WhatsApp",
              ].map((item) => (
                <p key={item} className="flex items-center gap-2.5">
                  <span className="text-[#F97316]">+</span>
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="tone-warm rounded-[28px] px-5 py-5 sm:px-6 sm:py-6">
          <div className="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-2">
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#F97316] [font-family:var(--tours-font-heading)]">
                Selección de tours
              </p>
              <h2 className="text-[2.15rem] font-bold leading-[1.04] text-[#123B5D] sm:text-[2.5rem] [font-family:var(--tours-font-heading)]">
                Una selección breve para empezar a explorar Apurímac.
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-7 text-[#6B7280] sm:text-right [font-family:var(--tours-font-body)]">
              Revisa las rutas principales y consulta disponibilidad directamente.
            </p>
          </div>

          <div id="tours-grid" className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
