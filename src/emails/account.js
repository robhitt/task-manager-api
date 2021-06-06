const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: process.env.SENDGRID_EMAIL_FROM,
    subject: 'Thanks for signing up',
    text: `Welcome to the app, ${name}.  Let me know how you get along with the app.`,
    html: `<h1>Welcome to the app, ${name}</h1>.  Let me know how you get along with the app.`
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: process.env.SENDGRID_EMAIL_FROM,
    subject: 'We\'re sorry to see you go.',
    text: `Hi ${name}, we're sorry to see you go.  Is there anything we could have done to make our app better so you would have stayed?`,
    html: `<h1>Hi ${name}, we're sorry to see you go.</h1>  Is there anything we could have done to make our app better so you would have stayed?`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
};