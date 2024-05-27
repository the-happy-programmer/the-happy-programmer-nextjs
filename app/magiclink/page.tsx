import { Input } from '@nextui-org/input'
import { HiEnvelope } from 'react-icons/hi2'
const MagicLinkPage = () => {
  return (
    <div className="h-full w-full bg-default-50 py-10 sm:py-32">
      <div className="mx-auto max-w-sm">
        <h1 className="text-center text-2xl font-bold sm:text-3xl">
          Sign in with Magic Link
        </h1>
        <div className="mx-auto mt-4 text-center">
          Sign in with your email address and we'll send you a magic link to
          continue.
        </div>
      </div>
      <div className="mx-auto max-w-sm">
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
    </div>
  )
}
export default MagicLinkPage
