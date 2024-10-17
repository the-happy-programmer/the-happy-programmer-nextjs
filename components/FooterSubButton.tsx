'use client'
import { subscribeEmail } from '@/app/(application)/action'
import { followus } from '@/app/(application)/data'
import { Input, Button } from '@nextui-org/react'
import React from 'react'
import { HiEnvelope } from 'react-icons/hi2'
import { useServerAction } from 'zsa-react'

const FooterSubButton: React.FC = () => {
  const { executeFormAction, isPending, error, isSuccess, isError } =
    useServerAction(subscribeEmail)
  return (
    <form action={executeFormAction}>
      <Input
        type="email"
        label={!isSuccess ? followus.sub : 'thank you, for subscribing.'}
        className="pt-9"
        placeholder="you@example.com"
        labelPlacement="outside"
        isInvalid={isError}
        errorMessage={error?.fieldErrors?.email || error?.message}
        color={isSuccess ? 'success' : 'default'}
        endContent={
          <Button
            disableRipple
            type="submit"
            isIconOnly
            color="default"
            variant="light"
            aria-label="LikesubscribeEmail "
            isLoading={isPending}
          >
            <HiEnvelope />
          </Button>
        }
      />
    </form>
  )
}

export default FooterSubButton
