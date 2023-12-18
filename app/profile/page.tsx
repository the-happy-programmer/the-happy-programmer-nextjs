import Table from '@/components/profile/Table'
import Link from 'next/link'
import styles from '@/styles/buttons.module.css'
import { createClient } from '@/lib/utils/supabase/server'
import { cookies } from 'next/headers'
import PencilIcon from '@/public/svg/pencil.svg'
import { redirect } from 'next/navigation'

export default async function Profile() {
  const subscription = false
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <div className="container">
      <div className="mx-auto max-w-md py-20 text-gray-900 dark:text-gray-50">
        <h1 className="text-3xl font-bold ">Profile</h1>
        <div className="flex flex-col gap-y-8 py-5">
          <Table title="Account Details">
            <div className="flex flex-row items-center justify-between py-3">
              <p className="max-w-xs font-medium">{user?.email || ''}</p>
              <form
                action={async () => {
                  'use server'
                  const cookieStore = cookies()
                  const supabase = createClient(cookieStore)
                  await supabase.auth.signOut()
                  return redirect('/signin')
                }}
              >
                <button className={styles.sbtn}>Sign Out</button>
              </form>
            </div>
            <div className="flex flex-row items-center justify-between py-3">
              <p className="max-w-xs font-medium">Passowrd:*******</p>
              <Link href="/resetpassword" passHref>
                <div className="group cursor-pointer rounded-full border-2 border-gray-900 border-opacity-40 p-1.5 hover:border-opacity-0 dark:border-gray-50">
                  <PencilIcon
                    className="stroke-curren text-gray-900 text-opacity-40 group-hover:text-opacity-0 dark:text-gray-50"
                    height={16}
                  />
                </div>
              </Link>
            </div>
          </Table>
          <Table title="Subscription">
            <div className="flex flex-row items-center justify-between py-3">
              <>
                {!subscription ? (
                  <div className="">No plans Yet</div>
                ) : (
                  subscription
                )}
                <Link href={'/support'} className={styles.sbtn}>
                  Choose A Plan
                </Link>
              </>
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
