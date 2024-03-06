const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, 
    auth: {
      user: "acaestamos90@outlook.com",
      pass: "arbol123",
      method: 'LOGIN',
    },
  });

module.exports = transporter;