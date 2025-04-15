import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { BookingEmailTemplate } from '@/components/email-templates';
import twilio from 'twilio';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    await resend.emails.send({
      from: `Recauva Contact <${process.env.EMAIL_FROM}>`,
      to: process.env.ADMIN_EMAIL!,
      subject: `${body.subject}`,
      html: `<p>Message from: ${body.name || 'Unknown'}</p>
      <p>Phone: ${body.phone || 'No number provided'}</p>
      <p>Email: ${body.email}</p>
      <p>Message: ${body.message}</p>`
    });


    return NextResponse.json({ 
      success: true,
      message: 'Contacted successfully' 
    });

  } catch (error: any) {
    console.error('Contact error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to contact',
        details: error.message 
      },
      { status: 500 }
    );
  }
}