"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/lib/types";

interface ImageLightboxProps {
  images: GalleryImage[];
  /** index of the open image, or null when closed */
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function ImageLightbox({ images, index, onClose, onNavigate }: ImageLightboxProps) {
  const isOpen = index !== null;

  const goPrev = useCallback(() => {
    if (index === null) return;
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, goPrev, goNext]);

  const current = index !== null ? images[index] : null;

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/97 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
        >
          <button
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-copper/20 bg-bg/60 text-cream transition-colors hover:border-copper hover:text-copper-light"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous image"
            className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-copper/20 bg-bg/60 text-cream transition-colors hover:border-copper hover:text-copper-light sm:left-6"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next image"
            className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-copper/20 bg-bg/60 text-cream transition-colors hover:border-copper hover:text-copper-light sm:right-6"
          >
            <ChevronRight size={24} />
          </button>

          <motion.figure
            key={current.src}
            className="relative mx-12 max-h-[85vh] w-full max-w-5xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={current.src}
              alt={current.alt}
              width={1600}
              height={1000}
              className="mx-auto h-auto max-h-[80vh] w-auto rounded-xl object-contain"
              priority
            />
            {current.caption && (
              <figcaption className="mt-4 text-center text-sm text-ink-muted">
                {current.caption}
                <span className="ml-3 text-ink-subtle">
                  {index! + 1} / {images.length}
                </span>
              </figcaption>
            )}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
