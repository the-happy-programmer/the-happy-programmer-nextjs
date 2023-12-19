import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { ReactNode } from 'react'

export default function Sitelayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <div className="mx-auto bg-gray-50 dark:bg-gray-900">
      {/* <Nav /> */}
      {children}
      <Footer />
    </div>
  )
}
