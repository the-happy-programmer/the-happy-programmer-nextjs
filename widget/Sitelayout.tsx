import Footer from '../components/Footer'
import Nav from '../components/Navigation/Nav'
import { ReactNode } from 'react'

export default function Sitelayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <div className="mx-auto bg-stone-50 dark:bg-default-900">
      {/* <Nav /> */}
      {children}
      <Footer />
    </div>
  )
}
