import { useEffect, useRef, useState } from "react"

function useDynamicSVGImport(name, options = {}) {
  const ImportedIconRef = useRef()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

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

const SvgtoReact = ({ name, onCompleted, onError, ...rest }) => {
  const { error, loading, SvgIcon } = useDynamicSVGImport(name, {
    onCompleted,
    onError,
  })
  if (error) {
    return error.message
  }
  if (loading) {
    return ""
  }
  if (SvgIcon) {
    return <SvgIcon {...rest} />
  }
  return null
}
export default SvgtoReact
