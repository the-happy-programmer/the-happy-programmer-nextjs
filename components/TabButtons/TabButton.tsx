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
    <div className="mx-auto flex flex-row rounded-full border bg-gray-50">
      <button
        onClick={() => setActive(true)}
        className={`${
          active ? 'rounded-full border border-gray-900 bg-gray-50 shadow' : ''
        } border border-gray-100 border-opacity-70  py-2 px-6`}
      >
        {firstBtn}
      </button>
      <button
        onClick={() => setActive(false)}
        className={`${
          !active ? 'rounded-full border border-gray-900 bg-gray-50 shadow' : ''
        } border border-gray-100 border-opacity-70  py-2 px-6`}
      >
        {SecondBtn}
      </button>
    </div>
  )
}
