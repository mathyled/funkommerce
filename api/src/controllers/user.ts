import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
import { Request, Response } from "express";
import { helperCreateUser } from "../helpers/user";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import nodemailer from 'nodemailer';
const {google} = require('googleapis');
const CLIENT_ID = "879297955144-96ni6nqafc82f2pmtoudirg83dr4vub1.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URL = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04FAFuoyoXth-CgYIARAAGAQSNwF-L9Ird6DJ9mfQIvNmAjUKiNazv7dPAW0GYfgnWGMXO8isR2T1CXr17O388p3AkdnGCl2myek";
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID,CLIENT_SECRET,REDIRECT_URL)
oAuth2Client.setCredentials({refresh_token:REFRESH_TOKEN})

//encryp & validate password
const encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};
const validatePassword = function (password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
}

export const signUp = async (req: Request, res: Response) => {
    try {
        // console.log(req.body);
        const props = req.body
        let newUser: any = await helperCreateUser(props);
        newUser.password = await encryptPassword(newUser.password);
        newUser = await prisma.user.update({
            where: { id: newUser.id },
            data: { password: newUser.password }
        });
        // token
        const token: string = jwt.sign({ id: newUser.id }, process.env.SECRET || "tokenTest", {
            expiresIn: "1d", //token expires in 2 hours
        });
        newUser
            ? res.status(200).header('auth-token', token).send({ msg: "User created successfully, pls check your email to confirm" })
            : res.status(400).send({ msg: "Error, could not create user" });

            const sendMail = async (newUser: any) => {

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
                        // in Prod
                        to: newUser.email,
                        subject:"Activate Account",
                        text:"Hello from gmail using API",
                        html:`<h1>Email Confirmation</h1>
                        <h2>Hello ${newUser.name}</h2>
                        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
                        <a href=http://localhost:3001/api/user/confirm/${token}> Click here</a>
                        </div>`,
                    }
                    const result = await transport.sendMail(mailOptions)
                    return result;
                }
                sendMail(newUser)
            }
        catch (error) {
            console.log(error);
        }
};

export const signIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findFirst({ where: { email } });
        // console.log(user);
        if (!user) {
            return res.status(404).send({ msg: "User not found" });
        }
        const validPassword: boolean = await validatePassword(password, user.password || ""); //PROBABLEMENTE ESTA MAL
        if (!validPassword) {
            return res.status(401).send({ msg: "Password is incorrect" });
        }
        if(user.status === "PENDING"){
            return res.status(401).send({ msg: "User not confirmed, please check your Email" });
        } else{
        // token
        const token: string = jwt.sign({ id: user.id }, process.env.SECRET || "tokenTest", {
            expiresIn: "1d",
        })
        res.status(200).send({ msg: "User signed in successfully" });
    }
    } catch (error) {
        console.error(error);
    }
};
interface IDecoded {
    id: string;
    iat: number;
    exp: number;
  }
export const profile = async (req: Request, res: Response) => {
    try {
        const token = req.header("auth-token");
        if (!token) return res.status(401).send({ msg: "Acces denied" });
    
        const decoded = jwt.verify(token, process.env.SECRET || "tokenTest") as IDecoded;
        console.log(decoded);
        const userId = await prisma.user.findUnique({
          where: { id: parseInt(decoded.id) },
        } );
        res.status(200).send({ msg: "User found", user: userId });
    } catch (error) {
        console.error(error);
    }
};

export const confirm = async (req: Request, res: Response) => {
    try {
        const { token } = req.params;
        const decoded = jwt.verify(token, process.env.SECRET || "tokenTest") as IDecoded;
        const user = await prisma.user.update({
            where: { id: parseInt(decoded.id) },
            data: { status: "ACTIVE" }
        });
        res.status(200).send({ msg: `Confirmed!, wellcome ${user.name}` });
    } catch (error) {
        console.error(error);
    }
}

export const forgotPassword = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const userNewPassword = await prisma.user.findUnique({ where: { email } });
        if (!userNewPassword) return res.status(404).send({ msg: "User not found" });
        const token = jwt.sign({ id: userNewPassword.id }, process.env.SECRET || "tokenTest", {
            expiresIn: "2h",
        });
        const sendMail = async (userNewPassword: any) => {

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
                // in Prod
                to: userNewPassword.email,
                subject:"Recover your Account",
                text:"Hello from gmail using API",
                html:`<h1>Change your Password</h1>
                <h2>Dont worry! ${userNewPassword.name}</h2>
                <p>If you forgot your password click in the link donw below to get a new one!</p>
                <a href=http://localhost:3001/api/user/newPassword/confirm/${token}> Click here</a>
                </div>`,
            }
            const result = await transport.sendMail(mailOptions)
            return result;
        }
        sendMail(userNewPassword)
        res.send({ msg: "Email sent" });
    } catch (error) {
        console.error(error);
    }
}

export const newPassword = async (req: Request, res: Response) => {
    try {
        const { token } = req.params;
        const { password1, password2 } = req.body;
        const decoded = jwt.verify(token, process.env.SECRET || "tokenTest") as IDecoded;
        if(password1 !== password2){ return res.status(401).send({ msg: "Passwords do not match" });}
        if(password1 === password2){
        // user.password = await encryptPassword(newUser.password);
        const passwordChanged = await encryptPassword(password1);
        const user = await prisma.user.update({
            where: { id: parseInt(decoded.id) },
            data: { password: passwordChanged }
        });
        res.status(200).send({ msg: `Password changed!, try to login again ${user.name}` });
    }
    } catch (error) {
        console.error(error);
    }
}