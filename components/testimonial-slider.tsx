"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AnimatedBlob from "./animated-blob"

interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Recovery Patient",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "After my surgery, I was worried about recovery. Recauva's home physiotherapy made it so convenient. Their therapist was professional and helped me regain mobility faster than expected.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Sports Injury Patient",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "As an athlete, injuries can be devastating. The personalized care I received from Recauva was exceptional. They understood my goals and tailored a recovery plan that got me back to training in record time.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Chronic Pain Patient",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "I've struggled with chronic back pain for years. The Recauva therapist who visits me is knowledgeable and compassionate. For the first time in a decade, I'm experiencing significant relief.",
  },
  {
    id: 4,
    name: "Robert Williams",
    role: "Elderly Care Patient",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "At my age, traveling to appointments was becoming difficult. Having a qualified physiotherapist come to my home has been a blessing. The care is excellent and I don't have to leave my comfort zone.",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (autoplay) {
      timeoutRef.current = setTimeout(nextTestimonial, 5000)
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [current, autoplay])

  const handleMouseEnter = () => setAutoplay(false)
  const handleMouseLeave = () => setAutoplay(true)

  return (
    <div
      className="relative overflow-hidden py-16 px-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Decorative Elements */}
      <AnimatedBlob color="ACE1AF" size="300px" top="-150px" left="-150px" delay={0} />
      <AnimatedBlob color="#FFB4A2" size="250px" bottom="-100px" right="-100px" delay={2} />

      <div className="max-w-4xl mx-auto relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative inline-block mb-6"
            >
              <div className="absolute -z-10 w-12 h-12 rounded-full bg-reccova-green/20 blur-lg"></div>
              <Quote className="text-reccova-green" size={48} />
            </motion.div>

            <motion.blockquote
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl font-medium text-gray-700 mb-8"
            >
              "{testimonials[current].quote}"
            </motion.blockquote>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <Avatar className="h-16 w-16 mb-4 ring-4 ring-reccova-green/20">
                <AvatarImage src={testimonials[current].image} alt={testimonials[current].name} />
                <AvatarFallback>{testimonials[current].name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="font-semibold text-gray-800">{testimonials[current].name}</div>
                <div className="text-sm text-gray-500">{testimonials[current].role}</div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                current === index ? "w-8 bg-gradient-to-r from-reccova-green to-reccova-mint" : "w-2 bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-shadow"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} className="text-gray-600" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-shadow"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} className="text-gray-600" />
        </motion.button>
      </div>
    </div>
  )
}

