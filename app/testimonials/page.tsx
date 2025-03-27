"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import type { Testimonial } from "@/lib/supabase"
import { useScrollReveal } from "@/hooks/useScrollReveal"

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        setIsLoading(true)
        setError(null)

        const testimonialsData: Testimonial[] = [
          {
            id: 1,
            name: "Sarah Johnson",
            feedback:
              "Reccova's home physiotherapy services have been life-changing. After my knee surgery, their therapist came to my home and provided exceptional care. I'm now back to my normal activities!",
            rating: 5,
            image_url: "/placeholder.svg?height=100&width=100&text=SJ",
          },
          {
            id: 2,
            name: "Michael Chen",
            feedback:
              "As someone with chronic back pain, finding Reccova was a blessing. Their therapist designed a personalized program that has significantly reduced my pain. Highly recommended!",
            rating: 5,
            image_url: "/placeholder.svg?height=100&width=100&text=MC",
          },
          {
            id: 3,
            name: "Emily Rodriguez",
            feedback:
              "The convenience of having professional physiotherapy at home is incredible. Reccova's therapists are knowledgeable, punctual, and truly care about your recovery.",
            rating: 4,
            image_url: "/placeholder.svg?height=100&width=100&text=ER",
          },
          {
            id: 4,
            name: "David Wilson",
            feedback:
              "I was skeptical about home physiotherapy at first, but Reccova changed my mind. The therapist was professional, attentive, and helped me recover from my shoulder injury faster than expected.",
            rating: 5,
            image_url: "/placeholder.svg?height=100&width=100&text=DW",
          },
          {
            id: 5,
            name: "Jennifer Lee",
            feedback:
              "After trying several physiotherapy clinics with little improvement, I decided to give Reccova a try. The personalized attention and convenience of home sessions made all the difference. My mobility has improved significantly!",
            rating: 5,
            image_url: "/placeholder.svg?height=100&width=100&text=JL",
          },
          {
            id: 6,
            name: "Robert Brown",
            feedback:
              "As a busy professional, finding time for physiotherapy was always a challenge. Reccova's flexible scheduling and home visits have been a game-changer. Great service and excellent results!",
            rating: 4,
            image_url: "/placeholder.svg?height=100&width=100&text=RB",
          },
          {
            id: 7,
            name: "Maria Garcia",
            feedback:
              "My elderly mother needed physiotherapy but was unable to travel to clinics. Reccova's home service has been perfect for her needs. The therapist is patient, kind, and has helped her regain confidence in her mobility.",
            rating: 5,
            image_url: "/placeholder.svg?height=100&width=100&text=MG",
          },
          {
            id: 8,
            name: "James Taylor",
            feedback:
              "I've been using Reccova for sports injury rehabilitation for the past few months. The therapist's expertise in sports medicine has been invaluable in getting me back to my training routine safely.",
            rating: 5,
            image_url: "/placeholder.svg?height=100&width=100&text=JT",
          },
        ]

        setTestimonials(testimonialsData)
      } catch (error) {
        const message = error instanceof Error ? error.message : "Failed to load testimonials"
        console.error("Error fetching testimonials:", error)
        setError(message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  useScrollReveal()

  if (error) {
    return (
      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto p-6 bg-red-50 border border-red-200 rounded-lg text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 reveal">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h1>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. Hear from our satisfied clients about their experience with Reccova.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="max-w-md mx-auto mb-16 reveal">
          <div className="bg-white rounded-xl p-8 shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-4">Overall Client Satisfaction</h2>
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-3xl font-bold mb-2">4.8 / 5</p>
            <p className="text-gray-600">Based on {testimonials.length} reviews</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {isLoading
            ? Array(6)
                .fill(0)
                .map((_, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md animate-pulse h-[300px]">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                      <div>
                        <div className="h-6 bg-gray-200 rounded w-32 mb-2"></div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <div key={star} className="w-5 h-5 bg-gray-200 rounded-full mr-1"></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                ))
            : testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="overflow-hidden hover:shadow-lg transition-all animate-fadeIn"
                  style={{ animationDelay: `${testimonial.id * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image_url || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          priority={testimonial.id <= 3} 
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <div className="flex mt-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${
                                star <= testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">{testimonial.feedback}</p>
                  </CardContent>
                </Card>
              ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-16 text-center reveal">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Experience Our Services?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join our satisfied clients and start your journey to recovery with Reccova's professional physiotherapy
            services.
          </p>
          <Button className="gradient-bg text-white hover:shadow-lg transition-all px-8 py-6 rounded-full text-lg">
            Book a Session Now
          </Button>
        </div>
      </div>
    </div>
  )
}

