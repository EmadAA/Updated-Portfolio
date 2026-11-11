/* eslint-disable @next/next/no-img-element */
"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";

export default function ScreenshotGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length],
  );

  // Keyboard controls and scroll lock while the viewer is open
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, prev, next]);

  const current = index !== null ? images[index] : null;

  return (
    <>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {images.map((shot, idx) => (
          <button
            key={shot}
            type="button"
            onClick={() => setIndex(idx)}
            aria-label={`Open ${title}, screenshot ${idx + 1}`}
            className="group overflow-hidden rounded-lg border border-[#244b3a]/30 bg-[#244b3a]/10 cursor-zoom-in"
          >
            <img
              src={shot}
              alt={`${title}, screenshot ${idx + 1}`}
              loading="lazy"
              className="h-auto w-full object-contain transition duration-300 group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshots`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={close}
        >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close viewer"
            className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/80"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Counter and full-size link */}
          <div
            className="absolute left-4 top-4 z-10 flex items-center gap-3 text-sm text-white/80"
            onClick={(e) => e.stopPropagation()}
          >
            <span>
              {(index ?? 0) + 1} / {images.length}
            </span>
            <a
              href={current}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-white"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Open full size
            </a>
          </div>

          {/* Previous */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/80 sm:left-4"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
          )}

          {/* Image: clicking it does not close the viewer */}
          <div
            className="flex max-h-full max-w-full items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={current}
              alt={`${title}, screenshot ${(index ?? 0) + 1}`}
              className="max-h-[88vh] max-w-[92vw] object-contain"
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/80 sm:right-4"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          )}
        </div>
      )}
    </>
  );
}