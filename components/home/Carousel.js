import { useState } from 'react';
import SvgtoReact from '../Svgtoreact';

export default function Carousel() {
  const heroicons = ['heromobile', 'heroweb', 'herowatch', 'heroserver'];

  const [svghero, setsvghero] = useState(0);
  const setSvg = (svgcounter) => {
    setsvghero(svgcounter);
    console.log(svghero);
  };

  return (
    <div>
      {heroicons.map((e, index) => (
        <SvgtoReact
          height={500}
          width={400}
          className={svghero !== index && 'hidden'}
          name={e}
        />
      ))}
      <div className='flex flex-row p-2 justify-center '>
        {heroicons.map((e, index) => (
          <div
            onClick={(e) => setSvg(index)}
            className={`h-2 w-2 rounded-full mx-1 cursor-pointer shadow-2xl ${
              index === svghero ? 'bg-gray-700' : 'bg-gray-200'
            } ${index === svghero ? 'dark:bg-gray-200' : 'dark:bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
