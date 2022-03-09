import { helperGetAllBrands} from "../helpers/helperBrand";
import { Request, Response } from "express";

export const getAllBrands = async (req: Request, res: Response) => {
    try {
      let allBrands = await helperGetAllBrands();
      allBrands
      ? res.status(200).send(allBrands)
      : res.status(404).send({msg: 'Brands not found'})
    } catch (error) {
      console.error(error);
    }
  };