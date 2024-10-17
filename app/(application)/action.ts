'use server'
import mailchimp from '@mailchimp/mailchimp_marketing'
import { redirect } from 'next/navigation'
import { createServerAction, ZSAError } from 'zsa'
import { z } from 'zod'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
})

export const subscribeEmail = createServerAction()
  .input(
    z.object({
      email: z.string().email(),
    }),
    { type: 'formData' },
  )
  .onError(() => {
    redirect('/?message=Thank for subscribing&error=false')
  })
  .handler(async ({ input }) => {
    try {
      await mailchimp.lists.addListMember(process.env.AUDIENCE_ID!, {
        email_address: input.email,
        status: 'subscribed',
      })
    } catch (error) {
      throw new ZSAError('ERROR', 'something went wrong with subscribing')
    }
  })
