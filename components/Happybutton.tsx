import { ReactNode, MouseEventHandler } from 'react'
import styles from '../styles/buttons.module.css'
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
    <a onClick={onClick} href={href} className={xl ? styles.lbtn : styles.sbtn}>
      {children}
    </a>
  )
}
