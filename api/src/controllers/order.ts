import { helpersPostOrder } from "../helpers/order";
import { Request, Response } from "express";
import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

export const postOrder = async (req: Request, res: Response) => {
  try {
    const props = req.body;
    let newDetail: any = await helpersPostOrder(props);
    newDetail
      ? res.status(200).send({ msg: "Detail has been created" })
      : res.status(404).send({ msg: "Detail not Created" });
  } catch (error) {
    console.error(error);
  }
};

export const detailOrder = async (req: Request, res: Response) => {
  try {
    const detalleOrder = await prisma.order.findMany({
      include: { Order_detail: true },
    });
    res.send(detalleOrder);
  } catch (error) {
    console.error(error);
  }
};
