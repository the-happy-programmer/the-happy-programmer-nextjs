'use server'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export const signInWithGitHub = async () => {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  })
  if (error) {
    console.error('something went wrong with sign up with GitHub')
  }
}
