interface Appointment {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  date: string;
  time: string;
  address: string;
  isFirstTime: boolean;
  message?: string;
}

export function EmailTemplate({ appointment }: { appointment: Appointment }) {
  return (
    <div>
      <h2>New Appointment Booking</h2>
      <p><strong>Patient Details:</strong></p>
      <ul>
        <li>Name: {appointment.name}</li>
        <li>Phone: {appointment.phone}</li>
        <li>Email: {appointment.email}</li>
        <li>Service: {appointment.serviceType}</li>
        <li>Date: {appointment.date}</li>
        <li>Time: {appointment.time}</li>
        <li>Address: {appointment.address}</li>
        <li>First Time: {appointment.isFirstTime}</li>
        {appointment.message && <li>Additional Info: {appointment.message}</li>}
      </ul>
      <p>Please contact the patient to confirm the appointment.</p>
    </div>
  );
}