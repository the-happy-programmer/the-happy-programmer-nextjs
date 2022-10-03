interface TabButtonProps {
  firstBtn: string
  SecondBtn: string
  icon?: string
  active: boolean
  setActive: (acrive: boolean) => void
}

export default function TabButton({
  icon,
  firstBtn,
  SecondBtn,
  active,
  setActive,
}: TabButtonProps): JSX.Element {
  return (
    <div className="mx-auto flex flex-row rounded-full border bg-gray-50 dark:bg-gray-900">
      <button
        onClick={() => setActive(true)}
        className={`${
          active ? ' border border-gray-900 shadow' : ''
        } rounded-full border  border-gray-100 border-opacity-70 bg-gray-50 py-2 px-6 text-gray-900 dark:bg-gray-900 dark:text-gray-50`}
      >
        {firstBtn}
      </button>
      <button
        onClick={() => setActive(false)}
        className={`${
          !active
            ? 'border border-gray-900 bg-gray-50 shadow dark:bg-gray-900'
            : ''
        } rounded-full border  border-gray-100 border-opacity-70 bg-gray-50 py-2 px-6 text-gray-900 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50`}
      >
        {SecondBtn}
      </button>
    </div>
  )
}
