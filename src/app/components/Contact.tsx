import { motion } from 'motion/react';
import svgPaths from "../../imports/svg-fcov86nyay";
import img1 from "../../assets/1.png";
import img2 from "../../assets/12.png";
import img3 from "../../assets/6.png";

export function Contact() {
  return (
    <section id="contact" className="pt-20 md:pt-32 pb-0 px-4 bg-white overflow-hidden">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-black">
            <span className="font-['Red_Hat_Display'] font-medium">connect with </span>
            <span className="font-['Playfair_Display'] italic font-medium">me.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-['Red_Hat_Display'] font-medium">
            Open to collaborations, projects, and conversations that lead to meaningful work.
          </p>
        </div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <button
            className="px-6 py-3 rounded-2xl text-white font-['Red_Hat_Display'] font-semibold text-xl transition-transform hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(100.654deg, rgb(178, 103, 241) 4.0048%, rgb(219, 125, 210) 37.894%, rgb(250, 140, 186) 71.782%, rgb(251, 160, 69) 105.67%)',
            }}
          >
            let's talk.
          </button>
        </motion.div>
      </motion.div>

      {/* Footer Section */}
      <motion.div
        className="max-w-[1186px] mx-auto mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Navigation Links */}
        <div className="flex justify-center gap-8 md:gap-11 mb-12 font-['Red_Hat_Display'] font-medium text-xl md:text-2xl">
          <a href="#home" className="text-black hover:opacity-70 transition-opacity">home</a>
          <a href="#about" className="text-black hover:opacity-70 transition-opacity">about</a>
          <a href="#work" className="text-black hover:opacity-70 transition-opacity">works</a>
          <a href="#contact" className="text-black hover:opacity-70 transition-opacity">contact</a>
        </div>

        {/* Footer Content - Desktop Layout */}
        <div className="hidden lg:flex items-center justify-center gap-8">
          {/* Crafted by text */}
          <p className="font-['Red_Hat_Display'] font-normal text-2xl text-black text-center shrink-0">
            crafted by neha&lt;3
          </p>

          {/* Stacked Images */}
          <div className="flex items-center pr-[90px] shrink-0 -mb-40">
            {/* Image 1 - Rotated 168deg, flipped */}
            <motion.div
              className="flex items-center justify-center -mr-[90px] relative shrink-0 z-10"
              whileHover={{ scale: 1.05, zIndex: 50 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="w-[285px] h-[240px]"
                style={{
                  transform: 'rotate(168deg) scaleY(-1)',
                }}
              >
                <img
                  src={img1}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Image 2 - Rotated 180deg, flipped */}
            <motion.div
              className="flex items-center justify-center -mr-[90px] relative shrink-0 z-20"
              whileHover={{ scale: 1.05, zIndex: 50 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="w-[286px] h-[342px]"
                style={{
                  transform: 'rotate(180deg) scaleY(-1)',
                }}
              >
                <img
                  src={img2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Image 3 - Rotated 13deg */}
            <motion.div
              className="flex items-center justify-center relative shrink-0 z-30"
              whileHover={{ scale: 1.05, zIndex: 50 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="w-[318px] h-[205px] rounded-xl overflow-hidden"
                style={{
                  transform: 'rotate(13deg)',
                }}
              >
                <img
                  src={img3}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 shrink-0">
            {[1, 2, 3].map((i) => (
              <motion.a
                key={i}
                href="#"
                className="text-black hover:opacity-70 transition-opacity"
                whileHover={{ scale: 1.1 }}
                aria-label="Social media link"
              >
                <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40">
                  <path
                    d={svgPaths.p30e5d700}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3.5"
                  />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer Content - Mobile/Tablet Layout */}
        <div className="flex lg:hidden flex-col items-center gap-8">
          {/* Crafted by text */}
          <p className="font-['Red_Hat_Display'] font-normal text-xl md:text-2xl text-black text-center">
            crafted by neha&lt;3
          </p>

          {/* Stacked Images - Tablet */}
          <div className="hidden md:flex lg:hidden items-center justify-center scale-75">
            <div className="flex items-center pr-[90px]">
              {/* Image 1 */}
              <motion.div
                className="flex items-center justify-center -mr-[90px] relative z-10"
                whileHover={{ scale: 1.05, zIndex: 50 }}
              >
                <div
                  className="w-[285px] h-[240px]"
                  style={{ transform: 'rotate(168deg) scaleY(-1)' }}
                >
                  <img src={img1} alt="" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Image 2 */}
              <motion.div
                className="flex items-center justify-center -mr-[90px] relative z-20"
                whileHover={{ scale: 1.05, zIndex: 50 }}
              >
                <div
                  className="w-[286px] h-[342px]"
                  style={{ transform: 'rotate(180deg) scaleY(-1)' }}
                >
                  <img src={img2} alt="" className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Image 3 */}
              <motion.div
                className="flex items-center justify-center relative z-30"
                whileHover={{ scale: 1.05, zIndex: 50 }}
              >
                <div
                  className="w-[318px] h-[205px] rounded-xl overflow-hidden"
                  style={{ transform: 'rotate(13deg)' }}
                >
                  <img src={img3} alt="" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            {[1, 2, 3].map((i) => (
              <motion.a
                key={i}
                href="#"
                className="text-black hover:opacity-70 transition-opacity"
                whileHover={{ scale: 1.1 }}
                aria-label="Social media link"
              >
                <svg className="w-10 h-10" fill="none" viewBox="0 0 40 40">
                  <path
                    d={svgPaths.p30e5d700}
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3.5"
                  />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
