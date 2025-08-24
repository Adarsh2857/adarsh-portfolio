// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      {/* Sidebar Label */}
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        
        {/* Text Section */}
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>

          <p className="text-sm lg:text-lg leading-relaxed text-gray-200">
            My name is{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-bold drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]">
              Adarsh Maurya
            </span>
            , and I am a{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent font-semibold drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
              passionate and enthusiastic programmer
            </span>{" "}
            with a strong focus on{" "}
            <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent font-semibold drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]">
              problem-solving and web application development
            </span>
            . I am a quick learner with a self-driven attitude, always eager to
            explore and master new technologies. With a core expertise in{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-semibold drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]">
              React
            </span>
            , I enjoy building modern, scalable, and user-friendly applications,
            leveraging different stacks to make the web more open and impactful.
            My interests span across{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 bg-clip-text text-transparent font-semibold drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]">
              full-stack development
            </span>
            , and I take pride in delivering clean, efficient, and creative
            solutions. I am open to opportunities that align with my skills and
            provide avenues for continuous learning and growth.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Adarsh Maurya"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
