import React from "react";
import Link from "next/link";

export default function OverLay() {
  return (
    <div className="absolute inset-0 top-[6rem] bg-blue-950 xl:h-[42rem] bg-opacity-70 backdrop-blur-medium flex flex-col justify-start items-start h-screen p-[12rem]">
      <h5 className="text-[#F5F7F8]">welcome to</h5>
      <div>
        <h1 className="xl:text-extrabold text-blue-600 xl:text-[3rem] ">
          Gabselina Schools,Enugu.
        </h1>
      </div>
      <div>
        <p className="text-[#F5F7F8]">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio totam
          ratione ut, saepe laboriosam voluptatibus. Sunt ipsum deleniti eum
          exercitationem animi ut fuga corporis dolor laudantium debitis modi
          dolorum cum, non enim ipsa quos qui! Officiis sunt libero error
          corporis assumenda ab amet in, excepturi, fugiat modi tempore,
          sapiente odit!
        </p>
      </div>
      <div className="bg-purple-700 text-white font-light p-[12px] mt-[1rem] w-[12rem] rounded-xl">
        <Link href="/prospectus">
          <button className="w-[11rem]">School Prospectus</button>
        </Link>
      </div>
    </div>
  );
}
