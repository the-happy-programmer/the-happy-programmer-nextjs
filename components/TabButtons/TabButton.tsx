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
    <div className="mx-auto flex flex-row rounded-full border bg-gray-50 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50">
      <button
        onClick={() => setActive(true)}
        className={`${
          active
            ? 'rounded-full border border-gray-900 border-opacity-70 bg-gray-50 shadow dark:border-gray-50 dark:border-opacity-0 dark:bg-gray-700'
            : ''
        } rounded-full border border-gray-100 py-2 px-6 dark:border-gray-800`}
      >
        {firstBtn}
      </button>
      <button
        onClick={() => setActive(false)}
        className={`${
          !active
            ? 'rounded-full border border-gray-800 bg-gray-50 shadow dark:border-gray-50 dark:border-opacity-0 dark:bg-gray-700'
            : ''
        } rounded-full border border-gray-100 border-opacity-70  py-2 px-6 dark:border-gray-800  `}
      >
        {SecondBtn}
      </button>
    </div>
  )
}
