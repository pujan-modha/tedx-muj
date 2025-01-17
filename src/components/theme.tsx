import Particles from "./ui/particles";
import Image from "next/image";
import { Button } from "./ui/button";
import BoxReveal from "./ui/box-reveal";
import Link from "next/link";

export default function WhatIsTedx() {
  return (
    <>
      <div className="border-2 border-brand bg-brand/5 min-h-[80svh] relative flex items-center w-full justify-center overflow-hidden">
        <Particles
          className="absolute inset-0"
          quantity={1000}
          ease={100}
          color="#eb0028"
          refresh
        />
        <div className="p-10 grid lg:grid-cols-2 gap-10 z-10">
          <div className="flex items-center justify-center">
            <Image src="/equinox.png" alt="TEDx" width={300} height={300} />
          </div>
          <div>
            <div className="flex-wrap items-center mb-5">
              <h2 className="text-4xl font-bold">Theme:&nbsp;</h2>
              <BoxReveal boxColor={"#eb0028"} duration={0.5}>
                <h2 className="text-4xl text-brand font-black">EQUINOX</h2>
              </BoxReveal>
            </div>
            <p className="text-lg font-light text-balance">
              Removing the sharp divide between thoughts of opposite polarity,
              Equinox plans to juxtapose these ideas and show that the dichotomy
              between them isn't as great as it seems.
            </p>
            <Link href="/register">
              <Button className="mt-5">
                Register
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
