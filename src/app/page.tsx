// import SideBar from "@/component/sideBar/SideBar";
import AboutUs from "@/component/aboutUs/AboutUs";
import HeroPage from "@/component/heroPage/HeroPage";
import NavBar from "@/component/nav/NavBar";
import Image from "next/image";
// import "./global.css";

export default function Home() {
  return (
    <main className="w-full">
      <div>
        <NavBar />
        <HeroPage/>
        <AboutUs/>
      </div>
    </main>
  );
}
