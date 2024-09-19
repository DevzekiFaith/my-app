// import SideBar from "@/component/sideBar/SideBar";
import AboutUs from "@/component/aboutUs/AboutUs";
import Copywrite from "@/component/copyright/Copywrite";
import Footer from "@/component/footer/Footer";
// import HeroPage from "@/component/heroPage/HeroPage";
import HeadMessage from "@/component/message/HeadMessage";
import NavBar from "@/component/nav/NavBar";
import Image from "next/image";
// import "./global.css";

import dynamic from 'next/dynamic';

// Dynamically import HeroPage to avoid hydration issues
const HeroPage = dynamic(() => import('@/component/heroPage/HeroPage'), { ssr: false });

export default function Home() {
  return (
    <main className="w-full">
      <div>
        <NavBar />
        <HeroPage />
        <AboutUs />
        <HeadMessage />
        <Footer />
        <Copywrite />
      </div>
    </main>
  );
}
