import "./globals.css";
// Import the custom Navbar component
import NavbarUi from '@/components/navbar/navbar'
import Script from "next/script";
// Import Poppins font from Google Fonts using Next.js font optimization
import { Poppins } from "next/font/google"

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
  metadataBase: new URL('https://connect.karthikshetty.info'),

  // Basic SEO metadata
  title: "Connect with Karthik Shetty",
  description: "Find all my important links in one place! Connect with me through my portfolio, GitHub, LinkedIn, YouTube channels, and social media profiles.",
  keywords: "Karthik Shetty, social links, connect with me, link-sharing, portfolio links, GitHub, LinkedIn, YouTube, web development, full stack developer, React, Next.js, Angular, Java, MySQL",

  // Open Graph metadata for rich sharing experiences on Facebook, LinkedIn, etc.
  openGraph: {
    title: "Connect with Karthik Shetty",
    description: "All my essential links in one place. Connect with me on various platforms and explore my work.",
    type: "website",
    locale: "en_US",
    url: "https://connect.karthikshetty.info",
    siteName: "Karthik Shetty | Connect",
    images: [
      {
        url: "/images/sharing/connect-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Karthik Shetty - Connect with Me"
      }
    ]
  },

  // Twitter card metadata for optimized Twitter sharing
  twitter: {
    card: "summary_large_image",
    title: "Connect with Karthik Shetty",
    description: "Find all my important links in one place, including portfolio, GitHub, LinkedIn, and social media.",
    creator: "@karthikshettyyy",
    images: ["/images/sharing/connect-og-image.jpg"]
  },

  // Robots directives for search engine crawlers
  robots: {
    index: true,
    follow: true
  },

  // Specify the canonical URL to prevent duplicate content issues
  alternates: {
    canonical: "https://connect.karthikshetty.info"
  }
};

// Root layout component that wraps all pages
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics script */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SHQCDTWEW3" />
        <Script id='google-analytics' strategy='afterInteractive'>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-SHQCDTWEW3');
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
