import { Metadata } from 'next';
import Headerlayout from '@/widget/Headerlayout';
import DisplayInfo from '@/widget/DisplayInfo';
import DisplayCard from '@/components/about/DisplayCard';
import SvgtoReact from '@/components/Svgtoreact';
import DropDownContainer from '@/components/about/DropDownContainer';
import { projects, socials, author } from './data';
import { Link } from '@nextui-org/link';

export const metadata: Metadata = {
  title: 'My Name Is Tony',
  description:
    'I have developed numerous of iOS and Android apps. I have been participated in many open sourse projects. An experienced developer in web development, enterprise and mobile development. Enthusiastic with programming and technology.',
};

export default function About({}: {}): JSX.Element {
  return (
    <>
      <Headerlayout>
        <div className="container flex flex-col items-center justify-center pt-5 text-center sm:flex-row sm:pt-16 sm:text-left md:flex-row md:pt-16 md:text-left lg:flex-row lg:pt-16 lg:text-left xl:flex-row xl:pt-16 xl:text-left">
          <SvgtoReact height={150} name="face" />
          <div className="my-auto sm:pl-8 md:pl-8 lg:pl-8 xl:pl-8">
            <h1 className="text-4xl font-semibold tracking-tight lg:text-4xl">
              {author.desc}
            </h1>
            <p className="py-2 text-xs text-default-800">{author.job}</p>
            <Link
              color="primary"
              underline="hover"
              href={`mailto:${author.mail}`}
            >
              {author.mail}
            </Link>
          </div>
        </div>
      </Headerlayout>
      <div className="border-t border-divider bg-content2 py-9">
        <div className="pb-20">
          <DisplayInfo title="Socials" subtitle="Follow me on my socials">
            {socials.map(([link, svg, desc]) => (
              <DisplayCard
                key={link}
                svg={svg}
                desc={desc}
                link={link}
                socials={true}
              />
            ))}
          </DisplayInfo>
          <DisplayInfo
            title="Experience"
            subtitle="You can see my projects on GitHub"
          >
            {projects.map(([svg, desc, link]) => (
              <DisplayCard key={link} svg={svg} desc={desc} link={link} />
            ))}
          </DisplayInfo>
        </div>
        <DropDownContainer title="Know more about me" />
      </div>
    </>
  );
}
