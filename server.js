import express from "express";
import fs from "fs";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

app.use(cors());
app.use(express.json());
// Configure your transporter (use your real Gmail and app password)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "monaali980628@gmail.com", // your Gmail
    pass: "mlbk awrk wvky cazu",     // your Gmail App Password
  },
});

// Helper function to send email
function sendNotificationEmail(subject, text, fromEmail) {
  return transporter.sendMail({
    from: `"Booking User" <${fromEmail || 'noreply@atharwebsite.com'}>`,
    to: "monaali980628@gmail.com",
    subject,
    text,
  });
}

app.post("/booking", (req, res) => {
  const data = req.body;
  fs.readFile("bookings.json", (err, fileData) => {
    let bookings = [];
    if (!err && fileData.length) {
      bookings = JSON.parse(fileData);
    }
    bookings.push(data);
    fs.writeFile("bookings.json", JSON.stringify(bookings, null, 2), () => {
      sendNotificationEmail(
        "لقد تم حجز موعد جديد",
        `بيانات الموعد الذي تم حجزه :\n\n${JSON.stringify(data, null, 2)}`,
        data.email
      ).then(() => {
        res.json({ status: "success" });
      }).catch(() => {
        res.json({ status: "success", email: "failed" });
      });
    });
  });
});

app.post("/contact", (req, res) => {
  const data = req.body;
  fs.readFile("contacts.json", (err, fileData) => {
    let contacts = [];
    if (!err && fileData.length) {
      contacts = JSON.parse(fileData);
    }
    contacts.push(data);
    fs.writeFile("contacts.json", JSON.stringify(contacts, null, 2), (err) => {
      if (err) {
        res.status(500).json({ status: "error" });
      } else {
        // Send email notification from user's email if provided
        sendNotificationEmail(
          "New Contact Us Submission",
          `A new contact form was submitted:\n\n${JSON.stringify(data, null, 2)}`,
          data.email // user's email as sender
        ).then(() => {
          res.json({ status: "success" });
        }).catch(() => {
          res.json({ status: "success", email: "failed" });
        });
      }
    });
  });
});


app.put("/booking/last", (req, res) => {
  const updatedData = req.body;
  fs.readFile("bookings.json", (err, fileData) => {
    if (err || !fileData.length) {
      return res.status(404).json({ status: "not found" });
    }
    let bookings = JSON.parse(fileData);
    bookings[bookings.length - 1] = updatedData;
    fs.writeFile("bookings.json", JSON.stringify(bookings, null, 2), (err) => {
      if (err) {
        res.status(500).json({ status: "error" });
      } else {
        res.json({ status: "updated" });
      }
    });
  });
});

app.listen(5000, () => console.log("Server running on port 5000"));