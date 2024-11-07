import Link from "next/link";
import BoxReveal from "./ui/box-reveal";
import GradualSpacing from "./ui/gradual-spacing";
import Meteors from "./ui/meteors";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="bg-brand/5 border-t-2 z-10 border-brand py-12 relative flex items-center w-full justify-center overflow-hidden px-4">
        <Meteors />
        <footer className="z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Logo & Description */}
              <div className="space-y-4">
                <div className="mb-5">
                  <BoxReveal boxColor={"#eb0028"} duration={0.5}>
                    <div className="text-4xl font-black text-brand">
                      TED<span className="align-super text-2xl">x</span>
                    </div>
                  </BoxReveal>
                  <div className="flex">
                    <GradualSpacing
                      className="font-display text-center font-thin text-white text-4xl"
                      text="Manipal "
                      duration={0.5}
                    />
                    <GradualSpacing
                      className="font-display text-center font-thin text-white text-4xl"
                      text="University"
                      duration={0.5}
                    />
                  </div>
                  <GradualSpacing
                    className="font-display text-center font-thin text-white text-4xl"
                    text="Jaipur"
                    duration={0.5}
                  />
                </div>
                <p className="text-white/50 text-xs">
                  This independent TEDx event is operated under license from
                  TED.
                </p>
                {/* Social Links */}
                <div className="mt-8 flex space-x-6">
                  <Link
                    href="https://www.instagram.com/tedxmanipaluniversityjaipur/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="size-6 hover:fill-brand fill-white/70"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://in.linkedin.com/company/tedxmanipaluniversityjaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="size-6 hover:fill-brand fill-white/70"
                    >
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-brand">LINKS</h4>
                <div className="flex flex-col space-y-2">
                  <Link
                    href="https://jaipur.manipal.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-brand"
                  >
                    Manipal University Jaipur
                  </Link>
                  <Link
                    href="https://www.ted.com/tedx/events/60423"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-brand"
                  >
                    TEDxManipalUniversityJaipur
                  </Link>
                  <Link
                    href="https://www.ted.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-brand"
                  >
                    TED.org
                  </Link>
                </div>
              </div>

              {/* Contact People */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-brand">CONTACT</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-white">Lakshita Agrawal</p>
                    <Link href="tel:+919312941940" className="text-white/50">
                      +91 93129 41940
                    </Link>
                  </div>
                  <div>
                    <p className="text-white">Atharv Thakle</p>
                    <Link href="tel:+917580837176" className="text-white/50">
                      +91 75808 37176
                    </Link>
                  </div>
                  <div>
                    <p className="text-white">Krishnav Gupta</p>
                    <Link href="tel:+919811187903" className="text-white/50">
                      +91 98111 87903
                    </Link>
                  </div>
                  <div>
                    <p className="text-white">Ankika Chatterjee</p>
                    <Link href="tel:+919501455191" className="text-white/50">
                      +91 95014 55191
                    </Link>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-brand">ADDRESS</h4>
                <p className="text-white/50">
                  Manipal University, Dehmi Kalan, Near GVK Toll Plaza,
                  Jaipur-Ajmer Expressway, Jaipur, Rajasthan 303007
                </p>
                <div className="space-y-2">
                  <p className="text-white/50">+91 141-3999100</p>
                  <a
                    href="mailto:contact@jaipur.manipal.edu"
                    className="text-white/50 hover:text-brand"
                  >
                    contact@jaipur.manipal.edu
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-12 border-t-2 border-brand/50 text-center text-white/50 text-sm">
              <p>
                Made with{" "}
                <span className="text-transparent bg-clip-text bg-brand animate-pulse">
                  ❤️
                </span>{" "}
                by{" "}
                <Link href="/credits" className="text-brand">
                  TEDxTeamDev
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
