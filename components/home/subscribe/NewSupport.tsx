import SubDesc from './SubDesc'
import style from '../../../styles/buttons.module.css'
import SvgtoReact from '../../Svgtoreact'
import TabButton from '../../TabButtons/TabButton'
import { useState } from 'react'

export default function NewSupport({ support, supportDesc }): JSX.Element {
  const [active, setActive] = useState<boolean>(true)
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="container flex flex-col border-b py-20">
        <div className="mx-auto max-w-xs pb-10 pt-20 text-center">
          <p className="py-2 text-sm font-semibold uppercase text-accent dark:text-darkaccent">
            full-featured
          </p>
          <h3 className="text-3xl font-bold dark:text-gray-50">
            Become an expert in programming
          </h3>
        </div>
        <TabButton
          firstBtn="Monthly"
          SecondBtn="Yearly"
          active={active}
          setActive={setActive}
        />
        <div className="flex flex-row pt-10 pb-32">
          <div className="flex w-1/2 flex-col justify-center gap-y-10 border-r border-gray-900 border-opacity-10">
            <SubDesc title="Apple products development" icon="support/swift">
              <div>
                Swift is the main language for creating Apps in <a>iOS</a>,
                <a>PadOS</a>, <a>MacOS</a> and
                <a>WatchOS</a>
              </div>
            </SubDesc>
            <SubDesc title="Web Development" icon="support/web">
              <div>
                Courses in React Nexts. NuxtJS. Javascript is being taugh in
                detail in THP
              </div>
            </SubDesc>
            <SubDesc title="Mobile Development" icon="support/mobile">
              <div>
                The fastest growing market mobile development is being taught
                and difficult concepts explained
              </div>
            </SubDesc>
            <SubDesc title="Server Development" icon="support/server">
              <div>
                To become and all around develoner you need to learn to create
                servers, here is the right place.
              </div>
            </SubDesc>
          </div>
          <div className="mx-auto flex w-1/2 max-w-sm flex-col text-center">
            <p className="text-3xl font-bold dark:text-gray-50">
              {active ? '£5' : '£50'}
            </p>
            <p className="text-gray-900 text-opacity-60 dark:text-gray-50">
              {active ? 'monthly' : 'yearly'}
            </p>
            <div className="mx-auto grid w-full grid-cols-2 gap-2 py-16">
              {[
                'Early Access',
                'Sub-only Courses',
                'Answer Questions',
                'Share source code',
                'Personal Mentoring',
                'Complete Projects',
              ].map((item) => (
                <div className="flex-none rounded-md bg-gray-50 p-3 text-sm">
                  <div className="flex flex-row">
                    <SvgtoReact
                      name="check"
                      height={20}
                      width={20}
                      className="stroke-current text-gray-900"
                    />
                    <p className="mx-auto text-center font-light text-gray-900 text-opacity-60">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
              <div className="col-span-2 pt-3">
                <button className={style.fullbtn}>Get Started today</button>
              </div>
            </div>
            <p className="text-sm text-gray-900 text-opacity-50 dark:text-gray-50">
              Try THP subscription now
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
