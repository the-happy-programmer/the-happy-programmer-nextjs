import Table from '../components/profile/Table'
import Happybutton from '../components/Happybutton'
import { signOut } from 'next-auth/react'

export default function Profile({}) {
  return (
    <div className="container">
      <div className="mx-auto text-gray-900 dark:text-gray-50">
        <h1 className="text-3xl font-bold ">Profile</h1>
        <div className="py-10">
        <Table title="Profile">Dolores</Table>
        <Happybutton onClick={() => signOut()}>Sign Out</Happybutton>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
