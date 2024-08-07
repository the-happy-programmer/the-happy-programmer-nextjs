import Footer from '@/components/Footer'
import MyNavBar from '@/components/Navigation/Nav'
import { Providers } from '@/components/Providers'
import '@/styles/global.css'
import Script from 'next/script'

export const metadata = {
  title: 'The Happy Programmer',
  description: 'A blog about programming and web development',
}

export default async function RootLayout({
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
      <body>
        <Providers>
          <MyNavBar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
