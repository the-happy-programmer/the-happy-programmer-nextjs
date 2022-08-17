type SubscriptionStatus =
  | 'trialing'
  | 'active'
  | 'canceled'
  | 'incomplete'
  | 'incomplete_expired'
  | 'past_due'
  | 'unpaid'

export type PricingType = 'one_time' | 'recurring'
export type PricingPlanInterval = 'day' | 'week' | 'month' | 'year'

export interface User {
  id: string
  email: string
  avatar_url: string
}

export interface Subscription {
  SubscriptionStatus: SubscriptionStatus
  id: string
  user: User
  metadata: string
  price_id: string
  quantity: number
  cancel_at_period_end: boolean
  timestamp: string
  current_period_start: string
  current_period_end: string
  ended_at: string
  cancel_at: string
  canceled_at: string
  trial_start: string
  trial_end: string
}
