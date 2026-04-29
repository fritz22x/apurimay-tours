import type { Metadata } from "next";
import Link from "next/link";
import { companyInfo } from "@/src/data/company";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a ApuRimay Tours por WhatsApp para consultar disponibilidad, modalidades y reservas de tours en Apurímac.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | ApuRimay Tours",
    description:
      "Escríbenos por WhatsApp para resolver dudas y coordinar tu reserva de tours en Apurímac.",
    url: "/contacto",
  },
};

const contactMessage =
  "Hola, quiero información sobre los tours disponibles en ApuRimay Tours.";

const reasons = [
  "Consultar disponibilidad de una ruta específica.",
  "Pedir recomendación según tiempo, presupuesto o tipo de experiencia.",
  "Coordinar una salida privada o resolver dudas antes de reservar.",
];

export default function ContactoPage() {
  const whatsappLink = buildWhatsAppLink(contactMessage);

  return (
    <main className="section-wrap py-10 text-[#1F2937] sm:py-14">
      <section className="rounded-[30px] border border-[#dde6ee] bg-[linear-gradient(180deg,#fffdfa_0%,#f8fafc_100%)] p-6 shadow-sm sm:p-8">
        <div className="max-w-4xl space-y-4">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
            Contacto
          </p>
          <h1 className="text-[2.5rem] font-bold leading-[1.02] text-[#123B5D] sm:text-[3rem]">
            Hablemos sobre tu próximo viaje
          </h1>
          <p className="max-w-3xl text-[17px] leading-8 text-[#5f6f7d]">
            Si ya viste un tour o todavía no sabes cuál elegir, puedes
            escribirnos por WhatsApp y te ayudamos a revisar disponibilidad,
            modalidad y el tipo de salida que mejor se adapta a tu viaje.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="rounded-[28px] bg-[linear-gradient(180deg,#123B5D_0%,#0F2F4A_100%)] p-6 text-white shadow-[0_18px_42px_rgba(15,47,74,0.16)] sm:p-7">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/78">
            Canal principal
          </p>
          <h2 className="mt-3 text-[2rem] font-bold leading-[1.06]">
            WhatsApp directo para consultas y reservas
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/84">
            Es la forma más rápida de resolver dudas, pedir una recomendación y
            confirmar una salida con información clara.
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
              href="/tours"
              className="inline-flex items-center justify-center rounded-[18px] border border-white/24 bg-white/10 px-5 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-white/16"
            >
              Ver tours
            </Link>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#dde6ee] bg-white p-6 shadow-sm sm:p-7">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
            Cuándo escribirnos
          </p>
          <div className="mt-4 space-y-4">
            {reasons.map((reason, index) => (
              <div key={reason} className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#123B5D] text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-[15px] leading-7 text-[#6B7280]">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[28px] border border-[#dde6ee] bg-white p-6 shadow-sm sm:p-7">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
            Información base
          </p>
          <div className="mt-4 space-y-3 text-[15px] leading-7 text-[#6B7280]">
            <p>
              <span className="font-semibold text-[#123B5D]">Ubicación:</span>{" "}
              {companyInfo.address}
            </p>
            <p>
              <span className="font-semibold text-[#123B5D]">Titular:</span>{" "}
              {companyInfo.legalName}
            </p>
          </div>
        </div>

        <div className="rounded-[28px] border border-[#dde6ee] bg-[linear-gradient(180deg,#fffdfa_0%,#f8fafc_100%)] p-6 shadow-sm sm:p-7">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
            Antes de escribirnos
          </p>
          <ul className="mt-4 space-y-2 text-[15px] leading-7 text-[#6B7280]">
            <li>Indícanos el tour que te interesa o la fecha estimada de viaje.</li>
            <li>Menciona cuántas personas viajarían para recomendarte la mejor modalidad.</li>
            <li>Si necesitas una salida privada, podemos ayudarte a coordinarla.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
