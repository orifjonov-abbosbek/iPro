import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import project1Image from "../../assets/images/card1.png";
import project2Image from "../../assets/images/card2.png";
import project3Image from "../../assets/images/card1.png";
import AOS from "aos";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: {
        en: "Project 1",
        es: "Proyecto 1",
      },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum velit in nulla pellentesque, et placerat urna ultricies.",
        es: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum velit in nulla pellentesque, et placerat urna ultricies.",
      },
      image: project1Image,
      link: "https://example.com/project1",
    },
    {
      id: 2,
      title: {
        en: "Project 2",
        es: "Proyecto 2",
      },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum velit in nulla pellentesque, et placerat urna ultricies.",
        es: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum velit in nulla pellentesque, et placerat urna ultricies.",
      },
      image: project2Image,
      link: "https://example.com/project2",
    },
    {
      id: 3,
      title: {
        en: "Project 3",
        es: "Proyecto 3",
      },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum velit in nulla pellentesque, et placerat urna ultricies.",
        es: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum velit in nulla pellentesque, et placerat urna ultricies.",
      },
      image: project3Image,
      link: "https://example.com/project3",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl text-gray-700 font-semibold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="project-container bg-white shadow-lg p-4 rounded-lg"
            data-aos="flip-up" // Specify animation type
            data-aos-duration="1000" // Set animation duration in milliseconds
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-2"
            />
            <div className="p-4">
              <h2 className="text-mg mb-3 text-center font-semibold">
                {project.title.en}
              </h2>
              <p className="text-gray-500 text-sm text-center">
                {project.description.en}
              </p>
              <div className="flex items-center justify-between mt-4">
                <Button
                  href={project.link}
                  target="_blank"
                  color="blue"
                  size="sm"
                  ripple="light"
                >
                  View Project
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
