import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      {/* Optional overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

      <div className="relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-purple-300">Iqbaaleff</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I'm a Fullstack Developer crafting end-to-end web & mobile experiences.
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition flex items-center gap-2"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="border border-purple-300 text-purple-300 px-6 py-2 rounded-full hover:bg-purple-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
