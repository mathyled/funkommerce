import axios from "axios";
import { Request, Response } from "express";
const { Brand } = require("../db.ts");

export const getAllBrand = async (req: Request, res: Response) => {
  try {
    const allBrandData = await Brand.findAll({});

    res.send(allBrandData);
  } catch (error) {
    console.error(error);
  }
};
