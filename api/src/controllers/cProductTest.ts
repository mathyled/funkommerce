import axios from "axios";
import { Request, Response } from "express";
const { ProductTest } = require("../db");
import { Sequelize, Op } from "sequelize";



export const getAllProductTest = async (req: Request, res: Response) => {
  try {
    const allProduct = await ProductTest.findAll({});

    res.send(allProduct);
  } catch (error) {
    console.log(error);
  }
};

export const getCategory = async (req: Request, res: Response) => {
  try {
    let { category } = req.body;
    if (category) {
      const filterCategories = await ProductTest.findAll({
        where: { category },
      });

      filterCategories.length
        ? res.send(filterCategories)
        : res.send({ msg: "no se encuentra producto con esa categoria" });
    }

    res.status(404).send({ msg: "no se encuentra producto con esa categoria" });
  } catch (error) {
    console.log(error);
  }
};

export const getAllName = async (req: Request, res: Response) => {
  try {
    let { name } = req.query;
    const filterProductName = await ProductTest.findAll({ where: {title: {[Op.iLike]: `%${name}%`}} });
    filterProductName.length
      ? res.send(filterProductName)
      : res.status(404).send({ msg: "no se encontro producto con ese nombre" });
  } catch (error) {
    console.log(error);
  }
};

export const getAllProductBands = async (req: Request, res: Response) => {
  try {
    let {brand}= req.body;
    if (brand) {
      const filterbrandName = await ProductTest.findAll({ where: {brand:brand}})
   

      filterbrandName.length
        ? res.status(200).json(filterbrandName)
        : res.send({ msg: "no se encuentra producto con esa brand" });
    }

    res.status(404).send({ msg: "no se encuentra producto con esa categoria" });

    
  } catch (error) {
    console.error(error);
    
  }
}


export const getAllProductLicense = async (req: Request, res: Response) => {
  try {
    let {license}= req.body;
    if (license) {
      const filterlicenseName = await ProductTest.findAll({ where: {license:license}})
   

      filterlicenseName.length
        ? res.status(200).json(filterlicenseName)
        : res.send({ msg: "no se encuentra producto con esa licencia" });
    }

    res.status(404).send({ msg: "no se encuentra producto con esa licencia" });

    
  } catch (error) {
    console.error(error);
    
  }
}


