'use client'
import { magiclink } from '@/app/magiclink/actiont'
import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'
import { HiEnvelope } from 'react-icons/hi2'
import { useFormState, useFormStatus } from 'react-dom'

const SubmitButton = ({}) => {
  const { pending } = useFormStatus()
  return (
    <Button disableRipple color="primary" type="submit">
      Sign In
    </Button>
  )
}

const MagicLinkForm = () => {
  const [message, formAction] = useFormState(magiclink, null)
  return (
    <form
      className="mx-auto flex w-full max-w-sm flex-col gap-y-unit-lg pt-unit-lg"
      action={formAction}
    >
      <Input
        isRequired
        type="email"
        label="Email"
        name="email"
        placeholder="you@example.com"
        labelPlacement="outside"
        isInvalid={message?.issues}
        errorMessage={message?.issues.map((issue: string) => issue)}
        endContent={
          <HiEnvelope className="pointer-events-none flex-shrink-0 text-default-400" />
        }
      />
      <SubmitButton />
    </form>
  )
}

export default MagicLinkForm
