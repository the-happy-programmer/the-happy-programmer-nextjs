import { Card } from '@nextui-org/card';
import SvgtoReact from '../Svgtoreact';

export default function SupCard({
  icon,
  title,
}: {
  icon: string;
  title: string;
}): JSX.Element {
  return (
    <Card className="w-56 p-unit-lg">
      <div className="flex h-16 w-16 flex-col content-center items-center justify-center rounded-full bg-primary-100">
        <SvgtoReact
          name={icon}
          height={25}
          width={25}
          className="fill-content1-foreground"
        />
      </div>
      <div className="w-20">
        <h4 className="pt-24 text-xl font-semibold capitalize dark:text-stone-50">
          {title}
        </h4>
      </div>
    </Card>
  );
}
