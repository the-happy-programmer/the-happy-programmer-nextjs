"use client";
import { useState } from "react";
import type { TitleSubtitle } from "@/lib/types/home";
import TechLink from "./TechLink";
import { TbBrandNuxt } from "react-icons/tb";
import { BiLogoFlutter, BiLogoVuejs, BiLogoReact } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { DiSwift } from "react-icons/di";
import Web from "@/public/svg/technologies/web.svg";
import Ssg from "@/public/svg/technologies/ssg.svg";
import Mobile from "@/public/svg/technologies/mobile.svg";
import { Chip } from "@nextui-org/chip";

export default function Technologies({
  title,
  subtitle,
}: TitleSubtitle): JSX.Element {
  const [icon, setIcon] = useState<number>(1);
  return (
    <>
      <div className="container flex flex-col px-14 pb-72 pt-40 sm:px-14 md:flex-row md:items-center md:px-3 lg:flex-row lg:items-center lg:px-10 xl:flex-row xl:items-center xl:px-3">
        <div className="flex max-w-xs flex-col gap-y-unit-xs">
          <Chip color="default" variant="flat">
            {title}
          </Chip>
          <h3 className="text-3xl font-bold leading-snug text-stone-800 dark:text-stone-100">
            {subtitle}
          </h3>
        </div>
        <div className="flex flex-row gap-x-10 gap-y-4 pl-0 pt-5 sm:flex-row sm:pl-0 md:flex-col md:pl-20 lg:flex-col lg:pl-20 xl:flex-col xl:pl-20">
          <TechLink
            setOnClick={() => setIcon(1)}
            current={icon}
            name="Web"
            tab={1}
            icons={[BiLogoVuejs, BiLogoReact]}
          />
          <TechLink
            setOnClick={() => setIcon(2)}
            current={icon}
            name="Mobile"
            tab={2}
            icons={[BiLogoFlutter, DiSwift]}
          />
          <TechLink
            setOnClick={() => setIcon(3)}
            current={icon}
            name="SSG"
            tab={3}
            icons={[TbBrandNextjs, TbBrandNuxt]}
          />
        </div>
        <div className="relative right-4 flex items-center py-32">
          <div className="absolute left-0 top-0 mx-auto -mb-10 mt-20 sm:left-0 md:-top-24 md:left-32 lg:-top-24 lg:left-96 xl:-top-32 xl:left-32">
            {icon === 1 && <Web height={500} />}
            {icon === 2 && <Mobile height={500} />}
            {icon === 3 && <Ssg height={500} />}
          </div>
        </div>
      </div>
      <p className="container px-10 pb-10 pt-14 text-xs text-default-900 sm:px-10 sm:pt-10 md:px-10  lg:pt-0 xl:pt-0">
        The Happy Programmer
      </p>
    </>
  );
}
