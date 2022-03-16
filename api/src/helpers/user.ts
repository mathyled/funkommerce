import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const helperCreateUser = async (props: any) => {
  let user: Prisma.UserCreateInput = {
    name: props.name,
    lastName: props.lastName,
    email: props.email,
    password: props.password,
    role: props.role,
  };

  let newUser = await prisma.user.create({ data: user });

  return newUser;
};

interface IDecoded {
  id: string;
  iat: number;
  exp: number;
}

export const tokenValidate = async (req: Request,res: Response) => {
  try {
    const token = req.header("auth-token");
    if (!token) return res.status(401).send({ msg: "Acces denied" });
    //corregir para poder utilizar mediante el req
    const decoded = jwt.verify(
      token,
      process.env.SECRET || "tokenTest"
    ) as IDecoded;
    console.log(decoded);
    const userId = await prisma.user.findUnique({
      where: { id: parseInt(decoded.id) },
    });

   
  } catch (error) {
    console.error(error);
  }
};
