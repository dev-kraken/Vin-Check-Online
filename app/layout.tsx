import { Footer, Navbar } from '@/components'
import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: "Vin Check Online",
  description:
    "Quickly and easily check the history of any vehicle to ensure it is safe and reliable. We offer fast and accurate reports that are easy to read and understand.",
    keywords:
    "vin lookup	, vin check online, vin number lookup, vin check,free vin check, vin search, vin lookup free,vin number lookup free,vin number check,vin look up, free vin number check,vin number searchm,car vin lookup,vehicle history,vehicle vin lookup,vin search free",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"></meta>
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
  )
}
