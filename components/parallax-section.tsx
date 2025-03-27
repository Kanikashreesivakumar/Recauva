"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode
  bgImage: string
  overlayColor?: string
  height?: string
  className?: string
}

export default function ParallaxSection({
  children,
  bgImage,
  overlayColor = "rgba(0, 0, 0, 0.4)",
  height = "100vh",
  className = "",
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [elementTop, setElementTop] = useState(0)
  const { scrollY } = useScroll()

  useEffect(() => {
    if (ref.current) {
      setElementTop(ref.current.offsetTop)
    }

    const handleResize = () => {
      if (ref.current) {
        setElementTop(ref.current.offsetTop)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const y = useTransform(scrollY, [elementTop - 500, elementTop + 500], [0, -100])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={{ height }}>
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          y,
        }}
      />
      <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: overlayColor }} />
      <div className="relative h-full z-10">{children}</div>
    </div>
  )
}

