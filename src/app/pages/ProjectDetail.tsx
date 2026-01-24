import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Footer } from '@/app/components/Footer';
import { Header } from '@/app/components/Header';
import caseStudyImage from '@/assets/casestudy.jpeg';
import virtualcalcImage from '@/assets/virtualcalc.png';
import signImage from '@/assets/sign.png';
import thinkImage from '@/assets/think ai.png';
import pharmImage from '@/assets/pharmassistt.png';
import inflowImage from '@/assets/inflow.png';
import posterImage from '@/assets/posters.png';



interface Project {
  title: string;
  description: string;
  fullDescription: string;
  technologies?: string[];
  features: string[];
  challenges?: string;
  outcome?: string;
  link?: string;
  github?: string;
  figma?: string;
  image?: string;
}

// Project data - expand this with your actual project details
const projectsData: Record<string, Project> = {
  'case-studies': {
    title: 'Case Studies',
    description: 'A collection of structured case studies created for Koncepts Lab, highlighting real projects, key features, and practical applications across different services.',
    fullDescription: 'This case study series was created to clearly present the services offered through real project examples. Each study focuses on showcasing core features, workflows, and outcomes in a way that’s easy to understand and visually clear. The goal was to help viewers quickly grasp what each service involves and how it can be applied in real-world scenarios.',
    technologies: ['Research', 'Analysis', 'UI Design', 'Content Creation'],
    features: [
      'In-depth problem analysis',
      'Strategic solution planning',
      'Performance metrics tracking',
      'Comprehensive reporting'
    ],
    challenges: 'Presenting complex services in a clear and concise way, while maintaining consistency across multiple case studies and ensuring the information remained easy to follow.',
    outcome: 'A set of well-structured case studies that clearly communicate service offerings, highlight key features, and provide viewers with a better understanding of the solutions delivered.',
    link: 'https://www.konceptslab.com/case-studies',
    figma: 'https://www.figma.com/design/28H06klDsuwB7OV9ixanxx/KL-case-study?node-id=0-1&t=7k8RWq7PgS0f3Nbf-1',
    image: caseStudyImage
  },
  'virtual-calculator': {
    title: 'Virtual Calculator',
    description: 'A simple, interactive virtual calculator with gesture control, designed to perform basic arithmetic with clarity and ease.',
    fullDescription: 'This project is a fully code-driven virtual calculator built using Python. It uses gesture control as an alternative input method to perform basic arithmetic operations, focusing on logic implementation and input handling rather than visual interface design. The project was developed to explore gesture recognition, input mapping, and real-time processing through code.',
    technologies: ['Python', 'OpenCV', 'Mediapipe', 'Numpy'],
    features: [
      'Real-time gesture recognition',
      'Hand landmark detection',
      'Contactless arithmetic operations',
      'Visual feedback system'
    ],
    challenges: 'Interpreting gesture input accurately, mapping gestures to arithmetic operations, and handling calculations in real time while maintaining reliable performance.',
    outcome: 'A functional gesture-controlled virtual calculator built entirely with Python, capable of performing basic arithmetic operations through gesture-based input with consistent and accurate results.',
    github: 'https://github.com/Nehashaju212/Virtual-Calculator',
    image: virtualcalcImage
  },
  'sign-language-translator': {
    title: 'Sign Language Translator',
    description: 'A Python-based computer vision system that translates hand gestures into readable text.',
    fullDescription: 'This project focuses on building a sign language translator using computer vision techniques in Python. The system detects and interprets hand gestures through a camera feed and converts them into corresponding text output. The aim was to explore gesture recognition, real-time processing, and the application of computer vision to improve accessibility and communication.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'React'],
    features: [
      'Real-time gesture recognition',
      'Multi-language support',
      'Text-to-speech integration',
      'User-friendly interface'
    ],
    challenges: 'Accurately detecting hand gestures in real time, handling variations in lighting and hand positions, and mapping gestures to correct outputs consistently.',
    outcome: 'A functional sign language translation system capable of recognizing predefined gestures and converting them into readable text using computer vision techniques in Python.',
    github: 'https://github.com/Nehashaju212/Sign-Language-Translator',
    image: signImage
  },
  'think-ai': {
    title: 'Think AI',
    description: 'A content-driven platform showcasing real-world AI challenges.',
    fullDescription: 'ThinkAI is a public-facing, read-only platform created to present AI challenges derived from real government problem statements. The focus of the project was on structuring and presenting information clearly so users can understand the problem, context, and expected outcomes without unnecessary complexity. The platform serves as a central space where challenges can be explored and understood, while submissions are handled externally.',
    technologies: ['React', 'TypeScript', 'OpenAI API', 'Node.js', 'TailwindCSS'],
    features: [
      'Real-time AI-powered suggestions',
      'Interactive problem-solving interface',
      'Customizable thinking frameworks',
      'Export and share capabilities'
    ],
    challenges: 'Organizing detailed and content-heavy problem statements in a way that remains clear and easy to navigate. Ensuring consistency across different sections like tasks, detailed views, FAQs, and impact pages was another key challenge.',
    outcome: 'A well-structured platform that clearly presents AI challenges, supporting information, and outcomes in a way that is easy to understand and navigate. The final result helps users quickly grasp the purpose of each challenge and how they can engage with it.',
    figma: 'https://www.figma.com/design/PI24lsIlX0sKiS4dUZ15qt/thinkkkk?node-id=0-1&t=4ll8y4isGQZ1gQu7-1',
    image: thinkImage
  },

  'pharma-assist': {
    title: 'PharmaAssist',
    description: 'A digital platform designed to simplify ordering medicines and health essentials with quick access and clear flow.',
    fullDescription: 'PharmAssist is a web-based platform created to make ordering medicines and health essentials easier and more accessible. The platform allows users to search for medicines, select their location, and place orders through a clear and straightforward flow. The project focuses on reducing friction in the medicine-ordering process by presenting essential actions upfront and keeping the experience simple and intuitive.',
    technologies: ['React', 'TailwindCSS', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Inventory management',
      'Patient profile system',
      'Drug interaction checker',
      'Automated reordering'
    ],
    challenges: 'Designing a flow that feels reliable and easy to use, especially for users who may not be very tech-savvy. Another challenge was presenting essential actions like location selection and medicine search clearly without overwhelming the interface. Maintaining clarity while handling health-related content required careful layout and hierarchy decisions.',
    outcome: 'A clean and user-friendly platform that enables users to quickly find medicines, understand available options, and navigate the ordering process with ease. The final result emphasizes clarity, accessibility, and a smooth user experience.',
    github: 'https://github.com/Pharm-Assist/pharmassistt',
    image: pharmImage
  },
  'inflow-redesign': {
    title: 'InFlow Redesign',
    description: 'A UI/UX redesign focused on improving clarity, usability, and conversation flow.',
    fullDescription: 'This project involved redesigning the Inflow Chat interface to create a clearer and more intuitive messaging experience. The focus was on simplifying interactions, improving visual hierarchy, and making conversations easier to follow. The redesign aimed to reduce friction in everyday chat usage while maintaining a clean and modern look.',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Testing'],
    features: [
      'Modern design system',
      'Improved navigation flow',
      'Dark mode support',
      'Accessibility compliance'
    ],
    challenges: 'Balancing functionality with simplicity in a chat interface, while ensuring messages, actions, and states were clearly distinguishable. Another challenge was improving readability and flow without adding unnecessary visual elements.',
    outcome: 'A refined chat interface that feels cleaner, easier to navigate, and more intuitive to use. The redesign improves message clarity and overall interaction flow, resulting in a smoother chat experience.',
    figma: 'https://www.figma.com/design/LCAIML1voCpo2FhIxjlOfR/InFlow.chat---Redesign?t=BDQP6XlhnxH5OvVR-0',
    image: inflowImage
  },
  'creative-posters': {
    title: 'Creative Posters Collection',
    description: 'A curated set of posters created across different themes and purposes.',
    fullDescription: 'This collection brings together posters designed for events, campaigns, and digital platforms. The focus across the work is on clear visual communication through thoughtful use of typography, color, and layout. Each poster explores different styles while keeping clarity and purpose at the center of the design.',
    features: [
      'Clear visual communication',
      'Thoughtful use of typography',
      'Color theory',
      'Visual composition'
    ],
    figma: 'https://www.figma.com/design/uG8qSsjdvig5IoyODJJJLq/Posters?node-id=0-1&p=f&t=mOeXIJmgw9RnHaEf-0',
    image: posterImage
  }
};

export function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();

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
      <Header />
      <div className="max-w-[1800px] mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Sidebar / Back Navigation - Occupies left columns */}
        <div className="lg:col-span-2 lg:col-start-1 flex-shrink-0 mb-12 lg:mb-0 lg:sticky lg:top-32 h-fit">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-lg font-medium text-gray-500 hover:text-black transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
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
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} Hero`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <p className="text-gray-400 text-xl font-medium">Project Image</p>
            )}
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
          {project.technologies && project.technologies.length > 0 && (
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
          )}

          {/* Challenges & Outcome */}
          {(project.challenges || project.outcome) && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {project.challenges && (
                <div>
                  <h2 className="text-3xl md:text-5xl mb-6 text-black">
                    <span className="font-['Red_Hat_Display'] font-medium">the </span>
                    <span className="font-['Playfair_Display'] italic font-medium">challenges.</span>
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}
              {project.outcome && (
                <div>
                  <h2 className="text-3xl md:text-5xl mb-6 text-black">
                    <span className="font-['Red_Hat_Display'] font-medium">the </span>
                    <span className="font-['Playfair_Display'] italic font-medium">outcome.</span>
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              )}
            </motion.div>
          )}
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
            {project.figma && (
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-2xl bg-gray-100 text-black text-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Figma
              </a>
            )}
          </motion.div>


        </div >
      </div >
      <Footer />
    </div >
  );
}