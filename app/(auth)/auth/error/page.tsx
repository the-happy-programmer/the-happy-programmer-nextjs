const page = ({ searchParams }: { searchParams: { error: string } }) => {
  return <div>{JSON.stringify(searchParams)}</div>
}

export default page
