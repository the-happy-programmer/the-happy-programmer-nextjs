import SvgtoReact from '../components/Svgtoreact'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import SignInForm from '../components/auth/SignInForm'
import { SignWithLink } from '../components/auth/SignWithLink'
import ForgotPassword from '../components/auth/ForgotPassword'
import BottomLink from '../components/auth/BottomLink'

export default function SignIn({}: {}): JSX.Element | Promise<boolean> {
  const router = useRouter()
  const { user } = useUser()

  const [forgotpassword, setForgotPassword] = useState<boolean>(false)
  const [signinwithlink, setSigninWithLink] = useState<boolean>(false)
  const [signinwithemailpassword, setSigninWithEmailPassword] =
    useState<boolean>(true)

  useEffect(() => {
    if (user) {
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
      {signinwithemailpassword && (
        <SignInForm
          setForgotPassword={setForgotPassword}
          setSigninWithEmailPassword={setSigninWithEmailPassword}
          setSigninWithLink={setSigninWithLink}
        />
      )}
      {signinwithlink && <SignWithLink />}
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
