// "use client";
// import React from "react";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

// import logo from "@/app/assets/acme-corp.svg";
// import Image from "next/image";
// import Link from "next/link";

// export default function Nav() {
//   const navItems = [
//     {
//       name: "Home",
//       link: "/",
//       icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//     {
//       name: "About",
//       link: "/about",
//       icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//     {
//       name: "Contact",
//       link: "/contact",
//       icon: (
//         <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
//       ),
//     },
//   ];
//   return (
//     <>
//       <nav className="flex items-center p-4 justify-evenly md:justify-evenly">
//         <Link href={"/"}>
//           <Image src={logo} alt="" />
//         </Link>
//         <div className="hidden md:inline">
//           <Link
//             href="/"
//             className="px-4 font-semibold rounded-2xl py-2 hover:bg-black hover:text-white">
//             ABOUT
//           </Link>
//           <Link
//             href="/"
//             className="px-4 font-semibold rounded-2xl py-2 hover:bg-black hover:text-white">
//             TOUR
//           </Link>
//           <Link
//             href="/"
//             className="px-4 font-semibold rounded-2xl py-2 hover:bg-black hover:text-white">
//             PACKAGE
//           </Link>
//           <Link
//             href="/"
//             className="px-4 font-semibold rounded-2xl py-2 hover:bg-black hover:text-white">
//             CONTACT
//           </Link>
//         </div>
//         <Link
//           href="/destinations"
//           className="hidden font-semibold hover:bg-blue-500 p-2 px-6 text-white bg-black rounded-full md:inline">
//           Book&nbsp;Trip
//         </Link>
//         <ul className="flex flex-col items-end md:hidden">
//           <li className="w-8 h-1 bg-black m"></li>
//           <li className="w-6 h-1 my-1 bg-black"></li>
//           <li className="w-8 h-1 bg-black m"></li>
//         </ul>
//         <FloatingNav navItems={navItems} />
//       </nav>
//     </>
//   );
// }

"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconPlane,
} from "@tabler/icons-react";
import logo from "@/app/assets/acme-corp.svg";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  const mainLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "TOUR", href: "/tours" },
    { name: "PACKAGE", href: "/packages" },
    { name: "CONTACT", href: "/contact" },
  ];

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
        <div className="hidden md:flex items-center space-x-1">
          {mainLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-4 py-2 font-medium text-gray-700 hover:text-black transition-colors rounded-lg hover:bg-gray-100">
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
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

        {/* Floating Navigation (Mobile) */}
        <FloatingNav navItems={navItems} className="sm:hidden" />
      </nav>
    </header>
  );
}
