import { signInWithGitHub, signInWithPassword } from './action'
import GitHubIcon from '@/public/svg/github.svg'
import { Link } from '@nextui-org/link'
import Seperator from '@/components/Seperator'
import { HiEnvelope, HiKey } from 'react-icons/hi2'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'

const SignInPage = ({
  searchParams,
}: {
  searchParams: { message: string }
}) => {
  return (
    <div className="h-full w-full bg-default-50 py-10 sm:py-32">
      <div className="mx-auto max-w-sm">
        <h1 className="text-center text-2xl font-bold sm:text-3xl">
          Get started today
        </h1>
        <div className="mx-auto mt-4 text-center">
          Dive into the world of coding with our online courses. Sign up now and
          start your programming journey today!
        </div>
      </div>
      <div className="mx-auto max-w-sm">
        <form
          action={signInWithPassword}
          className="mb-0 flex flex-col space-y-6 rounded-lg py-4"
        >
          <div>
            <Input
              isRequired
              type="email"
              label="Email"
              name="email"
              placeholder="you@example.com"
              labelPlacement="outside"
              endContent={
                <HiEnvelope className="pointer-events-none flex-shrink-0 text-default-400" />
              }
            />
          </div>
          <div>
            <Input
              isRequired
              type="password"
              label="Password"
              name="password"
              placeholder="you@example.com"
              labelPlacement="outside"
              endContent={
                <HiKey className="pointer-events-none flex-shrink-0 text-default-400" />
              }
            />
          </div>
          <Button disableRipple color="primary" type="submit">
            Sign In
          </Button>
          <Link
            color="foreground"
            size="sm"
            href="/forgot-password"
            underline="always"
          >
            Forgot Password?
          </Link>
        </form>
        <Seperator />
        <form action={signInWithGitHub} className="flex max-w-lg flex-col">
          <Button
            color="default"
            variant="ghost"
            type="submit"
            startContent={<GitHubIcon width={16} className="fill-foreground" />}
          >
            Sign in with GitHub
          </Button>
        </form>
        {searchParams?.message && (
          <div className="mt-10 rounded-md border border-divider">
            <p className="p-4 text-base text-danger">{searchParams.message}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SignInPage
