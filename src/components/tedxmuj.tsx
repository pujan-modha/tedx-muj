import Image from "next/image";
import { Button } from "./ui/button";
import Particles from "./ui/particles";
import BoxReveal from "./ui/box-reveal";
import GradualSpacing from "./ui/gradual-spacing";
export default function TEDxMUJ() {
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
            <div className="mb-5">
              <BoxReveal boxColor={"#eb0028"} duration={0.5}>
                <div className="text-4xl font-black text-brand">
                  TED<span className="align-super text-2xl">x</span>
                </div>
              </BoxReveal>
              <div className="flex">
                <GradualSpacing
                  className="font-display text-center font-thin -tracking-widest  text-white text-4xl"
                  text="Manipal "
                  duration={0.5}
                />
                <GradualSpacing
                  className="font-display text-center font-thin -tracking-widest  text-white text-4xl"
                  text="University"
                  duration={0.5}
                />
              </div>
              <GradualSpacing
                className="font-display text-center font-thin -tracking-widest  text-white text-4xl"
                text="Jaipur"
                duration={0.5}
              />
            </div>
            <p className="text-lg font-light text-balance">
              Since our first event in 2019, TEDxManipalUniversityJaipur has had
              a clear goal: to bring the TED experience to our campus at MUJ. We
              do this by curating a series of engaging talks, performances, and
              demonstrations that spark learning, inspiration, and wonder. Each
              session is carefully crafted to cover a variety of topics and
              ideas that encourage our students to think differently and explore
              new perspectives. TEDxManipalUniversityJaipur is led by a
              passionate group of students who truly believe in TED&apos;s
              mission of spreading &quot;ideas worth sharing&quot;—and
              we&apos;re excited to share that spirit with our university
              community.
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
