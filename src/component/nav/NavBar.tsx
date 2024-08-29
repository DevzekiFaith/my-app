import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-[#E9E9E9] flex justify-start items-center gap-4 h-[5.8rem] p-[12px] fixed w-full z-[100]">
      <div className="h-[4rem] w-[4rem]">
        <Image
          className="w-[4.5rem] h-[4.2rem]"
          src="/logo.png"
          width={50}
          height={50}
          alt="Schoolo_Logo"
        />
      </div>
      <div className="w-[200px]">
        <h1 className="text-blue-800 font-bold text-[18px]">
          Gabselina Schools
        </h1>
      </div>
      <div className="ml-[4rem]">
        <ul className="flex justify-center items-center gap-2 cursor-pointer text-bold text-slate-500">
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/prospectus">
            <li>Prospectus</li>
          </Link>
          <Link href="/event">
            <li>Event</li>
          </Link>
          <Link href="/admission">
            <li className="bg-purple-600 text-slate-200 p-[6px] rounded-xl shadow-lg shadow-slate-900">
              Admission
            </li>
          </Link>
          <Link href="/gallary">
            <li>Gallary</li>
          </Link>
          <Link href="/news">
            <li>News</li>
          </Link>
        </ul>
      </div>
      {/* <div className="pl-[4rem]">
        <marquee className="text-blue-600" direction="right">
          welcome to Gabselina Schools! 
        </marquee>
      </div> */}
    </div>
  );
}
