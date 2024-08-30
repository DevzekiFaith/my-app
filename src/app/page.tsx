// import SideBar from "@/component/sideBar/SideBar";
import AboutUs from "@/component/aboutUs/AboutUs";
import Footer from "@/component/footer/Footer";
import HeroPage from "@/component/heroPage/HeroPage";
import HeadMessage from "@/component/message/HeadMessage";
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
        <HeadMessage/>
        <Footer/>
      </div>
    </main>
  );
}
