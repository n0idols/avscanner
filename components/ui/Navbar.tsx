"use client";

import { usePathname } from "next/navigation";
import Logo from "./Logo";
import Socials from "./Socials";

export const navLinks = [
  {
    title: "news",
    href: "/",
  },

  {
    title: "radio codes",
    href: "/codes",
  },
  {
    title: "articles",
    href: "/articles",
  },
  {
    title: "contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      {/* <CartModal show={show} onClose={closeCart} /> */}
      <nav className="bg-gray-100 border tracking-wide">
        {/* <nav className={pathname === "/" ? `bg-transparent` : `bg-black `}> */}
        <div className="container">
          <div className="flex justify-between">
            {" "}
            {/* mob button */}
            {/* <button
              onClick={toggleMenu}
              className="flex items-center lg:hidden"
            >
              <Bars3Icon className="h-6 w-6" />
            </button> */}
            {/* LOGO */}
            <div>
              <a href="/" className="text-2xl font-extrabold  ">
                <Logo />
              </a>
            </div>
            {/* Primary Nav */}
            <div className="hidden items-center justify-center space-x-10 font-light lg:flex uppercase wide">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={
                    pathname === link.href
                      ? `border-b-4 border-red-400`
                      : `border-b-4 border-transparent`
                  }
                >
                  {link.title}
                </a>
              ))}
            </div>
            {/* secondary nav */}
            <Socials />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
