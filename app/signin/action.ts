'use server'
import { signIn } from '@/auth'
import { createClient } from '@/lib/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export const signInWithGitHub = async () => {
  await signIn('github')
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
