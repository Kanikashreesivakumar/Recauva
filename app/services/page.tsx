"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import TextReveal from "@/components/text-reveal"
import { useState } from "react"
import BookingModal from "@/components/booking-modal"

const services = [

  {
    id: "Pain-management",
    title: "Pain Management",
    description:
      "Our comprehensive pain management approach combines various therapeutic techniques to help reduce Neck pain,shoulder pain,back pain,knee pain,ankle & foot pain improve function, and enhance quality of life without relying solely on medication.",
    image: "/pain.jpeg?height=600&width=800",
    features: [
      "Manual therapy techniques",
      "Therapeutic exercises",
      "Modality treatments (Hot pack therapy, Cryotherapy,IFT,Ultrasound therapy,TENS)",
      "Advance techniques (Streching,Tapping,Myofacial release,Dry kneedling,Cupping,Muscle Stregnthening)",
      "Ergonomic assessments and recommendations",
      "Self-management strategies",
      "Relaxation and stress reduction techniques",
    ],
  },
  {
    id: "home-care",
    title: "Home Care Physiotherapy",
    description:
      "Our home care physiotherapy service brings expert care directly to your doorstep—ideal for individuals with mobility challenges, post-surgery recovery needs, or those who simply prefer healing in the comfort of their home.",
    image: "/homecare.jpg?height=600&width=800",
    features: [
      "Personalized physiotherapy assessments at home",
      "Customized rehabilitation programs",
      "Post-operative recovery support",
      "Fall prevention strategies and balance training",
      "Safe exercise plans and posture correction",
      "Pre-operative recovery support",
    ],
  },
  {
    id: "Women-fitness",
    title: "Women fitness",
    description:
      "Our women-focused physiotherapy and fitness programs are designed to support every stage of life—from postnatal recovery to hormonal changes and beyond. We help women build strength, improve mobility, and feel confident in their bodies.",
    image: "/fitness.jpeg?height=600&width=800",
    features: [
      "Core stability and abdominal muscle training",
      "Prenatal exercise guidance and safe movement routines",
      "Weight management support with physiotherapist-led fitness",
      "Stretching and flexibility programs",
      "Hormonal balance support through therapeutic exercise",
      "Stress-relief techniques and guided breathing sessions",
    ],
  },

  {
    id: "sports-injury",
    title: "Sports Injury Rehabilitation",
    description:
      "Athletes and active individuals require specialized care to recover from sports-related injuries surgeries & return to their games safely. Our sports injury treatment focuses on addressing the specific demands of your sport or activity while promoting proper healing and preventing future injuries",
    image: "/sport3.jpeg?height=600&width=800",
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
    id: "neurological",
    title: "Neurological Rehabilitation",
    description:
      "For individuals with neurological conditions such as stroke, Parkinson's disease, or multiple sclerosis, our specialized neurological rehabilitation aims to improve function, mobility, and independence on their ADL through targeted interventions and exercises.",
    image: "/geriatric.jpeg?height=600&width=800",
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
    title: "Pediatric Rehabilitation",
    description:
      "Our pediatric physiotherapy services are designed to help children with developmental delays, injuries, or medical conditions improve their motor skills, strength, and mobility in a fun and engaging environment.",
    image: "/neu.jpeg?height=600&width=800",
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
    id: "operative-rehabilitation",
    title: "Pre  post operative Rehabilitation",
    description:
      "Our specialized rehabilitation programs are tailored to prepare your body before surgery and accelerate recovery afterward. We focus on restoring strength, mobility, and confidence while minimizing pain and complications.",
    image: "/pre.jpg?height=600&width=800",
    features: [
      "Pre-operative physiotherapy to strengthen muscles and joints",
      "Post-surgical pain and inflammation management",
      "Muscle re-education and strengthening exercises",
      "Scar tissue management and soft tissue mobilization",
      "Personalized home exercise programs for long-term recovery",
      "Gait training and mobility support",
    ],
  },
  
  
  {
    id: "cardio-rehabilitation",
    title: "Cardio respiratory Rehabilitation",
    description:
      "Our cardio-respiratory rehab program is designed to help individuals with heart and lung conditions regain endurance, improve breathing efficiency, and enhance overall quality of life through safe and guided physiotherapy.",
    image: "/respi.jpg?height=600&width=800",
    features: [
      "Breathing exercises to improve lung capacity",
      "Airway clearance techniques and chest physiotherapy",
      "Endurance and aerobic conditioning programs",
      "Pulmonary rehabilitation for asthma, COPD, and bronchitis",
      "Cardiac rehab after heart surgery or cardiac events",
      "Monitoring and education for safe physical activity",
    ],
  },
  
  {
    id: "pelvic-rehab",
    title: "Pelvic floor Rehabilitation",
    description:
      "Our pelvic floor rehab program is designed to support individuals dealing with pelvic pain, incontinence, or core instability. We provide discreet, evidence-based care to restore pelvic function, improve strength, and enhance confidence.",
    image: "/floor.jpeg?height=600&width=800",
    features: [
      "Comprehensive pelvic floor assessment",
      "Strengthening exercises for pelvic muscles",
      "Management of urinary incontinence and pelvic organ prolapse",
      "Biofeedback training for muscle awareness",
      "Core stabilization and posture correction",
      "Postnatal pelvic recovery and bladder control support",
    ],
  },
  {
    id: "geriatric-care",
    title: "Geriatric Physiotherapy",
    description:
      "Our geriatric physiotherapy services are tailored to address the unique needs of older adults. We focus on improving mobility, reducing pain, preventing falls, and enhancing overall quality of life through gentle yet effective therapeutic approaches.",
    image: "/neu1.jpeg?height=600&width=800",
    features: [
      "Balance and gait training",
      "Fall prevention strategies",
      "Arthritis management",
      "Gentle strengthening exercises",
      "Mobility assistance",
      "Adaptive equipment recommendations",
    ],
  },
]

export default function ServicesPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  return (
    <div className="pt-24 pb-20 bg-white bg-gray/200   opacity-90">
      {}
      <section className="bg-reccova-900 text-black py-16 ">
        <div className="container mx-auto px-4 ">
          <TextReveal>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-center"><span className="gradient-text">Our Services</span></h1>
          </TextReveal>

          <TextReveal delay={0.1}>
            <p className="text-4xl max-w-5xl mx-auto text-center mb-10 text-black font-bold mb-4">
              Discover our comprehensive range of physiotherapy services, all delivered in the comfort of your home by
              our expert therapists.
            </p>
          </TextReveal>
        </div>
      </section>

      {}
      <section className="py-16">
        <div className="container mx-auto px-4 bg-[#EDE8DC]">
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
                    <h2 className="text-3xl font-bold mb-4 text-black">{service.title}</h2>
                  </TextReveal>

                  <TextReveal delay={0.1}>
                    <p className="text-black mb-6">{service.description}</p>
                  </TextReveal>

                  <TextReveal delay={0.2}>
                    <h3 className="text-xl font-semibold mb-4 text-black">What We Offer:</h3>
                  </TextReveal>

                  <TextReveal delay={0.3}>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 text-black">
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
                          <span className="text-black">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </TextReveal>

                  <TextReveal delay={0.4}>
                    <Button 
                      className="hover-glow bg-reccova-1000 hover:bg-reccova-1000 bg-black text-white"
                      onClick={() => {
                        setSelectedService(service.title)
                        setIsBookingModalOpen(true)
                      }}
                    >
                      Book This Service
                      <ArrowRight className="ml-2 h-4 w-4"/>
                    </Button>
                  </TextReveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <TextReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Not Sure Which Service You Need?</h2>
            </TextReveal>

            <TextReveal delay={0.1}>
              <p className="text-xl text-black mb-12 font-bold">
                Our expert team can help determine the best treatment approach for your specific condition. Contact us
                for a consultation or book an initial assessment.
              </p>
            </TextReveal>

            <TextReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="hover-glow bg-reccova-600 hover:bg-reccova-700 font-bold bg-black text-white" asChild onClick={() => setIsBookingModalOpen(true)}>
                <div>
                    Book An Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="hover-glow border-reccova-green/50 bg-reccova-green/50 text-black hover:bg-reccova-green/50"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </TextReveal>
          </div>
        </div>
      </section>
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)}
        serviceType={selectedService}
      />
    </div>
  )
}

