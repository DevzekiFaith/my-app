"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AboutOverLay from "./AboutOverLay";
import Link from "next/link";

export default function AboutUs() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true after the component mounts
  }, []);

  return (
    <div className="flex justify-center flex-col items-center gap-[3rem] p-[16px] bg-black mt-[-4.5rem]">
      <div className="w-[600px]">
        <h4 className="text-blue-900 uppercase font-extrabold mb-[8px] text-[14px]">
          about us
        </h4>
        <div>
          <h1 className="mb-[8px] font-bold text-[18px] text-white w-[300px]">
            Gabselina School in Brief!
          </h1>
        </div>

        <p className="text-slate-400 ">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          ipsam exercitationem nam quasi illo nulla nobis officiis sunt
          cupiditate. Qui, id. Eum consectetur quasi aperiam assumenda, iusto
          quod error non autem iste aliquam voluptate commodi incidunt nisi nemo
          soluta. Quae labore dolor, iusto suscipit eum cumque ipsam maiores
          optio ipsa?
        </p>
        <div>
          <Link href="/about">
            <div className="bg-purple-700 w-[8rem] p-[8px] rounded-xl shadow-2xl shadow-black mt-[1rem]">
              <button className="text-slate-200 ml-4 text-bold">
                Read More
              </button>
            </div>
          </Link>
        </div>
      </div>
      <div className="relative w-full">
        {isClient && ( // Render Image and AboutOverLay only on the client
          <>
            <Image
              className="w-full h-[700px] object-cover"
              src="/st55.jpg"
              alt="Aboutus-face"
              width={300}
              height={300}
            />
            <AboutOverLay />
          </>
        )}
      </div>
    </div>
  );
}
