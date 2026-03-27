import "./globals.css";
// Import the custom Navbar component
import NavbarUi from '@/components/navbar/navbar'
import Script from "next/script";
// Import Poppins font from Google Fonts using Next.js font optimization
import { Poppins } from "next/font/google"
import { SITE_CONFIG } from "@/config/site";

// Configure Poppins font with all available weights 
// and create a CSS variable that can be used throughout the app
const poppinsSans = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-primary",
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
    <html lang="en">
      <head>
        {/* Google Analytics script */}
        <Script async src={SITE_CONFIG.urls.analyticsScript} />
        <Script id='google-analytics' strategy='afterInteractive'>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${SITE_CONFIG.analytics.id}');
        `}</Script>
      </head>
      <body className={poppinsSans.variable}>
        {/* Include the navigation bar on all pages */}
        <NavbarUi />
        {/* Render the page content */}
        {children}
      </body>
    </html>
  );
}
