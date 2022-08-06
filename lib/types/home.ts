export interface TitleSubtitle {
  title: string
  subtitle?: string
  desc?: string
  icon?: string
}

export interface SupportType extends TitleSubtitle {
  prices: string[]
  benefits: string[][]
}

export interface TitleSubIcons extends TitleSubtitle {
  icons: string[]
}

export interface SubHeroProps {
  subhero: Array<HeroProps>
}

export interface HeroProps {
  icon: string
  title: string
  subtitle: string
}

export interface HomeProps {
  seo: TitleSubtitle
  hero: TitleSubIcons
  subhero: SubHeroProps['subhero']
  subscribe: TitleSubtitle
  support: SupportType
  moderntechnologies: TitleSubIcons
  info: string[][]
}
