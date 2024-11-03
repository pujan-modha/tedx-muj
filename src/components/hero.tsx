import FlickeringGrid from "./ui/flickering-grid";
import GradualSpacing from "./ui/gradual-spacing";
import BoxReveal from "./ui/box-reveal";

export default function Hero() {
  return (
    <div className="h-[100svh] flex flex-col items-center justify-center -mt-20">
      <FlickeringGrid
        className="-z-10 absolute"
        squareSize={5}
        gridGap={10}
        color="#eb0028"
        maxOpacity={0.25}
        flickerChance={0.1}
        // height={8000}
        // width={8000}
      />
      <div className="">
        <BoxReveal boxColor={"#eb0028"} duration={0.5}>
          <div className="md:text-7xl text-3xl font-extrabold text-brand">TED<span className="align-super md:text-5xl text-2xl">x</span></div>
        </BoxReveal>
        <GradualSpacing
          className="font-display text-center font-thin -tracking-widest  text-white md:text-7xl text-3xl"
          text="Manipal University Jaipur"
          duration={0.5}
        />
      </div>
    </div>
  );
}
