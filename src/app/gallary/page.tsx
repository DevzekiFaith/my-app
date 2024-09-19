"use client"


import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/component/footer/Footer";
import Copywrite from "@/component/copyright/Copywrite";
import Gallary from "@/component/gallary/Gallary";

const GallaryPage = () => {
  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true after the component mounts
  }, []);

  return (
    <div className="bg-blue-950 h-screen">
      <div className="ml-[10rem] p-[2rem]">
        <h1 className="text-start text-[2rem] text-slate-300">
          <span className="text-[12px]">School</span> Gallary
        </h1>
      </div>
      <div className="flex justify-center items-center gap-[2rem]">
        <div className="flex flex-col gap-[2rem]">
          <div>
            <Image className="object-cover" src="/d1.jpg" alt="d1-film" width={300} height={300} />
            <div className="p-[1rem] w-[300px]">
              <h1 className="text-[10px] w-[280px] text-start text-slate-200">
                When a child feels elevated by the learning scheme of their institution, they always feel elevated.
              </h1>
            </div>
          </div>
          <div>
            <Image src="/sch13.jpg" alt="sch13" width={300} height={300} />
            <div className="p-[1rem] w-[300px]">
              <h1 className="text-[10px] w-[280px] text-start text-slate-200">
                When a child feels elevated by the learning scheme of their institution, they always feel elevated.
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[700px] h-[500px] mt-[-2rem]">
          <h1 className="text-slate-200 text-[12px] mb-[1.5rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quod neque unde! Deleniti atque quam soluta tempore reprehenderit adipisci magnam.
          </h1>
          <Image className="w-[700px] h-[500px] object-cover" src="/sch8.jpg" alt="sch8" width={700} height={500} />
          <div className="p-[1rem] w-full">
            <h1 className="text-[10px] w-[280px] text-start text-slate-200">
              When a child feels elevated by the learning scheme of their institution, they always feel elevated.
            </h1>
          </div>
        </div>
      </div>
      <div className={`flex justify-center items-center gap-[2rem] bg-blue-950 h-screen ${isClient ? 'mt-[-1.8rem]' : ''}`}>
        <div className="flex flex-col gap-[2rem]">
          <div>
            <Image className="object-cover" src="/d1.jpg" alt="d1-film" width={300} height={300} />
            <div className="p-[1rem] w-[300px]">
              <h1 className="text-[10px] w-[280px] text-start text-slate-200">
                When a child feels elevated by the learning scheme of their institution, they always feel elevated.
              </h1>
            </div>
          </div>
          <div>
            <Image className="object-cover" src="/sch13.jpg" alt="sch13" width={300} height={300} />
            <div className="p-[1rem] w-[300px]">
              <h1 className="text-[10px] w-[280px] text-start text-slate-200">
                When a child feels elevated by the learning scheme of their institution, they always feel elevated.
              </h1>
            </div>
          </div>
        </div>

        <div className="w-[700px] h-[500px]">
          <div className="mb-[1.5rem]">
            <h1 className="text-slate-200 text-[12px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quod neque unde! Deleniti atque quam soluta tempore reprehenderit adipisci magnam.
            </h1>
          </div>
          <Image className="w-[700px] h-[500px] object-cover" src="/sch13.jpg" alt="sch13" width={700} height={500} />
          <div className="p-[1rem] w-full">
            <h1 className="text-[10px] w-[280px] text-start text-slate-200">
              When a child feels elevated by the learning scheme of their institution, they always feel elevated.
            </h1>
          </div>
        </div>
      </div>
      <Gallary />
      <Footer />
      <Copywrite />
    </div>
  );
};

export default GallaryPage;
