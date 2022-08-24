const mailgun = require("mailgun-js");
const DOMAIN = process.env.MAILGUN_DOMAIN;

exports.sendAccountActivationEmail = async (user) => {

    const token = user.activationToken;

    const accountActivationLink = process.env.BASE_URL + '/account/activate?token=' + token
    console.log('accountActivationLink', accountActivationLink)

    // Send this link via mailgun to the user
    const mg = mailgun({
        apiKey: process.env.MAILGUN_API_KEY, 
        domain: DOMAIN
    });

    const data = {
        from: 'Pedro Pereira <pedro.apereira9@google.com>',
        to: process.env.NODE_ENV === 'production' ? user.email : 'pedro.apereira9@gmail.com',
        subject: 'Account Activation',
        text: `Please click on this link to activate your account ${accountActivationLink}`
    };

    try {
        const body = await mg.messages().send(data);
        console.log('body', body)
    } catch (error) {
        console.log('error', error);
    }
}