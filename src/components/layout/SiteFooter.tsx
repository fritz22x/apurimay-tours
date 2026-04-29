import Link from "next/link";
import { companyInfo } from "@/src/data/company";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

const contactMessage =
  "Hola, quiero informaci\u00f3n sobre los tours disponibles en ApuRimay Tours.";

export function SiteFooter() {
  const whatsappLink = buildWhatsAppLink(contactMessage);

  return (
    <footer
      id="footer-contacto"
      className="mt-16 border-t-4 border-[#F97316] bg-[#0B2940] text-white"
    >
      <div className="section-wrap px-1 py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.9fr_1fr_0.85fr]">
          <section className="space-y-6">
            <div className="space-y-3">
              <p className="font-display text-[2rem] leading-none text-white">
                {companyInfo.name}
              </p>
              <p className="max-w-sm text-[15px] leading-7 text-white/76">
                Experiencias claras y personalizadas en Apur&iacute;mac para viajeros que
                quieren reservar f&aacute;cil y aprovechar mejor su salida.
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-heading text-[1.25rem] text-white">Contacto r&aacute;pido</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1fbb59]"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-[1.35rem] text-white">Empresa</h2>
            <ul className="space-y-3 text-[15px] leading-7 text-white/80">
              <li>
                <Link href="/sobre-nosotros">Sobre nosotros</Link>
              </li>
              <li>
                <Link href="/contacto">Contacto</Link>
              </li>
              <li>
                <Link href="/libro-de-reclamaciones">Libro de reclamaciones</Link>
              </li>
              <li>
                <Link href="/testimonios">Testimonios</Link>
              </li>
              <li>
                <Link href="/terminos-y-condiciones">T&eacute;rminos y condiciones</Link>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-[1.35rem] text-white">Explora Apur&iacute;mac</h2>
            <ul className="space-y-3 text-[15px] leading-7 text-white/80">
              <li>
                <Link href="/tours">Tours destacados</Link>
              </li>
              <li>
                <Link href="/sobre-nosotros">Sobre la empresa</Link>
              </li>
              <li>
                <Link href="/testimonios">Experiencias de viajeros</Link>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                  Asesor&iacute;a para tu viaje
                </a>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading text-[1.35rem] text-white">Ubicaci&oacute;n</h2>
            <div className="space-y-3 text-[15px] leading-7 text-white/80">
              <p>{companyInfo.address}</p>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
