import style from '/styles/buttons.module.css'
export default function FormSceleton({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}): JSX.Element {
  return (
    <div className={style.signin}>
      <h1 className="pb-5 text-xl font-bold text-gray-50">{title}</h1>
      {children}
    </div>
  )
}
