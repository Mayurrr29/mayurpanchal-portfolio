import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Allow requests from your React app

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // or another service like Outlook, Yahoo, etc.
  auth: {
    user: 'mayurrrp29@gmail.com', // Replace with your email
    pass: 'Mayur@2@2', // Replace with your email password
  },
});

// API endpoint to handle form submissions
app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // User's email
    to: 'mayurrrp29@gmail.com', // Replace with your email address
    subject: `New Inquiry from ${name}`,
    text: `You have received a new inquiry:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }
    res.status(200).json({ message: 'Email sent successfully!' });
  });
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
