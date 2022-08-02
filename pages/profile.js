import Table from '../components/profile/Table'
import Happybutton from '../components/Happybutton'
import { signOut, useSession } from 'next-auth/react'

export default function Profile({}) {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === 'unauthenticated') {
    return <p>Access Denied</p>
  }

  return (
    <div className="container">
      <div className="mx-auto max-w-sm py-20 text-gray-900 dark:text-gray-50">
        <h1 className="text-3xl font-bold ">Profile</h1>
        <div className="flex flex-col gap-y-8 py-5">
          <Table title="Account Details">
            <div className="flex flex-row items-center justify-between py-3">
              <p className="font-medium">
                {session.user.email || session.user.name}
              </p>
              <Happybutton onClick={() => signOut({ callbackUrl: '/' })}>
                Sign Out
              </Happybutton>
            </div>
          </Table>
          <button className="hover:bg-blue-700 rounded border border-gray-200 py-2.5 px-4 font-medium text-danger hover:border-opacity-80 hover:text-opacity-80 dark:border-gray-700">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
