import ProfileToggle from "./ProfileToggle";
import { Button } from "../ui/button";
import { UserButton, auth } from "@clerk/nextjs";

import Link from "next/link";
const AuthHeader = async ({ username }) => {
  const { userId } = auth();
  console.log("id", userId);

  return (
    <div className="flex items-center">
      {userId && (
        <div className="flex gap-2">
          <Link href="profile" className="text-gray-300 hover:text-white mr-4">
            <ProfileToggle />
          </Link>
        </div>
      )}

      <div>
        <UserButton afterSignOutUrl="/" />
      </div>

      <div className="flex gap-2">
        {!userId && (
          <>
            <Link href="sign-in">
              <Button variant="secondary">Sign in</Button>
            </Link>
            <Link href="sign-up">
              <Button>Sign up free</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthHeader;
