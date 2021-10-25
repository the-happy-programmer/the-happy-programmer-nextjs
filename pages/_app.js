import "../styles/global.css"
import "../styles/xcode.css"
import Sitelayout from "../widget/Sitelayout"

function MyApp({ Component, pageProps }) {
  return (
    <Sitelayout>
      <Component {...pageProps} />
    </Sitelayout>
  )
}

export default MyApp
