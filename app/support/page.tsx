import { useState } from "react";
import SupAnnouncement from "@/components/support/SupAnnouncement";
import SupCard from "@/components/support/SupCard";
import SupCustomer from "@/components/support/SupCustomer";
import SupHero from "@/components/support/SupHero";
import TitleSup from "@/components/support/TitleSup";

import type { KeyFeaturesProps } from "@/lib/types/support";
import {
  BenefitsStr,
  customerReview,
  keyfeatures,
  startToday,
  supHero,
} from "../data";

type price = 5 | 50;

export default function Support(): JSX.Element {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <SupHero strings={supHero} />
      <TitleSup
        title={BenefitsStr.title as string}
        subtitle={BenefitsStr.subtitle as string}
        tag={BenefitsStr.tag}
      >
        <div className="flex flex-row flex-wrap justify-between py-10">
          {keyfeatures.map((features: KeyFeaturesProps) => {
            return (
              <SupCard
                icon={features.icon}
                key={features.icon}
                title={features.title}
              />
            );
          })}
        </div>
      </TitleSup>

      <TitleSup
        title={customerReview.title}
        subtitle={customerReview.subtitle as string}
      >
        <SupCustomer />
      </TitleSup>
      <SupAnnouncement
        title={startToday.title}
        subtitle={startToday.subtitle as string}
        buttonstr={startToday.buttonstr}
      />
    </div>
  );
}
