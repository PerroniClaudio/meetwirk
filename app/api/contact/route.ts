import nodemailer from "nodemailer";

const mailSenderAccount = {
  user: process.env.MAIL_SENDER_ACCOUNT_USERNAME,
  pass: process.env.MAIL_SENDER_ACCOUNT_PASSWORD,
};

export async function POST(request: Request) {
  const { business, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: mailSenderAccount.user,
      pass: mailSenderAccount.pass,
    },
  });

  const mailData = {
    from: mailSenderAccount.user,
    to: "c.perroni@ifortech.com",
    subject: `Richiesta di contatto da MEETWIRK`,
    text: message,
    html: `<div>${business} <br> ${message}</div>`,
  };

  const info = await transporter.sendMail(mailData);

  return new Response(JSON.stringify([business, email, message]));
}
