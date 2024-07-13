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
  const parsed = magiclinkSchema.safeParse({ email })
  if (!parsed.success) {
    return {
      message: 'error',
      issues: parsed.error.issues.map((issue: ZodIssue) => issue.message),
    }
  }
  try {
    const { error } = await supabase.auth.signInWithOtp({
      email: email as string,
    })
    if (error) {
      return {
        message: 'error',
        issues: ['Something went wrong try again in a while'],
      }
    }
    return {
      message: 'success',
    }
  } catch (error) {
    console.error(error)
    return {
      message: 'error',
    }
  }
}

export { magiclink }
