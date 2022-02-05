import nodemailer from 'nodemailer';

export async function post({ request }) {
  const form = await request.json();

  let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
      ciphers: 'SSLv3'
    },
    auth: {
      user: "atontao@hotmail.com",
      pass: "5683Laugh"
    },
  });

  let info = await transporter.sendMail({
    from: "'Robert Vicente' <atontao@hotmail.com>",
    to: "roberto.v.lopez@gmail.com",
    subject: `Contacto web - ${form.name}<${form.email}>`,
    text: form.message,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  return {
    body: {
      message: 'Email sent',
    }
  };
}