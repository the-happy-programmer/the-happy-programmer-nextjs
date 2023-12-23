"use client";
import SubDesc from "@/components/home/subscribe/SubDesc";
import Check from "@/public/svg/check.svg";
import { useState } from "react";
import { Link } from "@nextui-org/link";
import { Chip } from "@nextui-org/chip";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Button } from "@nextui-org/button";
import { featuresToSub } from "@/app/data";

export default function NewSupport({}): JSX.Element {
  const [active, setActive] = useState<string>("month");
  return (
    <div className="border-y border-divider bg-default-50">
      <div className="container flex flex-col py-unit-3xl">
        <div className="mx-auto flex max-w-xs flex-col items-center gap-y-unit-sm pb-unit-xl pt-unit-3xl text-center">
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-primary to-secondary border-white/50 shadow-secondary/30",
              content: "drop-shadow shadow-black text-white",
            }}
          >
            FULL-FEATURED
          </Chip>
          <h3 className="text-3xl font-bold">
            Become an expert in programming
          </h3>
        </div>
        <Tabs
          size="lg"
          className="mx-auto"
          color="default"
          aria-label="Tabs colors"
          radius="full"
          onSelectionChange={(key) => setActive(key as string)}
        >
          <Tab key="year" title="Year" />
          <Tab key="month" title="Month" />
        </Tabs>
        <div className="flex flex-col justify-between pb-unit-4xl pt-unit-xl sm:flex-col md:flex-row lg:flex-row xl:flex-row">
          <div className="flex flex-col items-center gap-y-unit-xl  md:w-1/2 md:justify-center lg:w-1/2 lg:justify-center xl:w-1/2 xl:justify-center">
            {featuresToSub.map(([title, subtitle, Icon]) => (
              <div
                key={title as string}
                className="group flex flex-row gap-x-unit-lg rounded-xl p-unit-md  hover:bg-content2"
              >
                <Icon className="h-14 w-14 rounded-md bg-content2 p-unit-md text-default-600 group-hover:bg-content1 group-hover:text-primary" />
                <div className="flex flex-col gap-y-unit-sm">
                  <p className="font-semibold">{title as string}</p>
                  <p className="max-w-sm leading-relaxed text-default-600">
                    {subtitle as string}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto w-full max-w-sm">
            <div className="rounded-2xl border border-secondary p-6 shadow-sm ring-1 ring-secondary sm:order-last sm:px-8 lg:p-12">
              <div className="text-center">
                <div className="text-lg font-medium">
                  <Chip
                    variant="shadow"
                    classNames={{
                      base: "bg-gradient-to-br from-primary to-secondary border-white/50 shadow-secondary/30",
                      content: "drop-shadow shadow-black text-white",
                    }}
                  >
                    Pro
                  </Chip>
                  <span className="sr-only">Plan</span>
                </div>
                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold  sm:text-4xl">
                    {" "}
                    {active === "month" ? "£5" : "£50"}{" "}
                  </strong>

                  <span className="text-sm font-medium text-default-600">
                    {active === "month" ? "/month" : "/year"}
                  </span>
                </p>
              </div>
              <ul className="mt-6 space-y-unit-sm">
                {[
                  "Early Access",
                  "Sub-only Courses",
                  "Answer Questions",
                  "Share source code",
                  "Personal Mentoring",
                  "Complete Projects",
                ].map((item) => (
                  <li className="flex items-center gap-x-unit-sm" key={item}>
                    <Check
                      height={20}
                      width={20}
                      className="stroke-current text-default-900"
                    />
                    <span className="text-default-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-unit-xl">
                <Button
                  disableRipple
                  href="/support"
                  variant="shadow"
                  as={Link}
                  className="w-full bg-gradient-to-br from-primary to-secondary text-white shadow-secondary/30"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
