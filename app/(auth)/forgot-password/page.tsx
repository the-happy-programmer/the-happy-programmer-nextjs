import { forgotPassword } from './action';
import SignInLogo from '@/public/svg/signinlogo.svg';
import style from '@/styles/buttons.module.css';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { HiEnvelope } from 'react-icons/hi2';

export default function ForgotPassword({}: {}): JSX.Element {
  return (
    <div className="h-full w-full bg-default-50">
      <div className="flex justify-center pt-10 md:pt-20 lg:pt-20 xl:pt-20">
        <SignInLogo
          height={40}
          className="stroke-current text-default-900 dark:text-default-900"
        />
      </div>
      <div className="mx-auto max-w-lg px-4 pb-20 pt-6">
        <form
          action={forgotPassword}
          className="mb-0 flex flex-col space-y-6 rounded-lg py-4 sm:p-6 lg:p-8"
        >
          <Input
            type="email"
            label="Email"
            name="email"
            placeholder="you@example.com"
            labelPlacement="outside"
            endContent={
              <HiEnvelope className="pointer-events-none flex-shrink-0 text-default-400" />
            }
          />
          <Button variant="solid" color="primary" type="submit">
            Send me reset email
          </Button>
        </form>
      </div>
    </div>
  );
}
