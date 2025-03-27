"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import TextReveal from "@/components/text-reveal"

const services = [
  {
    id: "rehabilitation",
    title: "Rehabilitation Therapy",
    description:
      "Our rehabilitation therapy is designed to help patients recover from surgeries, injuries, or medical conditions that have impacted their mobility and function. Our therapists work closely with you to develop a personalized recovery plan that addresses your specific needs and goals.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Post-surgery recovery programs",
      "Injury rehabilitation",
      "Functional mobility training",
      "Pain management techniques",
      "Progressive exercise programs",
      "Regular progress assessments",
    ],
  },
  {
    id: "sports-injury",
    title: "Sports Injury Treatment",
    description:
      "Athletes and active individuals require specialized care to recover from sports-related injuries and return to their activities safely. Our sports injury treatment focuses on addressing the specific demands of your sport or activity while promoting proper healing and preventing future injuries.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Sport-specific rehabilitation",
      "Biomechanical analysis",
      "Strength and conditioning programs",
      "Injury prevention strategies",
      "Return-to-sport assessments",
      "Performance enhancement techniques",
    ],
  },
  {
    id: "geriatric-care",
    title: "Geriatric Physiotherapy",
    description:
      "Our geriatric physiotherapy services are tailored to address the unique needs of older adults. We focus on improving mobility, reducing pain, preventing falls, and enhancing overall quality of life through gentle yet effective therapeutic approaches.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Balance and gait training",
      "Fall prevention strategies",
      "Arthritis management",
      "Gentle strengthening exercises",
      "Mobility assistance",
      "Adaptive equipment recommendations",
    ],
  },
  {
    id: "neurological",
    title: "Neurological Therapy",
    description:
      "For individuals with neurological conditions such as stroke, Parkinson's disease, or multiple sclerosis, our specialized neurological therapy aims to improve function, mobility, and independence through targeted interventions and exercises.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Neuromuscular re-education",
      "Functional movement training",
      "Coordination exercises",
      "Balance rehabilitation",
      "Adaptive strategy development",
      "Caregiver education and support",
    ],
  },
  {
    id: "pediatric",
    title: "Pediatric Therapy",
    description:
      "Our pediatric physiotherapy services are designed to help children with developmental delays, injuries, or medical conditions improve their motor skills, strength, and mobility in a fun and engaging environment.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Developmental milestone achievement",
      "Motor skill development",
      "Play-based therapy approaches",
      "Sensory integration activities",
      "Parent/caregiver education",
      "School-based intervention strategies",
    ],
  },
  {
    id: "pain-management",
    title: "Pain Management",
    description:
      "Our comprehensive pain management approach combines various therapeutic techniques to help reduce chronic pain, improve function, and enhance quality of life without relying solely on medication.",
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Manual therapy techniques",
      "Therapeutic exercises",
      "Modality treatments (heat, cold, electrical stimulation)",
      "Ergonomic assessments and recommendations",
      "Self-management strategies",
      "Relaxation and stress reduction techniques",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-reccova-600 text-white py-16">
        <div className="container mx-auto px-4">
          <TextReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Services</h1>
          </TextReveal>

          <TextReveal delay={0.1}>
            <p className="text-xl max-w-3xl mx-auto text-center mb-8">
              Discover our comprehensive range of physiotherapy services, all delivered in the comfort of your home by
              our expert therapists.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center scroll-mt-24`}
              >
                <div className="lg:w-1/2">
                  <TextReveal>
                    <div className="relative">
                      <div
                        className={`absolute -top-4 ${
                          index % 2 === 0 ? "-left-4" : "-right-4"
                        } w-24 h-24 bg-reccova-100 rounded-lg`}
                      ></div>
                      <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          width={800}
                          height={600}
                          className="w-full h-auto"
                        />
                      </div>
                      <div
                        className={`absolute -bottom-4 ${
                          index % 2 === 0 ? "-right-4" : "-left-4"
                        } w-24 h-24 bg-reccova-200 rounded-lg`}
                      ></div>
                    </div>
                  </TextReveal>
                </div>

                <div className="lg:w-1/2">
                  <TextReveal>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">{service.title}</h2>
                  </TextReveal>

                  <TextReveal delay={0.1}>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                  </TextReveal>

                  <TextReveal delay={0.2}>
                    <h3 className="text-xl font-semibold mb-4 text-gray-700">What We Offer:</h3>
                  </TextReveal>

                  <TextReveal delay={0.3}>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <div className="h-6 w-6 rounded-full bg-reccova-100 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                            <svg
                              className="h-4 w-4 text-reccova-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </TextReveal>

                  <TextReveal delay={0.4}>
                    <Button className="hover-glow bg-reccova-600 hover:bg-reccova-700" asChild>
                      <Link
                        href="#"
                        onClick={(e) => {
                          e.preventDefault()
                          document.dispatchEvent(
                            new CustomEvent("open-booking-modal", {
                              detail: { serviceType: service.title },
                            }),
                          )
                        }}
                      >
                        Book This Service
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </TextReveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <TextReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Not Sure Which Service You Need?</h2>
            </TextReveal>

            <TextReveal delay={0.1}>
              <p className="text-xl text-gray-600 mb-8">
                Our expert team can help determine the best treatment approach for your specific condition. Contact us
                for a consultation or book an initial assessment.
              </p>
            </TextReveal>

            <TextReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="hover-glow bg-reccova-600 hover:bg-reccova-700" asChild>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      document.dispatchEvent(new CustomEvent("open-booking-modal"))
                    }}
                  >
                    Book an Assessment
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="hover-glow border-reccova-600 text-reccova-600 hover:bg-reccova-50"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </TextReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

