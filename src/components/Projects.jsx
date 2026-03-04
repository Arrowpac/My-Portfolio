import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const projects = [
  {
    number: "01",
    name: "Recipe Finder",
    description:
      "Discover recipes from across the world — search by name, filter by country, or browse alphabetically. Each recipe shows a full breakdown with cuisine type and imagery.",
    tags: ["React", "Node.js", "Tailwind"],
    accent: "#C9B8E8",
    accentBg: "rgba(201, 184, 232, 0.08)",
    github: "https://github.com/Arrowpac/Recipe-Finder",
    live: "https://recipe-finder-amber-gamma.vercel.app/",
  },
  {
    number: "02",
    name: "Movie Explorer",
    description:
      "Browse and discover movies with poster previews and live IMDB ratings. A clean, fast interface for finding what to watch next.",
    tags: ["React", "Node.js", "Tailwind"],
    accent: "#F2C4CE",
    accentBg: "rgba(242, 196, 206, 0.08)",
    github: "https://github.com/Arrowpac/Movie-Explorer",
    live: "https://movie-explorer-726.vercel.app/",
  },
  {
    number: "03",
    name: "Task Manager",
    description:
      "A clean, fully-featured task management app with delete, edit, mark complete, and filter capabilities. Includes a weekly dashboard and calendar view for a complete productivity experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    accent: "#B8D8C9",
    accentBg: "rgba(184, 216, 201, 0.08)",
    github: "https://github.com/Arrowpac/Habit-Tracker",
    live: "https://arrowpac.github.io/Habit-Tracker/",
  },
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#FAF8F5] py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.p
          {...fadeUp(0)}
          className="font-mono text-xs tracking-[0.2em] uppercase text-[#7A7470] mb-4"
        >
          — Projects
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <motion.h2
            {...fadeUp(0.1)}
            className="font-display text-[clamp(2rem,4vw,2.8rem)] text-[#2D2D2D] leading-[1.15]"
          >
            Things I've built.
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="font-body text-sm text-[#7A7470] max-w-xs md:text-right leading-relaxed">
            A few projects from my early days — each one built to solve a real problem and learn something new.
          </motion.p>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              {...fadeUp(0.1 + i * 0.12)}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative bg-[#F2EDE8] border border-[#E4DDD6] rounded-3xl p-8 md:p-10 overflow-hidden"
              style={{ backgroundColor: project.accentBg }}
            >
              {/* Subtle accent blob */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ backgroundColor: project.accent }}
              />

              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 relative">

                {/* Project number */}
                <span
                  className="font-display text-6xl md:text-8xl font-light leading-none select-none flex-shrink-0"
                  style={{ color: project.accent }}
                >
                  {project.number}
                </span>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-4">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-[#2D2D2D] mb-2">
                      {project.name}
                    </h3>
                    <p className="font-body text-[#7A7470] leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] px-3 py-1 rounded-full border border-[#E4DDD6] text-[#7A7470] bg-[#FAF8F5]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-row md:flex-col gap-3 flex-shrink-0">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-body text-sm font-medium px-5 py-2.5 rounded-full bg-[#2D2D2D] text-[#FAF8F5] hover:bg-[#C9B8E8] hover:text-[#2D2D2D] transition-all duration-300"
                  >
                    Live Site <ArrowIcon />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-body text-sm px-5 py-2.5 rounded-full border border-[#E4DDD6] text-[#7A7470] hover:border-[#2D2D2D] hover:text-[#2D2D2D] transition-all duration-300"
                  >
                    <GithubIcon /> GitHub
                  </a>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div {...fadeUp(0.5)} className="mt-12 text-center">
          <a
            href="https://github.com/Arrowpac"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm text-[#7A7470] hover:text-[#2D2D2D] transition-colors duration-200 inline-flex items-center gap-2"
          >
            See all projects on GitHub <ArrowIcon />
          </a>
        </motion.div>

      </div>
    </section>
  );
}