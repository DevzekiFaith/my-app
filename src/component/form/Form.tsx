"use client";

import React from "react";
import Image from "next/image";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import FormOverLay from "./FormOverLay";


export default function ContactForm() {
  const [isLoading, setLoading] = useState(false);


  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div className="bg-blue-950 p-[4rem] flex justify-center items-center gap-[3rem] pt-[8rem]">
      <div className="w-[500px] border p-[2rem] border-slate-500 rounded-xl">
        <p className="text-[14px] text-slate-700">
          Warm Welcome to Our New Students and Families! <br />
          Dear Students and Parents,
          <br />
          <br />
          Welcome to our school family! It is with heartfelt joy that I extend
          this greeting to each of you as you join our vibrant community. I am
          Architect Nkemakonam Mabel Ubor, the Director here at New Gabselina
          Schools, and I am genuinely excited to get to know each one of you.
          Starting at a new school is an exciting adventure, full of new
          experiences and opportunities. Our school is more than just a place
          for learning; it is a place where we grow together, both in knowledge
          and character. We are deeply committed to helping your child not only
          excel academically but also develop into a person of strong moral
          character. Our vision is simple yet profound: to nurture young minds
          and hearts, guiding them to become compassionate, respectful, and
          thoughtful individuals. We believe that the true measure of success
          lies not just in grades, but in the kindness, integrity, and
          resilience our students show in their daily lives. You’ll find that
          our teachers and staff are dedicated to creating a warm and supportive
          environment where every student feels valued and inspired. We’re here
          to encourage curiosity, celebrate achievements, and help your child
          navigate challenges with confidence. We also recognize the importance
          of partnership with parents. Your involvement and insights are
          invaluable, and we’re eager to work together to ensure that your
          child’s experience at New Gabselina Schools is both enriching and
          fulfilling. Please know that my door is always open for conversations,
          questions, or simply to share a moment of joy about your child’s
          progress. Thank you for choosing to be part of our community. We’re
          looking forward to an amazing year ahead, filled with growth,
          learning, and unforgettable memories.
          <br />
          <br />
          With warmest regards,
          <br />
          <br />
          Architect Nkemakonam Mabel Ubor
          <br />
          {/* <br/> */}
          Director, New Gabselina Schools
        </p>
      </div>
      <div>
        <Image
          className="ml-[6rem]"
          src="/contact2.png"
          alt="Contact_form"
          width={300}
          height={300}
        />
        <Image
          className="w-[400px] h-[400px]"
          src="/cl1.png"
          alt="Classroom"
          width={300}
          height={300}
        />
        <div className="w-[500px]">
          <h1 className="mt-[1rem] mb-[2rem] text-slate-300 text-[2rem]">
            Enquiry Form
          </h1>
          <Form className="border p-[12px] rounded-xl border-slate-600">
            <div className="flex flex-col justify-start items-start gap-[14px] ml-[1rem]">
              <span className="flex flex-col gap-[4px]">
                <label className="text-slate-500">Name</label>
                <input
                  className="w-[28rem] h-[3rem] rounded-3xl placeholder-slate-200 px-[1rem] shadow-2xl bg-slate-600"
                  type="text"
                  placeholder="name"
                  aria-label="name"
                />
              </span>
              <span className="flex flex-col gap-[4px]">
                <label className="text-slate-500">Email</label>
                <input
                  className="w-[28rem] h-[3rem] rounded-3xl placeholder-slate-200 px-[1rem] shadow-2xl bg-slate-600 text-white"
                  type="text"
                  placeholder="email"
                />
              </span>
              <span className="flex flex-col gap-[4px]">
                <label className="text-slate-500">Password</label>
                <input
                  className="w-[28rem] h-[3rem] rounded-3xl placeholder-slate-200 px-[1rem] shadow-2xl bg-slate-600"
                  type="password"
                  placeholder="password"
                />
               
              </span>
            </div>
            <div>
              <Button
                className="bg-blue-600 p-[6px] w-[28rem] mt-[22px] rounded-2xl text-white h-[3rem] text-[18px] font-bold shadow-2xl shadow-slate-900 ml-[1rem] mb-[2rem]"
                disabled={isLoading}
                onClick={isLoading ? () => {} : handleClick}
              >
                {isLoading ? "Loading…" : "Submit"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
      <FormOverLay />
    </div>
  );
}
