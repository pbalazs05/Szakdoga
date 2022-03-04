const nodemailer = require('nodemailer');
/* éles környezetben ez a mailsender
module.exports = async function SendMail(mail,recepient,subject){
let transporter = nodemailer.createTransport({host: 'mx.inf.unideb.hu',port:25,secure:false});
const message = {  from: 'Doktori Iskola <noreply@inf.unideb.hu>', // sender address
                   to: recepient, // list of receivers
                   subject: subject, // Subject line
                   html: mail, // html body
                }
await transporter.sendMail(message,function(err,info) {
  if(err)
    console.log(err)
})
}*/

//dev környezetben a mailsender
const mailGun = require('nodemailer-mailgun-transport');
module.exports = async function SendMail(mail,recepient){
    const auth = {
            auth: {
                api_key: process.env.API_KEY || 'mailgun_api_key', // TODO:
                domain: process.env.DOMAIN || 'mailgun_domain' // TODO:
            }};
    let transporter = nodemailer.createTransport( mailGun(auth) );

    await transporter.sendMail({
                    from: 'Doktori Iskola <noreply@unideb.hu>', // sender address
                    to: recepient, // list of receivers
                    subject: "Registration Data", // Subject line
                    html: mail, // html body
                  });
    }
