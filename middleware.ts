import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/lib/utils/supabase/middleware'
export { auth as middleware } from "@/auth"
