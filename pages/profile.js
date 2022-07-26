import ProfileTable from '../components/profile/ProfileTable'

export default function Profile({}) {
  return (
    <div className="container">
      <div className="mx-auto text-gray-900 dark:text-gray-50">
        <h1 className="text-3xl font-bold ">Profile</h1>
        <div className="py-10">
          <ProfileTable title="Profile">Dolores</ProfileTable>
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
