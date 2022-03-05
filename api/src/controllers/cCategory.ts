import axios from "axios";
import { Request, Response } from "express";
const { Category } = require("../db.ts");



export const getAllCategory = async (req: Request, res: Response) => {
  try {
    const allCategories = await Category.findAll({});

    res.send(allCategories);
  } catch (error) {
    console.error(error);
  }
};
