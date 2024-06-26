import { Chip } from '@nextui-org/chip';
import type { TitleSupProps } from '@/lib/types/support';

export default function TitleSup({
  children,
  title,
  subtitle,
  tag,
}: TitleSupProps): JSX.Element {
  return (
    <div className="container py-32">
      <div className="flex flex-col">
        {tag && <Chip variant="flat">{tag}</Chip>}
        <h3 className="py-3 text-3xl font-bold">{title}</h3>
        <p className="max-w-lg text-default-600">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}
