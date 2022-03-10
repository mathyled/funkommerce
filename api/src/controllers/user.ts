import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
import { Request, Response } from "express";
import { helperCreateUser } from "../helpers/user";

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { userInfo } from "os";

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
            expiresIn: "2h", //token expires in 2 hours
        });
        newUser
            ? res.status(200).header('auth-token', token).send({ msg: "User created successfully" })
            : res.status(400).send({ msg: "Error, could not create user" });
    } catch (error) {
        console.error(error);
    }
};

export const signIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findFirst({ where: { email } });
        console.log(user);
        if (!user) {
            return res.status(404).send({ msg: "User not found" });
        }
        const validPassword: boolean = await validatePassword(password, user.password || ""); //PROBABLEMENTE ESTA MAL
        if (!validPassword) {
            return res.status(401).send({ msg: "Password is incorrect" });
        }
        // token
        const token: string = jwt.sign({ id: user.id }, process.env.SECRET || "tokenTest", {
            expiresIn: "2h",
        })
        res.status(200).header('auth-token', token).send({ msg: "User signed in successfully", user });
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
          where: { id: parseInt(decoded.id) }
        });
        res.status(200).send({ msg: "User found", user: userId });
    } catch (error) {
        console.error(error);
    }
};