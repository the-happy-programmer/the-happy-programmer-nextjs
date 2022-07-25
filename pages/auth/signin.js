import { getProviders, signIn } from 'next-auth/react'
import HappyButton from '../../components/Happybutton'

export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <HappyButton onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </HappyButton>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
