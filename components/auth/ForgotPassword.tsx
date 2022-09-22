import { supabase } from '../../lib/utils/supabaseclient'
import { useState } from 'react'
import BtnSpinner from '../spinners/BtnSpinner'
import AuthInput from './AuthInput'
import FormSceleton from './FormSceleton'
import type { ErrorProps } from '../../lib/types/signin'
import ErrorMessage from './ErrorMessage'

export default function ForgotPassword({}: {}): JSX.Element {
  const [error, setError] = useState<ErrorProps | null>(null)
  const [email, setEmail] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)

  const handleResetPassword = async () => {
    setLoading(true)
    const { data, error: resetError } =
      await supabase.auth.api.resetPasswordForEmail(email as string)

    if (resetError) {
      setError({ error: resetError.message, success: undefined })
    }
    if (data) {
      setError({
        error: undefined,
        success: 'we send you an email with a link to reset your password',
      })
    }
    setLoading(false)
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
      <ErrorMessage error={error as ErrorProps} />
    </FormSceleton>
  )
}
