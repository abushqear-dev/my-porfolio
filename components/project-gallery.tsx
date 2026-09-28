"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { ProjectScreenshot } from "@/app/data";

export function ProjectGallery({
  images,
  title,
}: {
  images: ProjectScreenshot[];
  title: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () =>
      setOpenIndex((current) =>
        current === null ? null : (current - 1 + images.length) % images.length
      ),
    [images.length]
  );
  const showNext = useCallback(
    () =>
      setOpenIndex((current) =>
        current === null ? null : (current + 1) % images.length
      ),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openIndex, close, showPrev, showNext]);

  if (images.length === 0) return null;

  const lightbox = openIndex !== null && typeof document !== "undefined"
    ? createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshots`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-fade-in"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            Close
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"
                aria-label="Previous screenshot"
              >
                ←
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"
                aria-label="Next screenshot"
              >
                →
              </button>
            </>
          )}

          <div
            className="relative h-full max-h-[85vh] w-full max-w-4xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[openIndex].src}
              alt={images[openIndex].alt}
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-contain"
              priority
            />
          </div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.25em] text-white/70">
            {openIndex + 1} / {images.length}
          </p>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      <div className="flex gap-3 overflow-x-auto pb-1">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setOpenIndex(index)}
            className="group/thumb relative h-20 w-28 shrink-0 overflow-hidden rounded-lg border border-border/60 bg-surface-2 transition hover:border-accent/60"
            aria-label={`Open screenshot ${index + 1} of ${images.length} for ${title}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="112px"
              className="object-cover transition group-hover/thumb:scale-105"
            />
          </button>
        ))}
      </div>

      {lightbox}
    </>
  );
}
