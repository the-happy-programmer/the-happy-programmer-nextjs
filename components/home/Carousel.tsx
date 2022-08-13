import { SetStateAction, useState } from 'react'
import SvgtoReact from '../Svgtoreact'

export default function Carousel(): JSX.Element {
  const heroicons: string[] = [
    'heromobile',
    'heroweb',
    'herowatch',
    'heroserver',
  ]
  const [svghero, setsvghero] = useState<number>(0)

  const setSvg = (svgcounter: SetStateAction<number>) => {
    setsvghero(svgcounter)
  }

  return (
    <div>
      {heroicons.map((e, index) => (
        <SvgtoReact
          key={index}
          height={500}
          width={400}
          className={svghero !== index && 'hidden'}
          name={e}
        />
      ))}
      <div className="flex flex-row justify-center p-10">
        {heroicons.map((e, index) => (
          <div
            key={index}
            onClick={(e) => setSvg(index)}
            className={`mx-1 h-2 w-2 cursor-pointer rounded-full shadow-md hover:bg-gray-700 dark:hover:bg-gray-200 ${
              index === svghero ? 'bg-gray-700' : 'bg-gray-200'
            } ${index === svghero ? 'dark:bg-gray-200' : 'dark:bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  )
}
