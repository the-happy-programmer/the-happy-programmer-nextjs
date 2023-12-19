'use client'
import { useEffect, useRef, useState } from 'react'
import Spinner from './spinners/Spinner'
interface UseDynamicSVGImportOptions {
  onCompleted?: (
    name: string | undefined,
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  ) => VoidFunction
  onError?: (err: Error) => void
}

function useDynamicSVGImport(
  name: string | undefined,
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
          onError(err as Error)
        }
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [name, onCompleted, onError])

  return { error, loading, SvgIcon: ImportedIconRef.current }
}

interface SvgtoReactProps extends UseDynamicSVGImportOptions {
  name: string | undefined
  className?: string | undefined
  height?: number
  width?: number
}

const SvgtoReact = ({
  name,
  onCompleted,
  onError,
  ...rest
}: SvgtoReactProps): JSX.Element | null => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError,
  })
  if (error) {
    return <div>{error.message}</div>
  }
  if (loading) {
    return (
      <div className="ml-4 flex h-full w-full place-items-center justify-center">
        <Spinner />
      </div>
    )
  }
  if (SvgIcon) {
    return <SvgIcon {...rest} />
  }
  return null
}
export default SvgtoReact
