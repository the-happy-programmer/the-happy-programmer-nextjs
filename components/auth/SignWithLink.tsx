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
    <FormSceleton title="Sign in with your email">
      <AuthInput
        icon="email"
        value={email}
        setValue={setEmail}
        name="email"
        iconclass="fill-current text-gray-50 text-opacity-10"
      />
    </FormSceleton>
  )
}
