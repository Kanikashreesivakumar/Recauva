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
  time,
  message,
  isConfirmation
}: BookingEmailProps) {
  return (
    <div>
      <h2>{isConfirmation ? 'Your Booking Confirmation' : 'New Booking Request'}</h2>
      <div>
        <p><strong>Patient Details:</strong></p>
        <ul>
          <li>Name: {name}</li>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
          <li>Service: {serviceType}</li>
          <li>Date: {date}</li>
          <li>Time: {time}</li>
          {message && <li>Additional Notes: {message}</li>}
        </ul>
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
    </div>
  `;
}