import {helperGetAllCategory, postCategory } from "../helpers/category";
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

  export const createCatefory = async (req: Request, res: Response) => {
    try{
      const {name}=req.body;
      const newCategory: any = await postCategory(name);
      newCategory
      ?res.status(200).send({msg:'License has been created'})
      :res.status(400).send({msg:'There has been an error'})
    }
    catch(error){
      console.log(error)
    }
  }