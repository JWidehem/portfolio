import {
  DiSass,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import Reveal from "./Reveal";
import {
  TbBrandBlender,
  TbBrandFigma,
  TbBrandFramerMotion,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandThreejs,
} from "react-icons/tb";
import { SiGreensock } from "react-icons/si";

const skills = [
  {
    category: "FullStack",
    technologies: [
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "Next", icon: <TbBrandNextjs className="text-white" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
      { name: "Node Js", icon: <DiNodejsSmall className="text-green-500" /> },
      { name: "Sass", icon: <DiSass className="text-pink-600" /> },
      { name: "Tailwind", icon: <TbBrandTailwind className="text-blue-500" /> },
    ],
  },
  {
    category: "Design",
    technologies: [
      { name: "Figma", icon: <TbBrandFigma /> },
      { name: "Blender", icon: <TbBrandBlender className="text-orange-400" /> },
      { name: "Three.js", icon: <TbBrandThreejs className="text-blue-500" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
      { name: "Framer", icon: <TbBrandFramerMotion className="text-black" /> },
      { name: "GSAP", icon: <SiGreensock className="text-green-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <p className="text-center mb-8">
          I worked on various frontend and fullstack projects. Check them{" "}
          <a href="projects" className="underline">
            there
          </a>
          .
        </p>

        <div
          className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
                                w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
