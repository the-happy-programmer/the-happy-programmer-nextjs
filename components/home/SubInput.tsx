import SvgtoReact from "../Svgtoreact";
import { Input } from "@nextui-org/input";
import { HiEnvelope } from "react-icons/hi2";
import { Button } from "@nextui-org/button";
import { subscribeEmail } from "@/app/action";

export default function SubInput({
  message,
  error,
}: {
  message: string;
  error: string;
}): JSX.Element {
  return (
    <form
      action={subscribeEmail}
      className="mx-auto flex max-w-md flex-row items-end gap-x-unit-xs"
    >
      <Input
        type="email"
        required
        placeholder="you@example.com"
        labelPlacement="outside"
        size="lg"
        startContent={
          <HiEnvelope className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
        }
      />
      <Button variant="shadow" disableRipple color="primary" size="lg">
        Subscribe
      </Button>
      <div className="flex flex-row items-center justify-center gap-x-2 pt-4">
        {!message && error && (
          <>
            <SvgtoReact
              name={error && "cancel"}
              className="h-5 fill-current text-danger"
            />
            <p className="text-danger">{error}</p>
          </>
        )}
        {!error && message && (
          <>
            <SvgtoReact
              name={message && "tick"}
              className="h-5 fill-current text-success dark:text-success"
            />
            <p className="text-success">{message}</p>
          </>
        )}
      </div>
    </form>
  );
}
