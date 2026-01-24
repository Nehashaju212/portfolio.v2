import { motion, useAnimationFrame, useMotionValue, useSpring } from 'framer-motion';
import { useState } from 'react';

// Your imports
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import img7 from "../../assets/7.png";
import img8 from "../../assets/8.png";
import img9 from "../../assets/9.png";
import img10 from "../../assets/10.png";
import img11 from "../../assets/11.png";
import img12 from "../../assets/12.png";
import img13 from "../../assets/13.png";
import img14 from "../../assets/14.jpg";
import img15 from "../../assets/15.jpeg";
import imgCap from "../../assets/cap.png";
import imgThambu from "../../assets/thambu.png";
import imgFilm from "../../assets/film.png";
import imgPaint from "../../assets/paint.png";
import imgCam from "../../assets/cam.png";

// Creating a set of 15 unique images from 1 to 15
const baseImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15];
const images = baseImages;

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

export function About() {
  const [isPaused, setIsPaused] = useState(false);
  const rotation = useMotionValue(0);

  const smoothRotation = useSpring(rotation, {
    damping: 30,
    stiffness: 50,
    mass: 1.5
  });

  // --- DESIGN PRECISION SETTINGS ---
  const perspectiveValue = "600px";
  // Adjusted radius for 15 items to maintain comfortable spacing
  const radius = -800;
  const cardWidth = 300;
  const angleStep = 360 / images.length;

  useAnimationFrame((t, delta) => {
    if (!isPaused) {
      rotation.set(rotation.get() + delta * 0.007);
    }
  });

  const onDrag = (e, info) => {
    rotation.set(rotation.get() + info.delta.x * 0.15);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="bg-white py-24 overflow-hidden select-none">
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-20">
        <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-black">
          <span className="font-['Red_Hat_Display'] font-medium">A little about </span>
          <span className="font-['Playfair_Display'] italic font-medium">me.</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto font-['Red_Hat_Display'] font-medium">
          I’m a computer science student learning through hands-on projects, experimenting with code,
          and improving my design sense along the way. Alongside this, I’m part of student communities
          and volunteering activities, where I enjoy collaborating and being involved.
        </p>
      </div>

      {/* 3D SCENE */}
      <div
        className="relative h-[500px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing -mt-32"
        style={{ perspective: perspectiveValue }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          drag="x"
          // Keep the element fixed in position
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          onDrag={onDrag}
          style={{
            rotateY: smoothRotation,
            transformStyle: "preserve-3d",
          }}
          className="relative flex items-center justify-center"
        >
          {images.map((src, index) => {
            const angle = index * angleStep;

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  width: `${cardWidth}px`,
                  height: "400px",
                  // No padding = edges are determined by cardWidth
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                {/* 12px corners, No borders, Hairline gap via margin */}
                <div className="mx-[2px] h-full rounded-[12px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] bg-gray-50">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* SEE MORE BUTTON */}
      <div className="flex flex-col items-center -mt-32 relative z-10 space-y-12">
        {!isExpanded && (
          <motion.button
            variants={buttonVariants}
            initial="initial"
            animate="pulse"
            whileHover="hover"
            whileTap="tap"
            onClick={() => setIsExpanded(true)}
            className="px-12 py-3.5 rounded-2xl text-white font-semibold text-xl shadow-lg"
            style={{
              background: 'linear-gradient(270deg, #B267F1, #DB7DD2, #FA8CBA, #FBA045, #B267F1)',
              backgroundSize: '400% 400%',
            }}
          >
            see more.
          </motion.button>
        )}

        {/* EXPANDED CONTENT */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="overflow-hidden w-full max-w-5xl px-6"
        >
          <div className="flex flex-col gap-24 pt-16 pb-16">

            {/* 1. Academic Journey */}
            <div className="relative">
              <h3 className="text-4xl md:text-5xl text-center mb-12 text-black">
                <span className="font-['Red_Hat_Display'] font-medium">academic journey so </span>
                <span className="font-['Playfair_Display'] italic font-medium">far.</span>
              </h3>

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 max-w-4xl mx-auto">
                <div className="space-y-8 flex-1">
                  <div>
                    <h4 className="font-['Red_Hat_Display'] font-bold text-xl text-black">B.tech in computer science</h4>
                    <p className="font-['Red_Hat_Display'] text-gray-700 text-lg md:text-xl font-medium mt-1">
                      sahrdaya college of engineering and technology
                    </p>
                    <p className="font-['Red_Hat_Display'] text-gray-500 text-sm mt-1">2022-present</p>
                  </div>

                  <div>
                    <h4 className="font-['Red_Hat_Display'] font-bold text-xl text-black">Higher Secondary</h4>
                    <p className="font-['Red_Hat_Display'] text-gray-700 text-lg md:text-xl font-medium mt-1">
                      Don Bosco Higher Secondary School
                    </p>
                    <p className="font-['Red_Hat_Display'] text-gray-500 text-sm mt-1">2020-2022</p>
                  </div>
                </div>

                {/* Floating Cap Image */}
                <div className="flex-1 flex justify-center md:justify-end">
                  <img src={imgCap} alt="Graduation Cap" className="w-48 h-48 object-contain drop-shadow-xl" />
                </div>
              </div>
            </div>

            {/* 2. Learning Beyond Classrooms */}
            <div className="relative">
              <h3 className="text-4xl md:text-5xl text-center mb-12 text-black">
                <span className="font-['Red_Hat_Display'] font-medium">learning beyond </span>
                <span className="font-['Playfair_Display'] italic font-medium">classrooms.</span>
              </h3>

              <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-16 max-w-4xl mx-auto">
                {/* Text Content */}
                <div className="space-y-8 flex-1">
                  <div>
                    <h4 className="font-['Red_Hat_Display'] font-bold text-xl text-black">UI UX Intern</h4>
                    <p className="font-['Red_Hat_Display'] text-gray-700 text-lg md:text-xl font-medium mt-1">
                      Koncepts Lab (Onsite)
                    </p>
                    <p className="font-['Red_Hat_Display'] text-gray-500 text-sm mt-1">November 2025 - present</p>
                  </div>

                  <div>
                    <h4 className="font-['Red_Hat_Display'] font-bold text-xl text-black">UI UX Intern</h4>
                    <p className="font-['Red_Hat_Display'] text-gray-700 text-lg md:text-xl font-medium mt-1">
                      Mulearn Foundation (remote)
                    </p>
                    <p className="font-['Red_Hat_Display'] text-gray-500 text-sm mt-1">August 2025 - January 2026</p>
                  </div>

                  <div>
                    <h4 className="font-['Red_Hat_Display'] font-bold text-xl text-black">Web development intern</h4>
                    <p className="font-['Red_Hat_Display'] text-gray-700 text-lg md:text-xl font-medium mt-1">
                      Radars Technology(onsite)
                    </p>
                    <p className="font-['Red_Hat_Display'] text-gray-500 text-sm mt-1">June 2024 - July 2024</p>
                  </div>
                </div>

                {/* Polaroid Image */}
                <div className="flex-1 flex justify-center md:justify-end">
                  <div className="bg-white p-3 shadow-lg rotate-3 w-64">
                    <div className="h-64 overflow-hidden mb-4 bg-gray-100">
                      <img src={imgThambu} alt="Internship" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Outside the Syllabus */}
            <div className="relative text-center">
              <h3 className="text-4xl md:text-5xl mb-12 text-black">
                <span className="font-['Red_Hat_Display'] font-medium">outside the </span>
                <span className="font-['Playfair_Display'] italic font-medium">syllabus.</span>
              </h3>

              <div className="relative max-w-2xl mx-auto">
                {/* Floating Images */}
                <motion.img
                  animate={{ y: [0, -15, 0], rotate: -15 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  src={imgFilm}
                  alt=""
                  className="absolute -left-16 top-0 w-24 h-24 object-contain opacity-100 z-0 hidden md:block"
                />

                <motion.img
                  animate={{ y: [0, -20, 0], rotate: 15 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  src={imgPaint}
                  alt=""
                  className="absolute -right-20 top-1/3 w-28 h-28 object-contain opacity-100 z-0 hidden md:block"
                />

                <motion.img
                  animate={{ y: [0, -15, 0], rotate: -10 }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  src={imgCam}
                  alt=""
                  className="absolute -left-10 bottom-10 w-32 h-32 object-contain opacity-100 z-0 hidden md:block"
                />

                <div className="space-y-8 relative z-10 text-left md:text-center">
                  <div>
                    <h4 className="font-['Red_Hat_Display'] font-bold text-xl text-black">Senior Mentor</h4>
                    <p className="font-['Red_Hat_Display'] text-gray-700 text-lg md:text-xl font-medium mt-1">
                      IEDC Sahrdaya
                    </p>
                    <p className="font-['Red_Hat_Display'] text-gray-500 text-sm mt-1">june 2025 - present</p>
                  </div>

                  <div>
                    <h4 className="font-['Red_Hat_Display'] font-bold text-xl text-black">Women in Computing</h4>
                    <p className="font-['Red_Hat_Display'] text-gray-700 text-lg md:text-xl font-medium mt-1">
                      IEEE Sahrdaya
                    </p>
                    <p className="font-['Red_Hat_Display'] text-gray-500 text-sm mt-1">november 2023 - november 2024</p>
                  </div>

                  <div>
                    <h4 className="font-['Red_Hat_Display'] font-bold text-xl text-black">Outreach Lead</h4>
                    <p className="font-['Red_Hat_Display'] text-gray-700 text-lg md:text-xl font-medium mt-1">
                      TinkerHub SCET
                    </p>
                    <p className="font-['Red_Hat_Display'] text-gray-500 text-sm mt-1">july 2024 - july 2025</p>
                  </div>

                  <div>
                    <h4 className="font-['Red_Hat_Display'] font-bold text-xl text-black">poster designer</h4>
                    <p className="font-['Red_Hat_Display'] text-gray-700 text-lg md:text-xl font-medium mt-1">
                      IEDC Sahrdaya
                    </p>
                    <p className="font-['Red_Hat_Display'] text-gray-500 text-sm mt-1">july 2024 - jpresent</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom "See Less" Button */}
          <div className="flex justify-center pb-16">
            <motion.button
              variants={buttonVariants}
              initial="initial"
              animate="pulse"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setIsExpanded(false)}
              className="px-12 py-3.5 rounded-2xl text-white font-semibold text-xl shadow-lg"
              style={{
                background: 'linear-gradient(270deg, #B267F1, #DB7DD2, #FA8CBA, #FBA045, #B267F1)',
                backgroundSize: '400% 400%',
              }}
            >
              see less.
            </motion.button>
          </div>
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
      </div>
    </section>
  );
}