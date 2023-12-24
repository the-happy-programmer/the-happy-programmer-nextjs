import SvgtoReact from '@/components/Svgtoreact'
import Link from 'next/link'
import { forgotPassword } from './action'
import SignInLogo from '@/public/svg/signinlogo.svg'
import style from '@/styles/buttons.module.css'
export default function ForgotPassword({}: {}): JSX.Element {
  return (
    <div className="h-full w-full bg-stone-50 dark:bg-stone-800">
      <div className="flex justify-center pt-10 md:pt-20 lg:pt-20 xl:pt-20">
        <SignInLogo
          height={40}
          className="stroke-current text-default-900 dark:text-default-900"
        />
      </div>
      <div className="mx-auto max-w-lg px-4 pb-20">
        <form
          action={forgotPassword}
          className="mb-0 flex flex-col space-y-6 rounded-lg py-4 sm:p-6 lg:p-8"
        >
          <div>
            <label htmlFor="password" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="text"
                name="email"
                className="w-full rounded-lg border-stone-200 p-4 pl-12 text-sm shadow-sm dark:bg-stone-700 dark:text-stone-50"
                placeholder="Enter email"
              />

              <span className="end-0 absolute inset-y-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-stone-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>
          <button className={style.sbtn}>Send me reset email</button>
        </form>
      </div>
    </div>
  )
}
