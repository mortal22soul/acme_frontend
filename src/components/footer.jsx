import logo from "../assets/acme-corp.svg";

export default function Footer() {
  return (
    <>
      <footer className="items-center justify-center p-10 space-x-64 bg-gray-100 md:flex md:flex-col">
        <div className="flex flex-col bg-red-600">
          <img src={logo} alt="" className="w-40" />
          <span>
            Discover the world one
            <br />
            adventure at a time.
          </span>
          <span>Life is short, travel more.</span>
        </div>
        <ul className="flex flex-col space-y-2 text-sm font-semibold bg-green-400">
          <li className="py-2 text-[1rem] font-bold">Company</li>
          <li>About Us</li>
          <li>Tour Guides</li>
          <li>Packages</li>
          <li>Contact</li>
        </ul>
        <ul className="space-y-2 text-sm font-semibold">
          <li className="py-2 text-[1rem] font-bold">Resources</li>
          <li>About Us</li>
          <li>Tour Guides</li>
          <li>Packages</li>
          <li>Contact</li>
        </ul>
        <ul className="space-y-2 text-sm font-semibold">
          <li className="py-2 text-[1rem] font-bold">Extra Links</li>
          <li>Customer Support</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
        </ul>
      </footer>
      <hr />
      <div className="p-2 text-sm bg-gray-100 md:text-center">
        &copy; 2024 Acme Corp All Rights Reserved
      </div>
    </>
  );
}
