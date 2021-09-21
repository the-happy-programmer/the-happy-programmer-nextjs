import Svgtoreact from "./Svgtoreact"
import Support from "./Support"
export default function Footer() {
  const socials = [
    ["https://twitter.com/happy_prog", "twitter"],
    ["https://www.patreon.com/thehappyprogrammer", "patreon"],
    [
      "https://www.facebook.com/The-Happy-Programmer-106178104593013",
      "facebook",
    ],
    ["https://www.youtube.com/channel/UC6iG4M34lttUcEFUdSVsGVA", "youtube"],
    ["https://www.github.com/MyNameIsBond", "github"],
  ]
  return (
    <div className=''>
      <Support />
      <div className='bg-white dark:bg-black border-t dark:border-gray-700 container'>
        <footer className='container mx-auto flex flex-row justify-between p-4'>
          <div className='justify-self-auto stroke-current fill-current text-gray-700 dark:text-gray-400'>
            <Svgtoreact name={"fulllogo"} height={30} width={100} />
          </div>
          <div className='flex flex-row'>
            {socials.map(([href, icon]) => (
              <a key={icon} href={href} className='ml-5'>
                <div className='justify-self-auto fill-current text-gray-500 dark:text-gray-400 p-1 hover:text-gray-900 cursor-pointer dark:hover:text-gray-100'>
                  <Svgtoreact name={icon} height={15} />
                </div>
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}
