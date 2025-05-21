"use client";
import {
  // IconHome,
  // IconMessage,
  IconUser,
  IconPlane,
  IconLogin,
} from "@tabler/icons-react";
import logo from "@/app/assets/acme-corp.svg";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoggedIn = false;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={logo}
            alt="Acme Corp Logo"
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {/* Combined Auth Button */}
          {isLoggedIn ? (
            <Link
              href="/account"
              className="flex items-center gap-1 font-medium text-gray-700 hover:text-black transition-colors py-2 px-4 rounded-full">
              <IconUser className="h-4 w-4" />
              <span>My Account</span>
            </Link>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-1 font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors py-2 px-4 rounded-full">
              <IconLogin className="h-4 w-4" />
              <span>Login/Sign Up</span>
            </Link>
          )}

          {/* CTA Button */}
          <Link
            href="/destinations"
            className="flex items-center gap-1 font-medium text-white bg-black hover:bg-gray-800 transition-colors py-2 px-6 rounded-full">
            <IconPlane className="h-4 w-4" />
            <span>Book Trip</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-1.5 p-2"
          title="Menu"
          aria-label="Open menu">
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-8 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </button>
      </nav>
    </header>
  );
}
