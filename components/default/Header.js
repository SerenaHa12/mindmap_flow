"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import SearchToggle from "./SearchToggle";
import ProfileToggle from "./ProfileToggle";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  return (
    <header
      className={`${
        header
          ? "py-4 bg-zinc-100 text-zinc-100 shadow-lg dark:bg-accent"
          : "py-6 dark:bg-slate-900"
      } sticky top-0 z-30 text-zinc-100 transition-all bg-zinc-100 ${
        pathname === "/" && "bg-zinc-100"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <Nav
            containerStyles="hidden xl:flex gap-x-8 items-center"
            linkStyles="relative hover:text-primary transition-all text-zinc-900 dark:text-zinc-100"
            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
          />
          <div className="flex gap-2">
            <ThemeToggle />
            <SearchToggle />
            {/* cnay sẽ hiện ra khi login thành công <ProfileToggle />*/}
            <div className="flex gap-2">
              <Link href="sign-in">
                <Button variant="secondary">Sign in</Button>
              </Link>
              <Link href="sign-up">
                <Button>Sign up free</Button>
              </Link>
            </div>
          </div>

          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
