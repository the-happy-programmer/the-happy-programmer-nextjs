import { Input } from '@nextui-org/react'

const AddHeader = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  return (
    <div className="flex flex-row gap-x-6">
      <Input type="text" defaultValue={title} label="title" />
      <Input type="text" defaultValue={description} label="description" />
    </div>
  )
}

export default AddHeader
