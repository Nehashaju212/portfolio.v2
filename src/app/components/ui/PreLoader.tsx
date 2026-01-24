import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

// Reuse assets for continuity and caching
import imgBall from '../../../assets/tape.webp'
import imgCake from '../../../assets/yumm.webp'
import imgSmile from '../../../assets/smile.webp'

const steps = [
  { text: 'code.', img: imgBall, font: "font-['Red_Hat_Display']", color: '#b267f1' },
  { text: 'eat.', img: imgCake, font: "font-['Red_Hat_Display']", color: '#fa8cba' },
  { text: 'design!', img: 'design!', font: "font-['Playfair_Display'] italic", color: '#fba045' },
]

export function PreLoader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < steps.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 800)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => onComplete(), 1000)
      return () => clearTimeout(timer)
    }
  }, [index, onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
    >
      <div className="relative flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'circOut' }}
            className="flex flex-col items-center"
          >
            {/* Asset Preview */}
            <motion.div initial={{ scale: 0.8, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} className="w-32 h-32 mb-8">
              {index === 0 && <img src={imgBall} className="w-full h-full object-contain" />}
              {index === 1 && <img src={imgCake} className="w-full h-full object-contain" />}
              {index === 2 && <img src={imgSmile} className="w-full h-full object-contain" />}
            </motion.div>

            {/* Word */}
            <h2 className={`text-6xl md:text-7xl font-bold ${steps[index].font}`}>{steps[index].text}</h2>
          </motion.div>
        </AnimatePresence>

        {/* Minimal Progress Bar */}
        <div className="absolute -bottom-20 w-40 h-[2px] bg-gray-100 overflow-hidden">
          <motion.div
            className="h-full bg-black"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: 'linear' }}
          />
        </div>
      </div>
    </motion.div>
  )
}
