import { motion } from "motion/react";
import { Container } from "./Container";
import type { ReactNode } from "react";

export function StatCallout({
  children,
  small,
  tone = "cream",
}: {
  children: ReactNode;
  small?: ReactNode;
  tone?: "cream" | "oxblood";
}) {
  const bg = tone === "cream" ? "bg-cream text-oxblood" : "bg-oxblood text-cream";
  return (
    <section className={`${bg} py-28 md:py-40 border-y border-gold/25`}>
      <Container>
        <div className="text-center">
          {small && (
            <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-gold mb-8">
              {small}
            </p>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.5rem,8vw,7rem)] leading-[0.95] tracking-[-0.03em]"
          >
            {children}
          </motion.h2>
        </div>
      </Container>
    </section>
  );
}
