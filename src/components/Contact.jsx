import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Mail className="text-purple-600" /> Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          I'm always open to discussing new opportunities, collaborations, or just a friendly chat. Feel free to reach out and let's connect!
        </motion.p>

        <motion.div
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl w-full sm:w-3/4 mx-auto space-y-6 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl font-semibold flex items-center justify-center gap-2">
            <Mail className="text-purple-600" />
            <span className="text-white">
              Email:{" "}
              <a
                href="mailto:iqbaalfadillah19@gmail.com"
                className="text-purple-600 hover:underline"
              >
                iqbaalfadillah19@gmail.com
              </a>
            </span>
          </p>

          <p className="text-lg md:text-xl font-semibold flex items-center justify-center gap-2">
            <FaWhatsapp className="text-green-500" />
            <a
              href="https://wa.me/6285295936791"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition"
            >
              Chat via WhatsApp
            </a>
          </p>

          <div className="flex justify-center gap-8 text-3xl">
            <a
              href="https://github.com/iqbaaleff"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-iqbal-fadillah-009584323"
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 dark:text-blue-400 hover:text-purple-600 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
