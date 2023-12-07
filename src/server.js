const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Add CORS for cross-origin requests
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'tejaskarde21@gmail.com', // Replace with your email
        pass: '7083093390', // Replace with your password or use an app-specific password
      },
    });

    const mailOptions = {
      from: 'tejaskarde98@gmail.com', // Replace with your email
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent: ' + info.response);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
