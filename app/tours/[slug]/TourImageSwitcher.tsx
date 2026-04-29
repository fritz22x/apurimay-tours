"use client";

import { useState } from "react";
import Image from "next/image";

type TourImageSwitcherProps = {
  images: string[];
  title: string;
};

export function TourImageSwitcher({
  images,
  title,
}: TourImageSwitcherProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-3">
      <div className="relative h-[360px] overflow-hidden rounded-[22px] bg-[#F8FAFC] sm:h-[460px] lg:h-[540px]">
        <Image
          src={activeImage}
          alt={title}
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 65vw"
        />
      </div>

      {images.length > 1 && (
        <div className="flex flex-wrap gap-3">
          {images.map((image, index) => {
            const isActive = image === activeImage;

            return (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(image)}
                className={`relative h-20 w-24 overflow-hidden rounded-[16px] border transition-all duration-200 sm:h-24 sm:w-32 ${
                  isActive
                    ? "border-[#F97316] shadow-[0_12px_24px_rgba(249,115,22,0.18)]"
                    : "border-[#dbe5ef] opacity-85 hover:opacity-100"
                }`}
                aria-label={`Ver imagen ${index + 1} de ${title}`}
                aria-pressed={isActive}
              >
                <Image
                  src={image}
                  alt={`${title} ${index + 1}`}
                  fill
                  className="object-cover object-center"
                  sizes="128px"
                />
                <span
                  className={`absolute inset-0 ${
                    isActive ? "ring-2 ring-[#F97316] ring-inset" : "bg-black/8"
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
