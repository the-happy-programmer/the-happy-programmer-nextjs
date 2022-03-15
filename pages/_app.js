import '../styles/global.css'
import Script from 'next/script'
import Sitelayout from '../widget/Sitelayout'
const gtag = process.env.WORDPRESS_AUTH_REFRESH_TOKEN

function MyApp({ Component, pageProps }) {
  return (
    <Sitelayout>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`} />
      <Script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${gtag});
        `}
      </Script>
      <Component {...pageProps} />
    </Sitelayout>
  )
}

export default MyApp
