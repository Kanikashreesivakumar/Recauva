"use server"

import { revalidatePath } from "next/cache"

interface AppointmentData {
  name: string
  email: string
  phone: string
  address: string
  serviceType: string
  date: string
  time: string
  message: string
  isFirstTime: string
  updatedAt?: string
}

let appointments: AppointmentData[] = []

export async function bookAppointment(data: AppointmentData) {
  // Simulate server processing time
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // In a real app, you would save this to a database
  const appointment = {
    id: Date.now().toString(),
    ...data,
    status: "confirmed",
    createdAt: new Date().toISOString(),
  }

  appointments.push(data)

  // Revalidate the dashboard page to show the new appointment
  revalidatePath("/dashboard")

  return { success: true, appointment }
}

export async function getAppointments() {

  await new Promise((resolve) => setTimeout(resolve, 500))


  return appointments
}

export async function cancelAppointment(id: string) {

  await new Promise((resolve) => setTimeout(resolve, 1000))

  appointments = appointments.filter((_, index) => index.toString() !== id)

  revalidatePath("/dashboard")

  return { success: true }
}

export async function rescheduleAppointment(id: string, newDate: string, newTime: string) {

  await new Promise((resolve) => setTimeout(resolve, 1000))

  
  const index = Number.parseInt(id)
  if (appointments[index]) {
    appointments[index] = {
      ...appointments[index],
      date: newDate,
      time: newTime,
      updatedAt: new Date().toISOString(),
    }
  }

  // Revalidate the dashboard page to show the updated appointments
  revalidatePath("/dashboard")

  return { success: true }
}

