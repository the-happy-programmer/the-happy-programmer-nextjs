import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useState } from 'react'
import BtnSpinner from '../spinners/BtnSpinner'
import SvgtoReact from '../Svgtoreact'
import AuthInput from './AuthInput'
import BottomLink from './BottomLink'
import FormSceleton from './FormSceleton'

export default function SignupForm({}): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)

  const signup = async () => {
    setLoading(true)
    const { error, user: createdUser } = await supabaseClient.auth.signUp(
      {
        email: email as string,
        password: password as string,
      },
      {
        data: {
          fullname: username,
        },
      }
    )
    if (error) {
      console.log('error', error.message)
      setError(error.message)
    }
    if (createdUser) {
      setPassword('')
      setEmail('')
      setError('Check your email for the confirmation link.')
      console.log('createdUser', createdUser)
    }
    setLoading(false)
  }

  return (
    <>
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
    </>
  )
}
