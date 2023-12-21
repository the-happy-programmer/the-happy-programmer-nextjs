"use client";
import { useState } from "react";
import SvgtoReact from "@/components/Svgtoreact";
import TabButton from "@/components/TabButtons/TabButton";
import styles from "@/styles/buttons.module.css";
import type { SupHeroProps } from "@/lib/types/support";
export default function SupHero({
  strings,
}: {
  strings: SupHeroProps;
}): JSX.Element {
  const [active, setActive] = useState<boolean>(true);

  return (
    <>
      <div className="mx-auto bg-blue-600 pt-20 dark:bg-blue-900">
        <div className="container flex flex-col items-center">
          <p className="text-xs uppercase text-gray-50 text-opacity-60">
            {strings.tag}
          </p>
          <h1 className="max-w-sm pb-10 text-center text-4xl font-bold text-gray-50">
            {strings.title}
          </h1>
          <TabButton
            firstBtn="Monthly"
            SecondBtn="Yearly"
            active={active}
            setActive={setActive}
          />
          <div className="mt-14 w-96 rounded-t-2xl bg-gray-50 p-10 text-center dark:bg-gray-900">
            <h2 className="text-3xl font-bold dark:text-gray-50">
              {" "}
              {active ? "£5" : "£50"}
            </h2>
            <p className="pb-5 text-sm text-gray-900 text-opacity-60 dark:text-gray-50">
              {active ? "per month" : "per year"}
            </p>
            <button onClick={() => {}} className={styles.fullbtn}>
              {strings.buttonstr}
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-96 flex-col gap-y-4 rounded-b-2xl bg-gray-100 p-10 shadow-2xl dark:bg-gray-800">
        <div className="mx-auto flex flex-col gap-y-4">
          {strings.features?.map((item) => (
            <div
              key={item}
              className="flex max-w-sm flex-row items-center gap-x-5"
            >
              <SvgtoReact
                name="check"
                height={20}
                width={20}
                className="stroke-current text-gray-900 dark:text-gray-50"
              />
              <p className="text-left text-sm text-gray-900 dark:text-gray-50">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
