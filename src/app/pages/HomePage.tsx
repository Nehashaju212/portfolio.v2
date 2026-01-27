'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Header } from '@/app/components/Header'
import { Hero } from '@/app/components/Hero'
import { About } from '@/app/components/About'
import { Work } from '@/app/components/Work'
import { Testimonials } from '@/app/components/Testimonials'
import { Footer } from '@/app/components/Footer'
import { PreLoader } from '@/app/components/ui/PreLoader'

export function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <PreLoader key="loader" onComplete={() => setIsLoading(false)} />}</AnimatePresence>

      {/* Wrap main content in a motion div to stagger its appearance */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: isLoading ? 0 : 1 }} transition={{ duration: 0.5 }}>
        <Header />
        <main>
          <Hero />
          <About />
          <Work />
          <Testimonials />
          <Footer />
        </main>
      </motion.div>
    </>
  )
}
