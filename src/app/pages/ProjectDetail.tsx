import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Footer } from '@/app/components/Footer';



interface Project {
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  challenges: string;
  outcome: string;
  link?: string;
  github?: string;
}

// Project data - expand this with your actual project details
const projectsData: Record<string, Project> = {
  'think-ai': {
    title: 'Think AI',
    description: 'An innovative AI-powered application that helps users think more creatively and solve complex problems.',
    fullDescription: 'Think AI is a comprehensive platform designed to enhance cognitive processes through artificial intelligence. The application leverages advanced machine learning algorithms to provide intelligent suggestions, creative prompts, and problem-solving frameworks.',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Node.js', 'TailwindCSS'],
    features: [
      'Real-time AI-powered suggestions',
      'Interactive problem-solving interface',
      'Customizable thinking frameworks',
      'Export and share capabilities'
    ],
    challenges: 'The main challenge was creating an intuitive interface that could handle complex AI responses while maintaining a simple user experience.',
    outcome: 'Successfully launched with 1000+ active users in the first month.',
    link: 'https://example.com',
    github: 'https://github.com/example/think-ai'
  },
  'project-2': {
    title: 'Project 2',
    description: 'A second amazing project showcasing different skills and technologies.',
    fullDescription: 'This project demonstrates expertise in full-stack development with a focus on user experience and performance optimization.',
    technologies: ['Next.js', 'PostgreSQL', 'Prisma', 'Vercel'],
    features: [
      'Server-side rendering for optimal performance',
      'Database integration with ORM',
      'Authentication and authorization',
      'Responsive design across all devices'
    ],
    challenges: 'Optimizing database queries and implementing efficient caching strategies.',
    outcome: 'Achieved 98% lighthouse score and sub-second page load times.',
    link: 'https://example.com',
    github: 'https://github.com/example/project-2'
  },
  'project-3': {
    title: 'Project 3',
    description: 'An innovative third project that pushes boundaries.',
    fullDescription: 'This project explores cutting-edge web technologies and modern development practices to create an exceptional user experience.',
    technologies: ['React', 'Three.js', 'WebGL', 'Framer Motion'],
    features: [
      '3D interactive elements',
      'Smooth animations and transitions',
      'Advanced user interactions',
      'Cross-browser compatibility'
    ],
    challenges: 'Implementing complex 3D animations while maintaining performance across devices.',
    outcome: 'Featured on multiple design showcases and portfolios.',
    link: 'https://example.com',
    github: 'https://github.com/example/project-3'
  }
};

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-['Red_Hat_Display'] font-bold mb-4">Project Not Found</h1>
          <Link
            to="/"
            className="text-xl font-['Red_Hat_Display'] text-purple-600 hover:underline"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black font-['Red_Hat_Display']">
      <div className="max-w-[1800px] mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Sidebar / Back Navigation - Occupies left columns */}
        <div className="lg:col-span-2 lg:col-start-1 flex-shrink-0 mb-12 lg:mb-0 lg:sticky lg:top-32 h-fit">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-sm font-medium text-gray-500 hover:text-black transition-colors group"
          >
            <span className="transition-transform group-hover:-translate-x-1">&larr;</span>
            back to portfolio
          </Link>
        </div>

        {/* Main Content Area - Centered (8 cols, starting at 3) */}
        <div className="lg:col-span-8 lg:col-start-3">
          {/* Hero Image Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full aspect-[16/10] bg-[#d9d9d9] rounded-3xl mb-16 flex items-center justify-center overflow-hidden shadow-sm"
          >
            <p className="text-gray-400 text-xl font-medium">Project Image</p>
          </motion.div>

          {/* Title & Short Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-black tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-normal max-w-3xl">
              {project.description}
            </p>
          </motion.div>

          {/* Overview Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-5xl mb-6 text-black">
              <span className="font-['Red_Hat_Display'] font-medium">what it's </span>
              <span className="font-['Playfair_Display'] italic font-medium">about.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl">
              {project.fullDescription}
            </p>
          </motion.section>


          {/* Technologies */}
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <div className="flex flex-wrap gap-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 rounded-full border border-gray-200 text-gray-800 text-lg font-medium bg-gray-50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Challenges */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-3xl md:text-5xl mb-6 text-black">
                <span className="font-['Red_Hat_Display'] font-medium">the </span>
                <span className="font-['Playfair_Display'] italic font-medium">challenges.</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.challenges}
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl mb-6 text-black">
                <span className="font-['Red_Hat_Display'] font-medium">the </span>
                <span className="font-['Playfair_Display'] italic font-medium">outcome.</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            className="flex flex-wrap gap-6 mb-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-2xl bg-black text-white text-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Visit Live Site
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-2xl bg-gray-100 text-black text-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                GitHub
              </a>
            )}
          </motion.div>


        </div>
      </div>
      <Footer />
    </div>
  );
}