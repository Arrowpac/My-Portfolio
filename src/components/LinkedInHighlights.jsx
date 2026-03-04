import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const education = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "BITS Pilani",
    year: "2029",
    accent: "#C9B8E8",
  },
  {
    degree: "B.S. in Data Science",
    institution: "IIT Madras",
    year: "2029",
    accent: "#F2C4CE",
  },
];

const featuredPosts = [
  {
    tag: "Career & Growth",
    title: "What a 2100-rated Codeforces engineer from Google Munich told us about building a career today",
    description:
      "Our college instructor — ex-Google Munich, Codeforces rating 2100+ — spoke to us about navigating the tech industry in today's economy. I shared the key takeaways that stuck with me.",
    accent: "#C9B8E8",
    href: "https://www.linkedin.com/in/shaurya-malik7/",
  },
  {
    tag: "DSA · Motivation",
    title: "From staring at a blank screen for 2 hours to 135 LeetCode questions solved",
    description:
      "A honest account of my DSA journey — the frustration of not being able to solve a single problem, and how I pushed through to 135+ questions. Part motivational, part technical.",
    accent: "#B8D8C9",
    href: "https://www.linkedin.com/in/shaurya-malik7/",
  },
];

const stats = [
  { value: "200+", label: "LeetCode questions solved" },
  { value: "36", label: "LinkedIn posts in 6 months" },
  { value: "2", label: "Degrees, simultaneously" },
];

export default function LinkedInHighlights() {
  return (
    <section id="linkedin" className="bg-[#F2EDE8] py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.p
          {...fadeUp(0)}
          className="font-mono text-xs tracking-[0.2em] uppercase text-[#7A7470] mb-4"
        >
          — Beyond the Code
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <motion.h2
            {...fadeUp(0.1)}
            className="font-display text-[clamp(2rem,4vw,2.8rem)] text-[#2D2D2D] leading-[1.15]"
          >
            Learning out loud.
          </motion.h2>
          <motion.a
            {...fadeUp(0.2)}
            href="https://www.linkedin.com/in/shaurya-malik7/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-[#7A7470] hover:text-[#2D2D2D] transition-colors duration-200"
          >
            View LinkedIn profile <ExternalIcon />
          </motion.a>
        </div>

        {/* Stats strip */}
        <motion.div
          {...fadeUp(0.15)}
          className="grid grid-cols-3 gap-4 mb-12 p-7 bg-[#FAF8F5] border border-[#E4DDD6] rounded-3xl"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className={`text-center ${i !== 2 ? "border-r border-[#E4DDD6]" : ""}`}>
              <p className="font-display text-3xl md:text-4xl text-[#2D2D2D]">{stat.value}</p>
              <p className="font-body text-xs md:text-sm text-[#7A7470] mt-1 leading-snug">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* Education card */}
          <motion.div
            {...fadeUp(0.2)}
            className="bg-[#FAF8F5] border border-[#E4DDD6] rounded-3xl p-7 flex flex-col gap-5"
          >
            <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#7A7470]">Education</p>
            <div className="flex flex-col gap-4">
              {education.map((edu) => (
                <div key={edu.institution} className="flex items-start gap-4">
                  <span
                    className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: edu.accent }}
                  />
                  <div>
                    <p className="font-body text-sm font-medium text-[#2D2D2D]">{edu.degree}</p>
                    <p className="font-body text-sm text-[#7A7470]">
                      {edu.institution} · Class of {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-[#E4DDD6]">
              <p className="font-body text-xs text-[#7A7470] leading-relaxed">
                Pursuing two degrees simultaneously — one focused on computer science fundamentals,
                the other on data science and applied mathematics.
              </p>
            </div>
          </motion.div>

          {/* LeetCode card */}
          <motion.div
            {...fadeUp(0.25)}
            className="bg-[#FAF8F5] border border-[#E4DDD6] rounded-3xl p-7 flex flex-col justify-between gap-5"
          >
            <p className="font-mono text-xs tracking-[0.18em] uppercase text-[#7A7470]">Competitive Programming</p>
            <div>
              <p className="font-display text-5xl text-[#2D2D2D] mb-2">210+</p>
              <p className="font-body text-sm text-[#7A7470] leading-relaxed">
                LeetCode problems solved and counting — from zero to consistent daily practice,
                building strong DSA foundations one problem at a time.
              </p>
            </div>
            <a
              href="https://leetcode.com/u/Shaurya726/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-[#7A7470] hover:text-[#2D2D2D] transition-colors duration-200 border-t border-[#E4DDD6] pt-4"
            >
              View LeetCode profile <ExternalIcon />
            </a>
          </motion.div>
        </div>

        {/* Featured posts */}
        <div className="flex flex-col gap-4">
          {featuredPosts.map((post, i) => (
            <motion.a
              key={post.title}
              {...fadeUp(0.3 + i * 0.1)}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FAF8F5] border border-[#E4DDD6] rounded-3xl p-7 flex flex-col md:flex-row md:items-center gap-5 hover:border-[#C9B8E8] transition-all duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: post.accent }}
                  />
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#7A7470]">
                    {post.tag}
                  </span>
                </div>
                <p className="font-display text-lg md:text-xl text-[#2D2D2D] leading-snug mb-2">
                  {post.title}
                </p>
                <p className="font-body text-sm text-[#7A7470] leading-relaxed">
                  {post.description}
                </p>
              </div>
              <div className="flex-shrink-0 text-[#7A7470] group-hover:text-[#2D2D2D] group-hover:translate-x-1 transition-all duration-300">
                <ExternalIcon />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p {...fadeUp(0.55)} className="font-mono text-xs text-[#7A7470] mt-10 text-center">
          36 posts published · Writing about DSA, Web Dev & the journey
        </motion.p>

      </div>
    </section>
  );
}