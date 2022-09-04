import Table from '../components/profile/Table'
import Happybutton from '../components/Happybutton'
import { useSession, signOut } from 'next-auth/react'

export default function Profile(): JSX.Element {
  const { data: session } = useSession()
  console.log('user', session)
  return (
    <div className="container">
      <div className="mx-auto max-w-sm py-20 text-gray-900 dark:text-gray-50">
        <h1 className="text-3xl font-bold ">Profile</h1>
        <div className="flex flex-col gap-y-8 py-5">
          <Table title="Account Details">
            <div className="flex flex-row items-center justify-between py-3">
              <p className="font-medium">
                {session?.user?.email || session?.user?.name}
              </p>
              <Happybutton onClick={(e) => signOut({ callbackUrl: '/' })}>
                Sign Out
              </Happybutton>
            </div>
          </Table>
          <button className="rounded border border-gray-200 bg-gray-900 bg-opacity-0 py-2.5 px-4 font-medium text-danger hover:border-opacity-80 hover:bg-opacity-5 hover:text-opacity-80 dark:border-gray-700 dark:bg-gray-50">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}
