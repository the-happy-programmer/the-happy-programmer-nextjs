import { ReactNode } from 'react'

export interface KeyFeaturesProps {
  icon: string
  title: string
}

export interface SupHeroProps {
  tag?: string
  title: string
  buttonstr: string
  features?: string[]
  subtitle?: string
}

export interface BenefitsProps {
  title: string | undefined
  subtitle: string | undefined
  tag: string | undefined
}

export interface TitleSupProps {
  children: ReactNode
  title: string
  subtitle: string
  tag?: string | undefined
}
