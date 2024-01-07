import Table from '@/components/profile/Table';
import { createClient } from '@/lib/utils/supabase/server';
import { cookies } from 'next/headers';
import PencilIcon from '@/public/svg/pencil.svg';
import { redirect } from 'next/navigation';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { HiMiniPencil } from 'react-icons/hi2';

export default async function Profile() {
  const subscription = false;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="">
      <div className="container ">
        <div className="mx-auto max-w-md py-20 text-default-900 dark:text-stone-50">
          <h1 className="text-3xl font-bold ">Profile</h1>
          <div className="flex flex-col gap-y-8 py-5">
            <Table title="Account Details">
              <div className="flex flex-row items-center justify-between py-3">
                <p className="max-w-xs font-medium">{user?.email || ''}</p>
                <form
                  action={async () => {
                    'use server';
                    const cookieStore = cookies();
                    const supabase = createClient(cookieStore);
                    await supabase.auth.signOut();
                    return redirect('/signin');
                  }}
                >
                  <Button
                    disableRipple
                    type="submit"
                    variant="solid"
                    color="primary"
                  >
                    Sign Out
                  </Button>
                </form>
              </div>
              <div className="flex flex-row items-center justify-between py-3">
                <p className="max-w-xs font-medium">Passowrd:*******</p>
                <Button isIconOnly as={Link} href="/profile/resetpassword">
                  <div className="group cursor-pointer rounded-full border-2 border-default-900 border-opacity-40 p-1.5 hover:border-opacity-0 dark:border-stone-50">
                    <PencilIcon
                      className="stroke-curren text-default-900 text-opacity-40 group-hover:text-opacity-0 dark:text-stone-50"
                      height={16}
                    />
                  </div>
                </Button>
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
                  <Button href={'/support'} disableRipple as={Link}>
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
    </div>
  );
}
