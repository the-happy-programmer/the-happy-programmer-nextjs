'use server'
import { signIn } from '@/auth'
import { redirect } from 'next/navigation'
export const signInWithGitHub = async () => {
  await signIn('github')
}

export const signInWithMagicLink = async (formData: FormData) => {
  console.log('first')
  await signIn('resend', formData)
  if (error) {
    redirect('/signin?message=Not Valid Login credentials')
  }
  redirect('/')
}
