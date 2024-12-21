'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
}

export function AnimatedButton({ children, onClick }: AnimatedButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white text-primary font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-colors duration-300 hover:bg-primary hover:text-white"
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

