import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import "./meteorAnimation.css";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between md:px-6 md:py-12 px-1 py-6  text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="meteor-circle meteor-circle-1"></div>
        <div className="meteor-circle meteor-circle-2"></div>
        <div className="meteor-circle meteor-circle-3"></div>
        <div className="meteor-circle meteor-circle-4"></div>
        <div className="meteor-circle meteor-circle-5"></div>
        <div className="meteor-circle meteor-circle-6"></div>
      </div>

      <div className="relative md:z-10 md:flex-1 w-full ">
        <h1 className="   md:w-[80%] w-full  md:text-5xl md:text-[30px] text-[22px]  font-bold md:mb-6 mb-3 bg-gradient-to-r from-[#5f5bd2] to-[#f932d8e1] bg-clip-text text-transparent">
          Full Stack Web Developer Specialized in MERN Stack
        </h1>
        <p className="md:text-[16px] text-[12px]  md:w-[80%] w-full text-gray-400 md:mb-8 mb-3">
          I am Mohammed Assal, a full-stack developer specialized in the MERN
          stack. I began my journey in web application development two years
          ago, and during this time, I became passionate about MERN stack
          technologies, delving deep into its libraries and associated
          frameworks. Additionally, I have knowledge of other programming
          languages. I gained practical experience through an internship at a
          company, as well as freelancing on various projects, which has helped
          me enhance my skills and deliver innovative solutions for web
          applications.
        </p>

        <div className="flex md:space-x-4 space-x-2 md:text-[28px] text-[14px] ">
          <a
            href="https://github.com/Mohammed-Assal"
            target="_blank"
            className="text-[#5f5bd2] hover:text-blue-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-assal-94b54126b"
            target="_blank"
            className="text-[#5f5bd2] hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/+212708768573"
            target="_blank"
            className="text-[#c132f9e1] hover:text-blue-500"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://mern-blog-9jhi.onrender.com"
            target="_blank"
            className="text-[#ef32f9e1] hover:text-blue-500"
          >
            <FaBlog />
          </a>
          <a
            href="mailto:mohammed1assal23@gmail.com"
            target="_blank"
            className="text-[#f932d8e1] hover:text-blue-500"
          >
            <BiLogoGmail />
          </a>
        </div>
      </div>

      <div className="md:mr-[20px] ">
        <img
          src="./awsandmern.png"
          alt="aws"
          className="w-[300px] h-[260px] md:w-[450px] md:h-[350px] filter drop-shadow-custom"
        />
      </div>
    </section>
  );
};

export default Hero;
