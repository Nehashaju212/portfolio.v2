import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const projects = [
  { id: 'think-ai', title: 'Think AI' },
  { id: 'project-2', title: 'Think AI' },
  { id: 'project-3', title: 'Think AI' },
  { id: 'project-4', title: 'Think AI' },
  { id: 'project-5', title: 'Think AI' },
  { id: 'project-6', title: 'Think AI' },
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
                <div className="bg-[#d6d6d6] rounded-xl h-64 mb-4 overflow-hidden transition-transform group-hover:scale-105 cursor-pointer">
                  {/* Placeholder for project image */}
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