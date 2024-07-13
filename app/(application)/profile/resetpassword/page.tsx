import { resetPassword } from './actions';
import SignInLogo from '@/public/svg/signinlogo.svg';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { HiKey } from 'react-icons/hi2';

export default function ForgotPassword({
  searchParams,
}: {
  searchParams: { message: string };
}): JSX.Element {
  return (
    <div className="h-full w-full">
      <div className="flex justify-center pt-10 md:pt-20 lg:pt-20 xl:pt-20">
        <SignInLogo
          height={40}
          className="stroke-current text-default-900 dark:text-default-900"
        />
      </div>
      <div className="mx-auto max-w-lg p-4">
        <form
          action={resetPassword}
          className="mb-0 flex flex-col space-y-6 rounded-lg py-4 sm:p-6 lg:p-8"
        >
          <Input
            type="password"
            name="password"
            label="Password"
            placeholder="password"
            labelPlacement="outside"
            startContent={<HiKey className="" />}
          />
          <Button type="submit" variant="solid" color="primary">
            Reset Password
          </Button>
          {searchParams?.message && (
            <div className="mt-10 rounded-md border border-divider">
              <p className="p-4 text-base text-danger">
                {searchParams.message}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
