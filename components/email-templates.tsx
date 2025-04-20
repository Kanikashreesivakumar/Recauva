interface BookingEmailProps {
  name: string
  email: string
  phone: string
  serviceType: string
  date: string
  time: string
  message?: string
  isConfirmation?: boolean
}

export function BookingEmailTemplate({
  name,
  email,
  phone,
  serviceType,
  date,
  message,
  isConfirmation
}: BookingEmailProps) {
  return (
    <div>
      <h2>{isConfirmation ? 'Your Booking Confirmation' : 'New Booking Request'}</h2>
      <div>
        <p><strong>{isConfirmation ? 'Your Details:' : 'Patient Details:'}</strong></p>
        <ul>
          <li>Name: {name}</li>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
          <li>Service: {serviceType}</li>
          <li>Date: {date}</li>
          {message && <li>Additional Notes: {message}</li>}
        </ul>
        <h2>{isConfirmation ? 'Thank you for showing interest in Recauva. Our patient care executive will connect with you shortly' : 'Bookin confirmation message has been sent to your customer'}</h2>
      </div>
    </div>
  )
}

export function bookingEmailHtml({
  name,
  email,
  phone,
  serviceType,
  date,
  time,
  message,
  isConfirmation,
}: {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  date: string;
  time: string;
  message?: string;
  isConfirmation?: boolean;
}) {
  return `
    <div>
      <h2>${isConfirmation ? 'Your Booking Confirmation' : 'New Booking Request'}</h2>
      <div>
        <p><strong>Patient Details:</strong></p>
        <ul>
          <li>Name: ${name}</li>
          <li>Email: ${email}</li>
          <li>Phone: ${phone}</li>
          <li>Service: ${serviceType}</li>
          <li>Date: ${date}</li>
          <li>Time: ${time}</li>
          ${message ? `<li>Additional Notes: ${message}</li>` : ''}
        </ul>
      </div>
      <h2>${isConfirmation ? 'Please contact this number for your bookin confirmation: +917418761589' : 'Contact details for booking confirmation has been given to customer'}</h2>
    </div>
  `;
}