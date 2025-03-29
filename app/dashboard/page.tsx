"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, AlertCircle, CheckCircle, XCircle, Edit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import { getAppointments, cancelAppointment, rescheduleAppointment } from "@/app/actions"
import TextReveal from "@/components/text-reveal"

interface Appointment {
  id: string
  name: string
  email: string
  phone: string
  address: string
  serviceType: string
  date: string
  time: string
  message: string
  isFirstTime: string
  status?: string
  createdAt?: string
}

export default function DashboardPage() {
  const { toast } = useToast()
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)
  const [newDate, setNewDate] = useState("")
  const [newTime, setNewTime] = useState("")
  const [isRescheduling, setIsRescheduling] = useState(false)
  const [isCancelling, setIsCancelling] = useState(false)

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getAppointments()
        const formattedData: Appointment[] = data.map((item: any) => ({
          id: item.id,
          name: item.name,
          email: item.email,
          phone: item.phone,
          address: item.address,
          serviceType: item.serviceType,
          date: item.date,
          time: item.time,
          message: item.message,
          isFirstTime: item.isFirstTime,
          status: item.status,
          createdAt: item.createdAt,
        }))
        setAppointments(formattedData)
      } catch (error) {
        console.error("Error fetching appointments:", error)
        toast({
          title: "Error",
          description: "Failed to load your appointments. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchAppointments()
  }, [toast])

  const handleReschedule = async (id: string) => {
    if (!newDate || !newTime) {
      toast({
        title: "Error",
        description: "Please select both a new date and time.",
        variant: "destructive",
      })
      return
    }

    setIsRescheduling(true)

    try {
      await rescheduleAppointment(id, newDate, newTime)

      // Update local state
      setAppointments((prev) => prev.map((app) => (app.id === id ? { ...app, date: newDate, time: newTime } : app)))

      toast({
        title: "Appointment Rescheduled",
        description: `Your appointment has been rescheduled to ${newDate} at ${newTime}.`,
      })

      setSelectedAppointment(null)
      setNewDate("")
      setNewTime("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to reschedule your appointment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsRescheduling(false)
    }
  }

  const handleCancel = async (id: string) => {
    setIsCancelling(true)

    try {
      await cancelAppointment(id)

      setAppointments((prev) => prev.filter((app) => app.id !== id))

      toast({
        title: "Appointment Cancelled",
        description: "Your appointment has been cancelled successfully.",
      })

      setSelectedAppointment(null)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to cancel your appointment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsCancelling(false)
    }
  }

  
  useEffect(() => {
    if (!isLoading && appointments.length === 0) {
      const sampleAppointments: Appointment[] = [
        {
          id: "0",
          name: "John Doe",
          email: "john@example.com",
          phone: "(123) 456-7890",
          address: "123 Main St, Anytown, USA",
          serviceType: "Rehabilitation Therapy",
          date: "2023-06-15",
          time: "10:00",
          message: "Post-surgery recovery for knee replacement",
          isFirstTime: "yes",
          status: "confirmed",
        },
        {
          id: "1",
          name: "John Doe",
          email: "john@example.com",
          phone: "(123) 456-7890",
          address: "123 Main St, Anytown, USA",
          serviceType: "Sports Injury Treatment",
          date: "2023-06-22",
          time: "14:30",
          message: "Ankle sprain from basketball",
          isFirstTime: "no",
          status: "confirmed",
        },
      ]

      setAppointments(sampleAppointments)
    }
  }, [isLoading, appointments.length])

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="bg-reccova-600 text-white py-16">
        <div className="container mx-auto px-4">
          <TextReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Patient Dashboard</h1>
          </TextReveal>

          <TextReveal delay={0.1}>
            <p className="text-xl max-w-3xl mx-auto text-center mb-8">
              Manage your appointments and track your recovery progress.
            </p>
          </TextReveal>
        </div>
      </section>

      {}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="appointments" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="appointments">My Appointments</TabsTrigger>
              <TabsTrigger value="progress">Recovery Progress</TabsTrigger>
            </TabsList>

            <TabsContent value="appointments">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Appointments</CardTitle>
                  <CardDescription>View, reschedule, or cancel your upcoming physiotherapy sessions.</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-gray-100 animate-pulse h-32 rounded-lg"></div>
                      ))}
                    </div>
                  ) : appointments.length > 0 ? (
                    <div className="space-y-4">
                      {appointments.map((appointment, index) => (
                        <motion.div
                          key={appointment.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="bg-black border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                              <h3 className="font-semibold text-lg">{appointment.serviceType}</h3>
                              <div className="flex items-center text-gray-600 mt-2">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span>
                                  {new Date(appointment.date).toLocaleDateString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                  })}
                                </span>
                              </div>
                              <div className="flex items-center text-gray-600 mt-1">
                                <Clock className="h-4 w-4 mr-2" />
                                <span>{appointment.time}</span>
                              </div>
                              <div className="flex items-center text-gray-600 mt-1">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>{appointment.address}</span>
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="hover-glow border-reccova-600 text-reccova-600 hover:bg-reccova-50"
                                    onClick={() => setSelectedAppointment(appointment)}
                                  >
                                    <Edit className="h-4 w-4 mr-2" />
                                    Reschedule
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Reschedule Appointment</DialogTitle>
                                    <DialogDescription>
                                      Select a new date and time for your appointment.
                                    </DialogDescription>
                                  </DialogHeader>

                                  <div className="space-y-4 py-4">
                                    <div className="space-y-2 text:black">
                                      <Label htmlFor="new-date">New Date</Label>
                                      <Input
                                        id="new-date"
                                        type="date"
                                        value={newDate}
                                        onChange={(e) => setNewDate(e.target.value)}
                                        min={new Date().toISOString().split("T")[0]}
                                      />
                                    </div>

                                    <div className="space-y-2 text:black">
                                      <Label htmlFor="new-time">New Time</Label>
                                      <Input
                                        id="new-time"
                                        type="time"
                                        value={newTime}
                                        onChange={(e) => setNewTime(e.target.value)}
                                      />
                                    </div>
                                  </div>

                                  <DialogFooter>
                                    <Button
                                      variant="outline"
                                      onClick={() => {
                                        setSelectedAppointment(null)
                                        setNewDate("")
                                        setNewTime("")
                                      }}
                                    >
                                      Cancel
                                    </Button>
                                    <Button
                                      className="bg-reccova-600 hover:bg-reccova-700"
                                      onClick={() => selectedAppointment && handleReschedule(selectedAppointment.id)}
                                      disabled={isRescheduling || !newDate || !newTime}
                                    >
                                      {isRescheduling ? "Rescheduling..." : "Confirm"}
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>

                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="border-red-600 text-red-600 hover:bg-red-50"
                                    onClick={() => setSelectedAppointment(appointment)}
                                  >
                                    <XCircle className="h-4 w-4 mr-2" />
                                    Cancel
                                  </Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Cancel Appointment</DialogTitle>
                                    <DialogDescription>
                                      Are you sure you want to cancel this appointment? This action cannot be undone.
                                    </DialogDescription>
                                  </DialogHeader>

                                  {selectedAppointment && (
                                    <div className="bg-gray-50 p-4 rounded-lg my-4 text:black">
                                      <p>
                                        <strong>Service:</strong> {selectedAppointment.serviceType}
                                      </p>
                                      <p>
                                        <strong>Date:</strong> {new Date(selectedAppointment.date).toLocaleDateString()}
                                      </p>
                                      <p>
                                        <strong>Time:</strong> {selectedAppointment.time}
                                      </p>
                                    </div>
                                  )}

                                  <DialogFooter>
                                    <Button variant="outline" onClick={() => setSelectedAppointment(null)}>
                                      Keep Appointment
                                    </Button>
                                    <Button
                                      variant="destructive"
                                      onClick={() => selectedAppointment && handleCancel(selectedAppointment.id)}
                                      disabled={isCancelling}
                                    >
                                      {isCancelling ? "Cancelling..." : "Confirm Cancellation"}
                                    </Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">No Appointments Found</h3>
                      <p className="text-gray-600 mb-6">You don't have any upcoming appointments scheduled.</p>
                      <Button
                        className="hover-glow bg-reccova-600 hover:bg-reccova-700"
                        onClick={() => {
                          document.dispatchEvent(new CustomEvent("open-booking-modal"))
                        }}
                      >
                        Book an Appointment
                      </Button>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between">
                  <p className="text-sm text-gray-500">
                    Need to make changes? You can reschedule or cancel up to 24 hours before your appointment.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="progress">
              <Card>
                <CardHeader>
                  <CardTitle>Recovery Progress</CardTitle>
                  <CardDescription>Track your recovery journey and view your therapist's notes.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="font-semibold text-lg mb-4">Recovery Milestones</h3>

                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium">Initial Assessment Completed</h4>
                            <p className="text-sm text-gray-600">May 10, 2023</p>
                            <p className="text-sm text-gray-600 mt-1">
                              Baseline measurements taken and initial treatment plan established.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium">Pain Reduction - 30%</h4>
                            <p className="text-sm text-gray-600">May 24, 2023</p>
                            <p className="text-sm text-gray-600 mt-1">
                              Pain levels decreased from 8/10 to 5/10. Continue with prescribed exercises.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium">Mobility Improvement - 40%</h4>
                            <p className="text-sm text-gray-600">June 7, 2023</p>
                            <p className="text-sm text-gray-600 mt-1">
                              Range of motion has improved significantly. Advancing to next phase of exercises.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-gray-600">Strength Recovery - 60%</h4>
                            <p className="text-sm text-gray-500">Target: June 21, 2023</p>
                            <p className="text-sm text-gray-500 mt-1">
                              Working towards regaining 60% of original strength.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <div className="h-5 w-5 rounded-full border-2 border-gray-300"></div>
                          </div>
                          <div className="ml-3">
                            <h4 className="font-medium text-gray-600">Return to Normal Activities</h4>
                            <p className="text-sm text-gray-500">Target: July 15, 2023</p>
                            <p className="text-sm text-gray-500 mt-1">
                              Goal to return to regular daily activities without restrictions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-6 shadow-sm">
                      <h3 className="font-semibold text-lg mb-4">Therapist Notes</h3>

                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Session on June 7, 2023</h4>
                            <span className="text-sm text-gray-500">Dr. Sarah Johnson</span>
                          </div>
                          <p className="text-gray-600 text-sm">
                            Patient showing good progress with mobility exercises. Pain levels continue to decrease.
                            Increased resistance in strengthening exercises. Patient reports being able to perform more
                            daily activities with less discomfort. Continue with home exercise program as prescribed.
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Session on May 24, 2023</h4>
                            <span className="text-sm text-gray-500">Dr. Sarah Johnson</span>
                          </div>
                          <p className="text-gray-600 text-sm">
                            Significant reduction in pain reported. Range of motion improving steadily. Added new
                            exercises to home program focusing on strengthening. Patient adhering well to prescribed
                            exercises. Discussed proper ergonomics for daily activities.
                          </p>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Session on May 10, 2023</h4>
                            <span className="text-sm text-gray-500">Dr. Sarah Johnson</span>
                          </div>
                          <p className="text-gray-600 text-sm">
                            Initial assessment completed. Patient presenting with limited range of motion and pain rated
                            8/10. Established baseline measurements and developed initial treatment plan. Provided
                            gentle mobility exercises and pain management strategies. Patient motivated and engaged in
                            recovery process.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">
                    This progress tracker is updated after each session with your physiotherapist.
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}

