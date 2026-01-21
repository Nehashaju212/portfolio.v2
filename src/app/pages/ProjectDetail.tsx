import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Contact } from '@/app/components/Contact';

// Project data - expand this with your actual project details
const projectsData = {
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
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 py-6"
        style={{
          background: 'linear-gradient(100.654deg, rgb(178, 103, 241) 4.0048%, rgb(219, 125, 210) 37.894%, rgb(250, 140, 186) 71.782%, rgb(251, 160, 69) 105.67%)',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-white font-['Red_Hat_Display'] font-semibold text-lg hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </button>
          <h1 className="font-['Red_Hat_Display'] font-bold text-2xl text-white">
            {project.title}
          </h1>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="bg-[#d6d6d6] rounded-2xl h-[400px] md:h-[500px] mb-8 overflow-hidden">
              {/* Placeholder for project hero image */}
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-500 font-['Red_Hat_Display'] text-xl">Project Image</p>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-['Red_Hat_Display'] font-bold mb-6 text-black">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl font-['Red_Hat_Display'] font-medium text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </motion.div>

          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-['Red_Hat_Display'] font-bold mb-6 text-black">
              Overview
            </h2>
            <p className="text-lg md:text-xl font-['Red_Hat_Display'] font-medium text-gray-700 leading-relaxed">
              {project.fullDescription}
            </p>
          </motion.section>

          {/* Technologies */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-['Red_Hat_Display'] font-bold mb-6 text-black">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 rounded-full text-white font-['Red_Hat_Display'] font-semibold text-lg"
                  style={{
                    background: 'linear-gradient(100.654deg, rgb(178, 103, 241) 4.0048%, rgb(219, 125, 210) 37.894%, rgb(250, 140, 186) 71.782%, rgb(251, 160, 69) 105.67%)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Key Features */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-['Red_Hat_Display'] font-bold mb-6 text-black">
              Key Features
            </h2>
            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-xl font-['Red_Hat_Display'] text-gray-700"
                >
                  <span className="text-2xl" style={{ color: 'rgb(178, 103, 241)' }}>•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Challenges & Solutions */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-['Red_Hat_Display'] font-bold mb-6 text-black">
              Challenges & Solutions
            </h2>
            <p className="text-lg md:text-xl font-['Red_Hat_Display'] font-medium text-gray-700 leading-relaxed">
              {project.challenges}
            </p>
          </motion.section>

          {/* Outcome */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-['Red_Hat_Display'] font-bold mb-6 text-black">
              Outcome
            </h2>
            <p className="text-lg md:text-xl font-['Red_Hat_Display'] font-medium text-gray-700 leading-relaxed">
              {project.outcome}
            </p>
          </motion.section>

          {/* Links */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl text-white font-['Red_Hat_Display'] font-semibold text-xl transition-transform hover:scale-105"
              style={{
                background: 'linear-gradient(100.654deg, rgb(178, 103, 241) 4.0048%, rgb(219, 125, 210) 37.894%, rgb(250, 140, 186) 71.782%, rgb(251, 160, 69) 105.67%)',
              }}
            >
              Visit Live Site
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-black text-white font-['Red_Hat_Display'] font-semibold text-xl transition-transform hover:scale-105"
            >
              View on GitHub
            </a>
          </motion.section>
        </div>
      </main>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-gray-50 py-20 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-['Red_Hat_Display'] font-bold mb-6 text-black">
            Interested in working together?
          </h2>
          <Contact />
        </div>
      </motion.div>
    </div>
  );
}