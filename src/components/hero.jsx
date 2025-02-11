import play from "../assets/acme-corp-logomark.svg";
import vid from "../assets/video.mp4";
import Socials from "./socials";

export default function Hero() {
  return (
    <div className="relative">
      {/* Background Video */}
      <div className="flex justify-center ">
        <video
          src={vid}
          autoPlay
          preload
          muted
          loop
          className="p-2 opacity-90 rounded-3xl"></video>
      </div>
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 text-center ">
        <div className="tracking-widest text-white uppercase">
          ELEVATE YOUR TRAVEL JOURNEY
        </div>
        <div className="font-bold text-white text-7xl">
          Let the Journey Inspire You.
        </div>

        <div className="flex items-center mt-6 space-x-4 ">
          <button className="p-4 px-6 text-xs text-white bg-blue-500 rounded-full">
            Book a Trip Now
          </button>
          <button className="p-2 bg-gray-200 rounded-full">
            <img src={play} alt="" className="w-3" />
          </button>
        </div>
        <div className="space-y-2">
          <Socials></Socials>
        </div>
      </div>
    </div>
  );
}
