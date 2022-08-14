import { useState, useRef } from 'react'
import SvgtoReact from '../Svgtoreact'

export default function SubInput(): JSX.Element {
  const inputEl = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const sub = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current && inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()

    if (error) {
      setError('Something went wrong! please, try a valid email.')
      setMessage(null)
      return
    }
    inputEl.current && (inputEl.current.value = '')
    setMessage('You are now subscribed')
    setError(null)
  }

  return (
    <form onSubmit={sub}>
      <input
        type="email"
        name="email"
        ref={inputEl}
        placeholder="example@email.com"
        className="focus:outline-none mr-4 rounded-md border py-3 px-4 text-gray-900 hover:border-gray-900 focus:border-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-50 dark:hover:border-gray-50 dark:focus:border-gray-50"
      />
      <button
        id="subscribe"
        type="submit"
        className="rounded-md bg-gray-900 px-10 py-3 font-semibold text-gray-50 hover:bg-gray-700 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200"
      >
        Subrcibe
      </button>
      <div className="flex flex-row items-center justify-center gap-x-2 pt-4">
        {!message && error && (
          <>
            <SvgtoReact
              name={error && 'cancel'}
              className="h-5 fill-current text-danger"
            />
            <p className="text-danger">{error}</p>
          </>
        )}
        {!error && message && (
          <>
            <SvgtoReact
              name={message && 'tick'}
              className="h-5 fill-current text-success dark:text-success"
            />
            <p className="text-success">{message}</p>
          </>
        )}
      </div>
    </form>
  )
}
