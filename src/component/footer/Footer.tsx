"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { usePathname } from "next/navigation";
// import { useForm } from "react-hook-form";
// import { SubmitHandler } from "react-hook-form";

// Define the navigation links with their names and paths
const navLinks = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "gallary", path: "/gallary" },
  { name: "event", path: "/event" },
  { name: "contact", path: "/contact" },
  { name: "admission", path: "/admission" },
  { name: "prospectus", path: "/prospectus" },
];

type FormValues = {
  Email: string;
};

export default function Footer() {
  // Get the current path from the router
  const currentPath = usePathname();

  // Function to check if a given path is the current path
  const isActive = (path: string): boolean => {
    return currentPath === path;
  };
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm<FormValues>();

  // const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
  //   console.log(data);
  //   reset();
  // };

  return (
    <div className="bg-blue-950 h-[12rem] p-[22px] flex justify-between items-center">
      <div>
        <div className="w-[150px] h-[32px] flex justify-center items-center gap-2 mb-[1rem]">
          <Link href="/">
            <Image
              className="w-[2rem] h-[2rem] animate-spin"
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
        <div className="w-52">
          <Link href="/">
            <h1 className="text-blue-800 font-bold text-lg">
              Gabselina Schools
            </h1>
          </Link>
        </div>
        {/* Navigation links section */}
        <div className="ml-0 flex gap-4">
          <ul className="flex justify-center items-center gap-[1rem] text-[12px]">
            {navLinks.map((pages, index) => (
              <li key={index}>
                <Link
                  href={pages.path}
                  className={
                    isActive(pages.path)
                      ? "bg-purple-600 text-white p-[8px] rounded-xl text-bold"
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
      <div>
        <h1 className="text-slate-300 p-1">NewsLetter</h1>
        <p className="w-[120px] text-[10px] text-slate-500 mb-[8px]">
          Join our School mailing list to get everyone update on our upcoming
          events
        </p>
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
        <div>
          <input
            className="w-[18rem] h-[2rem] bg-slate-500 rounded-xl relative px-[1rem] text-white text-[12px]"
            type="text"
            placeholder="email only..."
            // {...register("Email", { required: "email is required" })}
          />
          {/* {errors?.Email && (
              <p className="text-red-500">{errors.Email.message}</p>
            )} */}
          <button
            type="submit"
            className="absolute w-[100px] right-[1.3rem] bg-purple-600 p-[6px] text-[10px] rounded-xl shadow-xl shadow-slate-800 border text-slate-100 cursor-pointer"
          >
            Subscribe
          </button>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}
