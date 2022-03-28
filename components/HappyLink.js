import Link from 'next/link'
import { useRouter } from 'next/router'

export default function HappyLink({ children, href, classes, alt }) {
  const router = useRouter()
  const current =
    router.asPath === href
      ? 'text-gray-900 dark:text-gray-50 border-b-4 border-gray-900 dark:border-gray-50'
      : ''

  return (
    <Link href={href} alt={alt}>
      <a className={`${classes} ${current}`} alt={alt}>
        {children}
      </a>
    </Link>
  )
}
