import React from "react";

export default function AboutUs() {
  return (
    <div className="p-[16px] bg-blue-400 mt-[-4.5rem]">
      <div>
        <h4 className="text-blue-900 uppercase font-extrabold mb-[8px] text-[14px]">
          about us
        </h4>
        <div>
          <h1 className="mb-[8px] font-bold text-[18px] text-white w-[300px]">
            Gabselina School in Brief!
          </h1>
        </div>

        <p className="text-slate-950">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          ipsam exercitationem nam quasi illo nulla nobis officiis sunt
          cupiditate. Qui, id. Eum consectetur quasi aperiam assumenda, iusto
          quod error non autem iste aliquam voluptate commodi incidunt nisi nemo
          soluta. Quae labore dolor, iusto suscipit eum cumque ipsam maiores
          optio ipsa?
        </p>
        <div>
          <div className="bg-purple-700 w-[8rem] p-[8px] rounded-xl shadow-2xl shadow-black mt-[1rem]">
            <button className="text-slate-200 ml-4 text-bold">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
