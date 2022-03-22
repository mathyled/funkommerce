import {
  helpersAllOrder,
  helpersUpStatus,
  helpersUpQuantity,
  helpersDeleteOrder,
  helpersPostOrderAll,
  helpersStatusIncart,
  helpersdeleteProduct,
  helpersInsertProduct,
  helpersAllOrderIncart,
  helpersOneStatusAllOrder,
} from "../helpers/order";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const postOrder = async (req: Request, res: Response) => {
  try {
    const props = req.body;
    let newDetail: any = await helpersPostOrderAll(props);
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

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    let props = req.body;
    const orderDelete: any = await helpersDeleteOrder(props);
    orderDelete ? res.send(orderDelete) : res.send({ msg: " " });
  } catch (err) {
    console.error(err);
  }
};

export const getAllOrderIncart = async (req: Request, res: Response) => {
  try {
    const props = req.body;
    const orderStatus: any = await helpersAllOrderIncart(props);
    console.log(orderStatus);

    orderStatus ? res.send(orderStatus) : res.send({ msg: "Not create order" });
  } catch (error) {
    console.error(error);
  }
};

export const updataquantity = async (req: Request, res: Response) => {
  try {
    const props = req.body;
    let newDetail: any = await helpersUpQuantity(props);
    newDetail
      ? res.status(200).send({ msg: "update quantity " })
      : res.status(404).send({ msg: "could not update" });
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const props = req.body;
    let deleteProduct: any = await helpersdeleteProduct(props);
    deleteProduct
      ? res.status(200).send({ msg: "product deleted" })
      : res.status(404).send({ msg: "product cannot be deleted" });
  } catch (error) {
    console.error(error);
  }
};

export const insertProduct = async (req: Request, res: Response) => {
  try {
    const props = req.body;
    let deleteProduct: any = await helpersInsertProduct(props);
    deleteProduct
      ? res.status(200).send({ msg: "product insert" })
      : res.status(404).send({ msg: "product insert" });
  } catch (error) {
    console.error(error);
  }
};

export const StatusIncart = async (req: Request, res: Response) => {
  try {
    const props = req.body;
    let statusInCart: any = await helpersStatusIncart(props);
    statusInCart
      ? res.status(200).send(statusInCart)
      : res.status(404).send({ msg: "not order in the cart" });
  } catch (error) {
    console.error(error);
  }
};

export const allStatusOrder = async (req: Request, res: Response) => {
  try {
    const statusOrder: any = await helpersAllOrder();
    statusOrder
      ? res.status(200).send(statusOrder)
      : res.status(404).send({ msg: "not order status" });
  } catch (error) {
    console.error(error);
  }
};

export const OrderAccordingState = async (req: Request, res: Response) => {
  try {
    const props = req.body;
    const statusOrder: any = await helpersOneStatusAllOrder(props);
    statusOrder.length
      ? res.status(200).send(statusOrder)
      : res.status(404).send({ msg: "not order status" });
  } catch (error) {
    console.error(error);
  }
};

export const OrderSetStatus = async (req: Request, res: Response) => {
  try {
    const props = req.body;
    let setStatus: any = await helpersUpStatus(props);
    setStatus
      ? res.status(200).send(setStatus)
      : res.status(404).send({ msg: "not update order status" });
  } catch (error) {
    console.error(error);
  }
};
