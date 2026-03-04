import { motion } from "framer-motion";
import shauryaPhoto from "../assets/shaurya.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const badges = [
  "Based in Bengaluru 📍",
  "CS @ Scaler School of Technology",
  "React in progress 🎨",
  "Avid reader 📚",
  "Sports enthusiast 🏃",
];

export default function About() {
  return (
    <section id="about" className="bg-[#FAF8F5] py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.p
          {...fadeUp(0)}
          className="font-mono text-xs tracking-[0.2em] uppercase text-[#7A7470] mb-12"
        >
          — About Me
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left — Photo */}
          <motion.div {...fadeUp(0.1)} className="relative">
            {/* Decorative background shape */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-[#C9B8E8]/20 -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-[#F2C4CE]/30 blur-2xl -z-10" />

            {/* Photo placeholder — replace src with your actual photo */}
            <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src={shauryaPhoto}
                alt="Shaurya Malik"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-5 -right-5 bg-white border border-[#E4DDD6] rounded-2xl px-5 py-3 shadow-[0_8px_40px_rgba(180,160,150,0.18)]"
            >
              <p className="font-mono text-[10px] text-[#7A7470] uppercase tracking-widest mb-0.5">
                Currently
              </p>
              <p className="font-body text-sm text-[#2D2D2D] font-medium">
                Open to internships ✦
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Text */}
          <div className="flex flex-col gap-6">
            <motion.h2
              {...fadeUp(0.15)}
              className="font-display text-[clamp(2rem,4vw,2.8rem)] text-[#2D2D2D] leading-[1.15]"
            >
              A CS student who thinks in interfaces.
            </motion.h2>

            <motion.p
              {...fadeUp(0.25)}
              className="font-body text-[#7A7470] leading-relaxed"
            >
              I'm Shaurya — a first-year Computer Science student at Scaler
              School of Technology, Bengaluru. I stumbled into UI/UX design and
              quickly realised it sits at the perfect intersection of everything
              I love: solving real problems, writing clean code, and making
              things that look and feel genuinely good.
            </motion.p>

            <motion.p
              {...fadeUp(0.35)}
              className="font-body text-[#7A7470] leading-relaxed"
            >
              I'm still early in my journey — exploring React, building side
              projects, and learning how great design decisions are made. What I
              bring to the table is a developer's eye for feasibility and a deep
              curiosity for understanding why people interact with things the
              way they do.
            </motion.p>

            <motion.p
              {...fadeUp(0.4)}
              className="font-body text-[#7A7470] leading-relaxed"
            >
              When I'm not pushing pixels or writing code, you'll find me buried
              in a book or out on a field. I'm actively looking for internships
              and freelance opportunities where I can learn fast and contribute
              meaningfully.
            </motion.p>

            {/* Badges */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-2 pt-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="font-mono text-xs bg-[#F2EDE8] border border-[#E4DDD6] rounded-full px-4 py-1.5 text-[#7A7470]"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
