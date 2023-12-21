import type {
  SubHeroProps,
  TitleSubIcons,
  TitleSubtitle,
} from "@/lib/types/home";
import Understand from "@/public/svg/understand.svg";
import Create from "@/public/svg/create.svg";
import Grow from "@/public/svg/grow.svg";

import type {
  BenefitsProps,
  KeyFeaturesProps,
  SupHeroProps,
} from "@/lib/types/support";

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

const info: string[][] = [
  [
    "Sponsored Posts",
    "For any sponsored post, you can send us a message at our email address. We will get back to you as soon as possible. ",
  ],
  [
    "Advertise yourself",
    "You can advertise your business in this website, all you have to do is send an email with your banner and the time you want the AD to last. ",
  ],
  [
    "Ask questions",
    "You can always ask any questions you have to improve your experience",
  ],
  [
    "Source code",
    "The happy programmer provides source code to all members you can see the code by yourself.",
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
    "Subscribe to get notified of new content and course that will come in the near future. In any way, you will not get spammed or your data be shared",
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

export {
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
