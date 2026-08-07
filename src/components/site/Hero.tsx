import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Container } from "./Container";

interface Props {
  image: string;
  eyebrow?: string;
  heading: ReactNode;
  subheading?: ReactNode;
  cta?: ReactNode;
  minHeight?: string;
  align?: "center" | "left";
  overlayOpacity?: number;
  priority?: boolean;
  imageAlt?: string;
}

export function Hero({
  image,
  eyebrow,
  heading,
  subheading,
  cta,
  minHeight = "min-h-[100svh]",
  align = "center",
  overlayOpacity = 0.62,
  priority = false,
  imageAlt = "Gia Quantia Labs — ORIGIN brand imagery",
}: Props) {
  return (
    <section
      className={`relative w-full ${minHeight} flex items-center justify-center overflow-hidden`}
      aria-label="Page hero"
    >
      <motion.img
        src={image}
        alt={imageAlt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "sync" : "async"}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full object-cover will-change-transform"
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, oklch(0.20 0.07 20 / ${overlayOpacity}) 0%, oklch(0.20 0.07 20 / ${overlayOpacity + 0.12}) 100%)`,
        }}
      />
      <Container className="relative z-10 py-24 md:py-28">
        <div
          className={`max-w-4xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
        >
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-gold text-xs md:text-sm uppercase tracking-[0.35em] mb-6 md:mb-8"
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-cream text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-balance"
          >
            {heading}
          </motion.h1>
          {subheading && (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className={`mt-6 md:mt-8 text-cream/85 text-base md:text-lg leading-relaxed max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
            >
              {subheading}
            </motion.p>
          )}
          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className={`mt-10 md:mt-12 flex flex-wrap items-center gap-3 sm:gap-4 ${align === "center" ? "justify-center" : "justify-start"}`}
            >
              {cta}
            </motion.div>
          )}
        </div>
      </Container>
    </section>
  );
}
