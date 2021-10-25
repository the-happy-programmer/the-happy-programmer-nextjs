import "../styles/global.css"
import Sitelayout from "../widget/Sitelayout"

function MyApp({ Component, pageProps }) {
  return (
    <html lang='en'>
      <Sitelayout>
        <Component {...pageProps} />
      </Sitelayout>
    </html>
  )
}

export default MyApp
