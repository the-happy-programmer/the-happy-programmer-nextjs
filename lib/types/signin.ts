export interface ErrorProps {
  error: string | undefined
  success: string | undefined
}

export interface SigninFormProps {
  setForgotPassword: (password: boolean) => void
  setSigninWithEmailPassword: (password: boolean) => void
  setSigninWithLink: (link: boolean) => void
  email: string
  password: string
  setPassword: (password: string) => void
  setEmail: (email: string) => void
  error: ErrorProps
  remember: boolean
  setRemember: (remember: boolean) => void
  loading: boolean
  signin: () => void
  setError: (
    error: { error: string | undefined; success: string | undefined } | null
  ) => void
}

export interface SigninWithLinkProps {
  email: string
  setEmail: (email: string) => void
  loading: boolean
  handleSignIn: () => void
  error: ErrorProps
}
