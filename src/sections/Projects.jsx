import React from "react";
import Title from "../components/Title";
import { projects } from "../utils/constant";
import { Eye, Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="pt-32">
      <div className="container">
        <Title
          title={"My"}
          highlight={"Projects"}
          subtitle={
            "Here are some of my projects that I've worked on. You can find more on my GitHub."
          }
        />
        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {projects.map((project, key) => (
            <div key={project.id}>
              <img
                className="rounded-tr-2xl rounded-tl-2xl"
                src={project.image}
                alt={project.title}
              />
              <div className="bg-gray-900 rounded-br-2xl rounded-bl-2xl px-4 py-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="line-clamp-3 mb-6">{project.description}</p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 text-white rounded-full mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    className="px-4 py-3 flex items-center gap-2 capitalize font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md"
                    href={project.liveUrl}
                    target="_blank"
                  >
                    <Eye size={20} />
                    <p className="font-semibold">Live</p>
                  </a>
                  <a
                    className="px-4 py-3 flex items-center gap-2 capitalize bg-gray-600 hover:bg-blue-700 transition-colors duration-300 ease-in font-semibold text-white rounded-md"
                    href={project.sourceUrl}
                    target="_blank"
                  >
                    <Github size={20} />
                    <p className="font-semibold">Sources</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
