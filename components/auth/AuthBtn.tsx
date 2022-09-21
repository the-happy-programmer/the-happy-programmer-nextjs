import SvgtoReact from '../Svgtoreact'
import { MouseEventHandler } from 'react'
import { Provider } from '@supabase/supabase-js'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'

interface BtnProps {
  icon: string
  title: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function AuthBtn({ icon, title }: BtnProps): JSX.Element {
  const handleProviderSignIn = async (provider: Provider) => {
    const { error } = await supabaseClient.auth.signIn({ provider })
    if (error) {
      setMessage({ type: 'error', content: error.message })
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
