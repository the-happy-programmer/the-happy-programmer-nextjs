import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useEffect, useState } from 'react'
import AuthInput from '../components/auth/AuthInput'
import FormSceleton from '../components/auth/FormSceleton'
import BtnSpinner from '../components/spinners/BtnSpinner'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import router from 'next/router'
import SvgtoReact from '../components/Svgtoreact'
import BottomLink from '../components/auth/BottomLink'

export default function ForgotPassword({}: {}) {
  const { isLoading, user } = useUser()
  const [error, setError] = useState<string | null>(null)
  const [password, setPassword] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!user) {
      router.replace('/')
    }
  }, [user])

  const handleResetPassword = async () => {
    const { data, error: resetError } = await supabaseClient.auth.update({
      password: password,
    })

    if (resetError) {
      setError(resetError.message)
    }
    if (data) {
      setError('Password updated successfully')
    }
  }

  return (
    <div className="h-full w-full bg-gray-50 dark:bg-gray-800">
      <div className="flex justify-center pt-10 md:pt-20 lg:pt-20 xl:pt-20">
        <SvgtoReact
          name="signinlogo"
          height={40}
          className="stroke-current text-gray-900 dark:text-gray-900"
        />
      </div>
      <FormSceleton title="Reset Password">
        <AuthInput
          icon="key"
          value={password}
          setValue={setPassword}
          name="password"
          iconclass="fill-current dark:text-gray-50 text-opacity-50 text-gray-900"
        />
        <BtnSpinner
          onClick={handleResetPassword}
          title="Reset password"
          loading={loading}
          full={true}
          disabled={!password?.length || loading}
        />
        <div className="text-danger">{error}</div>
      </FormSceleton>
      <BottomLink title="Back to" link="profile" url="/profile" />
    </div>
  )
}
