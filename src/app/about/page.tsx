import Copywrite from "@/component/copyright/Copywrite";
import Footer from "@/component/footer/Footer";
import SchoolStory from "@/component/school-story/SchoolStory";
import React from "react";

const About_Page = () => {
  return (
    <div className="bg-blue-950 flex-1">
      <div>
        <SchoolStory />
        <Footer/>
        <Copywrite/>
      </div>
    </div>
  );
};

export default About_Page;
