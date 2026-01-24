import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import svgPaths from "../../imports/svg-fcov86nyay";
import thambu from "../../assets/thambu.png";
import athira from "../../assets/athira.png";
import rijas from "../../assets/rijaska.png";
import aswath from "../../assets/aswathh.png";
import soorya from "../../assets/soorya.png";
import akshay from "../../assets/akshay.png";
import kiran from "../../assets/kiran.png";

const testimonials = [
  {
    id: 1,
    name: 'Thamanna Manaf',
    role: 'Project Coordinator at Konceptslab',
    text: 'Neha communicated clearly, managed timelines effectively, handled feedback smoothly, and helped keep the team aligned while delivering work on schedule.',
    rotation: 4,
    image: thambu,
    scale: 1.4,
    x: 4,
    y: 2,
  },
  {
    id: 2,
    name: 'Athira K M',
    role: 'UI/UX Designer at Konceptslab',
    text: 'A passionate and dedicated UI/UX designer intern with strong Figma skills, a quick learner who adapts fast and consistently delivers quality design work.',
    rotation: -4,
    image: athira,
    scale: 1.5,
    x: 5,
    y: 2,
  },
  {
    id: 3,
    name: 'Muhammad Rijas',
    role: 'CRO at Konceptslab',
    text: 'Working with Neha was amazing. She designed my landing page and app beautifully. Her Figma skills, color sense, and intuitive design style really stood out.',
    rotation: 8,
    image: rijas,
    scale: 1.4,
    x: 5,
    y: 8,
  },
  {
    id: 4,
    name: 'Ashwath Sivan P',
    role: 'Lead Developer at Konceptslab',
    text: 'Neha was easy to collaborate with and responsive to feedback, her designs aligned with development needs, supporting execution smooth delivery.',
    rotation: 2,
    image: aswath,
    scale: 1.6,
    x: 8,
    y: 3,
  },
  {
    id: 5,
    name: 'Soorya PS',
    role: 'QA at Konceptslab',
    text: 'Neha’s designs were clear, consistent, and easy to test; her attention to detail reduced ambiguity and ensured validation across features.',
    rotation: -8,
    image: soorya,
    scale: 1.7,
    x: 5,
    y: 6,
  },
  {
    id: 6,
    name: 'Akshay CS',
    role: 'Flutter Developer at Konceptslab',
    text: 'Designs translated smoothly into Flutter components, with clear layouts and states, making implementation straightforward.',
    rotation: 2,
    image: akshay,
    scale: 1.7,
    x: 5,
    y: 6,
  },
  {
    id: 7,
    name: 'Kiran',
    role: 'Web Developer at Konceptslab',
    text: 'Neha’s designs were clear and structured, making implementation easy and reducing friction during development overall.',
    rotation: -4,
    image: kiran,
    scale: 1.7,
    x: 5,
    y: 8,
  },
];

// Duplicate testimonials for seamless infinite scroll
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isDragging = false;
    let startX: number;
    let scrollLeft: number;
    let isPaused = false;
    let animationFrameId: number;

    // Calculate set width accurately
    const cardWidth = 280; // 256px width + 24px gap
    const oneSetWidth = cardWidth * testimonials.length;

    // Initial scroll to the middle
    container.scrollLeft = oneSetWidth;

    const autoScroll = () => {
      if (container && !isDragging && !isPaused) {
        container.scrollLeft += 1; // Faster speed for testing (1px per frame)

        if (container.scrollLeft >= oneSetWidth * 2) {
          container.scrollLeft -= oneSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += oneSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      isPaused = true;
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      container.style.cursor = 'grabbing';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      let targetScroll = scrollLeft - walk;

      if (targetScroll >= oneSetWidth * 2) targetScroll -= oneSetWidth;
      if (targetScroll <= 0) targetScroll += oneSetWidth;

      container.scrollLeft = targetScroll;
    };

    const handleMouseUp = () => {
      isDragging = false;
      isPaused = false;
      container.style.cursor = 'grab';
    };

    const handleTouchStart = (e: TouchEvent) => {
      isDragging = true;
      isPaused = true;
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      let targetScroll = scrollLeft - walk;

      if (targetScroll >= oneSetWidth * 2) targetScroll -= oneSetWidth;
      if (targetScroll <= 0) targetScroll += oneSetWidth;

      container.scrollLeft = targetScroll;
    };

    const handleMouseEnter = () => { isPaused = true; container.style.cursor = 'grab'; };
    const handleMouseLeave = () => { if (!isDragging) isPaused = false; container.style.cursor = 'default'; };

    // Register events
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleMouseUp);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Initial start
    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleMouseUp);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="pt-20 md:pt-32 pb-0 overflow-hidden bg-white">
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-2 md:mb-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-black">
            <span className="font-['Red_Hat_Display'] font-medium">what people </span>
            <span className="font-['Playfair_Display'] italic font-medium">say.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-['Red_Hat_Display'] font-medium">
            Kind words from people I’ve collaborated with on projects and student initiatives, who
            often describe me as easy to work with, dependable, and calm when things get busy.
          </p>
        </div>

        {/* Testimonial Cards - Auto-scrolling */}
        <div
          ref={scrollContainerRef}
          className="w-full flex gap-6 overflow-x-hidden pt-16 pb-24 select-none"
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {infiniteTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (index % testimonials.length) * 0.05 }}
              style={{ rotate: `${testimonial.rotation}deg` }}
            >
              <div className="bg-[#f7f7f7] rounded-[2.5rem] p-5 md:p-6 w-64 h-96 relative overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                {/* Name and Role */}
                <div className="text-left mb-3 md:mb-4">
                  <h3 className="font-['Red_Hat_Display'] font-semibold text-base md:text-lg text-black">
                    {testimonial.name}
                  </h3>
                  <p className="font-['Red_Hat_Display'] font-light text-xs text-black opacity-70">
                    {testimonial.role}
                  </p>
                </div>

                {/* Testimonial Text */}
                <p className="font-['Red_Hat_Display'] text-xs md:text-sm text-black leading-relaxed mb-16 md:mb-20">
                  {testimonial.text}
                </p>

                {/* Decorative SVG */}
                <div className="absolute bottom-20 md:bottom-24 left-4 md:left-6 w-16 md:w-20 h-10 md:h-12 opacity-80">
                  <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.3684 49.8672">
                    <path d={svgPaths.p3ae0d00} stroke="#FA8CBA" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>

                {/* Person Image */}
                <div className="absolute bottom-0 right-0 w-36 md:w-44 h-44 md:h-52 overflow-hidden pointer-events-none">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="w-full h-full object-cover select-none object-top"
                    style={{
                      transform: `scale(${testimonial.scale}) translate(${testimonial.x}%, ${testimonial.y}%)`,
                    }}
                    draggable="false"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  );
}