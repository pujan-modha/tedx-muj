import Image from "next/image";
import logo from "@/assets/logo-white.png";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="text-white bg-black border-b-2 border-brand h-20 flex items-center">
      <div className="flex w-full items-center max-w-7xl mx-auto">
        <Link href="/" className="mr-auto">
          <Image src={logo} alt="logo" width={150} height={150} />
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            <Link href="/register">About</Link>{" "}
            <Link href="/register">Team</Link>
          </div>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
