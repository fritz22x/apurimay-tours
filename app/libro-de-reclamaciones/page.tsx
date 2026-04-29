import type { Metadata } from "next";
import { companyInfo } from "@/src/data/company";

export const metadata: Metadata = {
  title: "Libro de reclamaciones",
  description: "Canal de atención para reclamos y quejas de ApuRimay Tours.",
  alternates: {
    canonical: "/libro-de-reclamaciones",
  },
};

export default function LibroDeReclamacionesPage() {
  return (
    <main className="section-wrap py-10 text-[#1F2937] sm:py-14">
      <section className="tone-neutral rounded-[28px] p-6 sm:p-8">
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
          Libro de reclamaciones
        </p>
        <h1 className="mt-3 text-[2.4rem] font-bold leading-[1.02] text-[#123B5D]">
          Atención de reclamos y quejas
        </h1>
        <div className="mt-6 space-y-4 text-[16px] leading-8 text-[#6B7280]">
          <p>
            Si necesitas registrar un reclamo o una queja, puedes escribirnos a{" "}
            <a className="font-semibold text-[#123B5D]" href={`mailto:${companyInfo.email}`}>
              {companyInfo.email}
            </a>{" "}
            indicando tus datos, fecha del servicio y detalle del caso.
          </p>
          <p>
            También puedes solicitar atención directa por nuestros canales de
            reserva para ayudarte con el seguimiento correspondiente.
          </p>
          <p>
            Este espacio funciona como canal digital inicial mientras completamos
            la versión formal del libro de reclamaciones en línea.
          </p>
        </div>
      </section>
    </main>
  );
}
