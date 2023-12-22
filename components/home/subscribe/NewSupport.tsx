"use client";
import SubDesc from "@/components/home/subscribe/SubDesc";
import style from "@/styles/buttons.module.css";
import Check from "@/public/svg/check.svg";
import { useState } from "react";
import Link from "next/link";
import { Chip } from "@nextui-org/chip";
import { Tab, Tabs } from "@nextui-org/tabs";

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
            Become an expert in programming
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
        <div className="flex flex-col pb-32 pt-unit-xl sm:flex-col md:flex-row lg:flex-row xl:flex-row">
          <div className="flex flex-col items-center gap-y-10 border-r border-default-900 border-opacity-10 md:w-1/2 md:justify-center lg:w-1/2 lg:justify-center xl:w-1/2 xl:justify-center">
            <SubDesc title="Apple products development" icon="support/swift">
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
          <div className="mx-auto flex w-1/2 max-w-sm flex-col pt-10 text-center sm:pt-10 md:pt-0 lg:pt-0 xl:pt-0">
            <p className="text-3xl font-bold dark:text-stone-50">
              {active === "month" ? "£5" : "£50"}
            </p>
            <p className="text-default-900 text-opacity-60 dark:text-stone-50">
              {active === "month" ? "per month" : "per year"}
            </p>
            <div className="mx-auto grid w-full grid-cols-2 gap-2 py-16">
              {[
                "Early Access",
                "Sub-only Courses",
                "Answer Questions",
                "Share source code",
                "Personal Mentoring",
                "Complete Projects",
              ].map((item) => (
                <div
                  key={item}
                  className="flex-none rounded-md bg-stone-50 p-3 text-sm dark:bg-stone-700 "
                >
                  <div className="flex flex-row">
                    <Check
                      height={20}
                      width={20}
                      className="stroke-current text-default-900 dark:text-stone-50"
                    />
                    <p className="mx-auto text-center font-light text-default-900 text-opacity-60 dark:text-stone-50">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
              <div className="col-span-2 pt-3">
                <Link href={"/support"} className={style.fullbtn}>
                  Get Started today
                </Link>
              </div>
            </div>
            <p className="text-sm text-default-900 text-opacity-50 dark:text-stone-50">
              Try THP subscription now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
