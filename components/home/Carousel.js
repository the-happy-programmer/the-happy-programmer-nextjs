import { useState, useEffect } from 'react';
import SvgtoReact from '../Svgtoreact';

export default function Carousel() {
  const heroicons = ['heromobile', 'heroweb', 'herowatch', 'heroserver'];
  const [svghero, setsvghero] = useState(0);

  const setSvg = (svgcounter) => {
    setsvghero(svgcounter);
  };

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
      <div className='flex flex-row p-10 justify-center'>
        {heroicons.map((e, index) => (
          <div
            key={index}
            onClick={(e) => setSvg(index)}
            className={`hover:bg-gray-700 dark:hover:bg-gray-200 shadow-md h-2 w-2 rounded-full mx-1 cursor-pointer ${
              index === svghero ? 'bg-gray-700' : 'bg-gray-200'
            } ${index === svghero ? 'dark:bg-gray-200' : 'dark:bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
