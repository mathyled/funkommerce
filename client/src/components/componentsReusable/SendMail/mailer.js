const nodemailer = require("nodemailer");
const {google} = require("googleapis"); 

const CLIENT_ID = "879297955144-96ni6nqafc82f2pmtoudirg83dr4vub1.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URL = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04FAFuoyoXth-CgYIARAAGAQSNwF-L9Ird6DJ9mfQIvNmAjUKiNazv7dPAW0GYfgnWGMXO8isR2T1CXr17O388p3AkdnGCl2myek";



const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URL)

oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})


async function sendMail(){
    try{
        const accessToken= await oAuth2Client.getAccessToken()

        const transport = nodemailer.createTransport({
            service: "gmail",
            auth:{
                type: "oauth2",
                user:"mathiasimagine@gmail.com",
                clientId: CLIENT_ID,
                clientSecret:CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        })

        const mailOptions = {
            from:"FUNKOMMERCE  <mathiasimagine@gmail.com>",
            to:"mathy.math@hotmail.com",
            subject:"Hello from gmail using API",
            text:"Hello from gmail using API",
            html:`<h1>Email Confirmation</h1>
            <h2>Hello ${name}</h2>
            <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
            <a href=http://localhost:3001/confirm/${confirmationCode}> Click here</a>
            </div>`,
        };

        const result = await transport.sendMail(mailOptions)
        return result
    }
    catch(error){
        console.log(error)
    }
};

sendMail().then(result=> console.log("Email send ...", result))
.catch(error => console.log(error.message))