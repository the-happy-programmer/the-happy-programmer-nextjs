'use server'
import { createClient } from '@/lib/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { signOut } from '@/auth'
const signOutAction = async (formData: FormData) => {
  await signOut({ redirectTo: '/signin' })
}

const deleteUser = async (userId: string | undefined) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { error } = await supabase.auth.admin.deleteUser(userId as string)
  if (error) {
    redirect(
      '/profile/resetpassword?message=Something went wrong try again in a while&error=true',
    )
  }
  await supabase.auth.signOut()
  return redirect('/')
}

export { signOutAction, deleteUser }
