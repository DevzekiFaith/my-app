"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import MessageOverLay from "./MessageOverLay";

export default function HeadMessage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-slate-950 h-[1100px] p-[18px]">
      <h1 className="font-bold text-[1.2rem] mt-[12px] text-center text-purple-600 mb-[8px]">
        Welcome note from the{" "}
        <span className="text-slate-200 p-[8px] text-[24px]">
          School Director!
        </span>
      </h1>
      <hr className="w-[500px] ml-[25.5rem] mb-[12px] bg-slate-600" />
      <div className="flex flex-col justify-center items-center gap-[3rem]">
        <div className="w-[400px]">
          <p className="text-slate-400 text-[14px] mt-[1rem]">
            {" "}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            repellendus totam animi minus minima harum reprehenderit nostrum,
            culpa quaerat eaque vel maiores accusamus sequi tenetur, odit,
            fugiat id facere illo quasi itaque sit incidunt. Earum eos harum
            praesentium aut, eaque, rem ut sequi vel aliquid porro aliquam? Sed
          </p>
          <div>
            <button className="bg-purple-600 text-slate-100 p-[6px] w-[14rem] h-[2.8rem] mt-[2rem] font-bold rounded-2xl">
              Read More
            </button>
          </div>
        </div>
        {isMounted && ( // Only render this part on the client
          <div className="mt-[-20px] w-full h-[700px] relative">
            <Image
              className="w-full h-[750px] object-cover"
              src="/director.jpg"
              alt="dc-face"
              width={300}
              height={300}
            />
            <MessageOverLay />
          </div>
        )}
      </div>
    </div>
  );
}
