import Image from "next/image";
import { Button } from "./ui/button";
import Particles from "./ui/particles";
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
          <div>
            <h2 className="font-bold text-4xl mb-5 flex">
              About
              <BoxReveal boxColor={"#eb0028"} duration={0.5}>
                <p className="text-brand font-black ml-1">&nbsp;TED</p>
              </BoxReveal>
            </h2>
            <p className="text-lg font-light text-balance">
              TED is a nonprofit that shares ideas to inspire conversation and
              drive change. Founded in 1984 to bridge Technology, Entertainment,
              and Design, TED now covers fields like science, business,
              education, and global issues. Through TED Talks, podcasts, TED-Ed
              videos, and TV programs, TED engages a global audience in over 100
              languages. With initiatives like the Audacious Project (which has
              raised over $3 billion) and Countdown for climate solutions, TED
              works toward a more sustainable and equitable future.
            </p>
            <Link href="https://www.ted.org" target="_blank">
              <Button className="mt-5">
                Know More
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
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://tedxmuj.vercel.app/static/media/about.930b2a8bd598b2eb486e.jpg"
              alt="TEDx"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
