import Table from '@/components/profile/Table'
import { Button } from '@nextui-org/button'
import { Link } from '@nextui-org/link'
import { signOutAction } from './actions'
import { auth } from '@/auth'
import { Avatar } from '@nextui-org/react'

export default async function Profile() {
  const subscription = false
  const session = await auth()
  return (
    <div className="container">
      <div className="mx-auto max-w-md py-20">
        <h1 className="text-3xl font-bold">Profile</h1>
        <div className="flex flex-col gap-y-8 py-5">
          <Table title="Account Details">
            <div className="flex flex-row items-center justify-between py-3">
              <div className="text-sm flex flex-row items-center gap-x-4">
                <Avatar src={session?.user?.image!} size="sm" />
                <div>
                  <p className="">{session?.user?.name}</p>
                  <p className="text-default-600">{session?.user?.email}</p>
                </div>
              </div>
              <form action={signOutAction}>
                <Button disableRipple type="submit">
                  Sign Out
                </Button>
              </form>
            </div>
          </Table>
          <Table title="Subscription">
            <div className="flex flex-row items-center justify-between py-3">
              <>
                {!subscription ? <div>No plans Yet</div> : subscription}
                <Button
                  href={'/support'}
                  disableRipple
                  as={Link}
                  type="submit"
                  variant="solid"
                  color="primary"
                >
                  Choose A Plan
                </Button>
              </>
            </div>
          </Table>
          <Button
            disableRipple
            color="danger"
            type="submit"
            className="w-full"
            disabled={true}
          >
            Delete Your Account
          </Button>
        </div>
      </div>
    </div>
  )
}
