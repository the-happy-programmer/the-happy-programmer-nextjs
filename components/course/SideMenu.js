export default function SideMenu({ slug }) {
  return (
    <div className="container px-2">
      {slug[0]}, {slug[1]}
      <input
        placeholder="search"
        className="rounded border border-gray-200 bg-gray-100 p-1"
      />
    </div>
  )
}
