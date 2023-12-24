export default function Headerlayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <div className="h-72 bg-stone-50  dark:bg-default-900">
      <div className="">{children}</div>
    </div>
  )
}
