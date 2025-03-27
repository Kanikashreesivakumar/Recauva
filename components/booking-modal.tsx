"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, Clock, User, MapPin, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"
import { bookAppointment } from "@/app/actions"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  serviceType?: string
}

export default function BookingModal({ isOpen, onClose, serviceType = "" }: BookingModalProps) {
  const { toast } = useToast()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: serviceType,
    date: "",
    time: "",
    message: "",
    isFirstTime: "yes",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

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

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, isFirstTime: value }))
  }

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits"
    }
    if (!formData.address.trim()) newErrors.address = "Address is required"
    if (!formData.serviceType.trim()) newErrors.serviceType = "Service type is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.date.trim()) newErrors.date = "Date is required"
    if (!formData.time.trim()) newErrors.time = "Time is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      setStep(3)
    }
  }

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (validateStep1() && validateStep2()) {
      setIsSubmitting(true)

      try {
        await bookAppointment(formData)

        toast({
          title: "Appointment Booked!",
          description: `Your appointment has been scheduled for ${formData.date} at ${formData.time}. We'll send a confirmation to your email.`,
          duration: 5000,
        })

        // Reset form and close modal
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          serviceType: "",
          date: "",
          time: "",
          message: "",
          isFirstTime: "yes",
        })
        setStep(1)
        onClose()
      } catch (error) {
        toast({
          title: "Booking Failed",
          description: "There was an error booking your appointment. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const serviceOptions = [
    "Rehabilitation",
    "Sports Injury",
    "Geriatric Care",
    "Neurological Therapy",
    "Pediatric Therapy",
    "Post-Surgery Recovery",
    "Pain Management",
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-reccova-green/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-reccova-violet/10 rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-semibold gradient-text">Book Your Physiotherapy Session</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6">
                <div className="flex justify-between mb-8">
                  {[1, 2, 3].map((stepNumber) => (
                    <div key={stepNumber} className="flex flex-col items-center">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full mb-2 transition-colors ${
                          step === stepNumber
                            ? "bg-gradient-to-r from-reccova-green to-reccova-mint text-white"
                            : step > stepNumber
                              ? "bg-reccova-green/20 text-reccova-green"
                              : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {step > stepNumber ? <Check size={18} /> : stepNumber}
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          step === stepNumber
                            ? "text-gray-900"
                            : step > stepNumber
                              ? "text-reccova-green"
                              : "text-gray-400"
                        }`}
                      >
                        {stepNumber === 1 ? "Personal Info" : stepNumber === 2 ? "Schedule" : "Confirm"}
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 20, opacity: 0 }}
                      className="space-y-4"
                    >
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
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(123) 456-7890"
                          className={`rounded-lg ${errors.phone ? "border-red-500" : ""}`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>

                      <div>
                        <Label htmlFor="address">Home Address</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="123 Main St, City, State"
                          className={`rounded-lg ${errors.address ? "border-red-500" : ""}`}
                        />
                        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                      </div>

                      <div>
                        <Label htmlFor="serviceType">Service Type</Label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-lg ${
                            errors.serviceType ? "border-red-500" : "border-gray-300"
                          }`}
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        {errors.serviceType && <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>}
                      </div>

                      <div>
                        <Label>Is this your first physiotherapy session?</Label>
                        <RadioGroup
                          value={formData.isFirstTime}
                          onValueChange={handleRadioChange}
                          className="flex space-x-4 mt-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="yes" />
                            <Label htmlFor="yes">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="no" />
                            <Label htmlFor="no">No</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      className="space-y-4"
                    >
                      <div>
                        <Label htmlFor="date">Preferred Date</Label>
                        <div className="relative">
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            min={new Date().toISOString().split("T")[0]}
                            className={`pl-10 rounded-lg ${errors.date ? "border-red-500" : ""}`}
                          />
                          <Calendar
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-reccova-green"
                            size={16}
                          />
                        </div>
                        {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                      </div>

                      <div>
                        <Label htmlFor="time">Preferred Time</Label>
                        <div className="relative">
                          <Input
                            id="time"
                            name="time"
                            type="time"
                            value={formData.time}
                            onChange={handleChange}
                            className={`pl-10 rounded-lg ${errors.time ? "border-red-500" : ""}`}
                          />
                          <Clock
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-reccova-violet"
                            size={16}
                          />
                        </div>
                        {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                      </div>

                      <div>
                        <Label htmlFor="message">Additional Information (Optional)</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your condition or any specific requirements"
                          rows={4}
                          className="rounded-lg"
                        />
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                      <h3 className="font-medium text-lg text-gray-800 mb-4">Appointment Summary</h3>

                      <div className="bg-gradient-to-r from-reccova-green/5 to-reccova-violet/5 p-6 rounded-xl space-y-4">
                        <div className="flex">
                          <User className="text-reccova-green mr-3 flex-shrink-0" size={18} />
                          <div>
                            <p className="text-sm text-gray-500">Patient</p>
                            <p className="font-medium">{formData.name}</p>
                          </div>
                        </div>

                        <div className="flex">
                          <Calendar className="text-reccova-violet mr-3 flex-shrink-0" size={18} />
                          <div>
                            <p className="text-sm text-gray-500">Date & Time</p>
                            <p className="font-medium">
                              {formData.date} at {formData.time}
                            </p>
                          </div>
                        </div>

                        <div className="flex">
                          <MapPin className="text-reccova-pink mr-3 flex-shrink-0" size={18} />
                          <div>
                            <p className="text-sm text-gray-500">Location</p>
                            <p className="font-medium">{formData.address}</p>
                          </div>
                        </div>

                        <div>
                          <p className="text-sm text-gray-500">Service</p>
                          <p className="font-medium">{formData.serviceType}</p>
                        </div>

                        {formData.message && (
                          <div>
                            <p className="text-sm text-gray-500">Additional Information</p>
                            <p className="text-sm">{formData.message}</p>
                          </div>
                        )}
                      </div>

                      <p className="text-sm text-gray-500">
                        By confirming this appointment, you agree to our terms and conditions. A confirmation email will
                        be sent to {formData.email}.
                      </p>
                    </motion.div>
                  )}

                  <div className="flex justify-between mt-8">
                    {step > 1 ? (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleBack}
                        disabled={isSubmitting}
                        className="rounded-full"
                      >
                        Back
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={onClose}
                        disabled={isSubmitting}
                        className="rounded-full"
                      >
                        Cancel
                      </Button>
                    )}

                    {step < 3 ? (
                      <Button type="button" onClick={handleNext} className="btn-gradient text-white rounded-full">
                        Next
                      </Button>
                    ) : (
                      <Button type="submit" className="btn-gradient text-white rounded-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <motion.div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Booking...
                          </>
                        ) : (
                          "Confirm Booking"
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

