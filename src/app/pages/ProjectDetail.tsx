import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Footer } from '@/app/components/Footer';
import caseStudyImage from '@/assets/casestudy.jpeg';
import virtualcalcImage from '@/assets/virtualcalc.png';
import signImage from '@/assets/sign.png';
import thinkImage from '@/assets/think ai.png';
import pharmImage from '@/assets/pharmassistt.png';



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
  figma?: string;
  image?: string;
}

// Project data - expand this with your actual project details
const projectsData: Record<string, Project> = {
  'project-1': {
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
  'project-2': {
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
  'project-3': {
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
  'project-4': {
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

  'project-6': {
    title: 'PharmaAssist',
    description: 'A digital assistant for pharmacists to manage inventory and patient records.',
    fullDescription: 'PharmaAssist streamlines pharmacy operations by automating inventory tracking and providing quick access to patient medication history and drug interaction data.',
    technologies: ['Angular', 'Firebase', 'RxJS'],
    features: [
      'Inventory management',
      'Patient profile system',
      'Drug interaction checker',
      'Automated reordering'
    ],
    challenges: 'Ensuring data privacy and compliance with healthcare regulations.',
    outcome: 'Adopted by 5 local pharmacies, improving operational efficiency.',
    github: 'https://github.com/Pharm-Assist/pharmassistt',
    image: pharmImage
  },
  'project-7': {
    title: 'Weather Forecast App',
    description: 'A beautiful and accurate weather application providing global forecasts.',
    fullDescription: 'This app delivers real-time weather updates, hourly forecasts, and 7-day outlooks using data from reliable meteorological sources, presented in a visually appealing interface.',
    technologies: ['React Native', 'OpenWeatherMap API', 'Redux'],
    features: [
      'Location-based weather',
      'Severe weather alerts',
      'Interactive maps',
      'Customizable themes'
    ],
    challenges: 'Managing API rate limits and optimizing battery usage on mobile devices.',
    outcome: '4.5-star rating on the app store with over 10k downloads.',
    link: '#',
    github: '#'
  },
  'project-8': {
    title: 'InFlow Redesign',
    description: 'A comprehensive UI/UX redesign of the popular InFlow productivity app.',
    fullDescription: 'This project involved a complete overhaul of the user interface and experience for InFlow, focusing on intuitive navigation, accessibility, and a modern aesthetic.',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Testing'],
    features: [
      'Modern design system',
      'Improved navigation flow',
      'Dark mode support',
      'Accessibility compliance'
    ],
    challenges: 'Balancing the needs of existing power users with a friendly onboarding for new users.',
    outcome: 'User engagement increased by 25% following the redesign.',
    link: '#',
    github: '#'
  },
  'project-9': {
    title: 'Creative Posters Collection',
    description: 'A digital gallery showcasing a series of creative graphic design posters.',
    fullDescription: 'This portfolio piece highlights a collection of artistic posters created for various events and brands, exploring typography, color theory, and visual composition.',
    technologies: ['Photoshop', 'Illustrator', 'InDesign'],
    features: [
      'High-resolution gallery',
      'Behind-the-scenes process',
      'Print-ready downloads',
      'Interactive viewing experience'
    ],
    challenges: 'Accurately representing print colors on digital screens.',
    outcome: 'Selected for display in a digital arts exhibition.',
    link: '#',
    github: '#'
  },
  'project-10': {
    title: 'GoodTurn',
    description: 'A platform connecting volunteers with local community service opportunities.',
    fullDescription: 'GoodTurn is a social platform that makes it easy for individuals to find and sign up for volunteer work in their community, fostering a culture of giving back.',
    technologies: ['Vue.js', 'Django', 'PostgreSQL'],
    features: [
      'Event discovery map',
      'Volunteer profiles',
      'Organization dashboards',
      'Impact tracking'
    ],
    challenges: 'Building trust and verification systems for both volunteers and organizations.',
    outcome: 'Facilitated over 5000 hours of community service in the first year.',
    link: '#',
    github: '#'
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
      <div className="max-w-[1800px] mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Sidebar / Back Navigation - Occupies left columns */}
        <div className="lg:col-span-2 lg:col-start-1 flex-shrink-0 mb-12 lg:mb-0 lg:sticky lg:top-32 h-fit">
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-sm font-medium text-gray-500 hover:text-black transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
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


        </div>
      </div>
      <Footer />
    </div>
  );
}