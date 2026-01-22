import { motion } from "motion/react";
import { Mail, Linkedin } from "lucide-react";

import img1 from "../../assets/1.png";
import img2 from "../../assets/12.png";
import img3 from "../../assets/6.png";

const PROJECT_LINK = "http://localhost:5173/project/project-4";

export function Footer() {
  return (
    <section
      id="contact"
      className="border-t border-gray-100 pt-10 md:pt-16 pb-0 px-4 bg-white overflow-hidden"
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
          <a
            href="mailto:nehashaju212@gmail.com"
            className="px-6 py-3 rounded-2xl text-white font-['Red_Hat_Display'] font-semibold text-xl hover:scale-105 transition-transform"
            style={{
              background:
                "linear-gradient(100deg,#b267f1,#db7dd2,#fa8cba,#fba045)",
            }}
          >
            let's talk.
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="max-w-[1186px] mx-auto mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Nav */}
        <div className="flex justify-center gap-8 mb-12 text-xl font-medium">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#work">works</a>
          <a href="#contact">contact</a>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex items-center justify-center gap-8">
          <p className="text-2xl shrink-0">crafted by neha&lt;3</p>

          {/* Images */}
          <div className="flex items-center pr-[70px] shrink-0 -mb-32">
            {/* Image 1 */}
            <motion.a
              href={PROJECT_LINK}
              className="-mr-[70px] relative z-10"
              whileHover={{ scale: 1.05, zIndex: 50 }}
            >
              <div
                className="w-[220px] h-[185px] rounded-xl overflow-hidden"
                style={{ transform: "rotate(168deg) scaleY(-1)" }}
              >
                <img src={img1} className="w-full h-full object-cover" />
              </div>
            </motion.a>

            {/* Image 2 */}
            <motion.a
              href={PROJECT_LINK}
              className="-mr-[70px] relative z-20"
              whileHover={{ scale: 1.05, zIndex: 50 }}
            >
              <div
                className="w-[220px] h-[260px] rounded-xl overflow-hidden"
                style={{ transform: "rotate(180deg) scaleY(-1)" }}
              >
                <img src={img2} className="w-full h-full object-cover" />
              </div>
            </motion.a>

            {/* Image 3 */}
            <motion.a
              href={PROJECT_LINK}
              className="relative z-30"
              whileHover={{ scale: 1.05, zIndex: 50 }}
            >
              <div
                className="w-[245px] h-[160px] rounded-xl overflow-hidden"
                style={{ transform: "rotate(13deg)" }}
              >
                <img src={img3} className="w-full h-full object-cover" />
              </div>
            </motion.a>
          </div>

          {/* Socials */}
          <div className="flex gap-4 shrink-0">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="w-10 h-10" strokeWidth={1.5} />
            </a>
            <a href="mailto:nehashaju212@gmail.com">
              <Mail className="w-10 h-10" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
