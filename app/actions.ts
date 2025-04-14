"use server"

import { revalidatePath } from "next/cache"
import EmailTemplate from '@/components/email-templates'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface AppointmentData {
  name: string
  email: string
  phone: string
  address: string
  serviceType: string
  date: string
  time: string
  message: string
  isFirstTime: boolean
  updatedAt?: string
  isConfirmation?: boolean
}

let appointments: AppointmentData[] = []

export async function bookAppointment(formData: AppointmentData) {
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const appointment = {
    id: Date.now().toString(),
    ...formData,
    status: "confirmed",
    createdAt: new Date().toISOString(),
  }

  appointments.push(formData)

  revalidatePath("/dashboard")

  try {

    await resend.emails.send({
      from: 'Recauva Appointments <appointments@yourdomain.com>',
      to: process.env.ADMIN_EMAIL || 'default@yourdomain.com',
      subject: `New Appointment: ${formData.name} - ${formData.serviceType}`,
      react: EmailTemplate({ 
        appointment: { 
          ...formData, 
          isFirstTime: formData.isFirstTime === 'true' 
        } 
      }),
    });


    await resend.emails.send({
      from: 'Recauva <appointments@yourdomain.com>',
      to: formData.email,
      subject: 'Your Physiotherapy Appointment Confirmation',
      react: EmailTemplate({ 
        appointment: {
          ...formData,
          isConfirmation: true
        }
      }),
    });

    return { success: true, appointment }
  } catch (error) {
    console.error('Booking error:', error)
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

