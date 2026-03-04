import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#FAF8F5] px-6 md:px-10">

      {/* ── Decorative background blobs ── */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Large lavender blob — top left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-[#C9B8E8]/25 blur-[80px]"
        />
        {/* Blush blob — bottom right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          className="absolute -bottom-16 -right-16 w-[400px] h-[400px] rounded-full bg-[#F2C4CE]/25 blur-[80px]"
        />
        {/* Sage blob — center right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.4 }}
          className="absolute top-1/2 right-1/4 w-[240px] h-[240px] rounded-full bg-[#B8D8C9]/20 blur-[60px]"
        />

        {/* Subtle dot-grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #2D2D2D 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="max-w-6xl mx-auto w-full pt-24 pb-16">

        {/* Eyebrow label */}
        <motion.div {...fadeUp(0.1)} className="mb-6">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#7A7470] border border-[#E4DDD6] rounded-full px-4 py-1.5 inline-block">
            CS Student · Open to Internships & Freelance
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.25)}
          className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-[1.05] text-[#2D2D2D] max-w-4xl mb-6"
        >
          Designing for the{" "}
          <span className="relative inline-block">
            people
            {/* Underline accent */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.85 }}
              className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#C9B8E8] rounded-full origin-left"
            />
          </span>{" "}
          who use it.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.4)}
          className="font-body text-lg md:text-xl text-[#7A7470] max-w-xl leading-relaxed mb-10"
        >
          I'm a CS student at Scaler School of Technology, Bengaluru - learning to
          bridge the gap between code and design, one thoughtful interface at a time.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4 items-center">
          <button
            onClick={scrollToProjects}
            className="group font-body text-sm font-medium px-6 py-3 rounded-full bg-[#2D2D2D] text-[#FAF8F5] hover:bg-[#C9B8E8] hover:text-[#2D2D2D] transition-all duration-300 flex items-center gap-2"
          >
            View My Work
            <span className="group-hover:translate-y-0.5 transition-transform duration-200 inline-block">↓</span>
          </button>

          <a
            href="https://linkedin.com/in/shaurya-malik7/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-medium px-6 py-3 rounded-full border border-[#E4DDD6] text-[#2D2D2D] hover:border-[#C9B8E8] hover:bg-[#C9B8E8]/10 transition-all duration-300 flex items-center gap-2"
          >
            LinkedIn ↗
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          {...fadeUp(0.7)}
          className="mt-16 pt-8 border-t border-[#E4DDD6] flex flex-wrap gap-8 md:gap-16"
        >
          {[
            { value: "1st", label: "Year CS Student" },
            { value: "10+", label: "Personal Projects" },
            { value: "2", label: "Tools I Design In" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl text-[#2D2D2D]">{stat.value}</p>
              <p className="font-body text-sm text-[#7A7470] mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="font-mono text-[10px] tracking-widest text-[#7A7470] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-6 bg-gradient-to-b from-[#C9B8E8] to-transparent"
        />
      </motion.div>

    </section>
  );
}