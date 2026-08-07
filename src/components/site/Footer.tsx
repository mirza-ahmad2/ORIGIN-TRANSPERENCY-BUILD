import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, Facebook, Twitter } from "lucide-react";
import { NAV_LINKS, SITE, isPlaceholderLink } from "@/lib/site";
import { Container } from "./Container";
import { Logo } from "./Logo";
import type { ReactNode } from "react";

type SocialItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

function SocialLink({ label, href, icon }: SocialItem) {
  const placeholder = isPlaceholderLink(href);

  if (placeholder) {
    return (
      <span
        className="inline-flex items-center gap-3 text-cream/55 text-[15px]"
        aria-label={`${label}: Add here`}
      >
        {icon}
        <span>
          {label}
          <span className="ml-2 text-cream/40 italic text-sm">Add here</span>
        </span>
      </span>
    );
  }

  const isEmail = label.toLowerCase() === "email";
  const resolvedHref = isEmail && !href.startsWith("mailto:") ? `mailto:${href}` : href;

  return (
    <a
      href={resolvedHref}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className="inline-flex items-center gap-3 text-cream/85 hover:text-gold transition-colors duration-300 text-[15px] focus-visible:outline-none focus-visible:text-gold"
    >
      {icon}
      {label}
    </a>
  );
}

export function Footer() {
  const socials: SocialItem[] = [
    {
      label: "Instagram",
      href: SITE.social.instagram,
      icon: <Instagram size={16} strokeWidth={1.5} aria-hidden />,
    },
    {
      label: "LinkedIn",
      href: SITE.social.linkedin,
      icon: <Linkedin size={16} strokeWidth={1.5} aria-hidden />,
    },
    {
      label: "Email",
      href: SITE.social.email,
      icon: <Mail size={16} strokeWidth={1.5} aria-hidden />,
    },
    {
      label: "Facebook",
      href: SITE.social.facebook,
      icon: <Facebook size={16} strokeWidth={1.5} aria-hidden />,
    },
    {
      label: "X / Twitter",
      href: SITE.social.twitter,
      icon: <Twitter size={16} strokeWidth={1.5} aria-hidden />,
    },
  ];

  return (
    <footer className="bg-oxblood text-cream pt-20 md:pt-24 pb-10 border-t border-gold/20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo size="md" />
            <p className="mt-5 text-cream/70 text-sm max-w-sm italic">
              &ldquo;{SITE.tagline}&rdquo;
            </p>
            <a
              href={SITE.newsletter}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex text-sm text-gold/90 hover:text-gold transition-colors underline-offset-4 hover:underline"
            >
              More Than Surviving newsletter
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Navigate</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-cream/85 hover:text-gold transition-colors duration-300 text-[15px] focus-visible:outline-none focus-visible:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Elsewhere</p>
            <ul className="space-y-4">
              {socials.map((item) => (
                <li key={item.label}>
                  <SocialLink {...item} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hairline my-12 md:my-14" />

        <p className="text-cream/55 text-xs leading-relaxed max-w-3xl">{SITE.disclaimer}</p>

        <div className="mt-10 flex flex-col md:flex-row justify-between gap-4 text-cream/50 text-xs">
          <p>© {new Date().getFullYear()} Gia Quantia Labs. All rights reserved.</p>
          <p>
            This website is{" "}
            <a
              href={SITE.poweredBy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline underline-offset-4 focus-visible:outline-none"
            >
              powered by The Innovations
            </a>
            .
          </p>
        </div>
      </Container>
    </footer>
  );
}
