import GradualSpacing from "./ui/gradual-spacing";
import BoxReveal from "./ui/box-reveal";
import {BackgroundLines} from "./ui/background-lines";

export default function Hero() {
  return (
    <div className="h-[100svh] flex flex-col items-center justify-center select-none">
      <BackgroundLines className="">
        <BoxReveal boxColor={"#eb0028"} duration={0.5}>
          <div className="md:text-7xl text-3xl font-black text-brand">
            TED<span className="align-super md:text-5xl text-xl">x</span>
          </div>
        </BoxReveal>
        <div className="flex">
          <GradualSpacing
            className="font-display text-center font-thin text-white md:text-7xl text-3xl"
            text="Manipal "
            duration={0.5}
          />
          <GradualSpacing
            className="font-display text-center font-thin text-white md:text-7xl text-3xl"
            text="University"
            duration={0.5}
          />
        </div>
        <GradualSpacing
          className="font-display text-center font-thin text-white md:text-7xl text-3xl"
          text="Jaipur"
          duration={0.5}
        />
        <h2 className="text-lg lg:text-xl border-2 backdrop-blur font-medium border-brand text-center bg-brand/5 text-brand p-2 lg:p-4 mt-5 shadow-[0_0_25px_rgba(235,0,40,0.5)]">15
        <span className="align-super text-sm">th</span>
        -16<span className="align-super text-sm">th</span> November 2024</h2>
      </BackgroundLines>
    </div>
  );
}
