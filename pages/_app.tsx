import '../styles/global.css'
import Script from 'next/script'
import Sitelayout from '../widget/Sitelayout'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { UserProvider } from '@supabase/supabase-auth-helpers/react'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const id = process.env.NEXT_PUBLIC_ANALYTICS_ID
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <Sitelayout>
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
        <Component {...pageProps} />
      </Sitelayout>
    </UserProvider>
  )
}

export default MyApp
