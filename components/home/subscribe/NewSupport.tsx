"use client";
import SubDesc from "@/components/home/subscribe/SubDesc";
import Check from "@/public/svg/check.svg";
import { useState } from "react";
import { Link } from "@nextui-org/link";
import { Chip } from "@nextui-org/chip";
import { Tab, Tabs } from "@nextui-org/tabs";
import { Button } from "@nextui-org/button";

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
            <SubDesc title="Apple products development" icon="courses/swift">
              <div>
                Swift is the main language for creating Apps in{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://developer.apple.com/ios"
                  className="text-accent dark:text-darkaccent underline"
                >
                  iOS
                </a>
                ,
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://developer.apple.com/ipados"
                  className="text-accent dark:text-darkaccent underline"
                >
                  iPadOS
                </a>
                ,{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://developer.apple.com/macos/"
                  className="text-accent dark:text-darkaccent underline"
                >
                  MacOS
                </a>{" "}
                and{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://developer.apple.com/watchos/"
                  className="text-accent dark:text-darkaccent underline"
                >
                  WatchOS
                </a>
              </div>
            </SubDesc>
            <SubDesc title="Web Development" icon="support/web">
              <div>
                Courses in React{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://nextjs.org"
                  className="text-accent dark:text-darkaccent underline"
                >
                  NextJS
                </a>
                ,{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://v3.nuxtjs.org"
                  className="text-accent dark:text-darkaccent underline"
                >
                  NuxtJS
                </a>
                . Javascript is being taugh in detail in THP
              </div>
            </SubDesc>
            <SubDesc title="Mobile Development" icon="support/mobile">
              <div>
                The fastest growing market mobile development is being taught
                and difficult concepts explained, such as{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://reactnative.dev"
                  className="text-accent dark:text-darkaccent underline"
                >
                  React Native
                </a>
                ,{" "}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://flutter.dev/"
                  className="text-accent dark:text-darkaccent underline"
                >
                  Flutter
                </a>
              </div>
            </SubDesc>
            <SubDesc title="Server Development" icon="support/server">
              <div>
                To become and all around develoner you need to learn to create
                servers, here is the right place to learn{" "}
                <a
                  rel="noreferrer"
                  className="text-accent dark:text-darkaccent underline"
                  href="https://expressjs.com"
                >
                  ExpressJS
                </a>
                ,{" "}
                <a
                  rel="noreferrer"
                  className="text-accent dark:text-darkaccent underline"
                  href="https://nodejs.org/en/"
                >
                  NodeJS
                </a>{" "}
                .
              </div>
            </SubDesc>
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
              <ul className="mt-6 space-y-2">
                {[
                  "Early Access",
                  "Sub-only Courses",
                  "Answer Questions",
                  "Share source code",
                  "Personal Mentoring",
                  "Complete Projects",
                ].map((item) => (
                  <li className="flex items-center gap-2" key={item}>
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
