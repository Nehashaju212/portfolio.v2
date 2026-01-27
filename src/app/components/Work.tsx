import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import caseStudyImage from '@/assets/case-study.webp';
import signImage from '@/assets/sign.webp';
import thinkImage from '@/assets/think-ai.webp';
import pharmassisttImage from '@/assets/pharmassistt.webp';
import inflowImage from '@/assets/inflow.webp';

import virtualcalcImage from '@/assets/virtualcalc.webp';
import posterImage from '@/assets/posters.webp';

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

const projects = [
  { id: 'think-ai', title: 'Think AI', image: thinkImage },
  { id: 'case-studies', title: 'Case Studies', image: caseStudyImage },
  { id: 'pharma-assist', title: 'PharmaAssist', image: pharmassisttImage },
  { id: 'virtual-calculator', title: 'Virtual Calculator', image: virtualcalcImage },
  { id: 'inflow-redesign', title: 'InFlow Redesign', image: inflowImage },
  { id: 'sign-language-translator', title: 'Sign Language Translator', image: signImage },
  { id: 'creative-posters', title: 'Creative Posters Collection', image: posterImage },
];

export function Work() {
  const [visibleCount, setVisibleCount] = useState(3);

  const toggleView = () => {
    setVisibleCount(prev => prev === 3 ? projects.length : 3);
  };

  return (
    <section id="work" className="pt-10 md:pt-16 pb-12 md:pb-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-black">
            <span className="font-['Red_Hat_Display'] font-medium">stuffs i actually </span>
            <span className="font-['Playfair_Display'] italic font-medium">build.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-['Red_Hat_Display'] font-medium">
            I like experimenting with code, learning new tools, and solving problems that make
            digital experiences simpler and better, while building projects and learning through
            hands-on work.          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/project/${project.id}`}>
                <div className="bg-[#d6d6d6] rounded-[12px] h-64 mb-4 overflow-hidden transition-transform group-hover:scale-105 cursor-pointer relative">
                  {(project as any).image ? (
                    <img
                      src={(project as any).image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      {/* Placeholder for project image */}
                    </div>
                  )}
                </div>
                <h3 className="font-['Red_Hat_Display'] font-semibold text-2xl text-center text-black group-hover:opacity-70 transition-opacity">
                  {project.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="pulse"
            whileHover="hover"
            whileTap="tap"
            onClick={toggleView}
            className="px-12 py-3.5 rounded-2xl text-white font-semibold text-xl shadow-lg"
            style={{
              background: 'linear-gradient(270deg, #B267F1, #DB7DD2, #FA8CBA, #FBA045, #B267F1)',
              backgroundSize: '400% 400%',
            }}
          >
            {visibleCount === 3 ? 'see more.' : 'see less.'}
          </motion.button>
        </motion.div>

        <style>{`
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          button[style*="backgroundSize: 400%"] {
            animation: gradient-move 10s ease infinite;
          }
        `}</style>
      </motion.div>
    </section>
  );
}