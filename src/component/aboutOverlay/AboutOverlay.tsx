import React from "react";
import SchoolStory from "../school-story/SchoolStory";

export default function AboutOverlay() {
  return (
    <div className="absolute inset-0 top-0 bg-black xl:h-[78rem] bg-opacity-70 backdrop-blur-medium flex flex-col justify-center items-center h-screen">
      <div>
        <SchoolStory />
      </div>
    </div>
  );
}
