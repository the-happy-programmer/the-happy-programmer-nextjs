import { db } from '@/drizzle/db'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/dist/adapters/drizzle'
import {
  bearer,
  organization,
  passkey,
  twoFactor,
  admin,
} from 'better-auth/dist/plugins'

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: 'pg' }),
})
