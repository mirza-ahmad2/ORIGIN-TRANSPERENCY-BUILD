import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "gold";
  className?: string;
}

export function ExternalCTAButton({ href, children, variant = "primary", className }: Props) {
  const base =
    "group inline-flex items-center justify-center gap-3 min-h-[48px] px-6 sm:px-7 py-3.5 sm:py-4 text-sm uppercase tracking-[0.22em] font-medium transition-all duration-300 border will-change-transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2";
  const variants: Record<string, string> = {
    primary:
      "bg-oxblood text-cream border-oxblood hover:bg-gold hover:text-oxblood hover:border-gold focus-visible:ring-offset-cream shadow-[0_10px_30px_-16px_rgba(59,18,32,0.65)]",
    gold: "bg-gold text-oxblood border-gold hover:bg-oxblood hover:text-cream hover:border-oxblood focus-visible:ring-offset-oxblood shadow-[0_10px_30px_-16px_rgba(184,147,74,0.55)]",
    ghost:
      "bg-transparent text-cream border-cream/40 hover:border-gold hover:text-gold focus-visible:ring-offset-oxblood",
  };
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], className)}
    >
      <span>{children}</span>
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={1.5}
        aria-hidden
      />
    </a>
  );
}
