import Content from "@/components/about/course/Content";
import {
	getDocBySlug,
	getAllinks,
	gatAllLinksForCourses,
} from "@/lib/courseslib/courseapi";
import SideMenu from "@/components/about/course/SideMenu";
import CourseHeader from "@/components/about/course/CourseHeader";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateStaticParams() {
	const e = gatAllLinksForCourses();
	return e.map((link) => ({
		slug: link.split("/").filter(Boolean).slice(-2),
	}));
}

type Props = {
	params: { slug: string[] };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const { meta } = getDocBySlug(params.slug[1], `course/${params.slug[0]}`);
	return {
		title: meta.coursetitle,
		description: meta.description,
		openGraph: {
			title: `${meta.coursetitle}  - The Happy Programmer`,
			description: meta.description,
		},
	};
}

export default function CoursePage({
	searchParams,
	params,
}: {
	params: { slug: string[] };
	searchParams: { error: string; message: string };
}): JSX.Element {
	const { meta, content } = getDocBySlug(
		params.slug[1],
		`course/${params.slug[0]}`,
	);
	const courseslugs = getAllinks(`course/${params.slug[0]}`);
	return (
		<>
			<CourseHeader
				error={searchParams.error}
				message={searchParams.message}
				meta={meta}
			/>
			<div className="bg-stone-100 dark:bg-stone-800">
				<div className="container flex flex-row">
					<SideMenu courseslugs={courseslugs} />
					<Content content={content} />
				</div>
			</div>
		</>
	);
}
