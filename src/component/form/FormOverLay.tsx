import React from "react";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  Name: string;
  Email: string;
  password: string;
};

export default function FormOverLay() {
  const [isLoading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
    reset();
  };

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
  const handleOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div className="absolute inset-0 top-0 bg-black xl:h-[100rem] bg-opacity-70 backdrop-blur-medium flex flex-col justify-start items-start h-screen p-[12rem]">
      <div>
        <div className="mt-[-8rem]">
          <Image
            src="/smile1-removebg-preview.png"
            alt="smiling_emoji"
            width={300}
            height={300}
          />
        </div>
        <p className="text-white">This is Hello Time!</p>
        <p className="text-[14px] text-slate-300">
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
          resilience our students show in their daily lives. You will find that
          our teachers and staff are dedicated to creating a warm and supportive
          environment where every student feels valued and inspired. We are here
          to encourage curiosity, celebrate achievements, and help your child
          navigate challenges with confidence. We also recognize the importance
          of partnership with parents. Your involvement and insights are
          invaluable, and we are eager to work together to ensure that your
          childs experience at New Gabselina Schools is both enriching and
          fulfilling. Please know that my door is always open for conversations,
          questions, or simply to share a moment of joy about your childs
          progress. Thank you for choosing to be part of our community. We are
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
      {/* The welcome message content */}
      <div className="w-[500px]">
        <h1 className="mt-[1rem] mb-[2rem] text-slate-300 text-[2rem]">
          Enquiry Form
        </h1>
        <h5 className="text-slate-600 text-[12px] mt-[-1.8rem] mb-[1.3rem]">
          enter your Information for updates
        </h5>

        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="border p-[12px] rounded-xl border-slate-600"
        >
          <div className="flex flex-col justify-start items-start gap-[14px] ml-[1rem]">
            <span className="flex flex-col gap-[4px]">
              <label className="text-slate-500">Name</label>
              <input
                className="w-[28rem] h-[3rem] rounded-3xl placeholder-slate-200 px-[1rem] shadow-2xl bg-slate-600 text-white"
                type="text"
                placeholder="name"
                {...register("Name", { required: "Name is required" })}
              />
              {errors?.Name && (
                <p className="text-red-500">{errors.Name.message}</p>
              )}
            </span>
            <span className="flex flex-col gap-[4px]">
              <label className="text-slate-500">Email</label>
              <input
                className="w-[28rem] h-[3rem] rounded-3xl placeholder-slate-200 px-[1rem] shadow-2xl bg-slate-600 text-white"
                type="text"
                placeholder="email"
                {...register("Email", { required: "Email is required" })}
              />
              {errors?.Email && (
                <p className="text-red-500">{errors.Email.message}</p>
              )}
            </span>
            <div className="relative">
              <span className="flex flex-col gap-[4px]">
                <label className="text-slate-500">Password</label>
                <input
                  className="w-[28rem] h-[3rem] rounded-3xl placeholder-slate-200 px-[1rem] shadow-2xl bg-slate-600 text-white"
                  type={open ? "text" : "password"}
                  placeholder="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors?.password && (
                  <p className="text-red-500">{errors.password.message}</p>
                )}
              </span>
              <div>
                {open ? (
                  <div>
                    <FaRegEye
                      onClick={handleOpen}
                      className="absolute right-4 text-[22px] top-[2.6rem] text-white cursor-pointer"
                    />
                  </div>
                ) : (
                  <div>
                    <FaEyeSlash
                      onClick={handleOpen}
                      className="absolute right-4 text-[22px] top-[2.6rem] text-white cursor-pointer"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="bg-purple-800 p-[6px] w-[28rem] mt-[22px] rounded-2xl text-white h-[3rem] text-[18px] font-bold shadow-2xl shadow-slate-900 ml-[1rem] mb-[2rem]"
              disabled={isLoading}
            >
              {isLoading ? "Loading…" : "Submit"}
            </Button>
          </div>
        </Form>
      </div>
      {/* The thank you message content */}
      <div className="mt-[4rem]">
        <p className="text-white text-[15px]">
          Thank you, parents, for entrusting us with the education and
          well-being of your children. We value the partnership between our
          school and your family, and we look forward to working closely
          together to support your childs academic and personal growth. To our
          students, thank you for bringing your unique talents, energy, and
          curiosity to our school. We are excited to see you thrive and succeed
          in the years to come. Once again, welcome to our school family. We are
          here to support you every step of the way, and we are eager to see all
          that you will accomplish. We are proud to be a part of your
          educational journey. We are here to support you every step of the way,
          and we are eager to see all that you will accomplish.
        </p>
      </div>
      <div className="mt-[3rem] bg-purple-600 w-[16rem] p-[1rem] rounded-full ">
        <a
          href="Ezekiels Resume.pdf"
          download
          className=" font-extrabold h-[3rem] cursor-pointer text-slate-300 text-[12px] pb-[1rem] ml-[2rem]"
        >
          Download School Prospectus
        </a>
      </div>
    </div>
  );
}
