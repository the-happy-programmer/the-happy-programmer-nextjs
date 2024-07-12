import { CopyButton } from '@/components/markdown/CopyButton'

export const Pre = ({ children, raw, ...props }) => {
  const lang = props['data-language']
  return (
    <pre {...props}>
      <div className="relative">
        <CopyButton text={raw} />
      </div>
      {children}
    </pre>
  )
}
