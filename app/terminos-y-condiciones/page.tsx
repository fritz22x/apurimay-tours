import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Consulta las condiciones generales de reserva, cambios y coordinación de tours en ApuRimay Tours.",
  alternates: {
    canonical: "/terminos-y-condiciones",
  },
};

export default function TerminosPage() {
  return (
    <main className="section-wrap py-10 text-[#1F2937] sm:py-14">
      <section className="tone-neutral rounded-[28px] p-6 sm:p-8">
        <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#F97316]">
          Términos y condiciones
        </p>
        <h1 className="mt-3 text-[2.4rem] font-bold leading-[1.02] text-[#123B5D]">
          Condiciones generales de reserva
        </h1>
        <div className="mt-6 space-y-4 text-[16px] leading-8 text-[#6B7280]">
          <p>Las reservas se confirman según disponibilidad y coordinación previa.</p>
          <p>
            El itinerario puede ajustarse por clima, seguridad, accesos o razones
            operativas justificadas.
          </p>
          <p>
            Antes de pagar, recomendamos confirmar punto de salida, horario,
            servicios incluidos y recomendaciones para el recorrido.
          </p>
          <p>
            Cualquier cambio o cancelación debe coordinarse directamente por
            nuestros canales oficiales de contacto.
          </p>
        </div>
      </section>
    </main>
  );
}
