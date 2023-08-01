// const { google } = require("googleapis");
const nodemailer = require("nodemailer");

const sendEmail = async (options)=>{
     
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "gbu.mukul@gmail.com",
      pass: "kiovfycwxrnfkqqu",
    },
  });
    
     const mailOption = {
        from: `Parlour <obmps.btrchain@gmail.com>`,
        to: options.email,
        subject: options.subject,
        html: options.message,
    };  
    
  return  await transport.sendMail(mailOption);
      

}


module.exports = sendEmail