import { useSession, signIn, signOut } from 'next-auth/react'
import HappyButton from '../Happybutton'

export default function AuthBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <HappyButton className="" onClick={(e) => signIn()}>
        Sign in
      </HappyButton>
    </>
  )
}
