import AuthBtn from '../components/auth/AuthBtn'
import SvgtoReact from '../components/Svgtoreact'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import style from '/styles/buttons.module.css'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function SignUp({}: {}): JSX.Element | Promise<boolean> {
  const router = useRouter()
  const { user } = useUser()

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)

  const signup = async () => {
    setLoading(true)
    const { error, user: createdUser } = await supabaseClient.auth.signUp({
      email: email as string,
      password: password as string,
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

  useEffect(() => {
    if (user) {
      console.log('USER:', user)
      router.replace('/account')
    }
  }, [user])
  return (
    <div className="h-full w-full bg-gray-800">
      <div className="flex justify-center pt-10 md:pt-20 lg:pt-20 xl:pt-20">
        <SvgtoReact
          name="signinlogo"
          height={40}
          className="stroke-current text-gray-900 dark:text-gray-900"
        />
      </div>
      <div className={style.signin}>
        <h1 className="pb-4 text-xl font-bold text-gray-50">Sign up</h1>
        <div className="h-10">
          {error && <p className="pb-4 text-danger">{error}</p>}
        </div>
        <div className="relative mb-8 flex flex-col">
          <div className="absolute inset-y-0 left-0 flex items-center pl-5">
            <SvgtoReact
              name="email"
              height={15}
              width={15}
              className="fill-current text-gray-400"
            />
          </div>
          <input
            type="email"
            name="email"
            className="w-full rounded-md border border-opacity-10 bg-gray-50 bg-opacity-5 py-3 pr-5 pl-12 text-gray-50 shadow-sm"
            placeholder="Email Adress"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative mb-8 flex flex-col">
          <div className="absolute inset-y-0 left-0 flex items-center pl-5">
            <SvgtoReact
              name="key"
              height={15}
              width={15}
              className="fill-stroke text-gray-400"
            />
          </div>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="w-full rounded-md border border-opacity-10 bg-gray-50 bg-opacity-5 py-3 pr-5 pl-12 text-gray-50 shadow-sm"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="button"
          onClick={() => signup()}
          disabled={!email?.length || !password?.length}
          className="focus:outline-none inline-block w-full cursor-pointer rounded-md border border-gray-50  bg-gray-50 py-2 px-4 text-xs font-medium capitalize leading-6 tracking-wide text-gray-900 shadow-lg hover:border-opacity-10 hover:bg-opacity-80"
        >
          Sign Up
        </button>
      </div>
      <div className="mx-auto  flex max-w-md flex-row justify-center gap-x-1 pt-5 pb-28">
        <p className="text-xs text-gray-50 text-opacity-40">
          already have an account?
        </p>
        <Link href="/signin">
          <a className="text-xs font-semibold hover:underline dark:text-gray-50">
            Sign In
          </a>
        </Link>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  }
}
