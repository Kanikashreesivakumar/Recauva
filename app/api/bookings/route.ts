import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { BookingEmailTemplate } from '@/components/email-templates';
import twilio from 'twilio';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
  

    const formattedPhone = process.env.ADMIN_PHONE?.startsWith('+') 
      ? process.env.ADMIN_PHONE 
      : `+${process.env.ADMIN_PHONE?.replace(/\D/g, '')}`;

    await resend.emails.send({
      from: `Recauva Bookings <${process.env.EMAIL_FROM}>`,
      to: process.env.ADMIN_EMAIL!,
      subject: `New Booking: ${body.name} - ${body.serviceType}`,
      react: BookingEmailTemplate({ ...body, isConfirmation: false }),
    });

    await resend.emails.send({
      from: `Recauva <${process.env.EMAIL_FROM}>`,
      to: body.email,
      subject: 'Your Physiotherapy Session Confirmation',
      react: BookingEmailTemplate({ ...body, isConfirmation: true }),
    });

    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    await client.messages.create({
      body: `New booking from ${body.name} for ${body.serviceType} on ${body.date} at ${body.time}\n contact: ${body.phone}\n message: ${body.message}`,
      to: formattedPhone,
      from: process.env.TWILIO_PHONE_NUMBER!,
    });

    return NextResponse.json({ 
      success: true,
      message: 'Booking processed successfully' 
    });

  } catch (error: any) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to process booking',
        details: error.message 
      },
      { status: 500 }
    );
  }
}