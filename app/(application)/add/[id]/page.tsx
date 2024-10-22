import AddHeader from '@/components/add/AddHeader'
import { defaultValue } from '@/components/add/defaultValue'
import Editor from '@/components/add/Editor'
import { Button } from '@nextui-org/react'

export default function AddPage({}) {
  const tags = ['2']
  return (
    <div className="container flex flex-col py-10">
      <AddHeader title="test title" description="test description" />
      <Editor content={defaultValue} />
      <SelectTags tags={tags} />
      <br />
      <Button color="primary" className="w-auto">
        Save
      </Button>
    </div>
  )
}
