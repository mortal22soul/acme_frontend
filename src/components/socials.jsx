import play from "../assets/acme-corp-logomark.svg";
import x from "../assets/x.png";
import insta from "../assets/insta.png";

export default function Socials() {
  return (
    <div className="flex items-center justify-center px-6">
      <span className="text-sm font-bold">Know More &rarr;&nbsp;</span>
      <div className="flex items-center p-2 space-x-2 text-xs border border-gray-200 rounded-full">
        <span>Follow</span>
        <a href="/">
          <img src={x} alt="" className="size-5" />
        </a>
        <a href="/">
          <img src={insta} alt="" className="size-5" />
        </a>
        <a href="/">
          <img src={play} alt="" className="size-5" />
        </a>
      </div>
    </div>
  );
}
