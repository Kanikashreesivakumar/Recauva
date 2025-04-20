import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';
import { bookingEmailHtml } from '@/components/email-templates';
import twilio from 'twilio';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();

  
    try {
      await sgMail.send({
        to: process.env.ADMIN_EMAIL!,
        from: process.env.SENDGRID_FROM_EMAIL!,
        subject: `New Booking: ${body.name} - ${body.serviceType}`,
        html: bookingEmailHtml({ ...body, isConfirmation: false })
      });
    } catch (error: any) {
      console.error('Admin email delivery failed:', error);
    }

   
    try {
      await sgMail.send({
        to: body.email,
        from: process.env.SENDGRID_FROM_EMAIL!,
        subject: 'Your Physiotherapy Session Confirmation',
        html: bookingEmailHtml({ ...body, isConfirmation: true })
      });
    } catch (error: any) {
      console.error('Client confirmation email failed:', error);
    }

    // Send SMS notification to admin
    try {
      const formattedPhone = process.env.ADMIN_PHONE?.startsWith('+') 
        ? process.env.ADMIN_PHONE 
        : `+${process.env.ADMIN_PHONE?.replace(/\D/g, '')}`;
      const client = twilio(
        process.env.TWILIO_ACCOUNT_SID!,
        process.env.TWILIO_AUTH_TOKEN!
      );
      await client.messages.create({
        body: `New booking from ${body.name} for ${body.serviceType} on ${body.date} at ${body.time}\n contact: ${body.phone}\n message: ${body.message}`,
        to: formattedPhone,
        from: process.env.TWILIO_PHONE_NUMBER!,
      });
    } catch (error: any) {
      console.error('SMS notification failed:', error);
    }

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
