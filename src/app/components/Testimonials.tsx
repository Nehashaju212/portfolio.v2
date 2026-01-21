import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import svgPaths from "../../imports/svg-fcov86nyay";
import thambu from "../../assets/thambu.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";

const testimonials = [
  {
    id: 1,
    name: 'Thamanna Manaf',
    role: 'Project Coordinator at Konceptslab',
    text: 'neha enna scnaaa. pspspsss, hardworking, dedicatedd. work workk workkkkkk enna chindha mathram olluu.',
    rotation: 4,
    image: thambu,
    scale: 1.1,
    x: 0,
    y: 5,
  },
  {
    id: 2,
    name: 'Athira K M',
    role: 'UI/UX Designer at Konceptslab',
    text: 'neha enna scnaaa. pspspsss, hardworking, dedicatedd. work workk workkkkkk enna chindha mathram olluu.',
    rotation: -4,
    image: img3,
    scale: 1.1,
    x: -5,
    y: 0,
  },
  {
    id: 3,
    name: 'Neha Shaju',
    role: 'UI/UX Designer at Konceptslab',
    text: 'neha enna scnaaa. pspspsss, hardworking, dedicatedd. work workk workkkkkk enna chindha mathram olluu.',
    rotation: 8,
    image: img4,
    scale: 1.2,
    x: 0,
    y: 10,
  },
  {
    id: 4,
    name: 'Neha Shaju',
    role: 'ui ux at konceptslab',
    text: 'neha enna scnaaa. pspspsss, hardworking, dedicatedd. work workk workkkkkk enna chindha mathram olluu.',
    rotation: 2,
    image: img5,
    scale: 1.1,
    x: 0,
    y: 0,
  },
  {
    id: 5,
    name: 'Neha Shaju',
    role: 'ui ux at konceptslab',
    text: 'neha enna scnaaa. pspspsss, hardworking, dedicatedd. work workk workkkkkk enna chindha mathram olluu.',
    rotation: -8,
    image: img6,
    scale: 1.1,
    x: 5,
    y: 5,
  },
  {
    id: 6,
    name: 'Neha Shaju',
    role: 'ui ux at konceptslab',
    text: 'neha enna scnaaa. pspspsss, hardworking, dedicatedd. work workk workkkkkk enna chindha mathram olluu.',
    rotation: 2,
    image: img7,
    scale: 1.1,
    x: 0,
    y: 0,
  },
];

// Duplicate testimonials for seamless infinite scroll
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Auto-scroll configuration
    const scrollSpeed = 0.3; // pixels per frame (adjust for speed)
    let animationFrameId: number;

    const autoScroll = () => {
      if (container) {
        container.scrollLeft += scrollSpeed;

        // Calculate one set width for seamless reset
        const cardWidth = 256 + 24; // w-64 (256px) + gap-6 (24px)
        const oneSetWidth = cardWidth * testimonials.length;

        // Reset to beginning seamlessly when one set has scrolled
        if (container.scrollLeft >= oneSetWidth) {
          container.scrollLeft -= oneSetWidth;
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll
    animationFrameId = requestAnimationFrame(autoScroll);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-20 md:py-32 px-4 overflow-hidden bg-white">
      <motion.div
        className="max-w-7xl mx-auto"
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
          className="flex gap-6 overflow-x-auto pt-16 pb-24 scrollbar-hide"
          style={{
            scrollBehavior: 'auto',
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
              <div className="bg-[#f7f7f7] rounded-xl p-5 md:p-6 w-64 h-96 relative overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105">
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