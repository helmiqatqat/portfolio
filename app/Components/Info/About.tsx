import React from "react";
import Image from "next/image";
import myImg from "@/public/Assets/Images/Helmi.png";

const About: React.FC = () => {
  return (
    <div className="grid-parent">
      <div className="section">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="section-content flex flex-col lg:flex-row gap-4 md:gap-8 items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="avatar">
              <div className="w-28 sm:w-32 md:w-48 rounded-full">
                <Image src={myImg} alt="my-img" />
              </div>
            </div>
          </div>
          <p className="py-4 text-center lg:text-start text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
            Innovative Full Stack Web Developer capable of designing, building,
            and optimizing user-centric web applications. Proficient in various
            programming tools and frameworks, with a passion for implementing
            best practices in code quality and application architecture. A
            dedicated problem solver, I actively sharpen my algorithm and data
            structure skills on platforms like LeetCode. Experienced in both
            frontend and backend development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
