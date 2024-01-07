'use client';
import { useState } from 'react';
import SvgtoReact from '@/components/Svgtoreact';
import styles from '@/styles/buttons.module.css';
import type { SupHeroProps } from '@/lib/types/support';
import { Chip } from '@nextui-org/chip';
import { Tab, Tabs } from '@nextui-org/tabs';
import { Button } from '@nextui-org/button';
export default function SupHero({
  strings,
}: {
  strings: SupHeroProps;
}): JSX.Element {
  const [active, setActive] = useState<string>('month');

  return (
    <>
      <div className="relative mx-auto border-b border-divider pt-unit-3xl">
        <div className="container flex flex-col items-center">
          <Chip
            variant="shadow"
            className="bg-gradient-to-tr from-primary-500 to-secondary-500 text-white"
            color="primary"
          >
            {strings.tag}
          </Chip>
          <h1 className="inline max-w-lg pt-unit-sm text-center text-3xl font-semibold tracking-tight lg:text-4xl">
            {strings.title}
          </h1>
          <Tabs
            className="mx-auto pt-unit-xl"
            color="default"
            aria-label="Tabs colors"
            radius="full"
            onSelectionChange={(key) => setActive(key as string)}
          >
            <Tab key="year" title="Year" />
            <Tab key="month" title="Month" />
          </Tabs>
          <div className="mt-14 w-96 rounded-t-2xl bg-default-50 p-10 text-center">
            <h2 className="text-3xl font-bold dark:text-stone-50">
              {' '}
              {active === 'month' ? '£5' : '£50'}
            </h2>
            <p className="pb-5 text-sm text-default-900 text-opacity-60 dark:text-stone-50">
              {active === 'month' ? 'per month' : 'per year'}
            </p>
            <Button
              onClick={() => {}}
              variant="shadow"
              color="primary"
              disableRipple
              className="w-full bg-gradient-to-tr from-primary-500 to-secondary-500 text-white"
            >
              {strings.buttonstr}
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-96 flex-col gap-y-4 rounded-b-2xl bg-content1 p-10 shadow-2xl">
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
                className="stroke-current text-default-900 dark:text-stone-50"
              />
              <p className="text-left text-sm text-default-900 dark:text-stone-50">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
