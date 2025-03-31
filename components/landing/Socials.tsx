// import Link from "next/link";

// import {
//   IconBrandX,
//   IconBrandInstagram,
//   IconBrandReddit,
// } from "@tabler/icons-react";

// export default function Socials() {
//   return (
//     <div className="flex items-center justify-center px-6">
//       <span className="text-sm font-bold">Know More &rarr;&nbsp;</span>
//       <div className="flex items-center p-2 space-x-2 text-xs border border-gray-200 rounded-full">
//         <Link href="/">
//           <IconBrandInstagram className="size-6" />
//         </Link>
//         <Link href="/">
//           <IconBrandX className="size-6" />
//         </Link>
//         <Link href="/">
//           <IconBrandReddit className="size-6" />
//         </Link>
//       </div>
//     </div>
//   );
// }
import Link from "next/link";
import {
  IconBrandX,
  IconBrandInstagram,
  IconBrandReddit,
} from "@tabler/icons-react";

export default function Socials() {
  const socialLinks = [
    {
      href: "https://instagram.com",
      icon: (
        <IconBrandInstagram className="size-5 transition-all hover:scale-110" />
      ),
      label: "Instagram",
    },
    {
      href: "https://x.com",
      icon: <IconBrandX className="size-5 transition-all hover:scale-110" />,
      label: "X (Twitter)",
    },
    {
      href: "https://reddit.com",
      icon: (
        <IconBrandReddit className="size-5 transition-all hover:scale-110" />
      ),
      label: "Reddit",
    },
  ];

  return (
    <div className="flex items-center gap-2 px-6">
      <span className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
        Know More →
      </span>

      <div className="flex items-center p-2 space-x-3 border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-all duration-200">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            aria-label={link.label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors">
            {link.icon}
          </Link>
        ))}
      </div>
    </div>
  );
}
