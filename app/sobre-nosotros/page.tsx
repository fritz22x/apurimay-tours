import type { Metadata } from "next";
import Link from "next/link";
import { companyInfo } from "@/src/data/company";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce ApuRimay Tours, operador local en Abancay enfocado en rutas claras, atención cercana y experiencias auténticas en Apurímac.",
  alternates: {
    canonical: "/sobre-nosotros",
  },
  openGraph: {
    title: "Sobre nosotros | ApuRimay Tours",
    description:
      "Operador local en Abancay con tours en Apurímac, coordinación directa y experiencias auténticas.",
    url: "/sobre-nosotros",
  },
};

const whatsappLink = buildWhatsAppLink(
  "Hola, quiero información sobre los tours disponibles en ApuRimay Tours."
);

const values = [
  {
    title: "Rutas claras",
    text: "Cada experiencia se presenta con duración, modalidad, recomendaciones y datos útiles antes de reservar.",
  },
  {
    title: "Atención cercana",
    text: "La coordinación se hace de forma directa por WhatsApp para resolver dudas y confirmar salidas con rapidez.",
  },
  {
    title: "Enfoque local",
    text: "Trabajamos rutas desde Abancay para mostrar paisajes, cultura y experiencias auténticas de Apurímac.",
  },
];

const workSteps = [
  "Mostramos rutas concretas con datos útiles antes de reservar.",
  "Explicamos modalidades compartidas o privadas cuando aplica.",
  "Coordinamos por WhatsApp para responder rápido y sin pasos innecesarios.",
];

export default function SobreNosotrosPage() {
  return (
    <main className="section-wrap py-10 text-[#1F2937] sm:py-14">
      <section className="rounded-[30px] border border-[#dde6ee] bg-[linear-gradient(180deg,#fffdfa_0%,#f8fafc_100%)] p-6 shadow-sm sm:p-8">
        <div className="max-w-4xl space-y-4">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
            Sobre nosotros
          </p>
          <h1 className="text-[2.5rem] font-bold leading-[1.02] text-[#123B5D] sm:text-[3rem]">
            {companyInfo.name}
          </h1>
          <p className="max-w-3xl text-[17px] leading-8 text-[#5f6f7d]">
            Organizamos experiencias de un día desde Abancay para viajeros que
            buscan rutas bien explicadas, atención directa y una forma simple de
            reservar en Apurímac.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[28px] border border-[#dde6ee] bg-white p-6 shadow-sm sm:p-7">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
            Qué hacemos
          </p>
          <div className="mt-4 space-y-4 text-[16px] leading-8 text-[#6B7280]">
            <p>
              ApuRimay Tours nace con una idea simple: ayudar a que más personas
              descubran Apurímac con información clara, coordinación directa y
              experiencias fáciles de entender antes de reservar.
            </p>
            <p>
              Nuestro objetivo es que cada viajero pueda elegir mejor su salida
              según tiempo, tipo de ruta y modalidad, sin sentirse perdido entre
              demasiada información o procesos complicados.
            </p>
            <p>
              Atendemos desde {companyInfo.address} y priorizamos una comunicación
              cercana por WhatsApp para resolver consultas, disponibilidad y detalles
              prácticos de cada tour.
            </p>
          </div>
        </div>

        <div className="rounded-[28px] bg-[linear-gradient(180deg,#123B5D_0%,#0F2F4A_100%)] p-6 text-white shadow-[0_18px_42px_rgba(15,47,74,0.16)] sm:p-7">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/78">
            Cómo trabajamos
          </p>
          <div className="mt-4 space-y-4">
            {workSteps.map((item, index) => (
              <div key={item} className="flex gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-[#123B5D]">
                  {index + 1}
                </span>
                <p className="pt-1 text-[15px] leading-7 text-white/84">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8">
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-[24px] border border-[#dde6ee] bg-[linear-gradient(180deg,#fffdf9_0%,#f8fafc_100%)] p-5 shadow-sm sm:p-6"
            >
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
                {value.title}
              </p>
              <p className="mt-3 text-[15px] leading-7 text-[#5f6f7d]">{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="rounded-[28px] border border-[#dde6ee] bg-white p-6 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-7">
          <div className="max-w-2xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
              Siguiente paso
            </p>
            <h2 className="mt-3 text-[2rem] font-bold leading-[1.05] text-[#123B5D]">
              Si ya sabes qué tipo de experiencia buscas, podemos ayudarte a elegir.
            </h2>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 sm:mt-0">
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
              className="inline-flex items-center justify-center rounded-[18px] border border-[#d9e2ec] bg-[#f8fafc] px-5 py-3 text-[15px] font-semibold text-[#123B5D] transition-colors hover:bg-[#eef4f9]"
            >
              Ver tours
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
