'use server'
import { signIn } from '@/auth'

export const signInWithGitHub = async () => {
  await signIn('github')
}

export const signInWithMagicLink = async (formData: FormData) => {
  await signIn('resend', formData)
}
