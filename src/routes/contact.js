import nodemailer from 'nodemailer';

export async function post({ request }) {
  const form = await request.json();

  console.log(form);

  let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
      user: "verdu@live.com",
      pass: "88Lifemail"
    }
  });

  let info = await transporter.sendMail({
    from: '"Verdu" <verdu@live.com>',
    to: 'verdu@live.com',
    subject: `Contacto web - ${form.name}<${form.email}>`,
    text: form.message,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  return {
    body: form
  };
}