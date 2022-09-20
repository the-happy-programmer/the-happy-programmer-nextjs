import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useEffect, useState } from 'react'
import AuthInput from '../components/auth/AuthInput'
import FormSceleton from '../components/auth/FormSceleton'
import BtnSpinner from '../components/spinners/BtnSpinner'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import router from 'next/router'

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
        title="Send reset link"
        loading={loading}
        full={true}
        disabled={!password?.length}
      />
      <div className="text-danger">{error}</div>
    </FormSceleton>
  )
}
