import logo from "../assets/acme-corp.svg";

export default function Nav() {
  return (
    <nav className="flex items-center p-4 justify-evenly md:justify-evenly">
      <img src={logo} alt="" />
      <div className="hidden md:inline">
        <a href="/" className="px-4 font-semibold">
          ABOUT
        </a>

        <a href="/" className="px-4 font-semibold">
          TOUR
        </a>

        <a href="/" className="px-4 font-semibold">
          PACKAGE
        </a>

        <a href="/" className="px-4 font-semibold">
          CONTACT
        </a>
      </div>
      <button className="hidden p-2 px-6 text-white bg-black rounded-full md:inline">
        Book&nbsp;Trip
      </button>
      <ul className="flex flex-col items-end md:hidden">
        <li className="w-8 h-1 bg-black m"></li>
        <li className="w-6 h-1 my-1 bg-black"></li>
        <li className="w-8 h-1 bg-black m"></li>
      </ul>
    </nav>
  );
}
