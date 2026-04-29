import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTourBySlug, tours } from "@/src/data/tours";
import { absoluteUrl } from "@/src/lib/seo";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";
import { TourImageSwitcher } from "./TourImageSwitcher";

type TourDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({
  params,
}: TourDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    return {
      title: "Tour no encontrado",
      description: "El tour que buscas no está disponible.",
    };
  }

  const canonicalPath = `/tours/${tour.slug}`;

  return {
    title: tour.title,
    description: tour.shortDescription,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${tour.title} | ApuRimay Tours`,
      description: tour.shortDescription,
      url: canonicalPath,
      type: "article",
      images: tour.images[0]
        ? [
            {
              url: absoluteUrl(tour.images[0]),
              alt: tour.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tour.title} | ApuRimay Tours`,
      description: tour.shortDescription,
      images: tour.images[0] ? [absoluteUrl(tour.images[0])] : [],
    },
  };
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const whatsappLink = buildWhatsAppLink(tour.whatsappText);

  return (
    <main className="pb-14 pt-4 text-[#1F2937] sm:pb-18 sm:pt-5">
      <section className="section-wrap">
        <article className="grid gap-4 rounded-[32px] border border-[#e6ddd0] bg-[linear-gradient(180deg,#fffdf9_0%,#faf6ef_100%)] p-3 shadow-[0_20px_48px_rgba(15,23,42,0.06)] sm:p-4 lg:grid-cols-[1.28fr_0.72fr] lg:gap-5">
          <div className="overflow-hidden rounded-[26px] border border-[#e7dfd3] bg-[linear-gradient(180deg,#fffefd_0%,#fbf8f2_100%)] shadow-[0_12px_24px_rgba(15,23,42,0.05)]">
            <div className="space-y-4 border-b border-[#e5edf5] px-4 py-5 sm:px-5 sm:py-6 lg:px-6">
              <div className="space-y-3">
                <h1 className="max-w-[44rem] text-[2rem] font-bold leading-[0.98] text-[#123B5D] sm:text-[2.8rem] lg:text-[3.15rem] [font-family:var(--font-sora)]">
                  {tour.title}
                </h1>
                <p className="max-w-[42rem] text-[16px] leading-7 text-[#6B7280]">
                  {tour.heroDescription}
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 lg:p-6">
              <TourImageSwitcher images={tour.images} title={tour.title} />
            </div>

            <div className="space-y-5 border-t border-[#e5edf5] p-4 sm:space-y-6 sm:p-5 lg:p-6">
              <div className="flex flex-wrap gap-2 text-slate-600">
                <span className="rounded-full bg-[#fff2e8] px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
                  Tour destacado
                </span>
                <span className="rounded-full bg-[#F8FAFC] px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#123B5D]">
                  {tour.duration}
                </span>
                <span className="rounded-full bg-[#F8FAFC] px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#123B5D]">
                  {tour.location}
                </span>
                {tour.experienceType ? (
                  <span className="rounded-full bg-[#F8FAFC] px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#123B5D]">
                    {tour.experienceType}
                  </span>
                ) : null}
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="block max-w-[760px] overflow-hidden rounded-[22px] transition-transform duration-200 hover:scale-[1.01]"
                aria-label="Consultar por WhatsApp"
              >
                <Image
                  src="/iconos y botones/btn-pitufo-grande-1.png"
                  alt="Consultar por WhatsApp"
                  width={960}
                  height={240}
                  className="h-[168px] w-full object-cover object-[center_45%] sm:h-[180px]"
                />
              </a>

              <div className="tone-neutral grid gap-3 rounded-[22px] p-4 sm:grid-cols-3 sm:gap-4">
                <div className="space-y-1">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6B7280]">
                    Duración
                  </p>
                  <p className="text-[15px] font-semibold text-[#123B5D]">{tour.duration}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6B7280]">
                    Ubicación
                  </p>
                  <p className="text-[15px] font-semibold text-[#123B5D]">{tour.location}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6B7280]">
                    Precio
                  </p>
                  <p className="text-[1.35rem] font-bold leading-none text-[#F97316]">
                    {tour.price}
                  </p>
                  {tour.priceNote ? (
                    <p className="pt-1 text-[12px] leading-5 text-[#6B7280]">
                      {tour.priceNote}
                    </p>
                  ) : null}
                </div>
              </div>

              {tour.modes?.length ? (
                <section className="tone-warm rounded-[22px] p-5 sm:p-6">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
                    Modalidades disponibles
                  </p>
                  <div className="mt-5 space-y-4">
                    {tour.modes.map((mode) => (
                      <article
                        key={mode.name}
                        className="rounded-[18px] border border-[#e9dfd1] bg-white/80 p-4"
                      >
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h2 className="text-[16px] font-semibold text-[#123B5D]">
                              {mode.name}
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-[#6B7280]">
                              {mode.summary}
                            </p>
                          </div>
                          <p className="text-[1rem] font-bold text-[#F97316]">{mode.price}</p>
                        </div>

                        <div className="mt-4 grid gap-4 lg:grid-cols-2">
                          <div>
                            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#123B5D]">
                              Incluye
                            </p>
                            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#6B7280]">
                              {mode.includes.map((item) => (
                                <li key={item} className="flex gap-2.5">
                                  <span className="mt-2 h-2 w-2 rounded-full bg-[#F97316]" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#123B5D]">
                              No incluye
                            </p>
                            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#6B7280]">
                              {mode.excludes.map((item) => (
                                <li key={item} className="flex gap-2.5">
                                  <span className="mt-2 h-2 w-2 rounded-full bg-[#123B5D]" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ) : null}

              <section className="tone-neutral space-y-6 rounded-[22px] p-5 sm:p-6">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
                      Descripción
                    </p>
                    <h2 className="text-[1.9rem] font-bold leading-[1.08] text-[#123B5D] sm:text-[2.15rem]">
                      {tour.title}
                    </h2>
                  </div>
                  <div className="space-y-4 text-[16px] leading-8 text-[#6B7280]">
                    <p>{tour.description}</p>
                  </div>
                </div>

                <div className="border-t border-[#e5edf5] pt-5">
                  <h2 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
                    Por qué vale la pena visitarlo
                  </h2>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#6B7280] sm:text-[15px]">
                    {tour.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#F97316]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-[#e5edf5] pt-5">
                  <h2 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
                    Itinerario del tour
                  </h2>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-[#6B7280] sm:text-[15px]">
                    {tour.itinerary.map((item, index) => (
                      <li key={item} className="flex gap-3.5">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eef6fb] text-[13px] font-semibold text-[#123B5D]">
                          {index + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-[#e5edf5] pt-5">
                  <div className="grid gap-4 lg:grid-cols-2">
                    <section className="rounded-[18px] bg-[linear-gradient(180deg,#fff8ee_0%,#fdf3e7_100%)] p-4">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
                        Mejor época para ir
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#6B7280] sm:text-[15px]">
                        {tour.bestSeason}
                      </p>
                    </section>

                    <section className="rounded-[18px] bg-[linear-gradient(180deg,#f7fafc_0%,#f1f6fb_100%)] p-4">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#123B5D]">
                        Punto de salida
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#6B7280] sm:text-[15px]">
                        {tour.departurePoint}
                      </p>
                    </section>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <aside className="space-y-4">
            <section className="rounded-[26px] border border-[#e7dfd3] bg-white p-5 shadow-[0_12px_24px_rgba(15,23,42,0.05)] sm:p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
                Incluye
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[#6B7280] sm:text-[15px]">
                {tour.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#F97316]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[26px] border border-[#e7dfd3] bg-white p-5 shadow-[0_12px_24px_rgba(15,23,42,0.05)] sm:p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#123B5D]">
                No incluye
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[#6B7280] sm:text-[15px]">
                {tour.notIncluded.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#123B5D]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[26px] border border-[#e7dfd3] bg-white p-5 shadow-[0_12px_24px_rgba(15,23,42,0.05)] sm:p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
                Recomendaciones
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[#6B7280] sm:text-[15px]">
                {tour.recommendations.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#F97316]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {tour.observations?.length ? (
              <section className="rounded-[26px] border border-[#e7dfd3] bg-white p-5 shadow-[0_12px_24px_rgba(15,23,42,0.05)] sm:p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#123B5D]">
                  Observaciones
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[#6B7280] sm:text-[15px]">
                  {tour.observations.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#123B5D]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </aside>
        </article>
      </section>

      <section className="section-wrap mt-8">
        <div className="rounded-[28px] border border-[#e6ddd0] bg-white p-5 shadow-[0_12px_24px_rgba(15,23,42,0.05)] sm:p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
            Preguntas frecuentes
          </p>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {tour.faq.map((item) => (
              <article
                key={item.question}
                className="rounded-[18px] border border-[#e5edf5] bg-[#fcfdfd] p-4"
              >
                <h2 className="text-[16px] font-semibold text-[#123B5D]">{item.question}</h2>
                <p className="mt-2 text-sm leading-7 text-[#6B7280] sm:text-[15px]">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
