import type { ProfileProps } from '../../lib/types/profile';

export default function Table({ title, children }: ProfileProps): JSX.Element {
  return (
    <div className="rounded-md border border-divider bg-content1">
      <div className="rounded-t-md bg-default-200 px-5 py-3">
        <span className="">{title}</span>
      </div>
      <div className="px-5 py-3">{children}</div>
    </div>
  );
}
