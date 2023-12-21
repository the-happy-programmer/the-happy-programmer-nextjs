import SvgToReact from "@/components/Svgtoreact";
import SubInput from "@/components/home/SubInput";

export default function CourseHeader({
  meta,
}: {
  [key: string]: any;
}): JSX.Element {
  return (
    <div className="bg-stone-50 dark:bg-default-900">
      <div className="container flex  flex-col items-center space-y-2 py-12">
        <SvgToReact name={meta.icon} height={55} width={55} />
        <p className="text-sm text-stone-700 dark:text-stone-300">
          {meta.coursetitle}
        </p>
        <h1 className="pb-3 text-3xl dark:text-stone-400">{meta.title}</h1>
        <SubInput />
      </div>
    </div>
  );
}
