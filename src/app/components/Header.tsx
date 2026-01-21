import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <span className="font-['Playfair_Display'] italic font-bold text-2xl md:text-3xl text-black">
            neha.
          </span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 md:gap-10 font-['Red_Hat_Display'] font-medium text-base">
          <a
            href="#home"
            className="text-black hover:opacity-70 transition-opacity cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-black hover:opacity-70 transition-opacity cursor-pointer"
          >
            About
          </a>
          <a
            href="#work"
            className="text-black hover:opacity-70 transition-opacity cursor-pointer"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-black hover:opacity-70 transition-opacity cursor-pointer"
          >
            Contact
          </a>
        </div>
      </nav>
    </motion.header>
  );
}