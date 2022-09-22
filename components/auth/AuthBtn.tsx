import SvgtoReact from '../Svgtoreact'
import { MouseEventHandler } from 'react'
import type { Provider } from '@supabase/supabase-js'
import { supabase } from '../../lib/utils/supabaseclient'

interface BtnProps {
  icon: string
  title: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  setError: (error: {
    error: string | undefined
    success: string | undefined
  }) => void
}

export default function AuthBtn({
  icon,
  title,
  setError,
}: BtnProps): JSX.Element {
  const handleProviderSignIn = async (provider: Provider) => {
    const { error } = await supabase.auth.signIn({ provider })
    if (error) {
      setError({ error: error?.message, success: undefined })
    }
  }

  return (
    <button
      onClick={() => handleProviderSignIn(title as Provider)}
      className="flex w-full flex-row content-center justify-center gap-x-3 rounded-md border border-gray-50 border-opacity-10 bg-gray-900 bg-opacity-5 py-3 hover:bg-opacity-20 dark:bg-gray-50"
    >
      <SvgtoReact
        name={icon}
        className="fill-current text-gray-900 dark:text-gray-50"
        height={20}
        width={20}
      />
      <p className="my-auto text-xs font-medium capitalize text-gray-900 dark:text-gray-50">
        sign in with {title}
      </p>
    </button>
  )
}
