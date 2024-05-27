'use server'
import { createClient } from '@/lib/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
const cookieStore = cookies()
const supabase = createClient(cookieStore)
import { z, ZodIssue } from 'zod'

const magiclinkSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .min(1, { message: 'Email is required' })
    .max(255, { message: 'Email is too long' }),
})
interface FormState {
  message: string
  issues?: string[]
  fields?: Record<string, string>
}

const magiclink = async (
  prevState: any,
  formData: FormData
): Promise<FormState> => {
  const email = formData.get('email')
  const parsed = magiclinkSchema.parse({ email })
  if (!parsed.success) {
    return {
      message: 'error',
      issues: parsed.error.issues.map((issue: ZodIssue) => issue.message),
    }
  }

  redirect('/signin?message=Check Your Email')
}
