import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TEDxManipalUniversityJaipur",
  description: "Equinox",
  icons: {
    icon: "/equinox.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " overflow-x-hidden"}>
        <div className="fixed w-full top-0 z-50">
          <Navbar />
        </div>
        <Toaster />
        {children}
        <div className="w-full z-50">
          <Footer />
        </div>
      </body>
    </html>
  );
}
