"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className={`${
        pending ? "cursor-not-allowed" : ""
      } bg-gray-800 dark:bg-gray-200`}
    >
      {label} {pending ? "..." : ""}
    </Button>
  );
}
