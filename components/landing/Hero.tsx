import Socials from "@/components/landing/Socials";
import acme from "@/app/assets/acme.png";
import logo from "@/app/assets/acme-corp-logomark.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative pt-2 lg:pb-28">
      {/* Background Image */}
      <div className="flex justify-center">
        <Image
          priority
          src={acme}
          width={1250}
          alt=""
          className="p-2 blur-sm opacity-75 rounded-3xl"
        />
      </div>
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 text-center ">
        <div className="font-bold text-7xl">Let the Journey Inspire You.</div>

        <div className="flex items-center mt-6 space-x-4 ">
          <Link
            href="/destinations"
            className="p-4 px-5 text-xs text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
            Book a Trip Now
          </Link>
          <Button className="p-2 bg-gray-200 rounded-full hover:bg-blue-500">
            <Image src={logo} alt="" className="w-5" />
          </Button>
        </div>
        <div className="space-y-2">
          <Socials></Socials>
        </div>
      </div>
    </div>
  );
}
