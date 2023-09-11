import { Footer, Navbar } from "@/components";
import "../globals.css";
import Script from "next/script";

export const metadata = {
  title:
    "Vin Check Online | Try our VIN check service today, no payment needed",
  description:
    "Discover your vehicle's history hassle-free! Get free, no-credit-card-required VIN checks online. Access essential information about any car's past and make informed decisions with confidence. Try our VIN check service today, no payment needed.",
  keywords:
    "vin lookup	, vin check online, vin number lookup, vin check,free vin check, vin search, vin lookup free,vin number lookup free,vin number check,vin look up, free vin number check,vin number searchm,car vin lookup,vehicle history,vehicle vin lookup,vin search free",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"></meta>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="application-name" content="VIN Check Online" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="VIN Check Online" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#007bff" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />
      <link rel="apple-touch-icon" href="/apple-touch-icon-iphone-60x60.png" />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/apple-touch-icon-ipad-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-touch-icon-iphone-retina-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-touch-icon-ipad-retina-152x152.png"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://vincheckonline.com/" />
      <meta
        name="twitter:title"
        content="VIN Check Online"
        key="twitter-title"
      />
      <meta
        name="twitter:description"
        content="Check Vehicle Information Online"
      />
      <meta name="twitter:image" content="/preview-feature.png" />
      <meta name="twitter:creator" content="@SomanBandesha" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="VIN Check Online" key="title" />
      <meta
        property="og:description"
        content="Check Vehicle Information Online"
      />
      <meta property="og:site_name" content="VIN Check Online" />
      <meta property="og:url" content="https://vincheckonline.com/" />
      <meta property="og:image" content="/preview-feature.png" />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-51GY603RL9"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-51GY603RL9', {cookie_flags: 'SameSite=None;Secure'});
        `}
      </Script>

      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
