import React from "react";

export default function AboutOverLay() {
  return (
    <div className="absolute inset-0 top-0 bg-blue-950 bg-opacity-70 backdrop-blur-medium flex flex-col justify-start items-start p-[2rem]">
      <div>
        <h1 className="text-[2rem] font-bold text-white">
            <span className="mr-2 text-purple-600">What</span> 
           People say About Our Teachers
        </h1>
        <hr />
        <p className="w-[600px] mt-4 text-slate-300">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis debitis
          quos facere veritatis explicabo, porro iure doloremque assumenda,
          eligendi facilis illum laudantium ratione aperiam expedita
          necessitatibus natus repellat itaque ipsum sint, dicta illo molestias
          excepturi. Excepturi non, nihil eius fugiat dolores aliquid, doloribus
          modi maiores unde dicta officiis maxime voluptas.
        </p>
        <button className="bg-purple-700 p-[6px] w-[14rem] h-[2.8rem] text-[#F5F7F8] mt-[1rem] rounded-2xl shadow-2xl shadow-slate-400">
          Read More
        </button>
      </div>
    </div>
  );
}
