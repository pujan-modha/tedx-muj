import Image from "next/image";
import logo from "@/assets/logo-white.png";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-black bg-opacity-50">
      <div className="text-white   h-20 flex items-center">
        <div className="flex w-full items-center max-w-7xl mx-auto">
          <Link href="/" className="mr-auto">
            <Image src={logo} alt="logo" width={200} height={100} />
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <Link href="/about">About</Link>{" "}
              <Link href="/register">Team</Link>
            </div>
            <Link href="/register">
              <Button>
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
