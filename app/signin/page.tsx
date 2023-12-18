import { signInWithGitHub, signInWithPassword } from './action'

const SignInPage = ({
  searchParams,
}: {
  searchParams: { message: string }
}) => {
  return (
    <div className="h-full w-full bg-gray-50 dark:bg-gray-800">
      <form action={signInWithPassword}>
        <input type="text" name="email" />
        <input type="passowrd" name="passowrd" />
        <button>sign in</button>
      </form>
      <form action={signInWithGitHub}>
        <button className="bg-gray-300 py-3 px-4">Sign in with GitHub</button>
      </form>
      {searchParams?.message && (
        <p className="mt-4 p-4 text-base">{searchParams.message}</p>
      )}
    </div>
  )
}

export default SignInPage
