'use client'
import { Button } from '@nextui-org/button'
import { useState } from 'react'
import { BiSolidCopy } from 'react-icons/bi'
import { HiCheck } from 'react-icons/hi2'

export const CopyButton = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(text)
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }

  return (
    <Button
      onClick={copy}
      disableRipple
      color="default"
      isIconOnly
      aria-label="copy"
      variant="light"
      className="absolute -top-1 right-[1%] text-default-700"
    >
      {isCopied ? <HiCheck /> : <BiSolidCopy />}
    </Button>
  )
}
