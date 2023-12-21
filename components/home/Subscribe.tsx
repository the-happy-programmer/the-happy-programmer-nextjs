import SubInput from './SubInput'
import type { TitleSubtitle } from '@/lib/types/home'

export default function Subscribe({
  title,
  subtitle,
}: TitleSubtitle): JSX.Element {
  return (
    <div className="container py-20 text-center">
      <p className="text-3xl font-bold dark:text-stone-50">{title}</p>
      <p className="mx-auto max-w-2xl p-10 text-stone-700 dark:text-stone-300">
        {subtitle}
      </p>
      <SubInput />
    </div>
  )
}
