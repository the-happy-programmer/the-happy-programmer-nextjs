"use client";
import CourseSearch from "./CourseSearch";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import type { CoursesSlugs } from "@/lib/types/courses";

export default function SideMenu({
  courseslugs,
}: {
  courseslugs: CoursesSlugs[];
}): JSX.Element {
  const [courses, setCourses] = useState<CoursesSlugs[]>(courseslugs);
  const router = usePathname();

  const currentPath = (path: string) => router === path;

  return (
    <div className="mr-10 pt-14">
      <CourseSearch
        palceholder={""}
        allslugs={courseslugs}
        setCourses={setCourses}
      />
      <ul className="pt-5">
        {courses.map((slug) => (
          <li
            key={slug.name}
            className={`
              ${
                currentPath(slug.link)
                  ? "border-l-4 border-default-900 text-default-900 dark:border-stone-50 dark:text-stone-50"
                  : "border-l-4 border-stone-100 text-stone-400 dark:border-stone-800 dark:text-stone-400"
              } py-1.5 pl-7`}
          >
            <Link href={slug.link}>{slug.name}</Link>
          </li>
        ))}
        {courses.length === 0 && (
          <li className="text-stone-800 dark:text-stone-100">no results</li>
        )}
      </ul>
    </div>
  );
}
