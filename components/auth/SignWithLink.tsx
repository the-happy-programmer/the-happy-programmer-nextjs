import BtnSpinner from '../spinners/BtnSpinner'
import AuthInput from './AuthInput'
import FormSceleton from './FormSceleton'

export function SignWithLink({
  email,
  setEmail,
  handleSignIn,
}: {
  handleSignIn: () => void
  email: string
  setEmail: (email: string) => void
}): JSX.Element {
  return (
    <FormSceleton title="Sign in with magic link">
      <AuthInput
        icon="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        iconclass="fill-current text-gray-50 text-opacity-50"
      />
      <BtnSpinner
        title="Send magic link"
        onClick={handleSignIn}
        loading={false}
        full={true}
        disabled={!email?.length}
      />
    </FormSceleton>
  )
}
