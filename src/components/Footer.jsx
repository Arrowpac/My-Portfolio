import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#FAF8F5] border-t border-[#E4DDD6] px-6 md:px-10 py-8"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="font-display text-xl text-[#2D2D2D]">Shaurya Malik</p>

        <p className="font-mono text-xs text-[#7A7470] text-center">
          Designed & built by me · © 2026
        </p>

        <div className="flex items-center gap-5">
          <a
            href="mailto:shauryamalik2025@gmail.com"
            className="font-mono text-xs text-[#7A7470] hover:text-[#2D2D2D] transition-colors duration-200"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/shaurya-malik7/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#7A7470] hover:text-[#2D2D2D] transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Arrowpac"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#7A7470] hover:text-[#2D2D2D] transition-colors duration-200"
          >
            GitHub
          </a>
        </div>

      </div>
    </motion.footer>
  );
}