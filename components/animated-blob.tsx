"use client"

import { motion } from "framer-motion"

interface AnimatedBlobProps {
  color: string
  size: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  delay?: number
}

export default function AnimatedBlob({ color, size, top, left, right, bottom, delay = 0 }: AnimatedBlobProps) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl opacity-30 -z-10"
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
      }}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 15, 0],
        y: [0, -15, 0],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration: 8,
        delay,
        ease: "easeInOut",
      }}
    />
  )
}

