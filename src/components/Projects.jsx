import iphone from "../assets/3diphone.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: iphone,
    title: "Apple Iphone 3D Website Clone",
    description:
      "Recreated the Apple IPhone15 Pro website, combining GSAP animations and Three.js 3D effects.",
    links: {
      site: "#",
      github: "https://github.com/JWidehem/apple_website.git",
    },
  },
  {
    img: iphone,
    title: "Apple Iphone 3D Website Clone",
    description:
      "Recreated the Apple IPhone15 Pro website, combining GSAP animations and Three.js 3D effects.",
    links: {
      site: "#",
      github: "https://github.com/JWidehem/apple_website.git",
    },
  },
  {
    img: iphone,
    title: "Apple Iphone 3D Website Clone",
    description:
      "Recreated the Apple IPhone15 Pro website, combining GSAP animations and Three.js 3D effects.",
    links: {
      site: "#",
      github: "https://github.com/JWidehem/apple_website.git",
    },
  },
];

const Projects = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="projects">
      <h2 className="text-3xl text-center font-bold text-gray-200 mb-8">
        Projects
      </h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Projects;
