import { motion } from "motion/react";
import { Mail, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

import thinkImage from "../../assets/think ai.png";
import caseStudyImage from "../../assets/casestudy.jpeg";
import pharmassisttImage from "../../assets/pharmassistt.png";

const PROJECTS = {
  THINK_AI: "/project/think-ai",
  CASE_STUDY: "/project/case-studies",
  PHARMA_ASSIST: "/project/pharma-assist",
};

const buttonVariants: any = {
  initial: { scale: 1 },
  hover: { scale: 1.08, transition: { type: "spring", stiffness: 400, damping: 10 } },
  tap: { scale: 0.95 },
  pulse: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export function Footer() {
  return (
    <section
      id="contact"
      className="pt-10 md:pt-16 pb-0 px-4 bg-white overflow-hidden"
    >
      {/* Header */}
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-black">
            <span className="font-['Red_Hat_Display'] font-medium">
              connect with{" "}
            </span>
            <span className="font-['Playfair_Display'] italic font-medium">
              me.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-['Red_Hat_Display'] font-medium">
            Open to collaborations, projects, and conversations that lead to
            meaningful work.
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <motion.a
            href="https://www.linkedin.com/in/nehashaju212"
            target="_blank"
            rel="noreferrer"
            variants={buttonVariants}
            initial="initial"
            animate="pulse"
            whileHover="hover"
            whileTap="tap"
            className="group relative px-10 py-5 rounded-full text-white font-['Red_Hat_Display'] font-bold text-2xl overflow-hidden shadow-xl"
            style={{
              background: "linear-gradient(270deg, #b267f1, #db7dd2, #fa8cba, #fba045, #b267f1)",
              backgroundSize: "400% 400%",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"
            />
            <span className="relative flex items-center gap-3">
              let's talk.
            </span>
          </motion.a>
        </div>

        <style>{`
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes shine {
            100% { transform: translateX(100%); }
          }
          .animate-gradient {
            animation: gradient-move 8s ease infinite;
          }
          .animate-shine {
            animation: shine 1.5s infinite;
          }
          .group:hover {
            animation: gradient-move 3s ease infinite;
          }
          a[style*="backgroundSize: 400%"] {
            animation: gradient-move 10s ease infinite;
          }
        `}</style>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="max-w-[1186px] mx-auto mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Desktop layout */}
        <div className="hidden lg:flex items-center justify-center gap-8">
          <p className="text-2xl shrink-0">crafted by neha&lt;3</p>

          {/* Images */}
          <div className="flex items-center pr-[70px] shrink-0 -mb-32">
            {/* Image 1: Think AI */}
            <motion.div
              whileHover={{ scale: 1.05, zIndex: 50 }}
              className="-mr-[70px] relative z-10"
            >
              <Link to={PROJECTS.THINK_AI}>
                <div
                  className="w-[220px] h-[185px] rounded-[12px] overflow-hidden"
                  style={{ transform: "rotate(-12deg)" }}
                >
                  <img src={thinkImage} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </Link>
            </motion.div>

            {/* Image 2: Case Study */}
            <motion.div
              whileHover={{ scale: 1.05, zIndex: 50 }}
              className="-mr-[70px] relative z-20"
            >
              <Link to={PROJECTS.CASE_STUDY}>
                <div
                  className="w-[220px] h-[260px] rounded-[12px] overflow-hidden"
                  style={{ transform: "rotate(-5deg)" }}
                >
                  <img src={caseStudyImage} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </Link>
            </motion.div>

            {/* Image 3: PharmaAssist */}
            <motion.div
              whileHover={{ scale: 1.05, zIndex: 50 }}
              className="relative z-30"
            >
              <Link to={PROJECTS.PHARMA_ASSIST}>
                <div
                  className="w-[245px] h-[160px] rounded-[12px] overflow-hidden"
                  style={{ transform: "rotate(13deg)" }}
                >
                  <img src={pharmassisttImage} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 shrink-0">
            <a href="https://www.linkedin.com/in/nehashaju212" target="_blank" rel="noreferrer">
              <Linkedin className="w-10 h-10" strokeWidth={1.5} />
            </a>
            <a href="mailto:nehashaju212@gmail.com">
              <Mail className="w-10 h-10" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden flex flex-col items-center gap-12 pb-12">
          {/* Images preview for mobile - simpler stack */}
          <div className="flex items-center justify-center -space-x-12 px-4">
            <Link to={PROJECTS.THINK_AI} className="z-10 rotate-[-10deg]">
              <div className="w-32 h-28 rounded-lg overflow-hidden shadow-md">
                <img src={thinkImage} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </Link>
            <Link to={PROJECTS.CASE_STUDY} className="z-20 rotate-[-5deg]">
              <div className="w-32 h-36 rounded-lg overflow-hidden shadow-lg border-2 border-white">
                <img src={caseStudyImage} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </Link>
            <Link to={PROJECTS.PHARMA_ASSIST} className="z-30 rotate-[10deg]">
              <div className="w-32 h-24 rounded-lg overflow-hidden shadow-md">
                <img src={pharmassisttImage} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-8">
              <a href="https://www.linkedin.com/in/nehashaju212" target="_blank" rel="noreferrer">
                <Linkedin className="w-8 h-8 opacity-70" strokeWidth={1.5} />
              </a>
              <a href="mailto:nehashaju212@gmail.com">
                <Mail className="w-8 h-8 opacity-70" strokeWidth={1.5} />
              </a>
            </div>
            <p className="text-xl opacity-60">crafted by neha&lt;3</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
