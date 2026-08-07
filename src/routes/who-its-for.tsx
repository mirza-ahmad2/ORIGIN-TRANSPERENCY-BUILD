import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";

import heroImg from "@/assets/hero-audience.jpg";
import { Hero } from "@/components/site/Hero";
import { Container } from "@/components/site/Container";
import { ExternalCTAButton } from "@/components/site/ExternalCTAButton";
import { SITE } from "@/lib/site";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/who-its-for")({
  head: () =>
    pageSeo({
      title: "Who It's For — ORIGIN | Gia Quantia Labs",
      description:
        "Formulated for women in demanding professional and family lives — functioning, running on empty, and tired of vague wellness promises.",
      path: "/who-its-for",
      keywords:
        "ORIGIN for women, NAD+ for busy women, transparent supplements, Gia Quantia Labs audience",
      ogTitle: "Who ORIGIN Is For",
      ogDescription:
        "Built for women running at 68% and calling it coping. Not for biohackers chasing trends.",
    }),
  component: AudiencePage,
});

const forList = [
  "Women in demanding professional and family lives",
  "Anyone tired of proprietary blends and label theatre",
  "Readers who want the dose printed on the bottle",
  "People who value considered, adult wellbeing over trend-chasing",
];
const notForList = [
  "Biohackers optimising for the next benchmark",
  "Anyone looking for a miracle cure or medical claim",
  "The wellness-industrial complex and its influencers",
  "People who prefer big numbers on the front to specifics on the back",
];

function AudiencePage() {
  return (
    <>
      <Hero
        image={heroImg}
        imageAlt="Who ORIGIN is for — women in demanding lives"
        eyebrow="Who It's For"
        heading={
          <>
            Running at <span className="italic text-gold">68%</span>
            <br />
            and calling it coping.
          </>
        }
        subheading="Formulated for women in demanding professional and family lives — functioning, not thriving, and tired of vague wellness promises."
      />

      {/* Editorial block */}
      <section className="py-32 md:py-44 bg-cream">
        <Container>
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1 }}
              className="font-serif text-oxblood text-2xl md:text-4xl leading-[1.25] tracking-tight"
            >
              You aren't broken. You're carrying a lot — the job, the family, the
              logistics of a life that mostly holds together — and you're doing
              it on less than you should be. ORIGIN is formulated for that
              woman.
            </motion.p>

            <div className="mt-16 space-y-6 text-charcoal/85 text-lg leading-relaxed">
              <p>
                We didn't build this for the woman with a two-hour morning
                routine and a Zone 2 heart-rate monitor. We built it for the one
                who is quietly exceptional at her job, who takes care of the
                people around her, and who has been told her tiredness is
                &ldquo;just&nbsp;stress.&rdquo;
              </p>
              <p>
                Our position is simple: if you're going to take something,
                take something where the dose is printed on the label and the
                pairings reflect how the ingredients are actually studied. Not
                the version with the biggest number on the front.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* For / Not For grid */}
      <section className="py-24 md:py-32 bg-cream-warm border-y border-oxblood/10">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="bg-oxblood text-cream p-10 md:p-14 hover:shadow-[0_20px_50px_-28px_rgba(0,0,0,0.55)] transition-shadow duration-500"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-gold mb-8">
                Built for
              </p>
              <ul className="space-y-5">
                {forList.map((item) => (
                  <li key={item} className="flex gap-4 items-start">
                    <Check
                      className="h-5 w-5 text-gold shrink-0 mt-1"
                      strokeWidth={1.5}
                    />
                    <span className="text-lg leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="bg-cream text-oxblood p-10 md:p-14 border border-oxblood/20 hover:border-gold transition-colors duration-500"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-gold mb-8">
                Not built for
              </p>
              <ul className="space-y-5">
                {notForList.map((item) => (
                  <li key={item} className="flex gap-4 items-start">
                    <X
                      className="h-5 w-5 text-oxblood/50 shrink-0 mt-1"
                      strokeWidth={1.5}
                    />
                    <span className="text-lg leading-snug text-charcoal/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-32 bg-cream text-center">
        <Container>
          <h2 className="font-serif text-4xl md:text-5xl text-oxblood leading-tight max-w-2xl mx-auto">
            If this sounds like you, get on the list.
          </h2>
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
