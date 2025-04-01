// pages/about.tsx

import Image from "next/image";
import React from "react";
import Typewriter from "../components/Typewriter/Typewriter";
import stefanImage from "../public/images/stefan.png";
import adelaideUniImage from "../public/images/adelaideUniImage.jpg";

export default function About() {
  return (
    <div className="overflow-x-hidden w-full m-0 p-0 font-sairaCondensed">
      <div className="max-w-[1200px] p-[15px] box-border mx-auto text-center">
        <div className="mb-5">
          <h1 className="text-gray-500 text-[50px] font-medium tracking-[0.25em]">
            NGUYEN TUAN HUNG PHAN
          </h1>
          <h4 className="tracking-[0.15em]">STEFAN</h4>
          <Typewriter
            toRotate={["Back End Developer", "Software Engineering"]}
            period={3000}
          />
        </div>
        <div className="flex flex-wrap justify-center mt-5">
          <div className="w-full lg:w-5/12 flex items-center justify-center">
            <Image
              src={stefanImage}
              alt="Stefan"
              className="rounded-md max-w-[300px] h-auto"
            />
          </div>
          <div className="w-full lg:w-7/12">
            <p className="text-gray-500 tracking-[0.15em] text-sm text-left">
              INFO
            </p>
            <p className="text-sm text-left mt-2 max-w-[600px]">
              I’m a student living in Adelaide, Australia. From a young age,
              I’ve been deeply fascinated by technology, always believing that
              it has the potential to shape a new and better world. My journey
              into coding began in secondary school, where I was first
              introduced to Pascal. The structured logic and the way I could
              communicate with a machine through code immediately captured my
              interest. It was as if I had discovered a new language, one that
              allowed me to bring ideas to life through the screen. <br />
              <br /> As I progressed through school, my passion for coding only
              grew stronger. I found myself drawn to the problem-solving aspect,
              the thrill of debugging, and the satisfaction of seeing a program
              run successfully. However, it wasn't until I took a half-year gap
              to explore different interests that I truly understood how much
              coding meant to me. During this time, I dabbled in various fields,
              from design to mathematics, but nothing resonated with me as much
              as the world of coding did. <br />
              <br /> This period of exploration solidified my love for
              technology and the art of programming. I began to dive deeper into
              different languages and frameworks, learning everything I
              could—from the intricacies of algorithms to the principles of
              software development. Each new concept I mastered felt like
              unlocking another level in a vast, complex game. What I love most
              about coding is its limitless potential. It’s not just about
              writing lines of code; it’s about creating solutions, innovating,
              and constantly learning. I’m excited to continue my journey in the
              tech world, eager to see how I can contribute to shaping the
              future through the power of code.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-12 mb-12">
          <div className="border-t border-gray-300 w-4/5"></div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-5/12">
            <p className="text-gray-500 tracking-[0.15em] text-sm text-left">
              EDUCATION
            </p>
            <div className="mt-4">
              <p className="tracking-[0.25em] font-medium text-2xl text-left">
                UNIVERSY OF SOUTH AUSTRALIA
              </p>
              <p className="text-gray-500 tracking-[0.15em] mt-2 text-left">
                Bachelor of Software Engineering
              </p>
              <p className="text-sm text-left mt-2">
                Studying Software Engineer at the University of South Australia
                was challenging at first, especially being abroad, but the
                rewarding hands-on experience and global perspective made it all
                worthwhile.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-5/12 flex items-center justify-center mt-4 lg:mt-0">
            <Image
              src={adelaideUniImage}
              alt="University of South Australia"
              className="rounded-md w-[500px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
