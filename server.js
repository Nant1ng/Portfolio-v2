const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

console.log(process.env.EMAIL);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

app.post("/send-email", (req, res) => {
  const { fullName, userEmail, message } = req.body;

  const mail = {
    from: process.env.EMAIL,
    to: process.env.RECEIVER_EMAIL,
    subject: `New message from ${fullName}`,
    text: `You have received a message from ${fullName} (${userEmail}): \n\n${message}`,
  };

  transporter.sendMail(mail, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Error sending email" });
    }
    console.log("info: ", info);
    res.status(200).json({ message: "Email sent successfully!" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
