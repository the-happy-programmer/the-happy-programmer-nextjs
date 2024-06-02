import SvgtoReact from '../Svgtoreact';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Avatar, AvatarGroup } from '@nextui-org/avatar';
import UsersAvatar from './UsersAvatar';
export default function SupCustomer(): JSX.Element {
  return (
    <div className="py-12">
      <Card className="mx-auto max-w-sm p-5">
        <CardHeader>
          <SvgtoReact
            name="support/quote"
            className="mx-auto fill-current text-primary-100"
            height={40}
          />
        </CardHeader>
        <CardBody>
          <p className="text-center font-semibold italic">
            &quot; I liked how simple everything was explained. easy to follow
            and to remember &quot;
          </p>
        </CardBody>
        <CardFooter className="fle-row flex justify-center gap-x-2">
          <>
            {[...Array(5)].map((e) => (
              <SvgtoReact key={e} name="support/star" height={18} />
            ))}
          </>
        </CardFooter>
      </Card>
      <UsersAvatar />
    </div>
  );
}
