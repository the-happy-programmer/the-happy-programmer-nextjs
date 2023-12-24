import type {
  SubHeroProps,
  TitleSubIcons,
  TitleSubtitle,
} from "@/lib/types/home";
import Understand from "@/public/svg/understand.svg";
import Create from "@/public/svg/create.svg";
import Grow from "@/public/svg/grow.svg";
import { GiPayMoney } from "react-icons/gi";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import { HiCodeBracket } from "react-icons/hi2";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";

// sup home
import { DiSwift } from "react-icons/di";
import { MdOutlineWeb } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaServer } from "react-icons/fa";

import type {
  BenefitsProps,
  KeyFeaturesProps,
  SupHeroProps,
} from "@/lib/types/support";
import { Link } from "@nextui-org/link";

const supportDesc: { title: string; subtitle: string } = {
  title: "support to our newsletter",
  subtitle: "Get the latest news and updates from THP",
};
const support: { title: string; icon: string }[] = [
  { title: "title", icon: "support/swift" },
  { title: "title", icon: "support/mobile" },
  { title: "title", icon: "support/server" },
  { title: "title", icon: "support/web" },
];

const SponsoredPosts = () => {
  return (
    <div>
      you can mail{" "}
      <Link href="mailto:info@thehappyprogrammer.com">
        info@thehappyprogrammer.com
      </Link>
    </div>
  );
};

const AdvPosts = () => {
  return (
    <div>
      you can mail{" "}
      <Link href="mailto:info@thehappyprogrammer.com">
        info@thehappyprogrammer.com
      </Link>{" "}
      to advertise yourself.
    </div>
  );
};

const Questions = () => {
  return <div>you can mail us</div>;
};

const SourceCode = () => {
  return (
    <div>
      All the Source code can be found{" "}
      <Link href="https://github.com/orgs/the-happy-programmer/" showAnchorIcon>
        github
      </Link>
    </div>
  );
};

const info: any[][] = [
  [
    "Sponsored Posts",
    "For any sponsored post, you can send us a message at our email address. We will get back to you as soon as possible. ",
    GiPayMoney,
    SponsoredPosts,
  ],
  [
    "Advertise yourself",
    "You can advertise your business in this website, all you have to do is send an email with your banner and the time you want the AD to last. ",
    HiGlobeAsiaAustralia,
    AdvPosts,
  ],
  [
    "Ask questions",
    "You can always ask any questions you have, to improve your experience",
    HiMiniQuestionMarkCircle,
    Questions,
  ],
  [
    "Source code",
    "The happy programmer provides source code to all members you can see the code by yourself.",
    HiCodeBracket,
    SourceCode,
  ],
];

const moderntechnologies: TitleSubIcons = {
  icons: [
    "react",
    "tailwind",
    "python",
    "nextjs",
    "github",
    "swiftui",
    "nuxtjs",
    "vue",
    "flutter",
    "django",
    "swift",
    "frontity",
  ],
  title: "Modern Technologies",
  subtitle: "The most modern technologies available stay tuned for more",
};

const hero: TitleSubtitle = {
  title: "Courses in every technology.",
  subtitle:
    "Courses in every technology required to make you an expert on programming.",
  icon: "herocode",
};

const subhero: SubHeroProps["subhero"] = [
  {
    icon: Understand,
    title: "Understand",
    subtitle: "hard programming concepts explained in the simplest way.",
  },
  {
    icon: Create,
    title: "Create",
    subtitle: "Learn by coding in modern technologies on every device.",
  },
  {
    icon: Grow,
    title: "Grow",
    subtitle: "be an expert and see yourself grow to a professional.",
  },
];

const subscribe: TitleSubtitle = {
  title: "Subscribe",
  subtitle:
    "Subscribe for updates on upcoming content and courses—no spam or data sharing",
};
const navLinks: string[][] = [
  ["/blog", "Blog"],
  ["/about", "About"],
  ["https://happynuxtjs.com/", "NuxtJS"],
];

// ---------------- SUPPORT --------------------

const startToday: SupHeroProps = {
  title: "Get Started Today",
  subtitle:
    "The Happy Programmer is growing fast and we would love for you to join the journey. Learn all the concepts you need and get the means to start earning as as a developer.",
  buttonstr: "Start Now",
};

const customerReview: TitleSubtitle = {
  title: "What others say about us",
  subtitle:
    "users have said their opinion about us also we have special contributions in developing technologies for current time.",
};

const supHero: SupHeroProps = {
  tag: "Fully-Features",
  title: "Become an expert in programming",
  buttonstr: "Get Started Today",
  features: [
    "Early Access",
    "Sub-only Courses",
    "Answer Questions",
    "Share source code",
    "Personal Mentoring",
    "Complete Projects",
  ],
};
const BenefitsStr: BenefitsProps = {
  title: "Key Features",
  subtitle:
    "cutting edge technologies from start to finish. Web, mobile and more. Complete courses to take you to the next level. Getting started is easy.",
  tag: "Development",
};
const keyfeatures: KeyFeaturesProps[] = [
  {
    icon: "suppage/swift",
    title: "apple ecosystem development",
  },
  {
    icon: "suppage/web",
    title: "web development",
  },
  {
    icon: "suppage/server",
    title: "server development",
  },
  {
    icon: "suppage/mobile",
    title: "mobile development",
  },
];

const socials: string[][] = [
  ["https://twitter.com/happy_prog", "twitter"],
  ["https://www.patreon.com/thehappyprogrammer", "patreon"],
  ["https://www.facebook.com/The-Happy-Programmer-106178104593013", "facebook"],
  ["https://www.youtube.com/channel/UCdZM2azChLnEch1hRnEx9Xg", "youtube"],
  ["https://www.github.com/MyNameIsBond", "github"],
];

const followus: { title: string; copyrights: string; sub: string } = {
  title: "Follow us",
  copyrights: "Copyright © 2022 Inc. All rights reserved.",
  sub: "subscribe to our newsletter",
};

interface FooterProps {
  title: string;
  pages: string[][];
}

const pages: FooterProps = {
  title: "Pages",
  pages: [
    ["Home", "/"],
    ["Courses", "/courses"],
    ["Blog", "/blog"],
    ["About", "/about"],
  ],
};

const tags: FooterProps = {
  title: "Tags",
  pages: [
    ["Swift", "/tag/swift"],
    ["SwiftUI", "/tag/swiftui"],
    ["Announcements", "/tag/announcements"],
    ["NuxtJS", "/tag/nuxtjs"],
  ],
};

const categories: FooterProps = {
  title: "Categories",
  pages: [
    ["Announcements", "/category/announcements"],
    ["SwiftUI", "/category/swiftui"],
  ],
};

const courses: string[] = [
  "courses/vue",
  "courses/reactjs",
  "courses/swift",
  "courses/nuxtjs",
  "courses/flutter",
  "courses/tailwind",
  "courses/frontity",
];

const featuresToSub = [
  // [
  //   "Apple products development",
  //   "Swift is the main language for creating Apps in iOS,iPadOS, MacOS and WatchOS",
  //   DiSwift,
  // ],
  [
    "Web Development",
    "Courses in React NextJS, NuxtJS. Javascript is being taugh in detail in THP",
    MdOutlineWeb,
  ],
  [
    "Mobile Development",
    "The fastest growing market mobile. Development is being taught and difficult concepts explained, such as React Native, Flutter",
    FaMobileAlt,
  ],
  [
    "Server Development",
    "To become and all around develoner you need to learn to create servers, here is the right place to learn ExpressJS, NodeJS.",
    FaServer,
  ],
];

export {
  featuresToSub,
  followus,
  pages,
  tags,
  categories,
  courses,
  startToday,
  customerReview,
  supHero,
  BenefitsStr,
  keyfeatures,
  navLinks,
  hero,
  subhero,
  subscribe,
  support,
  moderntechnologies,
  info,
  supportDesc,
};
