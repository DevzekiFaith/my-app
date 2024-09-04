import React from "react";
import Image from "next/image";

export default function SchoolStory() {
  return (
    <div className="p-[14px]">
      <div>
        <div>
          <h1 className="font-bold text-[2rem] text-slate-500">
            <span className="text-purple-400">Here is</span> the Story About Us!
          </h1>
          <hr className="w-[26rem]" />
        </div>
        <div className="">
          <div className="text-[14px] w-[18rem]">
            <p className="w-[650px] text-slate-400">
              **About Us:
              <br />
              <br />
              Gabselina School, Enugu State
              <br />
              ** At Gabselina School, <br />
              our mission is to nurture not just minds, but hearts and spirits.
              We believe in the power of education to transform lives, and we
              are committed to equipping our students with the knowledge,
              skills, and character they need to thrive in the world and beyond.
              <br />
              <br />
              <span className="bg-purple-700 p-[8px] rounded-xl text-white font-bold shadow-2xl shadow-black">
                **Our Vision**{" "}
              </span>
              <br />
              <br />
              <span className="text-white">
                Gabselina School is more than an institution; it is a community
                dedicated to the holistic development of every student. We are
                passionate about cultivating independent thinkers who are
                confident in their abilities, grounded in strong moral values,
                and deeply connected to their faith.
              </span>{" "}
              We strive to create an environment where students learn not only
              how to excel academically but also how to navigate life with
              wisdom and integrity.
              <br />
              <br />
              <span className="bg-purple-700 p-[8px] rounded-xl text-white font-bold shadow-2xl shadow-black">
                **How We Serve**
              </span>
              <br />
              <br />
              1.{" "}
              <span className="text-white font-bold">
                **Character Building:**{" "}
              </span>
              <br />
              We prioritize the development of character as a core part of our
              educational philosophy.{" "}
              <span className="text-white">
                {" "}
                Our students are guided to understand the importance of honesty,
                responsibility, empathy, and respect. Through daily
                interactions, mentorship, and specially designed programs, we
                instill values that shape our students into compassionate
                leaders and responsible citizens.
              </span>
              <br />
              <br />
              2.{" "}
              <span className="text-white font-bold">
                **Academic Excellence:
              </span>
              <br />
              <br />
              ** We provide a rigorous academic curriculum that challenges
              students to reach their full potential.{" "}
              <span className="text-white">
                Our teachers are not just educators; they are mentors who
                inspire curiosity, critical thinking, and a love for learning.
                We equip our students with the tools they need to succeed in any
                path they choose, whether in further education or in the world
                of work.{" "}
              </span>
              <br />
              <br />
              3.{" "}
              <span className="text-white font-bold">**Spiritual Growth:</span>
              <br />
              <br />
              ** We believe that true independence comes from a deep connection
              to God.{" "}
              <span className="text-white">
                At Gabselina, spiritual development is interwoven into the
                fabric of our school culture. We encourage students to explore
                their faith, understand their purpose, and rely on God as their
                ultimate guide.
              </span>{" "}
              Through regular worship, religious studies, and a supportive faith
              community, we help students develop a personal and enduring
              relationship with God.
              <br />
              <br />
              4.{" "}
              <span className="text-white font-bold">
                **Empowerment and Independence:
              </span>
              <br />
              <br />
              ** Our goal is to empower students to become self-reliant
              individuals who can confidently navigate life’s challenges.{" "}
              <span className="text-white">
                We teach practical life skills, from financial literacy to
                problem-solving, ensuring that our graduates are prepared for
                the real world.
              </span>{" "}
              More importantly, we foster a sense of self-worth and independence
              that is rooted in a strong moral foundation and faith.
              <br />
              <br />
              **Impacting Lives**
              <br />
              <br />
            </p>
          </div>
          {/* <div>
            <Image className="absolute top-0 left-0" src="/w1.png" alt="About-work" width={300} height={300}/>
          </div> */}
        </div>
      </div>
      <div className="border border-slate-700 p-[12px] rounded-2xl w-[650px] text-purple-600 text-[12px]">
        <span className="text-purple-400 font-bold text-[12px] ">
          Gabselina School
        </span>{" "}
        has touched the lives of more than a thousand students, and our impact
        continues to grow. We are proud to see our alumni go on to achieve great
        things, not just in their careers but in their communities, living out
        the values they learned here.{" "}
        <span className="text-white">
          Our school is a place where young people discover their potential,
          deepen their faith, and become equipped to make a positive difference
          in the world.
        </span>
        At Gabselina, we are dedicated to guiding each student on their unique
        journey—helping them to become not only successful individuals but also
        people of character who are independent, compassionate, and strong in
        their faith.
      </div>
    </div>
  );
}
