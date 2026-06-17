"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";
import { site } from "@/data/site";

// Hero image preserved exactly from the original design reference.
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85&auto=format";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.4 + i * 0.18, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-32 lg:pt-40"
    >
      {/* Background image (unchanged from reference) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-hero-zoom">
          <Image
            src={HERO_IMAGE}
            alt="Elegant modern interior with natural light and refined finishes"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,15,14,0.55)_0%,rgba(15,15,14,0.4)_30%,rgba(15,15,14,0.55)_60%,rgba(15,15,14,0.92)_100%),linear-gradient(90deg,rgba(15,15,14,0.7)_0%,transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="container-px relative z-10 max-w-4xl">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 rounded-full border border-copper/25 bg-copper/10 px-4 py-2 text-[0.7rem] uppercase tracking-[0.15em] text-copper-light backdrop-blur"
        >
          <Sparkles size={13} />
          Premium Interior Design Studio
        </motion.span>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-5 font-display text-[clamp(2.8rem,6.5vw,5.5rem)] font-normal leading-[1.05] tracking-[-0.02em] text-[#F5F0EB] drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
        >
          Designing spaces
          <br />
          that feel like <em className="text-gradient-copper not-italic">home</em>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-xl text-[clamp(0.9rem,1.1vw,1.05rem)] leading-relaxed text-[#F5F0EB]/90 drop-shadow"
        >
          Prayog Interiors crafts functional, aesthetically balanced interiors —
          from luxury retail and hospitality to refined residential homes. Every
          space is a considered dialogue between form, function, and feeling.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-wrap gap-4"
        >
          <Button href="/#projects" variant="primary">
            View Our Work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Button>
          <Button href="/#about" variant="outline" onDark>
            Our Philosophy
          </Button>
        </motion.div>

        <motion.dl
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap gap-x-12 gap-y-4 border-t border-copper/15 pt-6"
        >
          {site.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-[clamp(1.8rem,3vw,2.5rem)] font-medium text-gradient-light">
                {stat.value}
              </dt>
              <dd className="mt-1 text-[0.72rem] uppercase tracking-[0.1em] text-[#F5F0EB]/60">
                {stat.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
