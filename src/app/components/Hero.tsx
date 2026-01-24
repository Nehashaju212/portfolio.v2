import { motion } from 'motion/react';
import imgBall from "../../assets/tape.png";
import imgCap from "../../assets/cap.png";
import imgCase from "../../assets/watermelon.png";
import imgCd from "../../assets/cddd.png";
import imgFilm from "../../assets/shake.png";
import imgPaint from "../../assets/painttt.png";
import imgSmile from "../../assets/smile.png";
import imgCake from "../../assets/yumm.png";

// Using different Figma assets for a more varied look
const floatingImages = [
  {
    id: 1,
    src: imgBall,
    left: '10%',
    top: '15%',
    rotation: -5,
    delay: 0,
    sizeClasses: 'w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32'
  },
  {
    id: 2,
    src: imgCase,
    left: '35%',
    top: '10%',
    rotation: 8,
    delay: 0.2,
    sizeClasses: 'w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-56 lg:h-56'
  },
  {
    id: 3,
    src: imgCap,
    left: '60%',
    top: '11%',
    rotation: -3,
    delay: 0.4,
    sizeClasses: 'w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48'
  },
  {
    id: 4,
    src: imgCd,
    left: '79%',
    top: '30%',
    rotation: -12,
    delay: 0.6,
    sizeClasses: 'w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48'
  },
  {
    id: 5,
    src: imgCake,
    left: '73%',
    top: '55%',
    rotation: -7,
    delay: 0.8,
    sizeClasses: 'w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48'
  },
  {
    id: 6,
    src: imgFilm,
    left: '20%',
    top: '62%',
    rotation: 4,
    delay: 1.0,
    sizeClasses: 'w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48'
  },
  {
    id: 7,
    src: imgPaint,
    left: '8%',
    top: '42%',
    rotation: -50,
    delay: 1.2,
    sizeClasses: 'w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48'
  },
  {
    id: 8,
    src: imgSmile,
    left: '48%',
    top: '72%',
    rotation: 6,
    delay: 1.4,
    sizeClasses: 'w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48'
  },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 px-4">
      {/* Floating Images */}
      {floatingImages.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute ${item.sizeClasses}`}
          style={{
            left: item.left,
            top: item.top,
          }}
          initial={{ opacity: 0, y: 50, rotate: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: item.rotation,
          }}
          transition={{
            duration: 0.8,
            delay: item.delay,
            ease: "easeOut"
          }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4 + item.id * 0.3,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ rotate: item.rotation }}
            className="w-full h-full"
          >
            <div
              className="relative w-full h-full flex items-center justify-center p-2"
              style={{
                transform: 'translateZ(0)',
                willChange: 'transform',
              }}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Hero Text */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold leading-tight text-black mb-0">
          <span className="font-['Red_Hat_Display'] font-extrabold">code, eat & </span>
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight text-black">
          <span className="font-['Playfair_Display'] italic font-semibold">design!</span>
        </h1>
      </motion.div>
    </section>
  );
}