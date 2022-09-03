import mailchimp from '@mailchimp/mailchimp_marketing'
import type { NextApiRequest, NextApiResponse } from 'next'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
})

export default async function subscribe(
  req: NextApiRequest,
  res: NextApiResponse<{ error: string }>
) {
  const { email } = req.body
  try {
    await mailchimp.lists.addListMember(process.env.AUDIENCE_ID as string, {
      email_address: email,
      status: 'subscribed',
    })
    return res.status(201).json({ error: '' })
  } catch (error) {
    return res
      .status(500)
      .json({ error: (error as Error).message || (error as Error).toString() })
  }
}
