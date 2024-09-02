import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-blue-950 h-[12rem] p-[22px] flex justify-between items-center">
      <div>
        <div className="w-[150px] h-[32px] flex justify-center items-center gap-2 mb-[1rem]">
          <Link href="/">
            <Image
              className="w-[2rem] h-[2rem]"
              src="/logo.png"
              alt="logo2"
              width={200}
              height={200}
            />
          </Link>
          <p className="w-[80px] text-slate-200 text-[8px]">
            Gabselina Schools
          </p>
        </div>
        <div className="w-[500px]">
          <h1 className="text-slate-500 w-[500px] text-[10px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            maiores enim vero quisquam tempora quo velit cupiditate laboriosam
            qui iure, officia recusandae libero error ad ea quaerat iste ut
            voluptas. Deserunt suscipit impedit velit dignissimos repellat quod
            eum sequi officia. Rem delectus itaque non optio, ullam quis modi
            culpa! Amet.
          </h1>
        </div>
        <div className="flex justify-start items-center gap-4 mt-2 w-[32rem]">
          <div className="flex gap-1">
            <FaFacebook className="text-slate-300 text-[18px]" />
            <FaInstagram className="text-slate-300 text-[18px]" />
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="ml-3">
              <FaPhone className="text-slate-200 w-4 h-4" />
            </div>

            <span className="text-slate-100 w-[16rem] text-[10px]">
              (+234) 9021012556
            </span>
            <span className="text-slate-200 text-[12px] flex gap-1 ml-[-9rem]">
              <MdEmail className="text-slate-200 w-4 h-4" />
              <p className="text-[12px]">newgabselinaschool@gmail.com</p>
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-[-2rem] ml-[-2rem] text-[12px]">
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
      </div>
      <div>
        <h1 className="text-slate-300 p-1">NewsLetter</h1>
        <p className="w-[120px] text-[10px] text-slate-500 mb-[8px]">
          Join our School mailing list to get everyone update on our upcoming
          events
        </p>
        <div>
          <input
            className="w-[18rem] h-[2rem] bg-slate-500 rounded-xl relative px-[1rem]"
            type="text"
            placeholder="email only..."
          />
          <button className="absolute w-[100px] right-[1.3rem] bg-purple-600 p-[6px] text-[10px] rounded-xl shadow-xl shadow-slate-800 border text-slate-100">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
