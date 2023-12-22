import SvgtoReact from "../Svgtoreact";

export default function TechLink({
  name,
  current,
  icons,
  tab,
  setOnClick,
}: {
  name: string;
  current: number;
  icons: any[];
  tab: number;
  setOnClick: () => void;
}): JSX.Element {
  const currentIcon = current === tab;
  return (
    <div>
      <div className="flex cursor-pointer flex-col items-center py-3  sm:flex-col md:flex-row lg:flex-row xl:flex-row">
        <div>
          <p
            className={`${
              currentIcon ? "text-default-900" : "text-default-600"
            } text-default-600 hover:text-default-900`}
            onClick={setOnClick}
          >
            {name}
          </p>
        </div>
        {currentIcon && (
          <div className="my-auto mt-2 h-2 w-2 rounded-full bg-primary sm:mt-2 md:ml-2 lg:ml-2 xl:ml-2" />
        )}
      </div>
      <div className="hidden flex-row gap-x-3 sm:hidden md:flex lg:flex xl:flex">
        {icons.map((Icon, index) => (
          <div key={index} className="rounded-md bg-default/40 p-3">
            <Icon className="text-default-600" />
          </div>
        ))}
      </div>
    </div>
  );
}
