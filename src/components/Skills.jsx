import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const skillColumns = [
  {
    label: "Code",
    accent: "#C9B8E8",
    skills: [
      { name: "HTML & CSS", level: "Confident" },
      { name: "JavaScript", level: "Confident" },
      { name: "React", level: "Intermediate" },
      { name: "DSA", level: "Strong foundation" },
      { name: "Competitive Programming", level: "Strong foundation" },
    ],
  },
  {
    label: "Writing",
    accent: "#F2C4CE",
    skills: [
      { name: "Long-form Writing", level: "Confident" },
      { name: "Storytelling", level: "Confident" },
      { name: "Technical Writing", level: "Intermediate" },
      { name: "Clear Communication", level: "Confident" },
    ],
  },
  {
    label: "Mindset",
    accent: "#B8D8C9",
    skills: [
      { name: "Problem Solving", level: "Core strength" },
      { name: "Attention to Detail", level: "Core strength" },
      { name: "Fast Learner", level: "Core strength" },
      { name: "Cross-disciplinary", level: "Core strength" },
    ],
  },
];

const levelDot = {
  "Confident":          { color: "#B8D8C9", label: "Confident" },
  "Intermediate":       { color: "#C9B8E8", label: "Intermediate" },
  "Learning":           { color: "#F2C4CE", label: "Learning" },
  "Core strength":      { color: "#2D2D2D", label: "Core strength" },
  "Strong foundation":  { color: "#7A7470", label: "Strong foundation" },
};

export default function Skills() {
  return (
    <section id="skills" className="bg-[#F2EDE8] py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.p
          {...fadeUp(0)}
          className="font-mono text-xs tracking-[0.2em] uppercase text-[#7A7470] mb-4"
        >
          — Skills
        </motion.p>

        <motion.h2
          {...fadeUp(0.1)}
          className="font-display text-[clamp(2rem,4vw,2.8rem)] text-[#2D2D2D] leading-[1.15] mb-4"
        >
          What I bring to the table.
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="font-body text-[#7A7470] max-w-xl mb-16 leading-relaxed">
          I write code and I write words — and I think clearly in both. A developer
          with strong DSA foundations and a writer's instinct for communication makes
          for someone who can build, think, and explain.
        </motion.p>

        {/* Skill columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillColumns.map((col, colIdx) => (
            <motion.div
              key={col.label}
              {...fadeUp(0.15 + colIdx * 0.1)}
              className="bg-[#FAF8F5] border border-[#E4DDD6] rounded-3xl p-7 flex flex-col gap-5"
            >
              {/* Column header */}
              <div className="flex items-center gap-3 pb-4 border-b border-[#E4DDD6]">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: col.accent }}
                />
                <h3 className="font-mono text-xs tracking-[0.18em] uppercase text-[#7A7470]">
                  {col.label}
                </h3>
              </div>

              {/* Skill rows */}
              <ul className="flex flex-col gap-3">
                {col.skills.map((skill, skillIdx) => (
                  <motion.li
                    key={skill.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + colIdx * 0.1 + skillIdx * 0.06, duration: 0.4 }}
                    className="flex items-center justify-between group"
                  >
                    <span className="font-body text-sm text-[#2D2D2D]">{skill.name}</span>
                    <span
                      className="font-mono text-[10px] px-2.5 py-1 rounded-full border"
                      style={{
                        color: levelDot[skill.level].color,
                        borderColor: levelDot[skill.level].color + "40",
                        backgroundColor: levelDot[skill.level].color + "12",
                      }}
                    >
                      {levelDot[skill.level].label}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          {...fadeUp(0.5)}
          className="font-mono text-xs text-[#7A7470] mt-10 text-center"
        >
          Currently learning React · Always picking up something new
        </motion.p>

      </div>
    </section>
  );
}