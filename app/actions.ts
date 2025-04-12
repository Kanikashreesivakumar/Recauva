"use server"

import { revalidatePath } from "next/cache"
import { EmailTemplate } from '../components/email-template'
import { Resend } from 'resend'

const resend = new Resend('re_YOUR_RESEND_API_KEY')

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
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const appointment = {
    id: Date.now().toString(),
    ...data,
    status: "confirmed",
    createdAt: new Date().toISOString(),
  }

  appointments.push(data)

  revalidatePath("/dashboard")

  try {
    
    await resend.emails.send({
      from: 'Reccova <Recauva@gmail.com>',
      to: ['Recauva@gmail.com'],
      subject: 'New Appointment Booking',
      react: await EmailTemplate({ 
        customerName: data.name,
        appointmentDate: data.date,
        appointmentTime: data.time,
        serviceType: data.serviceType,
        customerPhone: data.phone,
        customerEmail: data.email,
        customerAddress: data.address,
        message: data.message
      })
    })

   
    await resend.emails.send({
      from: 'Reccova <Recauva@gmail.com>',
      to: [data.email],
      subject: 'Appointment Confirmation',
      react: await EmailTemplate({
        ...data,
        isConfirmation: true,
        customerName: "",
        appointmentDate: "",
        appointmentTime: "",
        customerPhone: "",
        customerEmail: "",
        customerAddress: ""
      })
    })

    return { success: true, appointment }
  } catch (error) {
    console.error('Error booking appointment:', error)
    throw new Error('Failed to book appointment')
  }
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

  revalidatePath("/dashboard")

  return { success: true }
}

