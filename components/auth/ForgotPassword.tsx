import { useState } from 'react'
import BtnSpinner from '../spinners/BtnSpinner'
import AuthInput from './AuthInput'
import FormSceleton from './FormSceleton'

export default function ForgotPassword(): JSX.Element {
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState<string | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <FormSceleton title="Forgot Password">
      <AuthInput
        icon="email"
        value={email}
        setValue={setEmail}
        name="email"
        iconclass="fill-current text-gray-50 text-opacity-50"
      />
      <BtnSpinner
        onClick={() => {
          console.log('clicked')
        }}
        title="Send reset link"
        loading={loading}
        full={true}
        disabled={!email?.length}
      />
    </FormSceleton>
  )
}
