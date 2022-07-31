export default function Table({ title, children }) {
  return (
    <div className="">
      <span className="border p-2">{title}</span>
      <div>{children}</div>
    </div>
  )
}
