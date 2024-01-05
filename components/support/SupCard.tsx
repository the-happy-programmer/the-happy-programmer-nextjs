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
      <div className="flex h-16 w-16 flex-col content-center items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary">
        <SvgtoReact name={icon} height={25} width={25} className="fill-white" />
      </div>
      <div className="w-unit-2xl">
        <h4 className="pt-unit-3xl text-xl font-semibold capitalize">
          {title}
        </h4>
      </div>
    </Card>
  );
}
