import { ReactNode } from 'react';

export default function DisplayInfo({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="pb-5">
      <p className="container px-3 py-6 text-2xl">
        {title}
        {'.'}
        <span className="text-default-500">{subtitle}</span>
      </p>
      <div className="container grid grid-cols-1 gap-5 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {children}
      </div>
    </div>
  );
}
