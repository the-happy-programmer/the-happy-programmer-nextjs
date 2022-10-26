import Link from 'next/link'
import type { BottomLinkProps } from '../../lib/types/signin'

export default function BottomLink({
  title,
  link,
  url,
}: BottomLinkProps): JSX.Element {
  return (
    <div className="mx-auto  flex max-w-md flex-row justify-center gap-x-1 pt-5 pb-28">
      <p className="text-xs text-gray-900 text-opacity-40 dark:text-gray-50">
        {title}
      </p>
      <Link
        className="text-xs font-semibold hover:underline dark:text-gray-50"
        href={url}
      >
        {link}
      </Link>
    </div>
  )
}
