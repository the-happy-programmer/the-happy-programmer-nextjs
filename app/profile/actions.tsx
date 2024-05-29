'use server'

import { createClient } from '@/lib/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const signOut = async (formData: FormData) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  await supabase.auth.signOut()
  return redirect('/signin')
}

const deleteUser = async (userId: string | undefined) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data, error } = await supabase.auth.admin.deleteUser(userId as string)
  if (error) {
    redirect(
      '/profile/resetpassword?message=Something went wrong try again in a while&error=true'
    )
  }
  await supabase.auth.signOut()
  return redirect('/')
}

export { signOut, deleteUser }
