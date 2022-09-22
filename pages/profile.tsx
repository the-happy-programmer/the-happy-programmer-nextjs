import Table from '../components/profile/Table'
import Happybutton from '../components/Happybutton'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { supabase } from '../lib/utils/supabaseclient'
import { withAuthRequired, User } from '@supabase/supabase-auth-helpers/nextjs'
import { useRouter } from 'next/router'
import SvgtoReact from '../components/Svgtoreact'
import Link from 'next/link'
import FullPageSpinner from '../components/spinners/FullPageSpinner'
export default function Profile(): JSX.Element {
  const router = useRouter()
  const { isLoading, user } = useUser()

  if (isLoading) {
    return <FullPageSpinner />
  }

  return (
    <div className="container">
      <div className="mx-auto max-w-md py-20 text-gray-900 dark:text-gray-50">
        <h1 className="text-3xl font-bold ">Profile</h1>
        <div className="flex flex-col gap-y-8 py-5">
          <Table title="Account Details">
            <div className="flex flex-row items-center justify-between py-3">
              <p className="max-w-xs font-medium">{user?.email || ''}</p>
              <Happybutton
                onClick={() => {
                  supabase.auth.signOut()
                  router.replace('/signin')
                }}
              >
                Sign Out
              </Happybutton>
            </div>
            <div className="flex flex-row items-center justify-between py-3">
              <p className="max-w-xs font-medium">Passowrd:*******</p>
              <Link href="/resetpassword">
                <div className="group cursor-pointer rounded-full border-2 border-gray-900 border-opacity-40 p-1.5 hover:border-opacity-0 dark:border-gray-50">
                  <SvgtoReact
                    name="pencil"
                    className="stroke-curren text-gray-900 text-opacity-40 group-hover:text-opacity-0 dark:text-gray-50"
                    height={16}
                  />
                </div>
              </Link>
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

export const getServerSideProps = withAuthRequired({ redirectTo: '/signin' })
