'use client'
import { Input } from '@nextui-org/input'
import { HiEnvelope } from 'react-icons/hi2'
import { Button } from '@nextui-org/button'
import { HiCheckCircle } from 'react-icons/hi2'
import { subscribeEmail } from '@/app/(application)/action'
import { Chip } from '@nextui-org/chip'
import { useServerAction } from 'zsa-react'

export default function SubInput(): JSX.Element {
  const { isError, isPending, isSuccess, error, executeFormAction } =
    useServerAction(subscribeEmail)
  return (
    <>
      <form
        action={executeFormAction}
        className="mx-auto flex max-w-md flex-row items-start text-left gap-x-2"
      >
        <Input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          labelPlacement="outside"
          isInvalid={isError}
          errorMessage={error?.fieldErrors?.email || error?.message}
          color={isSuccess ? 'success' : 'default'}
          startContent={
            <HiEnvelope
              size={'16px'}
              className="pointer-events-none flex-shrink-0 text-2xl text-default-400"
            />
          }
        />
        <Button
          isLoading={isPending}
          variant="shadow"
          type="submit"
          disableRipple
          color="primary"
        >
          Subscribe
        </Button>
      </form>
      <div className="flex flex-row items-center justify-center gap-x-2 pt-4">
        {isSuccess && (
          <>
            <Chip
              startContent={<HiCheckCircle className="h-5" />}
              variant="faded"
              color="success"
            >
              Thank you for subscribing
            </Chip>
          </>
        )}
      </div>
    </>
  )
}
