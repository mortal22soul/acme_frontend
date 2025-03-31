import logo from "@/app/assets/acme-corp.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="px-32 text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src={logo} alt="Acme Corp Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Discover the world one adventure at a time.
            </p>
            <p className="text-gray-600 italic text-sm">
              Life is short, travel more.
            </p>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {["About Us", "Tour Guides", "Packages", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {["Blog", "Destinations", "Travel Tips", "FAQs"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Extra links */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">
              Extra Links
            </h3>
            <ul className="space-y-2">
              {["Customer Support", "Terms & Conditions", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Acme Corp. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}
