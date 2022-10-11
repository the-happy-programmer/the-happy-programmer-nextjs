import { useState } from 'react'
import SvgtoReact from '../Svgtoreact'
import TabButton from '../TabButtons/TabButton'
import styles from '../../styles/buttons.module.css'
export default function SupHero(): JSX.Element {
  const [active, setActive] = useState<boolean>(true)

  return (
    <div>
      <div className="mx-auto bg-blue-800 pt-20">
        <div className="container flex flex-col items-center">
          <p className="text-xs uppercase text-gray-50 text-opacity-60">
            Fully-Features
          </p>
          <h1 className="max-w-sm pb-10 text-center text-4xl font-bold text-gray-50">
            Become an expert in programming
          </h1>
          <TabButton
            firstBtn="Monthly"
            SecondBtn="Yearly"
            active={active}
            setActive={setActive}
          />
          <div className="mt-14 w-96 rounded-t-2xl bg-gray-50 p-10 text-center">
            <h2 className="text-3xl font-bold"> {active ? '£5' : '£50'}</h2>
            <p className="pb-5 text-sm text-gray-900 text-opacity-60">
              {active ? 'per month' : 'per year'}
            </p>
            <button className={styles.fullbtn}>Get Started Today</button>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-96 flex-col gap-y-4 rounded-b-2xl bg-gray-100 p-10 shadow-2xl">
        <div className="mx-auto flex flex-col gap-y-4">
          {[
            'Early Access',
            'Sub-only Courses',
            'Answer Questions',
            'Share source code',
            'Personal Mentoring',
            'Complete Projects',
          ].map((item) => (
            <div className="flex max-w-sm flex-row items-center gap-x-5">
              <SvgtoReact
                name="check"
                height={20}
                width={20}
                className="stroke-current text-gray-900 dark:text-gray-50"
              />
              <p className="text-left text-sm text-gray-900 dark:text-gray-50">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
