import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();

import {
  getAllProductsDb,
  getFindProductsDb,
  helperPutProduct,
  getFindProductId,
  helperPostProduct,
} from "../helpers/product";
import { Request, Response } from "express";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    let allProducts = await getAllProductsDb();
    res.status(200).send(allProducts);
  } catch (error) {
    console.error(error);
  }
};

export const getAllFindProductsTitle = async (req: Request, res: Response) => {
  try {
    let { name } = req.query;
    let getAllProducts = await getFindProductsDb(name);
    getAllProducts?.length
      ? res.status(200).send(getAllProducts)
      : res.status(404).send({ msg: "Product not found" });
  } catch (error) {
    console.error(error);
  }
};

export const getProductsID = async (req: Request, res: Response) => {
  try {
    let { id } = req.params;
    console.log("hola",id);

    let getProduct = await getFindProductId(id);
    getProduct
      ? res.status(200).send(getProduct)
      : res.status(404).send({ msg: "Product not found" });
  } catch (error) {
    console.error(error);
  }
};

//Post Product

export const postProduct = async (req: Request, res: Response) => {
  try {
    const props = req.body;
    let newProduct: any = await helperPostProduct(props);
    newProduct
      ? res.status(200).send({ msg: "Product has been created" })
      : res.status(404).send({ msg: "Product not Created" });
  } catch (error) {
    console.error(error);
  }
};

// Put product 
export const putProduct = async (req: Request, res: Response)=>{
  try {
    const props = req.body;
    let putProduct: any = await helperPutProduct(props);
    putProduct
      ? res.status(200).send({ msg: "Product has been update" })
      : res.status(404).send({ msg: "Product not update" });
    
  } catch (error) {
    console.error(error);
    
  }
}

// delete Product

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id }: any = req.params;
    let findProduct = await prisma.product.findUnique({ where: { id:Number(id)} });
    if (findProduct) {
      await prisma.product.delete({ where: {  id:Number(id) } });
      res.status(200).send({ msg: "product has been delete" });
    }else {res.status(404).send({ msg: "invalid product ID" });}
  } catch (error) {
    console.error(error);
  }
};

