import { CustomMDX } from './Mdx-remote'

export default function Postbody({
  content,
}: {
  content: string
}): JSX.Element {
  return (
    <div className="border-b border-t border-divider py-20">
      <div className="prose mx-auto dark:prose-invert">
        <CustomMDX source={content} />
      </div>
    </div>
  )
}
