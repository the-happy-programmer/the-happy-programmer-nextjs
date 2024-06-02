import SvgtoReact from '@/components/Svgtoreact';
import type { DisplayCardProps } from '@/lib/types/about';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Link } from '@nextui-org/link';

export default function DisplayCard({
  svg,
  desc,
  link,
  socials,
}: DisplayCardProps): JSX.Element {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-x-3">
        <SvgtoReact
          name={svg.toLowerCase()}
          className="fill-content1-foreground text-content1-foreground"
          height={30}
          width={30}
        />
        <div className="flex flex-col">
          <p className="capitalize">{svg}</p>
          {socials ? (
            <p className="text-sm leading-loose text-default-600">{desc}</p>
          ) : null}
        </div>
      </CardHeader>
      <Divider />
      {!socials ? (
        <>
          <CardBody>
            <p className="text-sm leading-loose text-default-600">{desc}</p>
          </CardBody>
          <Divider />
        </>
      ) : null}
      <CardFooter>
        <Link
          as={Link}
          href={link}
          underline="hover"
          showAnchorIcon
          color="primary"
        >
          {socials ? 'Follow' : 'Projects'}{' '}
        </Link>
      </CardFooter>
    </Card>
  );
}
