import "./globals.css";
// Import the custom Navbar component
import NavbarUi from '@/components/navbar/navbar'
import Script from "next/script";
import Footer from "@/components/footer/Footer";
import LAYOUT_CSS from "./layout.module.css";
// Premium Minimal Editorial typography: Plus Jakarta Sans (display) + Inter (body)
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { SITE_CONFIG } from "@/config/site";

// Expressive display font (names, key headlines)
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

// Functional readability (body, labels, descriptions)
const interSans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-body",
});

// Define site metadata for SEO and social sharing
export const metadata = {
  // Base URL for the site - used for constructing absolute URLs
  metadataBase: new URL(SITE_CONFIG.urls.base),

  // Basic SEO metadata
  title: SITE_CONFIG.uiText.appTitle,
  description: SITE_CONFIG.uiText.appDescription,
  keywords: SITE_CONFIG.uiText.keywords,

  // Open Graph metadata for rich sharing experiences on Facebook, LinkedIn, etc.
  openGraph: {
    title: SITE_CONFIG.uiText.appTitle,
    description: SITE_CONFIG.uiText.openGraphDescription,
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.urls.base,
    siteName: SITE_CONFIG.uiText.siteName,
    images: [
      {
        url: SITE_CONFIG.urls.sharingImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.uiText.sharingImageAlt
      }
    ]
  },

  // Twitter card metadata for optimized Twitter sharing
  twitter: {
    card: SITE_CONFIG.twitter.card,
    title: SITE_CONFIG.uiText.appTitle,
    description: SITE_CONFIG.twitter.description,
    creator: SITE_CONFIG.twitter.creator,
    images: [SITE_CONFIG.urls.sharingImage]
  },

  // Robots directives for search engine crawlers
  robots: {
    index: true,
    follow: true
  },

  // Specify the canonical URL to prevent duplicate content issues
  alternates: {
    canonical: SITE_CONFIG.urls.base
  }
};

// Root layout component that wraps all pages
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();",
          }}
        />
        {/* Google Analytics script */}
        <Script async src={SITE_CONFIG.urls.analyticsScript} />
        <Script id='google-analytics' strategy='afterInteractive'>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${SITE_CONFIG.analytics.id}');
        `}</Script>
      </head>
      <body className={`${plusJakarta.variable} ${interSans.variable}`}>
        <div className={LAYOUT_CSS.shell}>
          {/* Include the navigation bar on all pages */}
          <NavbarUi />

          {/* Render the page content */}
          <div className={LAYOUT_CSS.content}>{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
