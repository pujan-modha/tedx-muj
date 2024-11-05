import Image from "next/image";
import { Button } from "./ui/button";
import Particles from "./ui/particles";
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
          <div>
            <h2 className="font-bold text-4xl mb-5 flex">
              What is
              <BoxReveal boxColor={"#eb0028"} duration={0.5}>
                <p className="text-brand font-black ml-1">TEDx</p>
              </BoxReveal>
              ?
            </h2>
            <p className="text-lg font-light text-balance">
              In the spirit of fostering the spread of ideas, TED has
              established a program called TEDx. TEDx is a series of locally
              organized events designed to bring people together for a TED-like
              experience. Our event, TEDxManipalUniversityJaipur, is part of
              this program, where &quot;x&quot; represents an independently
              organized TED event. At TEDxManipalUniversityJaipur, we will
              feature a mix of TED Talk videos and live speakers, aiming to
              inspire meaningful discussions and connections within a small
              community. While the TED Conference offers general guidance for
              the TEDx program, each TEDx event, including ours, is
              independently organized.
            </p>
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
