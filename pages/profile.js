import Table from '../components/profile/Table'
import Happybutton from '../components/Happybutton'
import { signOut } from 'next-auth/react'

export default function Profile({}) {
  return (
    <div className="container">
      <div className="mx-auto max-w-sm py-20 text-gray-900 dark:text-gray-50">
        <h1 className="text-3xl font-bold ">Profile</h1>
        <div className="flex flex-col gap-y-8 py-5">
          <Table title="Account Details">
            <div className="flex flex-row items-center justify-between py-3">
              <p className="font-medium">m1lt0s@hotmail.com</p>
              <Happybutton onClick={() => signOut()}>Sign Out</Happybutton>
            </div>
          </Table>
          <button className="hover:bg-blue-700 rounded border border-gray-200 py-2 px-4 font-semibold text-danger hover:border-opacity-80 hover:text-opacity-80 dark:border-gray-700">
            Delete Account
          </button>
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
