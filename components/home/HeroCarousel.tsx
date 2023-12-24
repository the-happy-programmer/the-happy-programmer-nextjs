import type { TitleSubtitle } from "@/lib/types/home";
import HeroCode from "@/public/svg/herocode.svg";
import { Button } from "@nextui-org/button";
export default function HeroCarousel({
  title,
  subtitle,
}: TitleSubtitle): JSX.Element {
  return (
    <div className="container flex flex-col-reverse items-center justify-between px-4 py-8 text-center sm:flex-col-reverse sm:py-20 sm:text-center md:flex-row md:py-20 md:text-left lg:flex-row lg:py-20 lg:text-left xl:flex-row xl:py-20 xl:text-left">
      <div className="w-96">
        <h1 className="inline text-4xl font-semibold tracking-tight lg:text-5xl">
          {title}
        </h1>

        <p className="px-2 py-8 text-lg text-default-500  dark:text-stone-200 sm:px-0 md:px-0 lg:px-0 xl:px-0">
          {subtitle}
        </p>
        <Button
          disableRipple
          color="primary"
          size="lg"
          variant="shadow"
          href="#subscribe"
        >
          Subscribe
        </Button>
      </div>
      <div>
        <div className="h-96">
          <HeroCode className="h-96 fill-content1" />
        </div>
      </div>
    </div>
  );
}
