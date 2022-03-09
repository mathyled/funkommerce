import {helperGetAllCategory } from "../helpers/helperCategory";
import { Request, Response } from "express";

export const getAllCategories = async (req: Request, res: Response) => {
    try {
      let allCategory = await helperGetAllCategory();
      allCategory
      ? res.status(200).send(allCategory)
      : res.status(404).send({msg: 'Category not found'})
    } catch (error) {
      console.error(error);
    }
  };