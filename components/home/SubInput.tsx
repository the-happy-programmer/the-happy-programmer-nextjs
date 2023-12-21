'use client'
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
        className="mr-4 rounded-md border py-3 px-4 text-default-900 hover:border-default-900 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-50 dark:hover:border-stone-50 dark:focus:border-stone-50"
      />
      <button
        id="subscribe"
        type="submit"
        className="rounded-md bg-default-900 px-10 py-3 font-semibold text-stone-50 hover:bg-stone-700 dark:bg-stone-50 dark:text-default-900 dark:hover:bg-stone-200"
      >
        Subscribe
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
