import { createClient } from '@/lib/utils/supabase/server'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.exchangeCodeForSession(code)

    return NextResponse.redirect(`${requestUrl.origin}/profile/resetpassword`)
  }

  console.error('ERROR: Invalid auth code or no auth code found')

  return NextResponse.redirect(`${requestUrl.origin}/signin`)
}
