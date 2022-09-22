import type { FormSceletonProps } from '../../lib/types/signin'
import style from '/styles/buttons.module.css'
export default function FormSceleton({
  children,
  title,
}: FormSceletonProps): JSX.Element {
  return (
    <div className={style.signin}>
      <h1 className="pb-5 text-xl font-bold text-gray-900 dark:text-gray-50">
        {title}
      </h1>
      {children}
    </div>
  )
}
