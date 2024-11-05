import Hero from "@/components/hero";
import FlickeringGrid from "@/components/ui/flickering-grid";
import WhatIsTedx from "@/components/what-is-tedx";
import Theme from "@/components/theme";
import TEDxMUJ from "@/components/tedxmuj";
export default function Home() {
  return (
    <>
      <div className="mx-auto">
          <FlickeringGrid
            className="-z-10 absolute"
            squareSize={5}
            gridGap={10}
            color="#eb0028"
            maxOpacity={0.5}
            flickerChance={0.1}
            // height={8000}
            // width={8000}
          />
        <div className="max-w-7xl mx-auto">
          <Hero />
          <div className="h-[100svh] m-auto flex items-center justify-center border-b-2 border-brand/10">
            <Theme />
          </div>
          <div className="h-[100svh] m-auto flex items-center justify-center border-b-2 border-brand/10">
            <WhatIsTedx />
          </div>
          <div className="h-[100svh] m-auto flex items-center justify-center">
            <TEDxMUJ />
          </div>
        </div>
      </div>
    </>
  );
}
