import BtnSpinner from '../spinners/BtnSpinner'
import AuthInput from './AuthInput'
import FormSceleton from './FormSceleton'

export function SignWithLink({
  email,
  setEmail,
  handleSignIn,
  loading,
}: {
  email: string
  setEmail: (email: string) => void
  loading: boolean
  handleSignIn: () => void
}): JSX.Element {
  return (
    <FormSceleton title="Sign in with magic link">
      <AuthInput
        icon="email"
        value={email}
        setValue={setEmail}
        name="email"
        iconclass="fill-current dark:text-gray-50 text-gray-900 text-opacity-50"
      />
      <BtnSpinner
        title="Send magic link"
        onClick={handleSignIn}
        loading={loading}
        full={true}
        disabled={!email?.length}
      />
    </FormSceleton>
  )
}
