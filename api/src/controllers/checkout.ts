import { PrismaClient } from '@prisma/client'
const {product, order, user} = new PrismaClient()
import Stripe from 'stripe';
const {STRIPE_URL} = process.env 
const stripe = new Stripe(STRIPE_URL|| "", {
  apiVersion: '2020-08-27',
});
import { Request, Response } from "express";
import nodemailer from "nodemailer";
const { google } = require("googleapis");
const CLIENT_ID =
  "879297955144-96ni6nqafc82f2pmtoudirg83dr4vub1.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URL = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04Hafn99KTVCbCgYIARAAGAQSNwF-L9IrL-kh9ejR2hYYze2_cfNE93m_bIPZiL0VzbcW1pcpJCx77psTMKi3jxlpB6uKyn96cEQ";
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URL
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });



export const postCheckout = async (req:Request, res:Response)=>{
    try{
        const {userId, id}=req.body
        const findUser = await user.findFirst({where:{
          id:userId
        }})
        const findOrder = await order.findFirst({
            where:{UserId:userId},include:{Order_detail:true}
    })

       let amount = Math.floor(Number(findOrder?.amount))
        const payment = await stripe.paymentIntents.create(
            {
                amount,
                currency: "USD",
                payment_method: id,
                confirm:true
        })

        if(payment.status === "succeeded"){
        const updateAllProduct = findOrder?.Order_detail.map(async(order)=>{
              await product.update({where:{
                    id:order.productId?order.productId:2
                },data:{
                    stock:{
                        decrement:order.quantity
                    }
                }
            })
        })
        if(updateAllProduct){
            await order.update({where:{
                id:findOrder?.id
            },data:{
                status_pay:"PAYMENT"
            }})
        }
        const sendMail = async (oneUser: any) => {
          const accessToken = await oAuth2Client.getAccessToken();
          const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
              type: "oauth2",
              user: "mathiasimagine@gmail.com",
              clientId: CLIENT_ID,
              clientSecret: CLIENT_SECRET,
              refreshToken: REFRESH_TOKEN,
              accessToken: accessToken,
            },
          });
          const mailOptions = {
            from: "FUNKOMMERCE  <mathiasimagine@gmail.com>",
            // in Prod
            to: oneUser.email,
            subject: "Payment successfully",
            text: "Hello from gmail using API",
            html: `<h1>Thanks for purchase ${oneUser.name}</h1>
              <p>You can keep watching more us products</p>
              <a href=http://localhost:3000/> Click here </a>
              </div>`,
          };
          const result = await transport.sendMail(mailOptions);
          return result;
        };
       res.send({msg:"PAYMENT COMPLETED"})
       sendMail(findUser)
    } 
    return res.send({msg:"error"})

    }catch(error){
        console.log(error)
    }
}