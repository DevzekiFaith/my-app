"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Define the navigation links with their names and paths
const navLinks = [
  { name: "about", path: "/about" },
  { name: "admission", path: "/admission" },
  { name: "contact", path: "/contact" },
  { name: "event", path: "/event" },
  { name: "gallary", path: "/gallary" },
];

export default function NavBar() {
  // Get the current path from the router
  const currentPath = usePathname();

  // Function to check if a given path is the current path
  const isActive = (path: string): boolean => {
    return currentPath === path;
  };

  return (
    <div className="bg-[#E9E9E9] flex justify-start items-center gap-4 h-[5.8rem] p-3 fixed w-full z-50 cursor-pointer">
      {/* Logo section */}
      <div className="h-16 w-16">
        <Link href="/">
          <Image
            className="w-18 h-16"
            src="/logo.png"
            width={50}
            height={50}
            alt="Schoolo_Logo"
          />
        </Link>
      </div>
      {/* School name section */}
      <div className="w-52">
        <Link href="/">
          <h1 className="text-blue-800 font-bold text-lg">Gabselina Schools</h1>
        </Link>
      </div>
      {/* Navigation links section */}
      <div className="ml-16 flex gap-4">
        <ul className="flex justify-center items-center gap-[1rem]">
          {navLinks.map((pages, index) => (
            <li key={index}>
              <Link
                href={pages.path}
                className={
                  isActive(pages.path)
                    ? "bg-blue-600 text-white p-[6px]"
                    : "text-slate-500 hover:text-slate-800"
                }
              >
                {pages.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
