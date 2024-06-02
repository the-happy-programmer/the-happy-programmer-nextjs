import { Input } from '@nextui-org/input'
import { HiXCircle } from 'react-icons/hi2'
import { HiEnvelope } from 'react-icons/hi2'
import { Button } from '@nextui-org/button'
import { HiCheckCircle } from 'react-icons/hi2'
import { subscribeEmail } from '@/app/action'
import { Chip } from '@nextui-org/chip'

export default function SubInput({
  message,
  error,
}: {
  message: string
  error: string
}): JSX.Element {
  return (
    <>
      <form
        action={subscribeEmail}
        className="mx-auto flex max-w-md flex-row items-end gap-x-2"
      >
        <Input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          labelPlacement="outside"
          size="lg"
          startContent={
            <HiEnvelope className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
          }
        />
        <Button
          variant="shadow"
          type="submit"
          disableRipple
          color="primary"
          size="lg"
        >
          Subscribe
        </Button>
      </form>
      <div className="flex flex-row items-center justify-center gap-x-2 pt-4">
        {error === 'true' && message && (
          <>
            <Chip
              startContent={<HiXCircle className="h-5" />}
              variant="faded"
              color="danger"
            >
              {message}
            </Chip>
          </>
        )}
        {error === 'false' && message && (
          <>
            <Chip
              startContent={<HiCheckCircle className="h-5" />}
              variant="faded"
              color="success"
            >
              {message}
            </Chip>
          </>
        )}
      </div>
    </>
  )
}
