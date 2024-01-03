export default function Headerlayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="h-72">
      <div>{children}</div>
    </div>
  );
}
