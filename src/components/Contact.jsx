import { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const invites = [
  { emoji: "💼", label: "Internship opportunities" },
  { emoji: "🛠️", label: "Freelance projects" },
  { emoji: "💬", label: "Just a chat" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mzdangew", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-[#FAF8F5] py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.p
          {...fadeUp(0)}
          className="font-mono text-xs tracking-[0.2em] uppercase text-[#7A7470] mb-4"
        >
          — Contact
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left — Intro */}
          <div className="flex flex-col gap-7">
            <motion.h2
              {...fadeUp(0.1)}
              className="font-display text-[clamp(2rem,4vw,2.8rem)] text-[#2D2D2D] leading-[1.15]"
            >
              Let's build something
              worth using.
            </motion.h2>

            <motion.p {...fadeUp(0.2)} className="font-body text-[#7A7470] leading-relaxed">
              I'm a first-year CS student actively looking for internships and
              freelance projects. Whether you have an opportunity, a project idea,
              or just want to talk tech and design — my inbox is open.
            </motion.p>

            {/* Invite chips */}
            <motion.div {...fadeUp(0.3)} className="flex flex-col gap-3">
              <p className="font-mono text-xs tracking-widest uppercase text-[#7A7470]">Open to</p>
              <div className="flex flex-wrap gap-2">
                {invites.map((item) => (
                  <span
                    key={item.label}
                    className="font-body text-sm px-4 py-2 rounded-full bg-[#F2EDE8] border border-[#E4DDD6] text-[#2D2D2D] flex items-center gap-2"
                  >
                    <span>{item.emoji}</span> {item.label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Direct contact */}
            <motion.div {...fadeUp(0.4)} className="flex flex-col gap-3 pt-2">
              <p className="font-mono text-xs tracking-widest uppercase text-[#7A7470]">Or reach me directly</p>
              <a
                href="mailto:shauryamalik2025@gmail.com"
                className="font-body text-sm text-[#2D2D2D] hover:text-[#C9B8E8] transition-colors duration-200 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9B8E8] flex-shrink-0" />
                shauryamalik2025@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/shaurya-malik7/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-[#2D2D2D] hover:text-[#C9B8E8] transition-colors duration-200 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F2C4CE] flex-shrink-0" />
                linkedin.com/in/shaurya-malik7
              </a>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div {...fadeUp(0.2)}>
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#F2EDE8] border border-[#E4DDD6] rounded-3xl p-10 text-center flex flex-col items-center gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#B8D8C9]/40 flex items-center justify-center text-2xl">
                  ✦
                </div>
                <p className="font-display text-2xl text-[#2D2D2D]">Message sent!</p>
                <p className="font-body text-sm text-[#7A7470]">
                  Thanks for reaching out, Shaurya will get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="font-body text-sm text-[#7A7470] hover:text-[#2D2D2D] transition-colors mt-2 underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#F2EDE8] border border-[#E4DDD6] rounded-3xl p-8 flex flex-col gap-5"
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] tracking-widest uppercase text-[#7A7470]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Rahul Sharma"
                    className="font-body text-sm bg-[#FAF8F5] border border-[#E4DDD6] rounded-xl px-4 py-3 text-[#2D2D2D] placeholder-[#E4DDD6] focus:outline-none focus:border-[#C9B8E8] transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] tracking-widest uppercase text-[#7A7470]">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@email.com"
                    className="font-body text-sm bg-[#FAF8F5] border border-[#E4DDD6] rounded-xl px-4 py-3 text-[#2D2D2D] placeholder-[#E4DDD6] focus:outline-none focus:border-[#C9B8E8] transition-colors duration-200"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] tracking-widest uppercase text-[#7A7470]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity, project, or just say hi..."
                    className="font-body text-sm bg-[#FAF8F5] border border-[#E4DDD6] rounded-xl px-4 py-3 text-[#2D2D2D] placeholder-[#E4DDD6] focus:outline-none focus:border-[#C9B8E8] transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p className="font-body text-xs text-[#F2C4CE]">
                    Something went wrong. Try emailing directly at shauryamalik2025@gmail.com
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="font-body text-sm font-medium px-6 py-3 rounded-full bg-[#2D2D2D] text-[#FAF8F5] hover:bg-[#C9B8E8] hover:text-[#2D2D2D] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message ✦"}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}