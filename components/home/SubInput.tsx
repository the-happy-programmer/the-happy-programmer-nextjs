"use client";
import { useState, useRef } from "react";
import SvgtoReact from "../Svgtoreact";
import { Input } from "@nextui-org/input";
import { HiEnvelope } from "react-icons/hi2";
import { Button } from "@nextui-org/button";

export default function SubInput(): JSX.Element {
  const inputEl = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const sub = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current && inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setError("Something went wrong! please, try a valid email.");
      setMessage(null);
      return;
    }
    inputEl.current && (inputEl.current.value = "");
    setMessage("You are now subscribed");
    setError(null);
  };

  return (
    <form
      action={sub}
      className="mx-auto flex max-w-md flex-row items-end gap-x-unit-xs"
    >
      <Input
        type="email"
        placeholder="you@example.com"
        labelPlacement="outside"
        size="lg"
        startContent={
          <HiEnvelope className="pointer-events-none flex-shrink-0 text-2xl text-default-400" />
        }
      />
      <Button variant="shadow" color="primary" size="lg">
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
