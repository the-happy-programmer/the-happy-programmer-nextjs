import { signInWithGitHub, signInWithPassword } from './action'
import style from '@/styles/buttons.module.css'
import GitHubIcon from '@/public/svg/github.svg'
import Link from 'next/link'
import Seperator from '@/components/Seperator'
const SignInPage = ({
  searchParams,
}: {
  searchParams: { message: string }
}) => {
  return (
    <div className="h-full w-full bg-gray-50 py-20 dark:bg-gray-800">
      <h1 className="text-indigo-600 text-center text-2xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl">
        Get started today
      </h1>
      <p className="mx-auto mt-4 max-w-md text-center dark:text-gray-300">
        dive into the world of coding with our online courses. Sign up now and
        start your programming journey today!
      </p>
      <div className="mx-auto max-w-lg p-4 ">
        <form
          action={signInWithPassword}
          className="mb-0 flex flex-col space-y-6 rounded-lg py-4 sm:p-6 lg:p-8"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full rounded-lg border-gray-200 p-4  pl-12 text-sm shadow-sm dark:bg-gray-700 dark:text-gray-50"
                placeholder="Enter email"
              />

              <span className="end-0 absolute inset-y-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4  text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                name="password"
                className="w-full rounded-lg border-gray-200 p-4 pl-12 text-sm shadow-sm dark:bg-gray-700 dark:text-gray-50"
                placeholder="Enter password"
              />

              <span className="end-0 absolute inset-y-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button className={style.sbtn}>Sign in</button>

          <p className="text-center text-sm text-gray-500">
            No account?
            <Link className="underline" href="/singup">
              Sign up
            </Link>
          </p>
        </form>
        <Seperator />
        <form action={signInWithGitHub} className="flex max-w-lg flex-col">
          <button className={style.iconBtn}>
            Sign in with GitHub
            <GitHubIcon
              height={24}
              className="fill-current text-gray-50 dark:text-gray-900"
            />
          </button>
        </form>
        {searchParams?.message && (
          <p className="mt-4 p-4 text-base">{searchParams.message}</p>
        )}
      </div>
    </div>
  )
}

export default SignInPage
