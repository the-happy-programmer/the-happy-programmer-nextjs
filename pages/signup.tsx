import SvgtoReact from '../components/Svgtoreact'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { useEffect, useState } from 'react'
import FormSceleton from '../components/auth/FormSceleton'
import AuthInput from '../components/auth/AuthInput'
import BtnSpinner from '../components/spinners/BtnSpinner'
import BottomLink from '../components/auth/BottomLink'

export default function SignUp({}: {}): JSX.Element | Promise<boolean> {
  const router = useRouter()
  const { user } = useUser()

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
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
      console.log('CREATED USER:', createdUser)
      router.replace('/')
    }
    setLoading(false)
  }

  useEffect(() => {
    if (user) {
      console.log('USER:', user)
      router.replace('/profile')
    }
  }, [user])
  return (
    <div className="h-full w-full bg-gray-50 dark:bg-gray-800">
      <div className="flex justify-center pt-10 md:pt-20 lg:pt-20 xl:pt-20">
        <SvgtoReact
          name="signinlogo"
          height={40}
          className="stroke-current text-gray-900 dark:text-gray-900"
        />
      </div>
      <FormSceleton title="Sign Up">
        <AuthInput
          name="username"
          icon="user"
          value={username as string}
          setValue={setUsername}
          iconclass="stroke-current dark:text-gray-50 text-opacity-50 text-gray-900"
        />
        <AuthInput
          name="email"
          icon="email"
          value={email as string}
          setValue={setEmail}
          iconclass="fill-current dark:text-gray-50 text-opacity-50 text-gray-900"
        />
        <AuthInput
          name="password"
          icon="key"
          value={password as string}
          setValue={setPassword}
          iconclass="stroke-current dark:text-gray-50 text-opacity-50 text-gray-900"
        />
        <BtnSpinner
          title="Sign Up"
          loading={loading}
          full={true}
          onClick={signup}
          disabled={!email?.length || !password?.length || !username?.length}
        />
        <div className="pt-8 text-danger">{error}</div>
      </FormSceleton>
      <BottomLink
        title="Already have an account?"
        link="Sign In"
        url="/signin"
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  }
}
