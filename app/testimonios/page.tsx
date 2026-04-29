import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonios",
  description:
    "Revisa testimonios y referencias de viajeros que exploraron Apurímac con ApuRimay Tours.",
  alternates: {
    canonical: "/testimonios",
  },
};

export default function TestimoniosPage() {
  return (
    <main className="section-wrap py-10 text-[#1F2937] sm:py-14">
      <section className="tone-neutral rounded-[28px] p-6 sm:p-8">
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
          Testimonios
        </p>
        <h1 className="mt-3 text-[2.4rem] font-bold leading-[1.02] text-[#123B5D]">
          Experiencias de viajeros
        </h1>
        <div className="mt-6 space-y-4 text-[16px] leading-8 text-[#6B7280]">
          <p>
            Estamos preparando una sección más completa con experiencias reales
            de nuestros viajeros.
          </p>
          <p>
            Mientras tanto, puedes escribirnos por WhatsApp para pedir referencias
            del servicio, rutas recomendadas y orientación para tu viaje.
          </p>
        </div>
      </section>
    </main>
  );
}
