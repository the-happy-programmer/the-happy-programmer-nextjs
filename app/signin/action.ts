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
      redirectTo: `http://localhost:3000/auth/callback`,
    },
  })
  if (error) {
    redirect('/login?message=Could not authenticate user')
  }
  return redirect(data.url)
}
