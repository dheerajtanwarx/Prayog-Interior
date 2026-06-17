"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import type { GalleryImage } from "@/lib/types";
import { ImageLightbox } from "./ImageLightbox";

export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, i) => (
          <motion.button
            key={image.src}
            type="button"
            onClick={() => setActive(i)}
            className={`group relative overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-copper ${
              i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -60px 0px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            aria-label={`Open image: ${image.alt}`}
          >
            <div className={`relative w-full ${i === 0 ? "aspect-[4/3]" : "aspect-[4/3]"}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes={i === 0 ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, 33vw"}
                className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0E]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-copper/20 bg-[#0F0F0E]/50 text-copper-light opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
              <Expand size={16} />
            </span>
            {image.caption && (
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left text-sm text-[#F5F0EB] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {image.caption}
              </span>
            )}
          </motion.button>
        ))}
      </div>

      <ImageLightbox
        images={images}
        index={active}
        onClose={() => setActive(null)}
        onNavigate={setActive}
      />
    </>
  );
}
