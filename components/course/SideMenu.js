import SvgToReact from '../Svgtoreact'
export default function SideMenu({ slug }) {
  return (
    <div className="container px-2">
      <SvgToReact name="search" />
      <input
        placeholder="search"
        className="rounded border border-gray-200 bg-gray-100 p-1"
      />
    </div>
  )
}
