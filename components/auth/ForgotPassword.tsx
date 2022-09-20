import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useState } from 'react'
import BtnSpinner from '../spinners/BtnSpinner'
import AuthInput from './AuthInput'
import FormSceleton from './FormSceleton'

export default function ForgotPassword({}: {}) {
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)

  const handleResetPassword = async () => {
    const { data, error: resetError } =
      await supabaseClient.auth.api.resetPasswordForEmail(email as string)

    if (resetError) {
      setError(resetError.message)
    }
    if (data) {
      setError('we send you an email with a link to reset your password')
    }
  }

  return (
    <FormSceleton title="Forgot Password">
      <AuthInput
        icon="email"
        value={email}
        setValue={setEmail}
        name="email"
        iconclass="fill-current dark:text-gray-50 text-opacity-50 text-gray-900"
      />
      <BtnSpinner
        onClick={handleResetPassword}
        title="Send reset link"
        loading={loading}
        full={true}
        disabled={!email?.length}
      />
      <div className="text-danger">{error}</div>
    </FormSceleton>
  )
}
