"use client";

import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Socials from "./Socials";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const navLinks = [
  {
    id: 1,
    title: "news",
    href: "/",
  },

  {
    id: 2,
    title: "radio codes",
    href: "/codes",
  },
  {
    id: 3,
    title: "articles",
    href: "/articles",
  },
  {
    id: 4,
    title: "contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const toggleMenu = () => {
    setShow(!show);
  };

  const closeContact = () => {
    setShow(false);
  };
  return (
    <>
      <nav className="bg-gray-100  tracking-wide sticky top-0 shadow-lg z-10">
        {/* <nav className={pathname === "/" ? `bg-transparent` : `bg-black `}> */}
        <div className="container">
          <div className="flex justify-between">
            {" "}
            {/* mob button */}
            {/* LOGO */}
            <div>
              <Link href="/" className="text-2xl font-extrabold">
                <Logo />
              </Link>
            </div>
            {/* Primary Nav */}
            <div className="hidden items-center justify-center space-x-10 font-light md:flex uppercase wide">
              {navLinks.map((link) => (
                <Link className="relative" key={link.id} href={link.href}>
                  {link.href === pathname && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-1 w-full bg-blue-900 rounded-xl "
                    />
                  )}
                  {link.title}
                </Link>
              ))}
            </div>
            {/* secondary nav */}
            {/* <button onClick={toggleMenu} className="flex items-center">
              !!!
            </button> */}
            <Socials />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
