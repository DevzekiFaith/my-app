import Copywrite from "@/component/copyright/Copywrite";
import Footer from "@/component/footer/Footer";
import Form from "@/component/form/Form";
import React from "react";

const Prospectus_Page = () => {
  return (
    <div className="flex-1">
      <Form />
      <Footer />
      <Copywrite/>
    </div>
  );
};

export default Prospectus_Page;
