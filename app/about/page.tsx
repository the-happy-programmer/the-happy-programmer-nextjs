import { Metadata } from "next";
import Headerlayout from "@/widget/Headerlayout";
import DisplayInfo from "@/widget/DisplayInfo";
import DisplayCard from "@/components/about/DisplayCard";
import SvgtoReact from "@/components/Svgtoreact";
import DropDownContainer from "@/components/about/DropDownContainer";
import { projects, socials, author, info } from "./data";
import { subtitlestyle, titlestyle } from "@/styles/styles";

export const metadata: Metadata = {
  title: "My Name Is Tony",
  description:
    "I have developed numerous of iOS and Android apps. I have been participated in many open sourse projects. An experienced developer in web development, enterprise and mobile development. Enthusiastic with programming and technology.",
};

export default function About({}: {}): JSX.Element {
  return (
    <div className=" bg-stone-50 dark:bg-default-900">
      <div className="dark:border-stone-700">
        <Headerlayout>
          <div className="container flex flex-col items-center justify-center pt-5 text-center sm:flex-row sm:pt-16 sm:text-left md:flex-row md:pt-16 md:text-left lg:flex-row lg:pt-16 lg:text-left xl:flex-row xl:pt-16 xl:text-left">
            <div>
              <SvgtoReact height={150} name="face" />
            </div>

            <div className="my-auto text-default-900 dark:text-stone-50 sm:pl-8 md:pl-8 lg:pl-8 xl:pl-8">
              <h1 className={titlestyle}>{author.desc}</h1>
              <p className={subtitlestyle(false, false)}>{author.job}</p>
              <a
                className="text-accent hover:underline dark:text-darkaccent"
                href={`mailto:${author.mail}`}
              >
                {author.mail}
              </a>
            </div>
          </div>
        </Headerlayout>
        <div className="border-t bg-stone-100 py-10 dark:border-stone-700 dark:bg-stone-800">
          <DisplayInfo title="Socials" subtitle=" Follow me on my socials">
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
            subtitle=" You can see my projects on GitHub"
          >
            {projects.map(([svg, desc, link]) => (
              <DisplayCard key={link} svg={svg} desc={desc} link={link} />
            ))}
          </DisplayInfo>
          <DropDownContainer title="Know more about me" info={info} />
        </div>
      </div>
    </div>
  );
}
