// Import Image and Link from Next.js
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Define motion variants...

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LEFT: LINKS, RESUME AND LOGO */}
      <div className="flex items-center gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
        {/* Use anchor tag for the resume link */}
        <a href="https://drive.google.com/file/d/1SJuOEU7nkgGeXKk29P4aUZmS7kNglwHL" className="ml-4" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Horace</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* RIGHT: SOCIAL ICONS */}
      <div className="hidden md:flex items-center gap-4 w-1/3 justify-end">
        <Link href="/">
          <Image src="/github.png" alt="GitHub" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      {/* Add responsive menu code... */}
    </div>
  );
};

export default Navbar;
