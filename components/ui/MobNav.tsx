"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  FaRegNewspaper,
  FaRegQuestionCircle,
  FaRegEnvelopeOpen,
} from "react-icons/fa";

const navLinks = [
  {
    id: 1,
    title: "news",
    href: "/news",
    icon: <FaRegNewspaper />,
  },

  {
    id: 2,
    title: "codes",
    href: "/codes",
    icon: <FaRegQuestionCircle />,
  },
  {
    id: 3,
    title: "articles",
    href: "/articles",
    icon: <FaRegNewspaper />,
  },
  {
    id: 4,
    title: "contact",
    href: "/contact",
    icon: <FaRegEnvelopeOpen />,
  },
];
const MobNav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 flex md:hidden justify-between max-w-2xl mx-auto rounded-lg z-50 bg-gray-200">
      {navLinks.map((link) => (
        <Link
          href={link.href}
          key={link.id}
          className="w-full h-full p-4 flex flex-col items-center capitalize border-t-2 border-transparent relative"
        >
          {pathname.includes(link.href) && (
            <motion.span
              layoutId="line"
              className="absolute w-2/3 bg-blue-900 h-1 top-0 rounded-xl "
            />
          )}
          {link.icon}
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default MobNav;
