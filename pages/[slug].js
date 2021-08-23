import { useRouter } from "next/router"

export default function Post() {
  const router = useRouter()
  const { slug } = router.query
  console.log(slug)
  return <h1>welcome to Post {slug}</h1>
}
