import SubInput from './SubInput'
export default function Subscribe({ title, subtitle }) {
  return (
    <div className="container py-20 text-center">
      <p className="text-3xl font-bold dark:text-gray-50">{title}</p>
      <p className="mx-auto max-w-2xl p-10 text-gray-700 dark:text-gray-300">
        {subtitle}
      </p>
      <SubInput />
    </div>
  )
}
