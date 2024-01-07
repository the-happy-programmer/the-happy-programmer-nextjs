import type { ProfileProps } from '../../lib/types/profile';

export default function Table({ title, children }: ProfileProps): JSX.Element {
  return (
    <div className="rounded-md border border-divider bg-content1">
      <div className="rounded-t-md bg-default-200 px-unit-lg py-unit-sm">
        <span className="">{title}</span>
      </div>
      <div className="px-unit-lg py-unit-sm">{children}</div>
    </div>
  );
}
