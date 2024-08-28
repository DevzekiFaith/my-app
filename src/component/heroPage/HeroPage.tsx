import React from "react";
import Image from "next/image";
import OverLay from "./overlay/OverLay";

export default function HeroPage() {
  return (
    <div className="pt-[6rem]">
      <div className="w-full h-screen relative">
        <Image
          className="w-full h-[42rem] object-cover"
          src="/hero_work.jpg"
          alt="sch-fame"
          width={300}
          height={300}
        />
      </div>
      <OverLay />
    </div>
  );
}
