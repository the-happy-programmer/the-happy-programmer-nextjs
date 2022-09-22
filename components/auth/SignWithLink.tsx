import BtnSpinner from '../spinners/BtnSpinner'
import AuthInput from './AuthInput'
import ErrorMessage from './ErrorMessage'
import FormSceleton from './FormSceleton'
import type { SigninWithLinkProps } from '../../lib/types/signin'

export function SignWithLink({
  email,
  setEmail,
  handleSignIn,
  loading,
  error,
}: SigninWithLinkProps): JSX.Element {
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
        disabled={!email?.length || loading}
      />
      <ErrorMessage error={error} />
    </FormSceleton>
  )
}
