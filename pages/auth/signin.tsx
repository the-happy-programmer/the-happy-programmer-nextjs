import { getProviders, signIn } from 'next-auth/react'
import AuthBtn from '../../components/auth/AuthBtn'
import SvgtoReact from '../../components/Svgtoreact'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import style from '../../styles/buttons.module.css'

export default function SignIn({
  providers,
}: {
  providers: any[]
}): JSX.Element | Promise<boolean> {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (session) {
    return router.push('/courses')
  }

  return (
    <div className="h-full w-full bg-gray-800">
      <div className="flex justify-center pt-10 md:pt-20 lg:pt-20 xl:pt-20">
        <SvgtoReact
          name="signinlogo"
          height={40}
          className="stroke-current text-gray-900 dark:text-gray-900"
        />
      </div>
      <div className={style.signin}>
        <h1 className="pb-5 text-xl font-bold text-gray-50">
          Sign in with your email
        </h1>
        <div className="relative mb-8 flex flex-col">
          <div className="absolute inset-y-0 left-0 flex items-center pl-5">
            <SvgtoReact
              name="email"
              height={15}
              width={15}
              className="fill-current text-gray-400"
            />
          </div>
          <input
            type="email"
            name=""
            className="w-full rounded-md border border-opacity-10 bg-gray-50 bg-opacity-5 py-2 pr-5 pl-12 text-gray-50 shadow-sm"
            placeholder="Email Adress"
          />
        </div>
        <button className="focus:outline-none inline-block w-full cursor-pointer rounded-md border border-gray-50  bg-gray-50 py-2 px-4 text-xs font-medium capitalize leading-6 tracking-wide text-gray-900 shadow-lg hover:border-opacity-10 hover:bg-opacity-80">
          Sign in
        </button>
        <div className="my-6 flex items-center">
          <div className="mr-3 flex-grow border-t border-gray-600"></div>
          <div className="text-gray-400">Or</div>
          <div className="ml-3 flex-grow border-t border-gray-600"></div>
        </div>
        <div className="flex flex-row justify-around">
          {providers &&
            Object.values(providers).map((provider) => (
              <AuthBtn
                key={provider?.name}
                onClick={() => signIn(provider?.id)}
                title={provider?.name}
                icon={provider?.id}
              />
            ))}
        </div>
      </div>
      <p className="mx-auto flex justify-center pt-5 pb-28 text-xs text-gray-50 text-opacity-40">
        *if you are not registered an account will be created for you
      </p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders()

  return {
    props: { providers },
  }
}
