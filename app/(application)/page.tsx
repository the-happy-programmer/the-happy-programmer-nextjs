import DropDownContainer from '@/components/about/DropDownContainer';
import HeroCarousel from '@/components/home/HeroCarousel';
import SubHero from '@/components/home/SubHero';
import Subscribe from '@/components/home/Subscribe';
import Technologies from '@/components/home/Technologies';
import NewSupport from '@/components/home/subscribe/NewSupport';
import type { Metadata } from 'next';
import { hero, moderntechnologies, subhero, subscribe } from './data';

export const metadata: Metadata = {
  title: 'The Happy Programmer',
  description:
    'The Happy Programmer is a programming website focused on teaching programming technologies like iOS, Flutter and more. Courses in mobile development daily iOS and Flutter blog posts.',
};

export default async function Page({
  searchParams,
}: {
  searchParams: { error: string; message: string };
}) {
  const { message, error } = searchParams;
  return (
    <div className="overflow-hidden bg-background">
      <HeroCarousel
        title={hero.title}
        subtitle={hero.subtitle}
        icon={hero.icon}
      />
      <SubHero subhero={subhero} />

      <Technologies
        title={moderntechnologies.title}
        subtitle={moderntechnologies.subtitle}
      />
      {true && <NewSupport />}
      <Subscribe
        subtitle={subscribe.subtitle}
        error={error}
        message={message}
        title={subscribe.title}
      />
      <DropDownContainer title="How else you can benefit from THP" />
    </div>
  );
}
