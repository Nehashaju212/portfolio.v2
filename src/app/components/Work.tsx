import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import caseStudyImage from '@/assets/casestudy.jpeg';
import virtualcalcImage from '@/assets/virtualcalc.png';
import signImage from '@/assets/sign.png';
import thinkImage from '@/assets/think ai.png';

const projects = [
  { id: 'project-4', title: 'Think AI', image: thinkImage },
  { id: 'project-1', title: 'Case Studies', image: caseStudyImage },
  { id: 'project-6', title: 'PharmaAssist' },
  { id: 'project-2', title: 'Virtual Calculator', image: virtualcalcImage },
  { id: 'project-3', title: 'Sign Language Translator', image: signImage },
  { id: 'project-7', title: 'Weather Forecast App' },
  { id: 'project-8', title: 'InFlow Redesign' },
  { id: 'project-9', title: 'Creative Posters Collection' },
  { id: 'project-10', title: 'GoodTurn' },
];

export function Work() {
  const [visibleCount, setVisibleCount] = useState(3);

  const toggleView = () => {
    setVisibleCount(prev => prev === 3 ? projects.length : 3);
  };

  return (
    <section id="work" className="py-20 md:py-32 px-4">
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
                <div className="bg-[#d6d6d6] rounded-xl h-64 mb-4 overflow-hidden transition-transform group-hover:scale-105 cursor-pointer relative">
                  {(project as any).image ? (
                    <img
                      src={(project as any).image}
                      alt={project.title}
                      className="w-full h-full object-cover"
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
          <button
            onClick={toggleView}
            className="px-6 py-3 rounded-2xl text-white font-['Red_Hat_Display'] font-semibold text-xl transition-transform hover:scale-105"
            style={{
              background: 'linear-gradient(100.654deg, rgb(178, 103, 241) 4.0048%, rgb(219, 125, 210) 37.894%, rgb(250, 140, 186) 71.782%, rgb(251, 160, 69) 105.67%)',
            }}
          >
            {visibleCount === 3 ? 'see more.' : 'see less.'}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}