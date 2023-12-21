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
    <div className="mx-auto flex flex-row rounded-full border bg-stone-50 text-default-900 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-50">
      <button
        onClick={() => setActive(true)}
        className={`${
          active
            ? 'rounded-full border border-default-900 border-opacity-70 bg-stone-50 shadow dark:border-stone-50 dark:border-opacity-0 dark:bg-stone-700'
            : ''
        } rounded-full border border-stone-100 py-2 px-6 dark:border-stone-800`}
      >
        {firstBtn}
      </button>
      <button
        onClick={() => setActive(false)}
        className={`${
          !active
            ? 'rounded-full border border-stone-800 bg-stone-50 shadow dark:border-stone-50 dark:border-opacity-0 dark:bg-stone-700'
            : ''
        } rounded-full border border-stone-100 border-opacity-70  py-2 px-6 dark:border-stone-800  `}
      >
        {SecondBtn}
      </button>
    </div>
  )
}
