import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import { Providers } from '@/components/Providers'
import '@/styles/global.css'
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const id = process.env.NEXT_PUBLIC_ANALYTICS_ID
  return (
    <html lang="en">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}');
            `}
      </Script>
      <Providers>
        <body>
          <Nav />
          <main>{children}</main>
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
