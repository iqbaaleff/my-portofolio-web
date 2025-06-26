import { motion } from "framer-motion";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 inline-flex items-center justify-center gap-2">
            <User className="text-purple-600" /> About Me
          </h2>
          <p className="text-lg leading-relaxed">
            I'm a Fullstack Developer with hands-on experience in building web and mobile applications using React, Node.js, Express.js, Flutter, and Firebase. I enjoy creating responsive user interfaces and developing secure, scalable backend services.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            I’m also constantly learning new technologies and love collaborating with others. My goal is to craft digital experiences that people love to use.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;