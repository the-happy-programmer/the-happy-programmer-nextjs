import type { SupHeroProps } from "@/lib/types/support";
import style from "@/styles/buttons.module.css";

export default function SupCard({
  title,
  subtitle,
  buttonstr,
}: SupHeroProps): JSX.Element {
  return (
    <div className="pb-20">
      <div className="container flex flex-col items-center rounded-2xl bg-gray-800 px-20 py-20 text-center shadow-2xl dark:bg-gray-100">
        <h4 className="text-4xl font-bold text-gray-50 dark:text-gray-900">
          {title}
        </h4>
        <p className="max-w-lg pb-7 pt-5 text-gray-50 text-opacity-70 dark:text-gray-900">
          {subtitle}
        </p>
        <button className={style.lbtndark}>{buttonstr}</button>
      </div>
    </div>
  );
}
