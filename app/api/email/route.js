import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, message, location, number } = await request.json();

    // Create the transporter object for sending emails
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'capitalcoatsndrywall@gmail.com', // Your Gmail address
        pass: 'lytx hvzz jlty pwde', // Your Gmail app password
      },
    });

    // Email configuration
    const mailOptions = {
      from: email, // Sender email
      to: 'capitalcoatsndrywall@gmail.com', // Receiver email (your email)
      subject: `New Inquiry from ${name} at ${location}`, // Updated subject
      text: `
        Email from: ${email}
        Address: ${location}
        Phone Number: ${number}
    
        Message: 
        ${message}
      `, // Updated body text
    };
    

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    // Respond with success
    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);

    // Respond with error
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
