"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import TextReveal from "@/components/text-reveal"
import AnimatedBlob from "@/components/animated-blob"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you shortly.",
          duration: 5000,
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } catch (error) {
        toast({
          title: "Submission Failed",
          description: "There was an error sending your message. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <AnimatedBlob color="#A8E6CF" size="400px" top="-200px" left="-200px" />
      <AnimatedBlob color="#D6C1FF" size="350px" bottom="-150px" right="-150px" delay={2} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-reccova-green to-reccova-mint text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <TextReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
          </TextReveal>

          <TextReveal delay={0.1}>
            <p className="text-xl max-w-3xl mx-auto text-center mb-8">
              Have questions or ready to book your appointment? Get in touch with our team today.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TextReveal>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow card-hover">
                <div className="bg-gradient-to-br from-reccova-green/20 to-reccova-mint/20 p-4 rounded-full inline-flex mb-6">
                  <MapPin className="h-8 w-8 text-reccova-green" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Our Location</h3>
                <p className="text-gray-600">
                  123 Healing Street
                  <br />
                  Wellness City, WC 12345
                </p>
              </div>
            </TextReveal>

            <TextReveal delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow card-hover">
                <div className="bg-gradient-to-br from-reccova-violet/20 to-reccova-pink/20 p-4 rounded-full inline-flex mb-6">
                  <Phone className="h-8 w-8 text-reccova-violet" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Phone</h3>
                <p className="text-gray-600">
                  <a href="tel:+1234567890" className="hover:text-reccova-violet transition-colors">
                    (123) 456-7890
                  </a>
                </p>
              </div>
            </TextReveal>

            <TextReveal delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow card-hover">
                <div className="bg-gradient-to-br from-reccova-pink/20 to-reccova-violet/20 p-4 rounded-full inline-flex mb-6">
                  <Mail className="h-8 w-8 text-reccova-pink" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@reccova.com" className="hover:text-reccova-pink transition-colors">
                    info@reccova.com
                  </a>
                </p>
              </div>
            </TextReveal>

            <TextReveal delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow card-hover">
                <div className="bg-gradient-to-br from-reccova-mint/20 to-reccova-green/20 p-4 rounded-full inline-flex mb-6">
                  <Clock className="h-8 w-8 text-reccova-mint" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 8am - 8pm
                  <br />
                  Saturday: 9am - 5pm
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gradient-to-br from-white via-reccova-lightGreen to-reccova-lightViolet">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <TextReveal>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold mb-6 gradient-text">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`rounded-lg ${errors.name ? "border-red-500" : ""}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`rounded-lg ${errors.email ? "border-red-500" : ""}`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className={`rounded-lg ${errors.subject ? "border-red-500" : ""}`}
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your inquiry..."
                      rows={5}
                      className={`rounded-lg ${errors.message ? "border-red-500" : ""}`}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-gradient text-white rounded-full py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </TextReveal>

            <TextReveal delay={0.2}>
              <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1647882211313!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Reccova Location"
                ></iframe>
              </div>
            </TextReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <TextReveal>
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">Frequently Asked Questions</h2>
          </TextReveal>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <TextReveal delay={0.1}>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">How do I book a home physiotherapy session?</h3>
                  <p className="text-gray-600">
                    You can book a session through our online booking system, by calling our office, or by sending us a
                    message through the contact form. We'll get back to you promptly to confirm your appointment.
                  </p>
                </div>
              </TextReveal>

              <TextReveal delay={0.2}>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">What areas do you serve?</h3>
                  <p className="text-gray-600">
                    We currently provide home physiotherapy services throughout the greater metropolitan area and
                    surrounding suburbs. Contact us to confirm if we serve your specific location.
                  </p>
                </div>
              </TextReveal>

              <TextReveal delay={0.3}>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">Do I need a doctor's referral?</h3>
                  <p className="text-gray-600">
                    While a doctor's referral is beneficial, it's not always required. We can assess your condition and
                    develop a treatment plan based on your needs. However, some insurance providers may require a
                    referral for coverage.
                  </p>
                </div>
              </TextReveal>

              <TextReveal delay={0.4}>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">What should I expect during my first session?</h3>
                  <p className="text-gray-600">
                    Your first session will include a comprehensive assessment of your condition, discussion of your
                    medical history and goals, and the beginning of your treatment plan. It typically lasts 60-90
                    minutes.
                  </p>
                </div>
              </TextReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

