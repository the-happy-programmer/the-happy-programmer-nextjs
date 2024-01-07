import type { SupHeroProps } from '@/lib/types/support';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';

export default function SupCard({
  title,
  subtitle,
  buttonstr,
}: SupHeroProps): JSX.Element {
  return (
    <div className="pb-unit-3xl">
      <Card className="container mx-auto p-unit-3xl">
        <CardHeader>
          <h4 className="w-full text-center text-4xl font-bold">{title}</h4>
        </CardHeader>
        <CardBody>
          <p className="mx-auto w-full max-w-lg text-center">{subtitle}</p>
        </CardBody>
        <CardFooter>
          <Button size="lg" color="primary" disableRipple className="mx-auto">
            {buttonstr}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
