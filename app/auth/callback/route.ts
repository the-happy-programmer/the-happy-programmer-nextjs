import { createClient } from '@/lib/utils/supabase/server'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  console.log(requestUrl.origin)
  if (code) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    const { error, data } = await supabase.auth.exchangeCodeForSession(code)
    console.log('ERROR:', error)
    console.log('DATA:', data)
  }
  return NextResponse.redirect(requestUrl.origin)
}
