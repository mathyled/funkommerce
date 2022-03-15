import { helperGetAllBrands, postBrand} from "../helpers/brand";
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

  export const createBrand = async (req: Request, res: Response) => {
    try{
      const {name}=req.body;
      const newBrand: any = await postBrand(name);
      newBrand
      ?res.status(200).send({msg:'New brand has been created'})
      :res.status(400).send({msg:'There has been an error'})
    }
    catch(error){
      console.log(error)
    }
  }
