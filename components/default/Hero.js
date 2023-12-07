import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import Brand from "./Brand";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col mx-auto xl:mx-0 justify-center text-center xl:text-left">
            {/** left side hero */}
            <h1 className="text-4xl font-bold text-amber-400 my-6">
              From idea to next big thing, make it happen in Mindmap Flow
            </h1>
            <p className="font-normal mb-4">
              Mindmap Flow has rich, ready-to-use native capabilities for teams
              of every size to build out their vision with a creative,
              collaborative edge. That means supporting workflows in every
              corner of your business.
            </p>
            <div className="hero-buttons flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button>Contact Us</Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Sign in
              </Button>
            </div>
          </div>

          {/** right side hero */}
          <div className="hidden xl:flex relative rounded-sm border-none overflow-hidden">
            <Image
              src="/map.webp"
              width={600}
              height={300}
              alt="404"
              className="mx-auto"
            />
          </div>
        </div>

        <div className="flex flex-col items-center my-[100px]">
          <p className="text-center">60M+ users trust Miro worldwide</p>
          <Brand />
        </div>

        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 items-center animate-bounce">
          {/**<TriangleDownIcon className="text-xl text-primary cursor-pointer" />*/}
        </div>
      </div>
    </section>
  );
};

export default Hero;
