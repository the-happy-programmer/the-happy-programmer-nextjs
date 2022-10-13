import style from '../../styles/buttons.module.css'
export default function SupCard({
  title,
  subtitle,
  buttonstr,
}: {
  title: string
  subtitle: string
  buttonstr: string
}): JSX.Element {
  return (
    <div className="container my-20 flex flex-col items-center rounded-2xl bg-gray-800 p-20 text-center shadow-2xl dark:bg-gray-100">
      <h4 className="text-4xl font-bold text-gray-50 dark:text-gray-900">
        {title}
      </h4>
      <p className="max-w-lg pt-5 pb-7 text-gray-50 text-opacity-70 dark:text-gray-900">
        {subtitle}
      </p>
      <button className={style.lbtndark}>{buttonstr}</button>
    </div>
  )
}
