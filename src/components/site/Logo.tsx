import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
  to?: string;
  onClick?: () => void;
};

const sizes = {
  sm: { img: "h-9 w-9", text: "text-lg", labs: "text-[9px]" },
  md: { img: "h-11 w-11", text: "text-xl md:text-2xl", labs: "text-[10px]" },
  lg: { img: "h-14 w-14", text: "text-2xl md:text-3xl", labs: "text-xs" },
} as const;

export function Logo({
  className,
  showWordmark = true,
  size = "md",
  to = "/",
  onClick,
}: LogoProps) {
  const s = sizes[size];

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        "group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-oxblood rounded-sm",
        className,
      )}
      aria-label={`${SITE.brand} — Home`}
    >
      <img
        src="/monogram.png"
        alt="Gia Quantia Labs — Premium Laboratory Logo"
        width={48}
        height={48}
        className={cn(
          s.img,
          "rounded-sm object-cover object-center shadow-sm ring-1 ring-cream/10 transition-transform duration-500 group-hover:scale-[1.04]",
        )}
        decoding="async"
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-serif text-cream tracking-[0.08em] uppercase transition-colors duration-300 group-hover:text-gold",
              s.text,
            )}
          >
            {SITE.wordmark}
          </span>
          <span
            className={cn(
              "mt-1 uppercase tracking-[0.42em] text-gold/90",
              s.labs,
            )}
          >
            Labs
          </span>
        </span>
      )}
    </Link>
  );
}
