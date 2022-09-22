import type { ErrorProps } from '../../lib/types/signin'

export default function ErrorMessage({ error }: { error: ErrorProps }) {
  if (!error) return null
  return (
    <div
      className={`mt-5 rounded-md border-2 p-3 text-sm ${
        error?.error
          ? 'border-danger  text-danger'
          : 'border-teal-600  text-teal-600 dark:border-teal-300 dark:text-teal-300'
      }`}
    >
      <p>{error?.success || error?.error}</p>
    </div>
  )
}
