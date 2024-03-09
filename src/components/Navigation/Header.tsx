import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="bg-gray-800 text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link href="/">MyApp</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="md:hidden"></div>
      </div>
    </nav>
  );
};

export default Header;
