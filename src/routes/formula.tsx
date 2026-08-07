import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ShieldCheck, Sun } from "lucide-react";

import heroImg from "@/assets/hero-formula.jpg";
import { Hero } from "@/components/site/Hero";
import { Container } from "@/components/site/Container";
import { IngredientCard } from "@/components/site/IngredientCard";
import { ExternalCTAButton } from "@/components/site/ExternalCTAButton";
import { StatCallout } from "@/components/site/StatCallout";
import { INGREDIENTS, SITE } from "@/lib/site";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/formula")({
  head: () =>
    pageSeo({
      title: "The Formula — ORIGIN | Gia Quantia Labs",
      description:
        "Every ingredient, every dose, printed on the label. NR + TMG, trans-resveratrol with BioPerine®, CoQ10, PQQ, Rhodiolife®, L-theanine, quercetin.",
      path: "/formula",
      keywords:
        "ORIGIN formula, NAD+ ingredients, Nicotinamide Riboside, TMG, Resveratrol, BioPerine, CoQ10, PQQ, Rhodiolife, L-Theanine, Quercetin, Gia Quantia Labs",
      ogTitle: "The Formula — Full Doses, No Blends",
      ogDescription:
        "Nine clinically studied ingredients, each at a full, printed dose. Housed in UV-protective glass.",
    }),
  component: FormulaPage,
});

function FormulaPage() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="ORIGIN formula ingredients — Gia Quantia Labs"
        eyebrow="The Formula"
        heading={
          <>
            Every ingredient.
            <br />
            <span className="italic text-gold">Every dose.</span>
          </>
        }
        subheading="Studied ingredients, standardised extracts, and pairings that show up in the research — not marketing. Here is exactly what is in ORIGIN."
      />

      {/* Intro copy */}
      <section className="py-24 md:py-32 bg-cream">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-gold mb-6">
              How to read this page
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-oxblood leading-tight">
              We picked ingredients that are studied — and pairings that reflect
              how they're actually studied.
            </h2>
            <p className="mt-8 text-charcoal/85 leading-relaxed">
              Each ingredient below appears with its dose and a short note on why
              we chose it, or why we chose to pair it with something else. Nothing
              is hidden behind a "proprietary blend."
            </p>
          </div>
        </Container>
      </section>

      {/* Ingredients grid */}
      <section className="pb-32 md:pb-40 bg-cream">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INGREDIENTS.map((ing, i) => (
              <IngredientCard key={ing.name} index={i + 1} {...ing} />
            ))}
          </div>
        </Container>
      </section>

      <StatCallout tone="oxblood" small="Nothing hidden">
        9 Ingredients.
        <br />
        <span className="italic text-gold">Full Doses.</span>
      </StatCallout>

      {/* Packaging */}
      <section className="py-32 md:py-40 bg-cream-warm">
        <Container>
          <div className="grid md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.35em] text-gold mb-6">
                The Bottle
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-oxblood leading-[1.1] tracking-tight">
                UV-protective glass, because light doesn't care how good your
                formula is.
              </h2>
            </div>
            <div className="md:col-span-7 md:pl-10">
              <div className="space-y-8">
                {[
                  {
                    icon: Sun,
                    title: "Light-sensitive ingredients are treated as such",
                    body: "Several of the ingredients inside ORIGIN degrade under light exposure. Amber, UV-protective glass is the packaging choice that respects that — not the cheapest one.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Every decision has a reason",
                    body: "Premium doesn't mean nicer packaging for the sake of it. It means every choice — the glass, the standardised extracts, the pairings, the doses — was made because it's the right way to do it.",
                  },
                ].map(({ icon: Icon, title, body }) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7 }}
                    className="flex gap-5"
                  >
                    <Icon
                      className="h-6 w-6 text-gold shrink-0 mt-1"
                      strokeWidth={1.25}
                    />
                    <div>
                      <h3 className="font-serif text-xl text-oxblood">{title}</h3>
                      <p className="mt-2 text-charcoal/80 leading-relaxed">{body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Compliance note */}
      <section className="py-16 bg-cream border-t border-oxblood/10">
        <Container>
          <p className="text-charcoal/60 text-sm max-w-3xl mx-auto text-center italic leading-relaxed">
            ORIGIN is a food supplement, not a medicine. Ingredient descriptions
            reference studied compounds and standardised extracts — they are not
            claims of treatment or cure for any condition.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-32 bg-oxblood text-cream text-center">
        <Container>
          <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-2xl mx-auto">
            Want to be first in line?
          </h2>
          <div className="mt-10">
            <ExternalCTAButton href={SITE.sparkList} variant="gold">
              Join the Spark List
            </ExternalCTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
