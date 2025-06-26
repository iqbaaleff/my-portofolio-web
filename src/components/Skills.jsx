import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiGit,
  SiFirebase,
  SiFigma,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import skills from "../data/skills";

const skillIcons = {
  HTML: <SiHtml5 className="text-orange-600" />,
  CSS: <SiCss3 className="text-blue-600" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  React: <SiReact className="text-cyan-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
  Git: <SiGit className="text-orange-600" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  Figma: <SiFigma className="text-pink-500" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  Express: <SiExpress className="text-gray-700 dark:text-gray-300" />,
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Cpu className="text-purple-600" /> Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2 bg-purple-50 dark:bg-purple-800/30 p-4 rounded-xl shadow hover:shadow-lg transition hover:scale-105"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-3xl" aria-label={skill}>
                {skillIcons[skill] || <span className="text-purple-600">★</span>}
              </div>
              <p className="text-sm font-medium text-gray-800 dark:text-white">{skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
