"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
  {
    src: "/tours/casa-pitufos-bosque-piedras-pumachaca-chicha-ccasa/635230162_1571131990776649_7273609995846800541_n.jpg",
    alt: "Paisaje turistico de Apurimac",
  },
  {
    src: "/tours/laguna-pacucha-sondor-andahuaylas/laguna pacucha-botes.jpg",
    alt: "Laguna Pacucha en Apurimac",
  },
];

export function ToursHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 6200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      {heroImages.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          className={`object-cover object-center transition-all duration-[1800ms] ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(11,41,64,0.44)_0%,rgba(11,41,64,0.22)_38%,rgba(11,41,64,0.06)_64%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_32%)]" />
    </>
  );
}
