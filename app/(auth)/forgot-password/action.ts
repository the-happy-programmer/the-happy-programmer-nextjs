'use server'
import { createClient } from '@/lib/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const forgotPassword = async (formData: FormData) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const email = formData.get('email')

  const { data, error } = await supabase.auth.resetPasswordForEmail(
    email as string,
    {
      redirectTo: `${process.env.SITE_URL}/auth/update-password`,
    }
  )
  if (error) {
    redirect('/signin?message=Something went wrong try again in a while')
  }

  redirect('/signin?message=Check Your Email')
}
