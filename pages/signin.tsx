import SvgtoReact from '../components/Svgtoreact'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { useEffect, useState } from 'react'
import SignInForm from '../components/auth/SignInForm'
import { SignWithLink } from '../components/auth/SignWithLink'
import ForgotPassword from '../components/auth/ForgotPassword'
import BottomLink from '../components/auth/BottomLink'
import { supabase } from '../lib/utils/supabaseclient'
import type { ErrorProps } from '../lib/types/signin'

export default function SignIn({}: {}): JSX.Element {
  const router = useRouter()
  const { user } = useUser()

  const [forgotpassword, setForgotPassword] = useState<boolean>(false)
  const [signinwithlink, setSigninWithLink] = useState<boolean>(false)
  const [signinwithemailpassword, setSigninWithEmailPassword] =
    useState<boolean>(true)
  const [error, setError] = useState<ErrorProps | null>(null)
  const [email, setEmail] = useState<string | undefined>(undefined)
  const [password, setPassword] = useState<string | undefined>(undefined)
  const [remember, setRemember] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const signin = async () => {
    setLoading(true)
    const { error, user: createdUser } = await supabase.auth.signIn({
      email,
      password,
    })
    if (error) {
      setError({ error: error.message, success: undefined })
    }
    if (createdUser) {
      setEmail('')
      setPassword('')
      router.replace('/')
    }
    if (!password) {
      setError({
        error: undefined,
        success: 'Check your email for the magic link.',
      })
    }
    setLoading(false)
  }

  useEffect(() => {
    if (user) {
      router.replace('/profile')
    }
  }, [user, router])
  return (
    <div className="h-full w-full bg-gray-50 dark:bg-gray-800">
      <div className="flex justify-center pt-10 md:pt-20 lg:pt-20 xl:pt-20">
        <SvgtoReact
          name="signinlogo"
          height={40}
          className="stroke-current text-gray-900 dark:text-gray-900"
        />
      </div>
      {signinwithemailpassword && (
        <SignInForm
          setError={setError}
          setSigninWithEmailPassword={setSigninWithEmailPassword}
          setForgotPassword={setForgotPassword}
          setSigninWithLink={setSigninWithLink}
          email={email as string}
          setEmail={setEmail}
          password={password as string}
          setPassword={setPassword}
          remember={remember}
          setRemember={setRemember}
          loading={loading}
          signin={signin}
          error={error as ErrorProps}
        />
      )}
      {signinwithlink && (
        <SignWithLink
          email={email as string}
          setEmail={setEmail}
          loading={loading}
          handleSignIn={signin}
          error={error as ErrorProps}
        />
      )}
      {forgotpassword && <ForgotPassword />}
      <BottomLink
        title="you don't have an account?"
        link="Sign Up"
        url="/signup"
      />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  }
}
