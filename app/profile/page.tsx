import Table from '@/components/profile/Table';
import { createClient } from '@/lib/utils/supabase/server';
import { cookies } from 'next/headers';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { HiMiniPencil } from 'react-icons/hi2';
import { signOut } from './actions';

export default async function Profile() {
  const subscription = false;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="container">
      <div className="mx-auto max-w-md py-20">
        <h1 className="text-3xl font-bold">Profile</h1>
        <div className="flex flex-col gap-y-8 py-5">
          <Table title="Account Details">
            <div className="flex flex-row items-center justify-between py-3">
              <p className="max-w-xs font-medium">{user?.email || ''}</p>
              <form action={signOut}>
                <Button disableRipple type="submit">
                  Sign Out
                </Button>
              </form>
            </div>
            <div className="flex flex-row items-center justify-between py-3">
              <p className="max-w-xs font-medium">Passowrd:*******</p>
              <Button
                disableRipple
                isIconOnly
                as={Link}
                href="/profile/resetpassword"
              >
                <HiMiniPencil height={16} />
              </Button>
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
          <Button disableRipple color="danger">
            Delete Your Account
          </Button>
        </div>
      </div>
    </div>
  );
}
