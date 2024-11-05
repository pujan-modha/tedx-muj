import Link from "next/link";
import BoxReveal from "./ui/box-reveal";
import GradualSpacing from "./ui/gradual-spacing";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export default function Footer() {
  return (
    <div className="bg-black">
      <BackgroundBeamsWithCollision className="w-full bg-brand/5 border-t-2 border-brand py-12">
        <footer className="">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                <p className="text-gray-400 text-sm">
                  This independent TEDx event is operated under license from
                  TED.
                </p>
                {/* Social Links */}
                <div className="mt-8 flex justify-center space-x-6">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
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
                    className="text-gray-400 hover:text-white"
                  >
                    Manipal University Jaipur
                  </Link>
                  <Link
                    href="https://www.ted.com/tedx/events/53639"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    TEDxMUJ
                  </Link>
                  <Link
                    href="https://www.ted.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
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
                    <p className="text-white">Ridhi Makharia</p>
                    <p className="text-gray-400">+91 9739308062</p>
                  </div>
                  <div>
                    <p className="text-white">Aditya Pandey</p>
                    <p className="text-gray-400">+91 9599129379</p>
                  </div>
                  <div>
                    <p className="text-white">Nachiketa Jha</p>
                    <p className="text-gray-400">+91 8178908970</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-brand">ADDRESS</h4>
                <p className="text-gray-400">
                  Manipal University, Dehmi Kalan, Near GVK Toll Plaza,
                  Jaipur-Ajmer Expressway, Jaipur, Rajasthan 303007
                </p>
                <div className="space-y-2">
                  <p className="text-gray-400">+91 141-3999100</p>
                  <a
                    href="mailto:contact@jaipur.manipal.edu"
                    className="text-gray-400 hover:text-white"
                  >
                    contact@jaipur.manipal.edu
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-12 border-t-2 border-brand/50 text-center text-gray-400 text-sm">
              <p>Made with ❤️ by Team TEDxMUJ</p>
            </div>
          </div>
        </footer>
      </BackgroundBeamsWithCollision>
    </div>
  );
}