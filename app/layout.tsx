// app/layout.tsx - Updated with Geist font and SEO

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "AdeptNow Techno Solutions | Digital Excellence in Pharma & Life Sciences",
  description:
    "Specialized digital transformation partner for pharmaceutical and life sciences. GxP-compliant implementation, validation, and support services for LIMS, QMS, DMS, MES, SAP, and ERP systems.",
  keywords: [
    "AdeptNow Techno Solutions",
    "adeptnow",
    "adeptnow techno solutions",
    "pharma digital transformation",
    "GxP software implementation",
    "pharmaceutical digital transformation",
    "life sciences consulting",
    "LIMS implementation",
    "QMS validation",
    "21 CFR Part 11 compliance",
    "master data management",
    "pharma IT consulting",
    "regulatory compliance software",
    "data integrity solutions",
  ],
  authors: [{ name: "AdeptNow Techno Solutions" }],
  creator: "AdeptNow",
  publisher: "AdeptNow Techno Solutions",

  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.adeptnow.in",
    siteName: "AdeptNow Techno Solutions",
    title:
      "AdeptNow Techno Solutions | Digital Excellence in Pharma & Life Sciences",
    description:
      "Specialized digital transformation partner for pharmaceutical and life sciences. GxP-compliant implementation, validation, and support.",
    images: [
      {
        url: "/images/og-image.png", // Place your Open Graph image in public/images folder
        width: 1200,
        height: 630,
        alt: "AdeptNow Techno Solutions",
      },
    ],
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title:
      "AdeptNow Techno Solutions | Digital Excellence in Pharma & Life Sciences",
    description:
      "Specialized digital transformation partner for pharmaceutical and life sciences. GxP-compliant implementation, validation, and support.",
    images: ["/images/og-image.png"], // Place your Twitter card image in public/images folder
    creator: "@adeptnow", // Replace with your actual Twitter handle
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Favicon and icons
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/images/apple-touch-icon.png" }],
  },

  // Manifest for PWA (optional)
  // manifest: "/site.webmanifest",

  // Theme color
  themeColor: "#005eb8",

  // Verification tags (add these once you have them from Google, Bing, etc.)
  // verification: {
  //   google: "your-google-verification-code", // Get from Google Search Console
  //   // yandex: "your-yandex-verification-code",
  //   // bing: "your-bing-verification-code",
  // },

  // Category
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href="https://www.adeptnow.in" />

        {/* Font Awesome */}
        {/* <link 
          rel="stylesheet" 
          href="https://cdnjs. cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        /> */}

        {/* Structured Data (JSON-LD) for better SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AdeptNow Techno Solutions",
              url: "https://www.adeptnow.com",
              logo: "https://www.adeptnow.com/images/logo.png",
              description:
                "Specialized digital transformation partner for pharmaceutical and life sciences. GxP-compliant implementation, validation, and support.",
              email: "info@adeptnow.com",
              foundingDate: "2024",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              sameAs: [
                // Add your social media profiles here
                // "https://www.linkedin.com/company/adeptnow",
                // "https://twitter.com/adeptnow"
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Digital Transformation Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "GxP Software Implementation",
                      description:
                        "End-to-end implementation services for LIMS, QMS, DMS, MES, SAP, and ERP systems",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Project Management & Business Analysis",
                      description:
                        "Strategic planning and risk mitigation for digitalization initiatives",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Master Data Design & Validation",
                      description:
                        "Comprehensive master data services for GxP systems",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Project Coordination & Stakeholder Management",
                      description:
                        "Strategic coordination between vendors, customers, and internal teams",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
