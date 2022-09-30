interface TabButtonProps {
  firstBtn: string
  SecondBtn: string
  icon?: string
  active: boolean
  setActive: () => void
}

export default function TabButton({
  icon,
  firstBtn,
  SecondBtn,
  active,
  setActive,
}: TabButtonProps): JSX.Element {
  return (
    <div className="flex flex-row border">
      <button className="py-2 px-6">{firstBtn}</button>
      <button className="">{SecondBtn}</button>
    </div>
  )
}
