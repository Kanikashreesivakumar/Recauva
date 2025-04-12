interface EmailTemplateProps {
  customerName: string
  appointmentDate: string
  appointmentTime: string
  serviceType: string
  customerPhone: string
  customerEmail: string
  customerAddress: string
  message?: string
  isConfirmation?: boolean
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  customerName,
  appointmentDate,
  appointmentTime,
  serviceType,
  customerPhone,
  customerEmail,
  customerAddress,
  message,
  isConfirmation
}) => (
  <div>
    <h1>{isConfirmation ? 'Appointment Confirmation' : 'New Appointment Request'}</h1>
    <p>Service Type: {serviceType}</p>
    <p>Date: {appointmentDate}</p>
    <p>Time: {appointmentTime}</p>
    <p>Patient Name: {customerName}</p>
    <p>Phone: {customerPhone}</p>
    <p>Email: {customerEmail}</p>
    <p>Address: {customerAddress}</p>
    {message && <p>Additional Information: {message}</p>}
  </div>
)