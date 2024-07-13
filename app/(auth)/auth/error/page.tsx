import { Spotlight } from '@/components/ui/Spotlight'
import { Link, Button } from '@nextui-org/react'
const page = ({ searchParams }: { searchParams: { error: string } }) => {
  console.log()
  if (searchParams.error === 'Configuration') {
    return (
      <div className="">
        <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Configuration <br />
              Error
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              We are sorry, but there was an error with the configuration of the
              email. Please try again later.
            </p>
            <div className="mx-auto w-fit pt-10">
              <Button color="primary" variant="shadow" as={Link} href="/signin">
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <p>hello</p>
}

export default page
