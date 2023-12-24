'use client'
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { HTMLAttributes, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface HappyLinkProps extends HTMLAttributes<LinkProps> {
  href: URL | string
  children: ReactNode
  ariaLabel?: string
  classes?: string
}

export default function HappyLink({
  children,
  href,
  classes,
  ariaLabel,
}: HappyLinkProps): JSX.Element {
  const router = usePathname()
  const current =
    router === href
      ? 'text-default-900 dark:text-stone-50 border-b-4 border-default-900 dark:border-stone-50'
      : ''

  return (
    <Link
      href={href}
      className={`${classes}  ${current}`}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  )
}
