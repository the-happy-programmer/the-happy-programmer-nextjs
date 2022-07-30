import { getProviders, signIn } from 'next-auth/react'
import AuthBtn from '../../components/auth/AuthBtn'
import SvgtoReact from '../../components/Svgtoreact'

export default function SignIn({ providers }) {
  return (
    <>
      <div className="flex flex-row">
        <div className="py-28">
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
        <div>
          <SvgtoReact
            name="fulllogo"
            className="justify-self-auto fill-current stroke-current text-gray-500 dark:text-gray-400"
            height={100}
          />
          <h2></h2>
        </div>
        <div className=" ml-auto">
          <div className="left-0 top-0 bottom-0">
            <SvgtoReact
              name="slopediv"
              height="90vh"
              className="fill-current text-gray-800 dark:text-gray-200"
            />
          </div>
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
