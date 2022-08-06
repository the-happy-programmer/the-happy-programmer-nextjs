import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { HTMLAttributes } from 'react'

interface HappyLinkProps extends HTMLAttributes<LinkProps> {
  href: URL | string
  children: React.ReactNode
  ariaLabel?: string
  classes?: string
}

export default function HappyLink({
  children,
  href,
  classes,
  ariaLabel,
}: HappyLinkProps): JSX.Element {
  const router = useRouter()
  const current =
    router.asPath === href
      ? 'text-gray-900 dark:text-gray-50 border-b-4 border-gray-900 dark:border-gray-50'
      : ''

  return (
    <Link href={href} aria-label={ariaLabel}>
      <a className={`${classes}  ${current}`} aria-label={ariaLabel}>
        {children}
      </a>
    </Link>
  )
}
