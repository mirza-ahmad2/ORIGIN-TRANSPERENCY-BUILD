import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Sparkles, Mail, ShieldCheck } from "lucide-react";

import heroImg from "@/assets/hero-spark.jpg";
import { Container } from "@/components/site/Container";
import { ExternalCTAButton } from "@/components/site/ExternalCTAButton";
import { SITE } from "@/lib/site";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/spark-list")({
  head: () =>
    pageSeo({
      title: "Join the Spark List — Early Access | ORIGIN by Gia Quantia Labs",
      description:
        "Get early access to ORIGIN. Founder rate held for a year for everyone on the Spark List, before public launch in Summer 2026.",
      path: "/spark-list",
      keywords:
        "Spark List, ORIGIN early access, Gia Quantia Labs waitlist, founder rate, NAD+ launch 2026",
      ogTitle: "Join the Spark List — Early Access",
      ogDescription: "Founder rate. First allocation. Before the shelf gets crowded.",
    }),
  component: SparkPage,
});

function SparkPage() {
  return (
    <>
      <section
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-oxblood"
        aria-label="Spark List hero"
      >
        <motion.img
          src={heroImg}
          alt="Spark List early access — ORIGIN by Gia Quantia Labs"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full object-cover opacity-30 will-change-transform"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 60%, oklch(0.28 0.09 20 / 0.7) 0%, oklch(0.20 0.07 20 / 0.98) 70%)",
          }}
        />
        <Container className="relative z-10 text-center py-24 md:py-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gold text-xs md:text-sm uppercase tracking-[0.35em] mb-6 md:mb-8"
          >
            Early Access
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-cream text-[clamp(2.5rem,7vw,5.5rem)] leading-[1] tracking-[-0.02em] max-w-4xl mx-auto text-balance"
          >
            Get on the list before the{" "}
            <span className="italic text-gold">shelf gets crowded.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28 }}
            className="mt-8 md:mt-10 text-cream/85 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            ORIGIN launches Summer 2026 on Amazon UK and giaquantialabs.com. The Spark
            List gets first allocation — and a founder rate held for a full year.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-12 md:mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <ExternalCTAButton href={SITE.sparkList} variant="gold">
              Join the Spark List
            </ExternalCTAButton>
            <ExternalCTAButton href={SITE.newsletter} variant="ghost">
              Read the Newsletter
            </ExternalCTAButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="mt-10 text-xs uppercase tracking-[0.3em] text-cream/50"
          >
            Signup opens at list.giaquantialabs.com
          </motion.p>
        </Container>
      </section>

      <section className="py-28 md:py-40 bg-cream">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <p className="text-xs uppercase tracking-[0.35em] text-gold mb-6">
              What the list gets you
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-oxblood leading-tight">
              Three real reasons to be on it.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                title: "First allocation",
                body: "Spark List members get access before the general Summer 2026 launch on Amazon UK and our own site.",
              },
              {
                icon: ShieldCheck,
                title: "Founder rate — held for a year",
                body: "Whatever price you lock in at launch, that's your rate for the full first year. No timers, no games.",
              },
              {
                icon: Mail,
                title: "Notes from the build",
                body: "Occasional letters from Marianna — formulation calls, supplier decisions, and the reasoning behind them.",
              },
            ].map(({ icon: Icon, title, body }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="border border-oxblood/15 bg-cream-warm/60 p-8 md:p-10 hover:border-gold hover:shadow-[0_18px_40px_-24px_rgba(59,18,32,0.4)] transition-all duration-500"
              >
                <Icon className="h-7 w-7 text-gold mb-6" strokeWidth={1.25} aria-hidden />
                <h3 className="font-serif text-2xl text-oxblood leading-tight">{title}</h3>
                <p className="mt-4 text-charcoal/80 leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 md:py-28 bg-gold text-oxblood">
        <Container className="text-center">
          <p className="font-serif text-3xl md:text-4xl leading-tight max-w-3xl mx-auto italic">
            Founder rate held for a year for everyone on the list before public launch.
          </p>
          <div className="mt-10">
            <ExternalCTAButton href={SITE.sparkList} variant="primary">
              Join the Spark List
            </ExternalCTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
