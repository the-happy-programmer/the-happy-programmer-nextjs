import SvgtoReact from '@/components/Svgtoreact';
import HappyLink from '@/components/HappyLink';
import type { DisplayCardProps } from '@/lib/types/about';
import { Card } from '@nextui-org/card';
export default function DisplayCard({
  svg,
  desc,
  link,
  socials,
}: DisplayCardProps): JSX.Element {
  return (
    <Card>
      <div className="h-16 pb-2 pt-5">
        <SvgtoReact
          name={svg.toLowerCase()}
          className=""
          height={socials ? 25 : 30}
        />
      </div>
      <p className="text-lg font-bold capitalize dark:text-stone-50">{svg}</p>
      <p className="py-2 text-sm leading-loose text-stone-600 dark:text-stone-300">
        {desc}
      </p>
      <HappyLink
        classes="group dark:hover:text-darkaccent hover:text-accent dark:text-stone-50 font-semibold justify-between mt-auto flex items-center transition duration-150 ease-in"
        href={link}
      >
        {socials ? 'Follow' : 'Projects'}{' '}
        <SvgtoReact
          name="arrow"
          className="group-hover:text-accent dark:group-hover:text-darkaccent -rotate-90 transform fill-current dark:text-stone-50 "
          height={15}
        />
      </HappyLink>
    </Card>
  );
}
