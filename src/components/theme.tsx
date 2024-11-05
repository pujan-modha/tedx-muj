import Particles from "./ui/particles";
import Image from "next/image";
import { Button } from "./ui/button";
import BoxReveal from "./ui/box-reveal";

export default function WhatIsTedx() {
  return (
    <>
      <div className="border-2 border-brand bg-brand/5 h-[80svh] relative flex items-center w-full justify-center overflow-hidden">
        <Particles
          className="absolute inset-0"
          quantity={1000}
          ease={100}
          color="#eb0028"
          refresh
        />
        <div className="p-10 grid grid-cols-2 gap-10 z-10">
          <div className="flex items-center justify-center">
            <Image
              src="https://tedxmuj.vercel.app/static/media/about.930b2a8bd598b2eb486e.jpg"
              alt="TEDx"
              width={500}
              height={500}
            />
          </div>
          <div>
            <BoxReveal boxColor={"#eb0028"} duration={0.5}>
              <h2 className="text-4xl mb-5 text-brand font-black">Theme</h2>
            </BoxReveal>
            <p className="text-lg font-light text-balance">
              Life is a long and winding journey. A journey of discovery, of
              growth, and of change. A journey that is full of challenges,
              obstacles and rewards. We have invited speakers to share their
              stories of overcoming challenges, taking risks, and venturing into
              the unknown to achieve their goals. And thus we welcome you all to
              explore your own personal odyssey, because to understand the
              journey of others, is to understand your own.
            </p>
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
          </div>
        </div>
      </div>
    </>
  );
}
