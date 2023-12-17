import { signInWithGitHub } from './action'

const SignInPage = ({}: {}) => {
  return (
    <div className="h-full w-full bg-gray-50 dark:bg-gray-800">
      <form action={signInWithGitHub}>
        <button className="bg-gray-300 py-3 px-4">Sign in with GitHub</button>
      </form>
    </div>
  )
}

export default SignInPage
