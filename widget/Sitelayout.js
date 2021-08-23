import Footer from "../components/Footer"
import Nav from "../components/Nav"

export default function Sitelayout({ children }) {
  return (
    <div className='bg-gray-50 dark:bg-gray-900 mx-auto'>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}
