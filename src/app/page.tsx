"use client";

import Hero from "@/components/hero";
// import FlickeringGrid from "@/components/ui/flickering-grid";
import WhatIsTedx from "@/components/what-is-tedx";
import Theme from "@/components/theme";
import TEDxMUJ from "@/components/tedxmuj";
import AboutTed from "@/components/about-ted";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="mx-auto">
        {/* <FlickeringGrid
          className="-z-10 absolute scale-x-110"
          squareSize={5}
          gridGap={10}
          color="#eb0028"
          maxOpacity={0.5}
          flickerChance={0.1}
          // height={8000}
          // width={8000}
        /> */}
        <div className="h-[100svh] mx-auto bg-grid-small-brand/30">
          <Hero />
        </div>
        <div className="max-w-7xl mx-auto grid gap-8 my-12 overflow-hidden px-4 lg:px-0">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-[100svh] m-auto flex items-center justify-center"
          >
            <Theme />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-[100svh] m-auto flex items-center justify-center"
          >
            <AboutTed />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-[100svh] m-auto flex items-center justify-center"
          >
            <WhatIsTedx />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-[100svh] m-auto flex items-center justify-center"
          >
            <TEDxMUJ />
          </motion.div>
        </div>
      </div>
    </>
  );
}
