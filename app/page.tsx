import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { tours } from "@/src/data/tours";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

const featuredTours = tours.slice(0, 2);

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Descubre tours en Apurímac con salidas desde Abancay, rutas auténticas y reservas fáciles por WhatsApp.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ApuRimay Tours | Inicio",
    description:
      "Descubre tours en Apurímac con salidas desde Abancay, rutas auténticas y reservas fáciles por WhatsApp.",
    url: "/",
  },
};

export default function HomePage() {
  const whatsappLink = buildWhatsAppLink(
    "Hola, quiero información sobre los tours disponibles en ApuRimay Tours."
  );

  return (
    <main className="pb-18 pt-5 text-[#1F2937] sm:pb-20 sm:pt-6">
      <section className="section-wrap">
        <div className="relative overflow-hidden rounded-[36px] border border-[#d9e2ec] bg-[#0F2F4A] px-6 py-8 shadow-[0_20px_48px_rgba(15,47,74,0.18)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <Image
            src="/tours/casa-pitufos-bosque-piedras-pumachaca-chicha-ccasa/635230162_1571131990776649_7273609995846800541_n.jpg"
            alt="Paisaje turístico de Apurímac"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(15,47,74,0.76)_0%,rgba(15,47,74,0.48)_44%,rgba(15,47,74,0.12)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.16),transparent_36%)]" />

          <div className="relative z-10 max-w-4xl space-y-6">
            <span className="inline-flex text-[12px] font-semibold uppercase tracking-[0.18em] text-white/72">
              ApuRimay Tours
            </span>
            <h1 className="max-w-[11ch] text-[3rem] font-bold leading-[1.01] text-white sm:text-[3.55rem] lg:text-[4.2rem] [font-family:var(--tours-font-heading)]">
              Explora Apurímac con experiencias claras y fáciles de reservar.
            </h1>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center rounded-[18px] bg-[#F97316] px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#EA580C]"
              >
                Ver tours
              </Link>
              <Link
                href="/sobre-nosotros"
                className="inline-flex items-center justify-center rounded-[18px] border border-white/30 bg-white/18 px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/24"
              >
                Sobre nosotros
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[18px] bg-[#25D366] px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1fbb59]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap mt-8 sm:mt-10">
        <div className="rounded-[32px] border border-[#dde6ee] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-2">
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
                Destinos destacados
              </p>
              <h2 className="text-[2.1rem] font-bold leading-[1.04] text-[#123B5D] sm:text-[2.5rem]">
                Una muestra breve para empezar a explorar.
              </h2>
            </div>
            <Link
              href="/tours"
              className="inline-flex items-center justify-center rounded-[18px] border border-[#d9e2ec] bg-[#f8fafc] px-5 py-3 text-[15px] font-semibold text-[#123B5D] transition-colors hover:bg-[#eef4f9]"
            >
              Ir al catálogo completo
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {featuredTours.map((tour) => (
              <Link
                key={tour.slug}
                href={`/tours/${tour.slug}`}
                className="group relative overflow-hidden rounded-[28px] border border-[#d6e0e9] bg-[linear-gradient(180deg,#fffefa_0%,#f7fafc_100%)] shadow-[0_12px_24px_rgba(15,47,74,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_46px_rgba(15,47,74,0.12)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14)_0%,rgba(15,47,74,0.02)_100%)]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.10),transparent_58%)]" />

                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={tour.images[0]}
                    alt={tour.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,47,74,0.02)_0%,rgba(15,47,74,0.12)_55%,rgba(15,47,74,0.5)_100%)]" />
                  <div className="absolute left-4 top-4 inline-flex rounded-full border border-white/30 bg-white/14 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-[2px]">
                    {tour.duration}
                  </div>
                </div>

                <div className="relative space-y-3 p-5">
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
                      Destino destacado
                    </p>
                    <h3 className="text-[1.24rem] font-bold leading-[1.16] text-[#123B5D] transition-colors group-hover:text-[#0F2F4A]">
                      {tour.title}
                    </h3>
                  </div>

                  <div className="rounded-[18px] border border-[#e5edf4] bg-white/88 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#7b8a97]">
                      Ubicación
                    </p>
                    <p className="mt-1 text-sm leading-6 text-[#556371]">{tour.location}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap mt-8 sm:mt-10">
        <div className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[30px] border border-[#dde6ee] bg-[linear-gradient(180deg,#fffdfa_0%,#f8fafc_100%)] p-5 shadow-sm sm:p-6">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
              Quiénes somos
            </p>
            <h2 className="mt-3 text-[2rem] font-bold leading-[1.06] text-[#123B5D]">
              Un operador local enfocado en rutas claras y experiencias auténticas.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-[#6B7280]">
              ApuRimay Tours ayuda a que cada visitante entienda rápido su
              ruta, modalidad y forma de reserva, con información clara y una
              experiencia simple de consultar.
            </p>
            <div className="mt-5">
              <Link
                href="/sobre-nosotros"
                className="inline-flex items-center justify-center rounded-[18px] border border-[#d9e2ec] bg-white px-5 py-3 text-[15px] font-semibold text-[#123B5D] transition-colors hover:bg-[#f8fafc]"
              >
                Leer sobre nosotros
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] bg-[linear-gradient(180deg,#123B5D_0%,#0F2F4A_100%)] p-6 text-white shadow-[0_18px_42px_rgba(15,47,74,0.2)] sm:p-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/68">
              Contacto directo
            </p>
            <h2 className="mt-3 text-[2rem] font-bold leading-[1.06]">
              ¿Quieres ayuda para elegir tu tour?
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/88">
              Escríbenos por WhatsApp o entra a contacto para resolver dudas
              y coordinar tu reserva.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-[18px] bg-[#25D366] px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1fbb59]"
              >
                Escribir por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-[18px] border border-white/24 bg-white/8 px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/14"
              >
                Ir a contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
