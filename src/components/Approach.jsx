import { useState } from "react";
import { motion } from "framer-motion";
import { DiCode, DiDebian } from "react-icons/di";
import { MdImportantDevices } from "react-icons/md";

const phases = [
  {
    phase: "PHASE 1",
    title: "Planning & Strategy",
    description:
      "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
    icon: <DiDebian size={50} />,
  },
  {
    phase: "PHASE 2",
    title: "Development & Progress Update",
    description:
      "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
    icon: <DiCode size={50} />,
  },
  {
    phase: "PHASE 3",
    title: "Development & Launch",
    description:
      "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
    icon: <MdImportantDevices size={50} />,
  },
];

const Approach = () => {
  const [selected, setSelected] = useState(null);

  const toggleCard = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="max-w-[1300px] mx-auto my-24" id="approach">
      <h2 className="text-3xl text-center font-bold text-gray-200 my-8 pb-8">
        My Approach
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center px-12 space-y-8 md:space-y-0 md:space-x-8">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            className="relative w-full md:w-1/3 h-96 bg-purple-900/10 border border-purple-900 text-slate-700 text-center rounded-lg overflow-hidden cursor-pointer"
            onClick={() => toggleCard(index)}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: selected === index ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute w-full h-full flex flex-col items-center justify-center backface-hidden"
              style={{ visibility: selected === index ? "hidden" : "visible" }}
            >
              <h3 className="text-2xl font-bold">{phase.phase}</h3>
            </div>
            <div
              className="absolute w-full h-full flex flex-col items-center justify-center backface-hidden px-4"
              style={{
                transform: "rotateY(180deg)",
                visibility: selected === index ? "visible" : "hidden",
              }}
            >
              {phase.icon}
              <h3 className="text-xl font-bold mt-2">{phase.title}</h3>
              <p className="text-center p-2 text-gray-300">
                {phase.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Approach;
