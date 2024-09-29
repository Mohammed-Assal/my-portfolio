import React from 'react';
import ProjectCard from './ProjectCard';
import { FaArrowRight } from "react-icons/fa6";
const ProjectsSection = () => {
  const projects = [
    {
      title: 'social media Website',
      description: 'This project utilizes the MERN stack to provide a secure login system, post uploading capabilities, and interaction ...',
      link: '/projects',
      link2: 'https://mern-blog-9jhi.onrender.com/',
      technologies: ['MERN Stack', "redux.js"],
      image1: '/blog/homeblog.png',
      image2: '/blog/homeblog.png',
    },
    {
      title: 'portfolio Website',
      description: 'A personal portfolio to showcase projects and experience, built with React.js and Tailwind CSS. and other ...',
      link: '/projects',
      link2: '/',
      technologies: ['React', 'Tailwind CSS'],
      image1: '/hero.png',
      image2: '/imgportfolio.jpg',
    },
    
  ];

  return (
    <section className="md:px-6 md:py-12 py-1 px-0  ">
      <h2 className="md:text-4xl text-2xl  font-bold text-white mb-8 text-center">My Projects</h2>
      
      <div className="grid md:w[40%] w-[100%] grid-cols-1 md:grid-cols-2 gap-8 mb-8 ">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            link2={project.link2}
            technologies={project.technologies}
            image1={project.image1}
            image2={project.image2}
          />
        ))}
      </div>
      <a href='/projects' className="md:text-3xl text-1xl flex items-center gap-2 font-bold text-[#f932d8e1] mb-8 r"> <p>All Projects</p> <FaArrowRight /> </a>
    </section>
  );
};

export default ProjectsSection;
