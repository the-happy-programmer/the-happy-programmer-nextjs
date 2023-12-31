'use server'
import { createClient } from '@/lib/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export const signInWithGitHub = async () => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: `${process.env.SITE_URL}/auth/callback`,
    },
  })
  if (error) {
    redirect('/login?message=Could not authenticate user')
  }
  return redirect(data.url)
}

export const signInWithPassword = async (formData: FormData) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const email = formData.get('email')
  const password = formData.get('password')
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email as string,
    password: password as string,
  })
  if (error) {
    redirect('/signin?message=Not Valid Login credentials')
  }
  redirect('/')
}
