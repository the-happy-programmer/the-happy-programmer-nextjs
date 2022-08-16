import { ReactNode, MouseEventHandler } from 'react'
import { button } from '../styles/styles'

interface BtnProps {
  children: ReactNode
  href?: string
  xl?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

export default function HappyButton({
  children,
  href,
  xl,
  onClick,
}: BtnProps): JSX.Element {
  return (
    <a onClick={onClick} href={href} className={button(xl as boolean)}>
      {children}
    </a>
  )
}
