import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { useEffect } from 'react'
import SignupForm from '../components/auth/SignupForm'

export default function SignUp({}: {}): JSX.Element | Promise<boolean> {
  const { replace } = useRouter()
  const { user } = useUser()

  useEffect(() => {
    if (user) {
      replace('/profile')
    }
  }, [user, replace])
  return (
    <div className="h-full w-full bg-gray-50 dark:bg-gray-800">
      <SignupForm />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  }
}
