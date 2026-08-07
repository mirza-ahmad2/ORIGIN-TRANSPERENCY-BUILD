import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, FlaskConical, Eye } from "lucide-react";

import heroImg from "@/assets/hero-home.jpg";
import productStill from "@/assets/product-still.jpg";
import { Hero } from "@/components/site/Hero";
import { StatCallout } from "@/components/site/StatCallout";
import { Container } from "@/components/site/Container";
import { ExternalCTAButton } from "@/components/site/ExternalCTAButton";
import { INGREDIENTS, SITE } from "@/lib/site";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageSeo({
      title: "Gia Quantia Labs — ORIGIN. Full Doses. Nothing Hidden.",
      description:
        "ORIGIN is a NAD+ support complex with nine clinically studied ingredients at full, label-transparent doses. From Gia Quantia Labs. Launching Summer 2026.",
      path: "/",
      ogTitle: "ORIGIN — NAD+ Support, Fully Dosed",
      ogDescription:
        "Nine clinically studied ingredients. Full doses on the label. Launching Summer 2026 on Amazon UK.",
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero
        priority
        image={heroImg}
        imageAlt="ORIGIN NAD+ complex — Gia Quantia Labs hero"
        eyebrow="ORIGIN — Launching Summer 2026"
        heading={
          <>
            The label tells you everything.
            <br />
            <span className="italic text-gold">Because it should.</span>
          </>
        }
        subheading="ORIGIN — a NAD+ support complex with nine clinically studied ingredients, full doses, nothing hidden."
        cta={
          <>
            <ExternalCTAButton href={SITE.sparkList} variant="gold">
              Join the Spark List
            </ExternalCTAButton>
            <Link
              to="/formula"
              className="group inline-flex items-center gap-3 min-h-[48px] px-7 py-4 text-sm uppercase tracking-[0.22em] font-medium text-cream border border-cream/40 hover:border-gold hover:text-gold hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
            >
              Read the Formula
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.5}
                aria-hidden
              />
            </Link>
          </>
        }
      />

      <StatCallout small="Radical transparency" tone="cream">
        9 Ingredients.
        <br />
        <span className="italic">Full Doses.</span>
        <br />
        <span className="text-gold">Nothing Hidden.</span>
      </StatCallout>

      {/* Problem block */}
      <section className="py-32 md:py-44 bg-cream">
        <Container>
          <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.35em] text-gold">The Problem</p>
              <div className="hairline mt-6 w-16" />
            </div>
            <div className="md:col-span-8">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl md:text-5xl text-oxblood leading-[1.1] tracking-tight"
              >
                The NAD+ shelf is built on hiding real doses behind proprietary
                blends and inflated front-of-pack numbers.
              </motion.h2>
              <p className="mt-8 text-charcoal/85 text-lg leading-relaxed max-w-2xl">
                Big number on the front, "proprietary blend" on the back, no way to
                know how much of anything you're actually taking. ORIGIN was built
                against that. Every ingredient. Every milligram. Printed where you
                can read it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Formula preview */}
      <section className="py-32 md:py-40 bg-oxblood text-cream">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gold mb-6">
                The Formula
              </p>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight max-w-2xl">
                Nine ingredients. Each one on the label for a reason.
              </h2>
            </div>
            <Link
              to="/formula"
              className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-gold hover:text-cream transition-colors self-start"
            >
              See every dose
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/10">
            {INGREDIENTS.slice(0, 6).map((ing, i) => (
              <motion.div
                key={ing.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.05 }}
                className="bg-oxblood p-8 md:p-10 hover:bg-oxblood-deep hover:-translate-y-0.5 transition-all duration-500"
              >
                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-cream/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-xl text-gold">{ing.dose}</span>
                </div>
                <h3 className="font-serif text-xl leading-tight">{ing.name}</h3>
                <p className="mt-1 text-sm italic text-cream/60">{ing.pair}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Who It's For teaser */}
      <section className="py-32 md:py-44 bg-cream">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden group"
            >
              <img
                src={productStill}
                alt="ORIGIN bottle on cream linen with red ribbon"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </motion.div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gold mb-6">
                Who It's For
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-oxblood leading-[1.1] tracking-tight">
                Built for the woman running at{" "}
                <span className="italic text-gold">68%</span> and calling it coping.
              </h2>
              <p className="mt-8 text-charcoal/85 text-lg leading-relaxed">
                Not for the biohacker chasing the next trend. Formulated for women
                in demanding professional and family lives — the ones who are
                functioning, running on empty, and tired of vague wellness
                promises.
              </p>
              <Link
                to="/who-its-for"
                className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-oxblood border-b border-gold pb-1 hover:text-gold transition-colors"
              >
                Read the whole story
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder credibility strip */}
      <section className="py-24 md:py-32 bg-oxblood text-cream border-t border-gold/15">
        <Container>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {[
              {
                icon: Eye,
                stat: "20 years",
                label: "hospitality operations leadership",
              },
              {
                icon: FlaskConical,
                stat: "9 ingredients",
                label: "at full, printed doses",
              },
              {
                icon: ShieldCheck,
                stat: "0 blends",
                label: "no proprietary anything",
              },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={stat} className="text-center md:text-left">
                <Icon
                  className="h-6 w-6 text-gold mx-auto md:mx-0 mb-4"
                  strokeWidth={1.25}
                />
                <p className="font-serif text-4xl md:text-5xl text-cream">{stat}</p>
                <p className="mt-3 text-cream/70 text-sm">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="relative py-32 md:py-44 bg-gold text-oxblood overflow-hidden">
        <Container className="relative z-10 text-center">
          <p className="text-xs uppercase tracking-[0.35em] mb-8">Early access</p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-4xl mx-auto">
            Get on the list before the shelf gets crowded.
          </h2>
          <p className="mt-8 text-oxblood/80 text-lg max-w-xl mx-auto">
            Founder rate held for a year for everyone on the Spark List, before
            public launch.
          </p>
          <div className="mt-12">
            <ExternalCTAButton href={SITE.sparkList} variant="primary">
              Join the Spark List
            </ExternalCTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
