import ProfileToggle from "./ProfileToggle";
import { Button } from "../ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
//clerk ma

import Link from "next/link";
const AuthHeader = ({ username }) => {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="flex items-center">
      {user && (
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
        {!user && (
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
