const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000; // Choose any port

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle form submission
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a transporter object
    let transporter = nodemailer.createTransport({
      service: 'gmail', // Use Gmail as the email service (you can use others)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      }
    });

    // Email options
    let mailOptions = {
      from: email,
      to: 'labslumen@gmail.com', // The recipient email
      subject: `New message from ${name}`,
      text: message,
      html: `<p>You have a new message from <b>${name}</b> (${email})</p>
             <p>Message:</p>
             <p>${message}</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
