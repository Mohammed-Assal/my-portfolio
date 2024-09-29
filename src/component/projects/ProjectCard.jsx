import React from "react";

const ProjectCard = ({
  title,
  description,
  link,
  link2,
  technologies,
  image1,
  image2,
}) => {
  return (
    <div className="flex flex-col items-center justify-between bg-gray-900 text-white md:p-6 p-2 rounded-lg shadow-lg">
      <div className="relative flex justify-end  mb-9">
        <div className=" md:w-96 w-[350px]   h-[220px] bg-gray-700 rounded-lg shadow-lg overflow-hidden">
          <img
            src={image1}
            alt="asas"

            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-10 right-4 md:w-80 w-[320px] h-[200px] bg-gray-700 rounded-lg shadow-lg overflow-hidden">
          <img
            src={image2}
            alt='asas'
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="text-center md:text-left">
        <h3 className="md:text-3xl text-2xl font-bold md:mb-4 mb-2">{title}</h3>
        <p className="md:text-lg text-1xl text-gray-400 md:mb-4 mb-2">
          {description}
        </p>
        <div  className="text-blue-500  md:mb-4 flex items-center mb-2 justify-between w-[80%]">
        <a
          href={link}
         
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline md:mb-4 mb-2 block"
        >
          Show Details
        </a>
        <a
          href={link2}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline md:mb-4 mb-2 block"
        >
         show live
        </a>
        </div>
       
        <div className="flex flex-wrap justify-center md:justify-start">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-white md:px-3 px-1 py-1 md:text-1xl  rounded-lg m-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
