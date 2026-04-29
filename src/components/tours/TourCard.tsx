import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/src/data/tours";

type TourCardProps = {
  tour: Tour;
};

export function TourCard({ tour }: TourCardProps) {
  const compactPrice = tour.price.replace(" por persona", "");

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#e7ded2] bg-[linear-gradient(180deg,#fffdf9_0%,#fbf7f0_100%)] shadow-[0_10px_22px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.11)]">
      <Link
        href={`/tours/${tour.slug}`}
        className="block focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F97316]/25"
        aria-label={`Ver detalles de ${tour.title}`}
      >
        <div className="relative h-60 overflow-hidden sm:h-[15.5rem]">
          <Image
            src={tour.images[0]}
            alt={tour.title}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-x-4 top-4 z-10 flex items-start justify-between gap-3">
            <span className="rounded-full bg-white/92 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#123B5D] shadow-sm [font-family:var(--tours-font-heading)]">
              {tour.location}
            </span>
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col space-y-3.5 p-4">
        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center gap-2 text-[#6B7280]">
            <span className="text-[12px] font-semibold uppercase tracking-[0.12em] [font-family:var(--tours-font-heading)]">
              Tour destacado
            </span>
            <span className="h-1 w-1 rounded-full bg-[#F97316]" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.12em] [font-family:var(--tours-font-heading)]">
              {tour.duration}
            </span>
          </div>

          <h2 className="text-[1.4rem] font-bold leading-[1.08] text-[#123B5D] sm:text-[1.55rem] [font-family:var(--tours-font-heading)]">
            {tour.title}
          </h2>

          <p className="line-clamp-2 text-[14px] leading-6 text-[#6B7280] [font-family:var(--tours-font-body)]">
            {tour.shortDescription}
          </p>
        </div>

        <div className="tone-neutral rounded-[18px] px-3.5 py-3">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316] [font-family:var(--tours-font-heading)]">
            Información rápida
          </p>
          <dl className="mt-3 space-y-2 text-[13px] [font-family:var(--tours-font-body)]">
            <div className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-[#e9dfd1] pb-2">
              <dt className="text-[#6B7280]">Duración</dt>
              <dd className="text-right font-medium text-[#123B5D]">{tour.duration}</dd>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-center gap-3 border-b border-[#e9dfd1] pb-2">
              <dt className="text-[#6B7280]">Ubicación</dt>
              <dd className="text-right font-medium text-[#123B5D]">{tour.location}</dd>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-center gap-3">
              <dt className="text-[#6B7280]">Precio</dt>
              <dd className="text-right font-semibold text-[#F97316]">{compactPrice}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-auto flex flex-col gap-2.5 rounded-[20px] border border-[#ece2d4] bg-[linear-gradient(180deg,#fffaf2_0%,#f9f4eb_100%)] px-3.5 py-3">
          <div className="space-y-1">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6B7280] [font-family:var(--tours-font-heading)]">
              Desde
            </p>
            <p className="text-[1.35rem] font-bold leading-none text-[#F97316] [font-family:var(--tours-font-heading)]">
              {compactPrice}
            </p>
          </div>

          <Link
            href={`/tours/${tour.slug}`}
            className="inline-flex w-full items-center justify-center rounded-[16px] bg-[#F97316] px-4 py-2.5 text-[15px] font-semibold text-white transition-all duration-200 hover:bg-[#EA580C] [font-family:var(--tours-font-body)]"
          >
            Consultar disponibilidad
          </Link>
        </div>
      </div>
    </article>
  );
}

