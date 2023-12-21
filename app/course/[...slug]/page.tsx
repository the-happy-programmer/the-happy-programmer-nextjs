import Content from "@/components/about/course/Content";
import {
  getDocBySlug,
  getAllinks,
  gatAllLinksForCourses,
} from "@/lib/courseslib/courseapi";
import SideMenu from "@/components/about/course/SideMenu";
import CourseHeader from "@/components/about/course/CourseHeader";
import { Metadata, ResolvingMetadata } from "next";

export async function generateStaticParams() {
  const e = gatAllLinksForCourses();
  return e.map((link) => link);
}

type Props = {
  params: { slug: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { meta } = getDocBySlug(params.slug[1], `course/${params.slug[0]}`);
  console.log(meta);
  return {
    title: meta.coursetitle,
    description: meta.description,
    openGraph: {
      images: "",
    },
  };
}

export default function CoursePage({
  params,
}: {
  params: { slug: string[] };
}): JSX.Element {
  const { meta, content } = getDocBySlug(
    params.slug[1],
    `course/${params.slug[0]}`
  );
  const courseslugs = getAllinks(`course/${params.slug[0]}`);
  return (
    <>
      <CourseHeader meta={meta} />
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="container flex flex-row">
          <SideMenu courseslugs={courseslugs} />
          <Content content={content} />
        </div>
      </div>
    </>
  );
}
