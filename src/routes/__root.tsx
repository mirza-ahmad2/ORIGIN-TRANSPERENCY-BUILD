import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { SITE } from "@/lib/site";
import { SITE_URL } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[100svh] items-center justify-center bg-oxblood px-4 text-center">
      <div className="max-w-md">
        <p className="text-xs uppercase tracking-[0.35em] text-gold mb-6">404</p>
        <h1 className="font-serif text-4xl md:text-5xl text-cream">Nothing here.</h1>
        <p className="mt-4 text-cream/70">
          The page you're looking for has moved, or never existed.
        </p>
        <a
          href="/"
          className="inline-block mt-8 px-6 py-3 border border-gold text-gold text-xs uppercase tracking-[0.25em] hover:bg-gold hover:text-oxblood transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
        >
          Return home
        </a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-[100svh] items-center justify-center bg-oxblood px-4 text-center">
      <div className="max-w-md">
        <h1 className="font-serif text-3xl text-cream">This page didn't load</h1>
        <p className="mt-3 text-sm text-cream/70">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="px-5 py-2.5 bg-gold text-oxblood text-xs uppercase tracking-[0.25em] hover:brightness-110 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/50"
          >
            Try again
          </button>
          <a
            href="/"
            className="px-5 py-2.5 border border-cream/40 text-cream text-xs uppercase tracking-[0.25em] hover:border-gold hover:text-gold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Gia Quantia Labs — ORIGIN NAD+ Complex, Launching Summer 2026" },
      {
        name: "description",
        content:
          "ORIGIN — a NAD+ support complex with nine clinically studied ingredients, full doses, nothing hidden. From Gia Quantia Labs. Launching Summer 2026.",
      },
      {
        name: "keywords",
        content:
          "ORIGIN, NAD+, Gia Quantia Labs, NAD+ supplement, full dose supplements, Nicotinamide Riboside, CoQ10, PQQ, transparent label, Amazon UK",
      },
      { name: "author", content: SITE.brand },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: SITE.brand },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
      { name: "theme-color", content: "#3B1220" },
      { name: "msapplication-TileColor", content: "#3B1220" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: SITE.brand,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        sameAs: [SITE.social.instagram, SITE.social.linkedin],
      },
      {
        "@type": "WebSite",
        name: SITE.brand,
        url: SITE_URL,
        description:
          "ORIGIN — a NAD+ support complex with nine clinically studied ingredients, full doses, nothing hidden.",
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-gold focus:text-oxblood focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-[0.2em]"
        >
          Skip to content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    document.documentElement.classList.add("js-ready");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <div className="min-h-[100svh] flex flex-col bg-cream overflow-x-hidden">
        <Nav />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
