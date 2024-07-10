import nodemailer from 'nodemailer';
const SMTP_Creds = {user:process.env.SMTP_USER as string,pass:process.env.SMTP_PASS as string,host:process.env.SMTP_HOST as string};
const SMTP = nodemailer.createTransport({
    host: SMTP_Creds.host,
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: SMTP_Creds.user,
      pass: SMTP_Creds.pass,
    },
});
export {SMTP};