"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Heart, Shield, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import TextReveal from "@/components/text-reveal"
import AnimatedBlob from "@/components/animated-blob"


const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Lead Physiotherapist",
    specialty: "Post-Surgical Rehabilitation",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dr. Johnson specializes in post-surgical rehabilitation with over 15 years of experience helping patients recover from orthopedic surgeries. She has developed innovative recovery protocols that significantly reduce rehabilitation time.",
  },
  {
    name: "Dr. Michael Chen",
    role: "Senior Physiotherapist",
    specialty: "Sports Injury & Performance",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With a background in sports medicine, Dr. Chen has worked with professional athletes and developed specialized treatment programs for sports-related injuries. His approach combines rehabilitation with performance enhancement techniques.",
  },
  {
    name: "Emily Rodriguez",
    role: "Physiotherapist",
    specialty: "Geriatric Care & Mobility",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Emily specializes in geriatric physiotherapy, focusing on improving mobility, preventing falls, and enhancing quality of life for older adults. She is certified in vestibular rehabilitation and balance training.",
  },
  {
    name: "Dr. James Wilson",
    role: "Physiotherapist",
    specialty: "Neurological Rehabilitation",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Dr. Wilson has dedicated his career to helping patients with neurological conditions such as stroke, Parkinson's disease, and multiple sclerosis. His evidence-based approach focuses on neuroplasticity and functional improvement.",
  },
  {
    name: "Lisa Thompson",
    role: "Physiotherapist",
    specialty: "Pediatric Development",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Lisa specializes in pediatric physiotherapy, helping children with developmental delays, congenital conditions, and injuries. Her playful approach makes therapy engaging and effective for young patients.",
  },
  {
    name: "Robert Williams",
    role: "Physiotherapist",
    specialty: "Chronic Pain Management",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Robert focuses on helping patients manage chronic pain conditions through a combination of manual therapy, therapeutic exercise, and education. He is certified in pain science and integrative pain management.",
  },
]

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description:
      "We put our patients' needs first, creating personalized treatment plans that address individual goals and circumstances.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description:
      "Our therapists maintain the highest standards of clinical practice, continuously updating their skills with the latest evidence-based approaches.",
  },
  {
    icon: Shield,
    title: "Integrity & Trust",
    description:
      "We build relationships based on honesty, transparency, and respect, ensuring patients feel safe and valued throughout their care journey.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description:
      "We work closely with patients, their families, and other healthcare providers to ensure comprehensive, coordinated care.",
  },
]

const advantages = [
  {
    title: "Convenience & Comfort",
    description:
      "Receive expert care in the familiar environment of your home, eliminating travel time and waiting rooms.",
    icon: MapPin,
  },
  {
    title: "Personalized Attention",
    description:
      "Our home sessions allow therapists to focus entirely on you, providing undivided attention and customized care.",
    icon: Users,
  },
  {
    title: "Flexible Scheduling",
    description: "We offer appointment times that work with your schedule, including evenings and weekends.",
    icon: Clock,
  },
  {
    title: "Real-World Recovery",
    description: "Practice exercises and activities in the actual environment where you'll use these skills daily.",
    icon: Heart,
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      {}
      <AnimatedBlob color="#ACE1AF" size="400px" top="-200px" left="-200px" />
      <AnimatedBlob color="#D6C1FF" size="350px" bottom="-150px" right="-150px" delay={2} />

      {}
      <section className=" text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/back.jpeg?height=400&width=300')] bg-repeat opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <TextReveal>
            <h1 className="text-6xl md:text-7xl font-bold mb-7 text-center"><span className="gradient-text">About Reccova </span></h1>
          </TextReveal>

          <TextReveal delay={0.1}>
            <p className="lg:text-3xl max-w-3xl mx-auto text-center mb-8 text-black font-bold ">
              Bringing professional physiotherapy care to your doorstep with compassion, expertise, and convenience.
            </p>
          </TextReveal>
        </div>
      </section>

      {}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <TextReveal>
                <div className="relative">
                  <div className="absolute blob -z-10 w-full h-full bg-gradient-to-br from-reccova-green/30 via-reccova-violet/30 to-reccova-pink/30 animate-blob-move"></div>
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/reccova3.jpeg?height=600&width=800"
                      alt="Reccova team providing home physiotherapy"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </TextReveal>
            </div>

            <div className="lg:w-1/2">
              <TextReveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              </TextReveal>

              <TextReveal delay={0.1}>
                <p className="text-black mb-6">
                  Reccova was founded in 2008 with a simple yet powerful vision: to transform how physiotherapy care is
                  delivered by bringing expert services directly to patients' homes. We recognized that traditional
                  clinic-based care presented barriers for many people – from those recovering from surgery to elderly
                  patients with mobility challenges.
                </p>
              </TextReveal>

              <TextReveal delay={0.2}>
                <p className="text-black mb-6">
                  What began as a small team of dedicated therapists has grown into a comprehensive network of
                  specialists covering diverse physiotherapy needs. Throughout our growth, we've remained committed to
                  our founding principle: that healing happens best in comfortable, familiar environments.
                </p>
              </TextReveal>

              <TextReveal delay={0.3}>
                <p className="text-black mb-8">
                  Today, Reccova is proud to be a leader in home physiotherapy services, having helped thousands of
                  patients achieve their recovery goals without ever leaving their homes. Our innovative approach
                  combines clinical excellence with the comfort and convenience that only home-based care can provide.
                </p>
              </TextReveal>

              <TextReveal delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-gradient-to-r from-reccova-green to-reccova-mint hover:from-reccova-mint hover:to-reccova-green text-white rounded-full"
                    asChild
                  >
                    <Link href="/services">
                      Explore Our Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-gradient-to-br from-white via-reccova-lightGreen to-reccova-lightViolet relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 ">
          <TextReveal>
            <div className="text-center mb-16 bg">
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black">Our Mission & Values</h2>
              <p className="text-2xl text-black max-w-3xl mx-auto font-semibold">
                At Reccova, we're guided by a clear mission: to provide exceptional physiotherapy care in the comfort of
                patients' homes, empowering them to achieve optimal health and independence.
              </p>
            </div>
          </TextReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {values.map((value, index) => (
              <TextReveal key={value.title} delay={0.1 * index}>
                <div className="bg-[#F2EFE7] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow card-hover  ">
                  <div className="bg-reccova-green/40 from-reccova-green/5 to-reccova-mint/5 p-4 rounded-full inline-flex mb-6 bg-[#F2EFE7]">
                    <value.icon className="h-8 w-8 text-reccova-pink" />
                  </div>
                  <h3 className="lg:text-3xl font-bold mb-6 "><span className="gradient-text">{value.title}</span></h3>
                  <p className="text-black font-semibold">{value.description}</p>
                </div>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <TextReveal>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-4xl font-bold mb-6 text-black">Meet Our Expert Team</h2>
              <p className="text-2xl text-black max-w-3xl mx-auto font-semibold">
                Our team consists of highly qualified physiotherapists with diverse specializations, ensuring we can
                address a wide range of conditions and patient needs.
              </p>
            </div>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {teamMembers.map((member, index) => (
              <TextReveal key={member.name} delay={0.1 * index}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow card-hover bg-[#F2EFE7]">
                  <div className="h-64 overflow-hidden">
                    <Image
                      src={member.image || "/back.jpeg?"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6 bg-[#F2EFE7]">
                    <h3 className="text-xl font-semibold mb-1 text-black">{member.name}</h3>
                    <p className="text-reccova-violet mb-2 font-semibold lg:text:2xl">{member.role}</p>
                    <p className="text-black text-sm mb-4 font-semibold lg:text-xl">Specializes in: {member.specialty}</p>
                    <p className="text-black">{member.bio}</p>
                  </div>
                </div>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Reccova */}
      <section className="py-20 bg-gradient-to-br from-white via-reccova-lightPink to-reccova-lightViolet">
        <div className="container mx-auto px-4">
          <TextReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Why Choose <span className="gradient-text">Reccova</span></h2>
              <p className="text-2xl text-black max-w-3xl mx-auto font-semibold">
                Home-based physiotherapy offers unique advantages that enhance your recovery journey and overall
                experience.
              </p>
            </div>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <TextReveal key={advantage.title} delay={0.1 * index}>
                <div className="bg-[#F2EFE7] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow card-hover">
                  <div className="flex items-start">
                    <div className="bg-reccova-green/40 from-reccova-violet/20 to-reccova-pink/20 p-4 rounded-full mr-4">
                      <advantage.icon className="h-6 w-6 text-reccova-violet" />
                    </div>
                    <div>
                      <h3 className="lg:text-3xl font-semibold mb-3"><span className="gradient-text">{advantage.title} </span></h3>
                      <p className="text-black font-semibold">{advantage.description}</p>
                    </div>
                  </div>
                </div>
              </TextReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <TextReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black"><span className="gradient-text">Reccova</span> by the Numbers</h2>
              <p className="text-2xl text-black max-w-3xl mx-auto font-semibold">
                Our impact in numbers reflects our commitment to excellence in home physiotherapy care.
              </p>
            </div>
          </TextReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TextReveal>
              <div className="bg-gradient-to-r from-reccova-green/5 to-reccova-mint/5 p-8 rounded-2xl text-center">
                <div className="text-6xl font-bold gradient-text mb-2">15+</div>
                <div className="text-black">Years of Experience</div>
              </div>
            </TextReveal>

            <TextReveal delay={0.1}>
              <div className="bg-gradient-to-r from-reccova-violet/5 to-reccova-pink/5 p-8 rounded-2xl text-center">
                <div className="text-6xl font-bold gradient-text mb-2">25+</div>
                <div className="text-black">Certified Therapists</div>
              </div>
            </TextReveal>

            <TextReveal delay={0.2}>
              <div className="bg-gradient-to-r from-reccova-pink/5 to-reccova-violet/5 p-8 rounded-2xl text-center">
                <div className="text-6xl font-bold gradient-text mb-2">5000+</div>
                <div className="text-black">Patients Served</div>
              </div>
            </TextReveal>

            <TextReveal delay={0.3}>
              <div className="bg-gradient-to-r from-reccova-mint/5 to-reccova-green/5 p-8 rounded-2xl text-center">
                <div className="text-6xl font-bold gradient-text mb-2">98%</div>
                <div className="text-black">Patient Satisfaction</div>
              </div>
            </TextReveal>
          </div>
        </div>
      </section>

      {}
      <section className="py-16 bg-reccova-green/80 from-reccova-green to-reccova-mint text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <TextReveal>
              <h2 className="text-4xl md:text-4xl font-bold mb-6 text-black">Ready to Experience the <span className="gradient-text">Reccova</span> Difference?</h2>
            </TextReveal>

            <TextReveal delay={0.1}>
              <p className="text-xl mb-8 font-semibold text-black">
                Book your home physiotherapy session today and take the first step towards recovery in the comfort of
                your own space.
              </p>
            </TextReveal>

            <TextReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  className="bg-white text-reccova-green hover:bg-gray-100 rounded-full px-8 py-6 text-lg shadow-lg"
                  asChild
                >
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault()
                      document.dispatchEvent(new CustomEvent("open-booking-modal"))
                    }}
                  >
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg"
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

