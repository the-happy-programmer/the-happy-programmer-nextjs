import { useEffect, useRef, useState } from 'react'

interface UseDynamicSVGImportOptions {
  onCompleted?: (
    name: string,
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined | JSX.Element
  ) => void
  onError?: (err: Error) => void
}

function useDynamicSVGImport(
  name: string,
  options: UseDynamicSVGImportOptions = {}
) {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()

  const { onCompleted, onError } = options
  useEffect(() => {
    setLoading(true)
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (
          await import(`../public/svg/${name}.svg`)
        ).default
        if (onCompleted) {
          onCompleted(name, ImportedIconRef.current)
        }
      } catch (err) {
        if (onError) {
          onError(err)
        }
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [name, onCompleted, onError])

  return { error, loading, SvgIcon: ImportedIconRef.current }
}

interface SvgtoReactProps extends UseDynamicSVGImportOptions {
  name: string
  className?: string
  height?: number
  width?: number
}

const SvgtoReact = ({
  name,
  onCompleted,
  onError,
  ...rest
}: SvgtoReactProps) => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError,
  })
  if (error) {
    return error.message
  }
  if (loading) {
    return ''
  }
  if (SvgIcon) {
    return <SvgIcon {...rest} />
  }
  return null
}
export default SvgtoReact
