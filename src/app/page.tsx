// import SideBar from "@/component/sideBar/SideBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <div>
        <p>This is for a school Project</p>
        {/* <SideBar /> */}
        <div>
          <p className="text-white bg-white">
            This is the marking for work
          </p>
        </div>
      </div>
      <div className=" bg-orange-500 w-full h-[4rem]">
        <p className="text-white">
          This is the SideBar for the Schools Notification
        </p>
      </div>
    </main>
  );
}
