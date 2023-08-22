import { Footer, Navbar } from '@/components'
import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Vin Check Online',
  description: 'Decode VIN on one click',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
