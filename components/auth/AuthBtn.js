import { useSession, signIn, signOut } from 'next-auth/react'
import HappyButton from '../Happybutton'

export default function AuthBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <HappyButton onClick={(e) => signOut()}>Sign out</HappyButton>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <HappyButton onClick={(e) => signIn()}>Sign in</HappyButton>
    </>
  )
}
