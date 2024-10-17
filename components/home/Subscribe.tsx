import SubInput from './SubInput'
import type { TitleSubtitle } from '@/lib/types/home'

export default function Subscribe({
  title,
  subtitle,
}: TitleSubtitle): JSX.Element {
  return (
    <div className="container flex flex-col gap-y-5 py-32 text-center">
      <p className="text-3xl font-bold">{title}</p>
      <p className="mx-auto max-w-md text-default-600">{subtitle}</p>
      <SubInput />
    </div>
  )
}
