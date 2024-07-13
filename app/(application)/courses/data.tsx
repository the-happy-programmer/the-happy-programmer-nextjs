import { CourseProps } from "@/lib/types/courses";

const courses: CourseProps[] = [
  {
    id: 1,
    link: "/course/nuxtjs/introduction",
    tags: ["NuxtJS", "tailwind", "vue"],
    title: "Markdown NuxtJS Website",
    description:
      "learn how to create a markdown blog or Documentation like website using tailwind and nuxtJS",
    image: "",
    author: "Tony",
    experty: "Software Engineer",
  },
  {
    id: 2,
    link: "/course/algorithms/introduction",
    tags: ["ts", "algorithms"],
    title: "All Algorithms in one place",
    description:
      "Every algorithm you need to know in one place, from sorting to searching and more",
    image: "",
    author: "Tony",
    experty: "Software Engineer",
  },
];

const header = {
  title: "Courses",
  subtitle: "Full programming courses on real word projects",
};

export { header, courses };
