import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-6"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <nav className="w-full max-w-5xl mx-auto flex items-center justify-between glass-nav px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="font-['Playfair_Display'] italic font-bold text-2xl md:text-3xl text-black">
            neha.
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 md:gap-10 font-['Red_Hat_Display'] font-medium text-base">

          <a
            href={isHome ? "#about" : "/#about"}
            className="text-black hover:opacity-70 transition-opacity cursor-pointer"
          >
            About
          </a>
          <a
            href={isHome ? "#work" : "/#work"}
            className="text-black hover:opacity-70 transition-opacity cursor-pointer"
          >
            Work
          </a>
          <a
            href={isHome ? "#contact" : "/#contact"}
            className="text-black hover:opacity-70 transition-opacity cursor-pointer"
          >
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  );
}