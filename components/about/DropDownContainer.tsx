"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { info } from "@/app/data";
export default function DropDownContainer({
  title,
}: {
  title: string;
}): JSX.Element {
  return (
    <div className="border-content border-t border-divider py-unit-3xl">
      <div className="pb-unit-xl text-center">
        <p className="inline text-xl font-semibold tracking-tight lg:text-3xl">
          {title}
        </p>
      </div>
      <Accordion selectionMode="multiple" className="container max-w-2xl">
        {info.map(([title, subtitle, Icon, SubTilt]) => (
          <AccordionItem
            key={title}
            aria-label={title}
            startContent={<Icon className="h-8 w-8" />}
            subtitle={<SubTilt />}
            title={title}
          >
            {subtitle}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
