import Spinner from './Spinner'

export default function FullPageSpinner(): JSX.Element {
  return (
    <div className="flex w-full flex-col items-center py-32">
      <Spinner />
    </div>
  )
}
