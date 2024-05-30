import { useTheme } from 'next-themes'
import { CustomMDX } from './Mdx-remote'
import { MdToHtml } from '@/components/Code'

export default function Postbody({
  content,
}: {
  content: string
}): JSX.Element {
  return (
    <div className="border-b border-t border-divider py-unit-3xl">
      <div className="prose mx-auto dark:prose-invert">
        <MdToHtml code={content} />
      </div>
    </div>
  )
}
