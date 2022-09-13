import SvgtoReact from '../components/Svgtoreact'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import SignInForm from '../components/auth/SignInForm'
import { SignWithLink } from '../components/auth/SignWithLink'
import ForgotPassword from '../components/auth/ForgotPassword'

export default function SignIn({
  providers,
}: {
  providers: any[]
}): JSX.Element | Promise<boolean> {
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
    <div className="h-full w-full bg-gray-800">
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
      <div className="mx-auto  flex max-w-md flex-row justify-center gap-x-1 pt-5 pb-28">
        <p className="text-xs text-gray-50 text-opacity-40">
          you don't have an account?
        </p>
        <Link href="/signup">
          <a className="text-xs font-semibold hover:underline dark:text-gray-50">
            Sign Up
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
