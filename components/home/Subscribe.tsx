import SubInput from "./SubInput";
import type { TitleSubtitle } from "@/lib/types/home";

export default function Subscribe({
  title,
  subtitle,
  error,
  message,
}: TitleSubtitle): JSX.Element {
  return (
    <div className="container flex flex-col gap-y-unit-lg py-unit-4xl text-center">
      <p className="text-3xl font-bold">{title}</p>
      <p className="mx-auto max-w-md text-default-600">{subtitle}</p>
      <SubInput error={error as string} message={message as string} />
    </div>
  );
}
