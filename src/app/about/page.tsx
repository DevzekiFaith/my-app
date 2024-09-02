import AboutOverlay from "@/component/aboutOverlay/AboutOverlay";
import Copywrite from "@/component/copyright/Copywrite";
import Footer from "@/component/footer/Footer";
import SchoolStory from "@/component/school-story/SchoolStory";
import Image from "next/image";
import React from "react";

const About_Page = () => {
  return (
    <div className="bg-blue-950 flex-1 relative">
      <div className="absolute w-full top-0 flex justify-center items-center ">
        <Image
          className="w-full h-[900px]"
          src="/gllobal.jpg"
          alt="Global"
          width={300}
          height={300}
        />
      </div>
      <div>
        <SchoolStory />
        <Footer />
        <Copywrite />
        <AboutOverlay />
      </div>
    </div>
  );
};

export default About_Page;
