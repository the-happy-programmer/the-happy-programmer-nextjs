import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useRouter } from 'next/router'
import { useState } from 'react'
import AuthBtn from './AuthBtn'
import AuthInput from './AuthInput'
import FormSceleton from './FormSceleton'

export default function SignInForm({
  setForgotPassword,
  setSigninWithEmailPassword,
  setSigninWithLink,
}): JSX.Element {
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState<string | undefined>(undefined)
  const [password, setPassword] = useState<string | undefined>(undefined)
  const [remember, setRemember] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()
  const signup = async () => {
    setLoading(true)
    const { error, user: createdUser } = await supabaseClient.auth.signIn({
      email,
      password,
    })

    setEmail('')
    setPassword('')
    if (error) {
      console.log('error', error.message)
      setError(error.message)
    }
    if (createdUser) {
      console.log(createdUser)
      router.replace('/')
    }
    setLoading(false)
  }
  return (
    <>
      <FormSceleton title="Sign in with your email">
        <AuthInput
          icon="email"
          value={email}
          setValue={setEmail}
          name="email"
          iconclass="fill-current text-gray-400"
        />
        <AuthInput
          icon="key"
          value={password}
          setValue={setPassword}
          name="password"
          iconclass="stroke-current text-gray-400"
        />
        <div className="-mt-2 flex flex-row justify-between pb-6">
          <label className="flex items-center space-x-3 text-opacity-50 ">
            <input
              type="checkbox"
              name="remember"
              className="focus:outline-none h-4 w-4"
              checked={remember}
              onChange={(e) => setRemember(!remember)}
            />
            <span className="text-sm font-medium text-gray-900 text-opacity-80 checked:text-opacity-20 dark:text-gray-50">
              Remember me
            </span>
          </label>
          <a
            onClick={(e) => {
              setForgotPassword(true)
              setSigninWithEmailPassword(false)
            }}
            className="cursor-pointer text-sm font-medium text-accent hover:underline dark:text-darkaccent"
          >
            forgot passowrd?
          </a>
        </div>

        <button
          onClick={() => signup()}
          className="focus:outline-none inline-block w-full cursor-pointer rounded-md border border-gray-50  bg-gray-50 py-2 px-4 text-xs font-medium capitalize leading-6 tracking-wide text-gray-900 shadow-lg hover:border-opacity-10 hover:bg-opacity-80"
        >
          Sign in
        </button>
        <div className="my-8 flex items-center">
          <div className="mr-3 flex-grow border-t border-gray-50 border-opacity-25"></div>
          <div className="text-gray-50 text-opacity-25">Or</div>
          <div className="ml-3 flex-grow border-t border-gray-50 border-opacity-25"></div>
        </div>
        <div className="flex flex-col justify-around space-y-4">
          <AuthBtn title="github" icon="github" />
          <a
            onClick={(e) => {
              setForgotPassword(false)
              setSigninWithEmailPassword(false)
              setSigninWithLink(true)
            }}
            className="cursor-pointer text-center text-sm font-medium capitalize text-accent hover:underline dark:text-darkaccent"
          >
            Sign in with Magic Link
          </a>
        </div>
      </FormSceleton>
    </>
  )
}
