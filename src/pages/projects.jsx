import React, { useState } from "react";
import Header from "../component/Headers/Header";

const Projects = ({ project }) => {
  const [mainImage, setMainImage] = useState(project.images[0]);

  return (
    <div className="flex flex-col md:flex-row  border-b pb-4 mt-11 ">
      {/* Left Side - Images */}
      <div className="md:w-1/2 flex flex-col items-center justify-center ">
        {/* Main Image */}
        <img
          src={mainImage}
          alt="Main project"
          className="w-[80%] rounded-[40px] h-68  mb-4 transition-transform duration-500"
        />
        {/* Small Images */}
        <div className="flex space-x-2">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Small ${index}`}
              className="w-24 h-16 object-cover cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => setMainImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Right Side - Project Info */}
      <div className="md:w-1/2 w-full md:ml-8 text-center md:text-left  ">
        <h2 className="md:text-3xl text-2xl md:mt-1 mt-8  text-center font-bold text-white mb-4">
          {project.title}
        </h2>
        <p className="mb-4 text-center md:text-[18px] text-[14px] text-gray-400">{project.description}</p>
        <div className="mb-4 text-center text-gray-300">
          <span className="font-semibold text-center ">
            Technologies Used:{" "}
          </span>
          {project.technologies.join(", ")}
        </div>
        <div className=" text-center flex    md:justify-start">
          <div className=" space-x-4 gap-3 mx-auto  md:w-[40%] w-[90%">
            {project.siteLink ? (
              <a
                href={project.siteLink}
                className="bg-blue-600  text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Site
              </a>
            ) : (
              <></>
            )}
            <a
              href={project.codeLink}
              className="bg-gray-800  text-white px-4 py-2 rounded hover:bg-gray-900 transition"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const AllProjects = () => {
  const projects = [
    {
      title: "social media app",
      description:
        "This project utilizes the MERN stack to provide a secure login system, post uploading capabilities, and interaction through likes. It features a responsive design ensuring a seamless user experience across devices.",
      technologies: ["MERN Stack", "redux.js"],
      siteLink: "https://mern-blog-9jhi.onrender.com/",
      codeLink: "https://github.com/Mohammed-Assal/MERN-Stack",
      images: [
        "/blog/homeblog.png",
        "/blog/createpost.png",
        "/blog/profileblog.png",
      ],
    },
    {
      title: "App Notes",
      description:
        '"App Notes" is an application that enables users to create and manage notes on a cloud platform using advanced technologies like Next.js and AWS. The application provides a seamless and user-friendly interface for efficiently adding, modifying, and deleting notes. It leverages AWS Lambda for serverless functions, DynamoDB for cloud database storage, and API Gateway for managing APIs. The project has been deployed effortlessly using AWS Amplify to ensure scalability and security.',
      technologies: ["Next.js", "AWS"],

      codeLink: "https://github.com/Mohammed-Assal/APP-NOTES",
      images: [
        "/appnote/appnote.jpeg",
        "/appnote/note-api.jpeg",
        "/appnote/amplify.jpeg",
      ],
    },
    {
      title: "user data",
      description:
        'The "User Data" project is a data visualization application built with React and AWS services. It utilizes AWS Lambda functions to fetch user data from APIs, including gender ratio, daily views per user, and average ages. Data is stored securely in an AWS S3 bucket.The application leverages the ApexCharts library to create interactive and visually',
      technologies: ["React.js", "apexChart"],

      codeLink: "https://github.com/Mohammed-Assal/USER-DATA",
      images: [
        "/userData/desc.jpeg",
        "/userData/aws.jpeg",
        "/userData/vs.jpeg",
      ],
    },
    {
      title: "WebServices",
      description:
        "This project offers a sophisticated service for creating creative websites using Next.js. The site features a distinctive, multi-page design that allows clients to explore comprehensive web design services. It includes multiple pages showcasing services, past work examples, and a description of the workflow. The site aims to provide a unique and integrated user experience, focusing on creativity and innovation in web design.",
      technologies: ["Next.js"],
      siteLink: "https://quark-web-1987.vercel.app/",
      codeLink: "https://bitbucket.org/quarkweb/ecommerce/src/master/",
      images: [
        "/webservices/home.png",
        "/webservices/servicespage.png",
        "/webservices/servicespage2.png",
      ],
    },
  ];

  return (
    <div className=" md:px-12 px-2 bg-[#07071f] ">
      <Header />
      {projects.map((project, index) => (
        <Projects key={index} project={project} />
      ))}
    </div>
  );
};

export default AllProjects;
