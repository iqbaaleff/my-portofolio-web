import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 dark:text-gray-400">
        <motion.p
          className="text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          &copy; {year} Iqbaaleff. All rights reserved.
        </motion.p>

        <motion.div
          className="flex gap-6 text-sm items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#home" className="hover:text-purple-600 transition">Home</a>
          <a href="#projects" className="hover:text-purple-600 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
        </motion.div>

        <motion.button
          onClick={scrollToTop}
          className="bg-purple-600 text-white p-2 rounded-full shadow hover:bg-purple-700 transition"
          aria-label="Scroll to top"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <FaArrowUp className="w-4 h-4" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
