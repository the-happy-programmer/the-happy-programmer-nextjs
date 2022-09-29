import HappyButton from '../../Happybutton'
import SubDesc from './SubDesc'

export default function NewSupport({ support, supportDesc }): JSX.Element {
  return (
    <div className="container flex flex-col border-b py-20">
      <div className="mx-auto max-w-xs py-20 text-center">
        <p className="py-2 text-sm font-semibold uppercase text-accent dark:text-darkaccent">
          full-featured
        </p>
        <h3 className="text-3xl font-bold">Become an expert in programming</h3>
      </div>
      <div className="flex flex-row py-10">
        <div className="flex w-1/2 flex-col content-around gap-y-10 border-r border-gray-900 border-opacity-10">
          <SubDesc title="Apple products development" icon="support/swift">
            <div>
              Swift is the main language for creating Apps in <a>iOS</a>,
              <a>PadOS</a>, <a>MacOS</a> and
              <a>WatchOS</a>
            </div>
          </SubDesc>
          <SubDesc title="Web Development" icon="support/mobile">
            <div>
              Courses in React Nexts. NuxtJS. Javascript is being taugh in
              detail in THP
            </div>
          </SubDesc>
          <SubDesc title="Mobile Development" icon="support/web">
            <div>
              The fastest growing market mobile development is being taught and
              difficult concepts explained
            </div>
          </SubDesc>
          <SubDesc title="Server Development" icon="support/server">
            <div>
              To become and all around develoner you need to learn to create
              servers, here is the right place.
            </div>
          </SubDesc>
        </div>
        <div className="flex w-1/2 flex-col text-center">
          <p className="text-3xl font-bold">£5</p>
          <p className="text-gray-900 text-opacity-60 dark:text-gray-50">
            per month
          </p>
          <div className="mx-auto grid max-w-sm grid-cols-2 gap-1 py-16">
            {[
              'Early Access',
              'Sub-only Courses',
              'Answer Questions',
              'Share source code',
              'Personal Mentoring',
              'Complete Projects',
            ].map((item) => (
              <p className="flex-none bg-blue-50 p-3 text-sm">{item}</p>
            ))}
            <button className="">Subscribe</button>
          </div>
          <p className="text-gray-900 text-opacity-60 dark:text-gray-50">
            Try THP subscription now
          </p>
        </div>
      </div>
    </div>
  )
}
