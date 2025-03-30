"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Activity, Heart, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParallaxSection from "@/components/parallax-section"
import TextReveal from "@/components/text-reveal"
import TestimonialSlider from "@/components/testimonial-slider"
import AnimatedBlob from "@/components/animated-blob"


export default function Home() {
  return (
    <>
      {}
      <ParallaxSection
        bgImage="/reccova.jpeg?height=1080&width=1920"
        overlayColor="rgba(64, 62, 62, 0.3)"
        className="animated-bg"
      >
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl relative">
            {}
            <div className="absolute -z-10 -top-20 -left-20 w-40 h-40 bg-reccova-green/30 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -bottom-20 -right-20 w-40 h-40 bg-reccova-violet/30 rounded-full blur-3xl"></div>

            <TextReveal>
              <h1 className="text-5xl md:text-5xl lg:text-5xl font-bold text-black mb-7">
              <span className="gradient-text">Recauva </span> - Your Homecare Physiotherapy Companion
              </h1>
            </TextReveal>

            <TextReveal delay={0.2}>
              <p className="text-2xl text-black font-semibold mb-8">
                Professional physiotherapy services in the comfort of your home. No travel, no waiting rooms - just
                quality care when and where you need it.
              </p>
            </TextReveal>

            <TextReveal delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Button
                  className="bg-gradient-to-r from-reccova-green to-reccova-mint hover:from-reccova-mint hover:to-reccova-green text-black px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                  asChild
                >
                  <Link href="#booking-section">Book a Session</Link>
                </Button>

                <Button
                  variant="outline"
                  className="bg-reccova-violet/10 hover:bg-reccova-green/40 text-black border-gradient px-8 py-6 text-lg rounded-full backdrop-blur-sm"
                  asChild
                >
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </TextReveal>
          </div>
        </div>
      </ParallaxSection>

      {}
      <section className="py-24 bg-white relative overflow-hidden">
        {}
        <AnimatedBlob color="#ACE1AF" size="400px" top="-200px" left="-200px" />
        <AnimatedBlob color="#FFB4A2" size="350px" bottom="-150px" right="-150px" delay={2} />

        <div className="container mx-auto px-4 relative z-10 ">
          <TextReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
              Why Choose <span className="gradient-text">Recauva</span> Home Physiotherapy?
            </h2>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            <TextReveal delay={0.1}>
              <div className="bg-[#F2EFE7] p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow card-hover">
                <div className="bg-gradient-to-br from-reccova-green/30 to-reccova-mint/30 p-4 rounded-full inline-flex mb-6">
                  <Activity className="h-8 w-8 text-reccova-green" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-black">Personalized Care</h3>
                <p className="text-gray-900">Treatment plans tailored to your specific needs and recovery goals.</p>
              </div>
            </TextReveal>

            <TextReveal delay={0.2}>
              <div className="bg-[#F2EFE7] p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow card-hover">
                <div className="bg-gradient-to-br from-reccova-violet/30 to-reccova-pink/30 p-4 rounded-full inline-flex mb-6">
                  <Heart className="h-8 w-8 text-reccova-violet" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-balck text-black">Comfort & Convenience</h3>
                <p className="text-gray-900">Receive expert care in the comfort and privacy of your own home.</p>
              </div>
            </TextReveal>

            <TextReveal delay={0.3}>
              <div className="bg-[#F2EFE7] p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow card-hover">
                <div className="bg-gradient-to-br from-reccova-pink/20 to-reccova-violet/20 p-4 rounded-full inline-flex mb-6">
                  <Clock className="h-8 w-8 text-reccova-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">Flexible Scheduling</h3>
                <p className="text-gray-900">Book appointments at times that work for your busy lifestyle.</p>
              </div>
            </TextReveal>

            <TextReveal delay={0.4}>
              <div className="bg-[#F2EFE7] p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow card-hover">
                <div className="bg-gradient-to-br from-reccova-mint/20 to-reccova-green/20 p-4 rounded-full inline-flex mb-6">
                  <Award className="h-8 w-8 text-reccova-mint" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">Certified Experts</h3>
                <p className="text-gray-900">All our physiotherapists are fully certified with years of experience.</p>
              </div>
            </TextReveal>
          </div>
        </div>
      </section>

      {}
      <section className="py-24 bg-gradient-to-br from-white via-reccova-lightGreen to-reccova-lightViolet relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <TextReveal>
                <div className="relative">
                  <div className="absolute blob -z-10 w-full h-full bg-gradient-to-br from-reccova-green/30 via-reccova-violet/30 to-reccova-pink/30 animate-blob-move"></div>
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src="/reccova2.jpeg?height=600&width=800"
                      alt="Physiotherapist helping patient"
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
                <h2 className="text-4xl md:text-5xl text-black font-bold mb-6">Bringing Professional Care to Your Doorstep</h2>
              </TextReveal>

              <TextReveal delay={0.2}>
                <p className="text-black lg:text-1xl font-semibold mb-6">
                  At Reccova, we believe that healing happens best in comfortable, familiar environments. That's why
                  we've reimagined physiotherapy services by bringing them directly to your home.
                </p>
              </TextReveal>

              <TextReveal delay={0.3}>
                <p className="text-black lg:text-1xl font-semibold mb-8">
                  Our team of experienced physiotherapists is dedicated to providing personalized care that addresses
                  your specific needs. Whether you're recovering from surgery, managing chronic pain, or working through
                  a sports injury, we're here to support your journey to wellness.
                </p>
              </TextReveal>

              <TextReveal delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-gradient-to-r from-reccova-green to-reccova-mint hover:from-reccova-mint hover:to-reccova-green text-black rounded-full"
                    asChild
                  >
                    <Link href="/about">
                      Learn More About Us
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
      <section className="py-24 bg-white relative overflow-hidden">
        {}
        <AnimatedBlob color="#FDDDE6" size="350px" top="-150px" right="-150px" delay={1} />
        <AnimatedBlob color="#ACE1AF" size="300px" bottom="-100px" left="-100px" delay={3} />

        <div className="container mx-auto px-4 relative z-10">
          <TextReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center  text-black mb-6"><span className="gradient-text">Our Specialized Services</span></h2>
          </TextReveal>

          <TextReveal delay={0.1}>
            <p className="text-black text-center font-bold max-w-7xl mx-auto text-lg md:text-xl lg:text-4xl mb-24">
              We offer a comprehensive range of physiotherapy services tailored to meet your specific needs and
              delivered in the comfort of your home.
            </p>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <TextReveal delay={0.2}>
              <div className="bg-[#F2EFE7] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow card-hover">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="/rehab.jpeg?height=400&width=600"
                    alt="Rehabilitation"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Rehabilitation Therapy</h3>
                  <p className="text-black mb-4">
                    Comprehensive rehabilitation programs for post-surgery recovery and injury management.
                  </p>
                  <Button
                    variant="outline"
                    className="border-reccova-green text-reccova-green hover:bg-reccova-green/5 rounded-full"
                    asChild
                  >
                    <Link href="/services#rehabilitation">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TextReveal>

            <TextReveal delay={0.3}>
              <div className="bg-[#F2EFE7] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow card-hover">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="/sport2.jpeg?height=400&width=600"
                    alt="Sports Injury"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Sports Injury Treatment</h3>
                  <p className="text-black mb-4">
                    Specialized care for athletes and active individuals to recover from sports-related injuries.
                  </p>
                  <Button
                    variant="outline"
                    className="border-reccova-violet text-reccova-violet hover:bg-reccova-violet/5 rounded-full"
                    asChild
                  >
                    <Link href="/services#sports-injury">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TextReveal>

            <TextReveal delay={0.4}>
              <div className="bg-[#F2EFE7] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow card-hover">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="/geriatric.jpeg?height=400&width=600"
                    alt="Geriatric Care"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-3">Geriatric Physiotherapy</h3>
                  <p className="text-black mb-4">
                    Gentle, effective therapy designed specifically for the needs of older adults.
                  </p>
                  <Button
                    variant="outline"
                    className="border-reccova-pink text-reccova-pink hover:bg-reccova-pink/5 rounded-full"
                    asChild
                  >
                    <Link href="/services#geriatric-care">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TextReveal>
          </div>

          <TextReveal delay={0.5}>
            <div className="text-center mt-12">
              <Button
                className="bg-black from-reccova-pink to-reccova-mint hover:from-reccova-mint hover:to-reccova-pink text-black rounded-full px-8 py-6"
                asChild
              >
                <Link href="/services">
                <span className="gradient-text">
                  View All Services
                  </span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TextReveal>
        </div>
      </section>

      {}
      <section className="py-24 bg-gradient-to-br from-white via-reccova-lightPink to-reccova-lightViolet">
        <div className="container mx-auto px-4">
          <TextReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-6"><span className="gradient-text">What Our Patients Say</span></h2>
          </TextReveal>

          <TextReveal delay={0.1}>
            <p className="text-black  lg:text-3xl font-semibold text-center max-w-3xl mx-auto mb-12">
              Don't just take our word for it. Hear from our patients who have experienced the Reccova difference.
            </p>
          </TextReveal>

          <TestimonialSlider />
        </div>
      </section>

      {}
      <section
        id="booking-section"
        className="py-24 bg-gradient-to-r from-reccova-green to-reccova-mint text-white relative overflow-hidden"
      >
        {}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <TextReveal>
              <h2 className="text-4xl md:text-5xl text-black font-bold mb-6">Ready to Start Your Healing Journey?</h2>
            </TextReveal>

            <TextReveal delay={0.1}>
              <p className="text-xl mb-8 text-black font-semibold">
                Book your home physiotherapy session today and take the first step towards recovery and improved
                well-being.
              </p>
            </TextReveal>

            <TextReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  className="bg-black text-reccova-green hover:bg-black rounded-full px-8 py-6 text-lg shadow-lg"
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
                  className="border-white text-reccova-green hover:bg-white/10 rounded-full px-8 py-6 text-lg"
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </TextReveal>
          </div>
        </div>
      </section>

      

      {}
      <section className="py-24 bg-gradient-to-br from-white via-reccova-lightGreen to-reccova-lightViolet relative overflow-hidden">
        {}
        <AnimatedBlob color="#FDDDE6" size="300px" top="-100px" right="-100px" />
        <AnimatedBlob color="#ACE1AF" size="250px" bottom="-80px" left="-80px" delay={2} />

        <div className="container mx-auto px-4 relative z-10">
          <TextReveal>
            <h2 className="text-6xl md:text-6xl font-bold text-black text-center mb-6">Latest from Our Blog</h2>
          </TextReveal>

          <TextReveal delay={0.1}>
            <p className="text-black lg:text-2xl font-semibold text-center max-w-3xl mx-auto mb-16">
              Stay informed with the latest insights, tips, and advice from our expert physiotherapists.
            </p>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <TextReveal delay={0.2}>
              <div className="bg-[#F2EFE7] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow card-hover">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="/blog1.jpeg?vgheight=400&width=600"
                    alt="Blog Post 1"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-black mb-2">May 15, 2023 • Recovery Tips</div>
                  <h3 className="text-2xl text-black font-semibold mb-3">10 Essential Exercises for Post-Surgery Recovery</h3>
                  <p className="text-black mb-4">
                    Learn about the most effective exercises to speed up your recovery after surgery...
                  </p>
                  <Button
                    variant="outline"
                    className="border-reccova-green text-reccova-green hover:bg-reccova-green/5 rounded-full"
                    asChild
                  >
                    <Link href="/blog/post-surgery-exercises">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TextReveal>

            <TextReveal delay={0.3}>
              <div className="bg-[#F2EFE7] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow card-hover">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="/blog2.jpeg?height=400&width=600"
                    alt="Blog Post 2"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-black mb-2">April 28, 2023 • Expert Advice</div>
                  <h3 className="text-xl text-black font-semibold mb-3">Understanding Chronic Pain: Causes and Management</h3>
                  <p className="text-black mb-4">
                    Our experts explain the science behind chronic pain and effective strategies...
                  </p>
                  <Button
                    variant="outline"
                    className="border-reccova-violet text-reccova-violet hover:bg-reccova-violet/5 rounded-full"
                    asChild
                  >
                    <Link href="/blog/chronic-pain-management">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TextReveal>

            <TextReveal delay={0.4}>
              <div className="bg-[#F2EFE7] rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow card-hover">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="/blog3.jpeg?height=400&width=600"
                    alt="Blog Post 3"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-black mb-2">March 12, 2023 • Wellness</div>
                  <h3 className="text-xl text-black font-semibold mb-3">The Benefits of Regular Stretching for All Ages</h3>
                  <p className="text-black mb-4">
                    Discover how incorporating simple stretching routines into your daily life...
                  </p>
                  <Button
                    variant="outline"
                    className="border-reccova-pink text-reccova-pink hover:bg-reccova-pink/5 rounded-full"
                    asChild
                  >
                    <Link href="/blog/benefits-of-stretching">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TextReveal>
          </div>

          <TextReveal delay={0.5}>
            <div className="text-center mt-12">
              <Button
                className="bg-gradient-to-r from-reccova-green to-reccova-mint hover:from-reccova-mint hover:to-reccova-green text-white rounded-full px-8 py-6"
                asChild
              >
                <Link href="/blog">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TextReveal>
        </div>
      </section>
    </>
  )
}

