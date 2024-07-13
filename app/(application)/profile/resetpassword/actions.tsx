'use server';
import { createClient } from '@/lib/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const resetPassword = async (formData: FormData) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const password = formData.get('password');
  const { data, error } = await supabase.auth.updateUser({
    password: password as string,
  });

  if (error) {
    redirect(
      '/profile/resetpassword?message=Something went wrong try again in a while'
    );
  }

  redirect('/profile/resetpassword?message=Check Your Email');
};
