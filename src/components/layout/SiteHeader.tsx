"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { buildWhatsAppLink } from "@/src/lib/whatsapp";

export function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [activeHeaderButton, setActiveHeaderButton] = useState(0);
  const isTourDetailPage = pathname?.startsWith("/tours/") && pathname !== "/tours";
  const headerButtons = [
    "/iconos y botones/btn-apurimaytours-cabecera.png",
    "/iconos y botones/btn-pitufo.png",
  ];

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 24);
      setIsHeaderHidden(currentScrollY > 120 && currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHeaderButton((current) => (current + 1) % headerButtons.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [headerButtons.length]);

  const whatsappLink = buildWhatsAppLink(
    "Hola, quiero información sobre los tours disponibles en ApuRimay Tours."
  );
  const isHomePage = pathname === "/";
  const isToursPage = pathname === "/tours" || isTourDetailPage;
  const isCompanyPage = pathname === "/sobre-nosotros";
  const isContactPage = pathname === "/contacto";

  return (
    <header
      className={`sticky top-0 z-40 border-b border-[#dbe5ef] transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_10px_22px_rgba(15,23,42,0.06)]"
          : "bg-[#fcfaf6]/96 backdrop-blur-md shadow-[0_8px_18px_rgba(15,23,42,0.04)]"
      } ${isHeaderHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"}`}
    >
      <div className="section-wrap">
        <div className="flex items-center justify-between gap-4 py-4">
          <div className="flex min-w-0 items-center gap-4">
            <Link href="/" className="min-w-0">
              <div className="space-y-1">
                <p className="truncate font-display text-[1.4rem] leading-none text-[#123B5D] transition-colors">
                  ApuRimay Tours
                </p>
                <p className="truncate text-[12px] font-medium uppercase tracking-[0.12em] text-[#5f6f7d] transition-colors">
                  Experiencias auténticas en Apurímac
                </p>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 lg:flex">
              <Link
                href="/"
                className={`rounded-full px-3 py-1.5 text-[15px] font-medium transition-colors ${
                  isHomePage
                    ? "bg-[#fff1e8] text-[#F97316]"
                    : "text-[#123B5D] hover:text-[#F97316]"
                }`}
              >
                Home
              </Link>
              <Link
                href="/tours"
                className={`rounded-full px-3 py-1.5 text-[15px] font-medium transition-colors ${
                  isToursPage
                    ? "bg-[#fff1e8] text-[#F97316]"
                    : "text-[#123B5D] hover:text-[#F97316]"
                }`}
              >
                {isTourDetailPage ? "Volver al catálogo" : "Tours"}
              </Link>
              <Link
                href="/sobre-nosotros"
                className={`rounded-full px-3 py-1.5 text-[15px] font-medium transition-colors ${
                  isCompanyPage
                    ? "bg-[#fff1e8] text-[#F97316]"
                    : "text-[#123B5D] hover:text-[#F97316]"
                }`}
              >
                Empresa
              </Link>
              <Link
                href="/contacto"
                className={`rounded-full px-3 py-1.5 text-[15px] font-medium transition-colors ${
                  isContactPage
                    ? "bg-[#fff1e8] text-[#F97316]"
                    : "text-[#123B5D] hover:text-[#F97316]"
                }`}
              >
                Contacto
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="hidden shrink-0 overflow-hidden rounded-[18px] transition-transform duration-200 hover:scale-[1.02] sm:inline-flex"
              aria-label="Consultar por WhatsApp"
            >
              <div className="relative h-[54px] w-[228px] overflow-hidden rounded-[18px]">
                {headerButtons.map((buttonImage, index) => (
                  <Image
                    key={buttonImage}
                    src={buttonImage}
                    alt="Consultar por WhatsApp"
                    width={296}
                    height={62}
                    className={`absolute inset-0 h-[54px] w-[228px] object-cover object-center transition-opacity duration-[1800ms] ${
                      index === activeHeaderButton ? "opacity-100" : "opacity-0"
                    }`}
                    priority={index === 0}
                  />
                ))}
              </div>
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-[#dbe5ef] bg-white text-[#123B5D] transition-colors lg:hidden"
              aria-label="Abrir menu"
              aria-expanded={isMenuOpen}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-[#123B5D] transition-all ${
                    isMenuOpen ? "top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-[#123B5D] transition-all ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-[#123B5D] transition-all ${
                    isMenuOpen ? "top-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-[#dbe5ef] bg-white py-4 lg:hidden">
            <nav className="flex flex-col gap-3">
              <Link
                href="/"
                className={`rounded-[14px] px-3 py-3 text-[15px] font-medium transition-colors ${
                  isHomePage
                    ? "bg-[#fff1e8] text-[#F97316]"
                    : "text-[#123B5D] hover:bg-[#F8FAFC]"
                }`}
              >
                Home
              </Link>
              <Link
                href="/tours"
                className={`rounded-[14px] px-3 py-3 text-[15px] font-medium transition-colors ${
                  isToursPage
                    ? "bg-[#fff1e8] text-[#F97316]"
                    : "text-[#123B5D] hover:bg-[#F8FAFC]"
                }`}
              >
                {isTourDetailPage ? "Volver al catálogo" : "Tours"}
              </Link>
              <Link
                href="/sobre-nosotros"
                className={`rounded-[14px] px-3 py-3 text-[15px] font-medium transition-colors ${
                  isCompanyPage
                    ? "bg-[#fff1e8] text-[#F97316]"
                    : "text-[#123B5D] hover:bg-[#F8FAFC]"
                }`}
              >
                Empresa
              </Link>
              <Link
                href="/contacto"
                className={`rounded-[14px] px-3 py-3 text-[15px] font-medium transition-colors ${
                  isContactPage
                    ? "bg-[#fff1e8] text-[#F97316]"
                    : "text-[#123B5D] hover:bg-[#F8FAFC]"
                }`}
              >
                Contacto
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-split-btn inline-flex items-center justify-center gap-2 rounded-[16px] px-4 py-3 text-[15px] font-semibold transition-all duration-200"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                >
                  <path d="M19.05 4.94A9.9 9.9 0 0 0 12 2a9.93 9.93 0 0 0-8.6 14.9L2 22l5.24-1.37A10 10 0 0 0 12 22a9.93 9.93 0 0 0 7.05-17.06ZM12 20.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.81.83-3.03-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.15c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.12-.57.13-.17.25-.65.8-.8.96-.15.17-.3.19-.55.07-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.12-.12.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.57-1.37-.78-1.88-.2-.48-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.76 2.68 4.27 3.76.6.26 1.07.42 1.43.54.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
                </svg>
                <span>Consultar por WhatsApp</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

