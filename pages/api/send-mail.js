import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { fullName, userEmail, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mail = {
      from: process.env.EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: `New message from ${fullName}`,
      text: `You have received a message from ${fullName} (${userEmail}): \n\n${message}`,
    };

    try {
      await transporter.sendMail(mail);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
