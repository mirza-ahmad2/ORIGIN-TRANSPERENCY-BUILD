import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        scrolled || open
          ? "bg-oxblood/90 backdrop-blur-md border-b border-gold/15 py-2.5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.45)]"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <Container className="flex items-center justify-between gap-4">
        <Logo size="sm" onClick={() => setOpen(false)} />

        <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Primary">
          {NAV_LINKS.slice(0, 4).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[12px] xl:text-[13px] uppercase tracking-[0.22em] text-cream/80 hover:text-gold transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full focus-visible:outline-none focus-visible:text-gold"
              activeProps={{ className: "text-gold after:w-full" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/spark-list"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-gold text-gold text-[12px] uppercase tracking-[0.22em] hover:bg-gold hover:text-oxblood transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
          >
            Join the Spark List
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden text-cream p-2 -mr-2 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-oxblood border-t border-gold/20">
          <Container className="py-8 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-cream text-xl font-serif py-1 focus-visible:outline-none focus-visible:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {l.label}
              </Link>
            ))}
            <p className="pt-4 text-cream/50 text-xs uppercase tracking-[0.25em]">
              {SITE.product} — Summer 2026
            </p>
          </Container>
        </div>
      </div>
    </header>
  );
}
