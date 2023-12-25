import React from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { AvatarIcon } from "@radix-ui/react-icons";

const ProfileToggle = () => {
  return (
    <div className="flex items-center px-2">
      <Button variant="secondary">
        <AvatarIcon className="h-[1.2rem] w-[1.2rem] transition-all text-zinc-900 dark:text-zinc-100 my-auto" />
      </Button>
    </div>
  );
};

export default ProfileToggle;
