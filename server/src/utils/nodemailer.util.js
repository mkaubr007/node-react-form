import nodemailer from 'nodemailer';

const sendEmail = async (toEmail, subject, text) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'stanton.watsica79@ethereal.email',
      pass: 'g6EFC3CK5ddQJeTJAW'
    }
  });

  const mailOptions = {
    from: 'stanton.watsica79@ethereal.email',
    to: toEmail,
    subject,
    text
  };

  await transporter.sendMail(mailOptions);
};
export default sendEmail;
