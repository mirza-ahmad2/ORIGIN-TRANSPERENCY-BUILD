import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

import heroImg from "@/assets/hero-founder.jpg";
import { Hero } from "@/components/site/Hero";
import { Container } from "@/components/site/Container";
import { ExternalCTAButton } from "@/components/site/ExternalCTAButton";
import { SITE } from "@/lib/site";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/founder")({
  head: () =>
    pageSeo({
      title: "Founder Story — Marianna Macaluso | Gia Quantia Labs",
      description:
        "Marianna Macaluso spent 20 years running hospitality operations before building ORIGIN out of frustration with underdosed, blend-hiding supplements.",
      path: "/founder",
      keywords:
        "Marianna Macaluso, Gia Quantia Labs founder, ORIGIN founder story, transparent supplements founder",
      ogTitle: "The Founder — Marianna Macaluso",
      ogDescription:
        "20 years in hospitality operations. One redundancy. One formula built the right way.",
    }),
  component: FounderPage,
});

const values = [
  {
    title: "Full-dose transparency",
    body: "If it's in the bottle, the amount is on the label. No proprietary blends, no rounded-up marketing numbers.",
  },
  {
    title: "Pairings over hero ingredients",
    body: "Ingredients don't work in isolation. Our pairings — NR + TMG, CoQ10 + PQQ, Rhodiolife® + L-theanine — reflect how the research actually treats them.",
  },
  {
    title: "No hidden anything",
    body: "No proprietary blends. No fillers we couldn't justify to a customer face-to-face. If you can't ask us about it, we shouldn't be selling it.",
  },
  {
    title: "Premium means considered",
    body: "Every decision — the glass, the extracts, the doses, the sourcing — has a reason we're happy to explain. That's what premium means to us.",
  },
];

function FounderPage() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Marianna Macaluso, founder of Gia Quantia Labs"
        eyebrow="The Founder"
        heading={
          <>
            Marianna Macaluso.
            <br />
            <span className="italic text-gold">Twenty years of noticing.</span>
          </>
        }
        subheading="Built ORIGIN because she couldn't find a NAD+ supplement she'd actually recommend to the women in her own life."
      />

      {/* Narrative */}
      <section className="py-32 md:py-44 bg-cream">
        <Container>
          <div className="grid md:grid-cols-12 gap-12">
            <aside className="md:col-span-4">
              <div className="sticky top-32">
                <p className="text-xs uppercase tracking-[0.35em] text-gold mb-6">
                  In her words
                </p>
                <div className="hairline w-16" />
                <p className="mt-6 font-serif italic text-2xl text-oxblood leading-tight">
                  &ldquo;I read every label so I know exactly what my customer is
                  buying. It seemed only fair I do the same for them.&rdquo;
                </p>
                <p className="mt-4 text-sm text-charcoal/60">
                  — Marianna Macaluso, Founder
                </p>
              </div>
            </aside>

            <div className="md:col-span-8 space-y-6 text-charcoal/85 text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-2xl md:text-3xl text-oxblood leading-snug"
              >
                Twenty years in hospitality operations leadership — Piccolino
                Restaurants, Gino D'Acampo Worldwide, RIVA Blu — teaches you to
                notice when something isn't right on the label.
              </motion.p>

              <p>
                In March 2025, Marianna was made redundant. The severance came
                with a strange kind of gift: time to think about the years of
                NAD+ supplements she'd been buying that never quite lived up
                to what the front of the pack promised.
              </p>

              <p>
                Every one of them hid the real dosing inside a &ldquo;proprietary
                blend.&rdquo; Every one of them relied on a hero-ingredient claim
                that ignored what the research actually said about pairings.
                Every one of them was, quietly, a bit of a con.
              </p>

              <p>
                So she started the manufacturer and supplier search that would
                eventually shape ORIGIN. She wrote the brief the way she wrote
                supplier specs at the restaurant groups: exhaustive, exact,
                allergic to marketing language. Full doses. Named extracts.
                Pairings that reflect the research. UV-protective glass.
                Printed labels a nutritionist could read out loud.
              </p>

              <p>
                ORIGIN is the result. It is, for now, the only product in the
                Gia Quantia Labs range — because building one thing the right
                way is more interesting than building five things the usual way.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-32 md:py-40 bg-oxblood text-cream border-t border-gold/15">
        <Container>
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-[0.35em] text-gold mb-6">
              What we won't compromise on
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
              Four rules we wrote before the first sample was ordered.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="p-10 border border-cream/15 hover:border-gold hover:bg-cream/[0.03] transition-all duration-500 hover:-translate-y-1"
              >
                <p className="font-serif text-gold text-4xl mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-2xl leading-tight">{v.title}</h3>
                <p className="mt-4 text-cream/80 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-32 bg-cream text-center">
        <Container>
          <h2 className="font-serif text-4xl md:text-5xl text-oxblood leading-tight max-w-2xl mx-auto">
            Read the newsletter, or get on the list.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ExternalCTAButton href={SITE.sparkList} variant="primary">
              Join the Spark List
            </ExternalCTAButton>
            <ExternalCTAButton href={SITE.newsletter} variant="gold">
              Read the Newsletter
            </ExternalCTAButton>
          </div>
        </Container>
      </section>
    </>
  );
}
