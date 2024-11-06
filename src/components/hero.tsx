import GradualSpacing from "./ui/gradual-spacing";
import BoxReveal from "./ui/box-reveal";

export default function Hero() {
  return (
    <div className="h-[100svh] flex flex-col items-center justify-center select-none">
      <div className="">
        <BoxReveal boxColor={"#eb0028"} duration={0.5}>
          <div className="md:text-7xl text-3xl font-black text-brand">
            TED<span className="align-super md:text-5xl text-2xl">x</span>
          </div>
        </BoxReveal>
        <div className="flex">
          <GradualSpacing
            className="font-display text-center font-thin tracking-wide  text-white md:text-7xl text-3xl"
            text="Manipal "
            duration={0.5}
          />
          <GradualSpacing
            className="font-display text-center font-thin tracking-wide  text-white md:text-7xl text-3xl"
            text="University"
            duration={0.5}
          />
        </div>
        <GradualSpacing
          className="font-display text-center font-thin tracking-wide  text-white md:text-7xl text-3xl"
          text="Jaipur"
          duration={0.5}
        />
      </div>
    </div>
  );
}
