import nodemailer from 'nodemailer';

const account = {
  user: "verdu@live.com",//"atontao@hotmail.com",
  pass: "88Lifemail",//"5683Laugh",
  to: "verdukactus@gmail.com"//"roberto.v.lopez@gmail.com"
}

export async function post({ request }) {
  const form = await request.json();

  let transporter = nodemailer.createTransport({
    service: "Outlook365",
    host: "smtp.office365.com",
    port: "587",
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: {
      user: account.user,
      pass: account.pass,
    },
  });

  let info = await transporter.sendMail({
    from: `"Robert Vicente" <${account.user}>`,
    to: account.to,
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