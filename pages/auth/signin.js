import { getProviders, signIn } from 'next-auth/react'
import AuthBtn from '../../components/auth/AuthBtn'
import SvgtoReact from '../../components/Svgtoreact'

export default function SignIn({ providers }) {
  return (
    <>
      <div className="space container flex flex-row items-center justify-between py-36">
        <div>
          <h1 className="pb-5 text-3xl font-bold dark:text-gray-50">Sign In</h1>
          <div className="flex max-w-xs flex-col gap-y-4">
            {Object.values(providers).map((provider) => (
              <AuthBtn
                key={provider.name}
                onClick={() => signIn(provider.id)}
                title={provider.name}
                icon={provider.id}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center text-gray-900 dark:text-gray-50">
          <div className="pb-14">
            <SvgtoReact
              name="signinlogo"
              height={40}
              className="fill-current stroke-current"
            />
          </div>
          <p className="">welcome to</p>
          <h2 className="py-3 text-3xl font-bold ">The Happy Programmer</h2>
          <p className="">
            cource in every{' '}
            <span className="text-accent dark:text-darkaccent">
              {' '}
              Technology
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
