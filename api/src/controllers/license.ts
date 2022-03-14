import axios from "axios";
import { Request, Response } from "express";
const { getLicense } = require("../helpers/license.ts")
import {postLicense} from "../helpers/license"


export const getAllLicense = async (req: Request, res: Response) => {
  try {
    const licenseList = await getLicense();
    console.log(licenseList);
    return res.status(200).send(licenseList)
  } catch (error) {
    console.error(error);
  }
};
export const createLicense = async (req: Request, res: Response) => {
  try{
    const {name}=req.body;
    const newLicense: any = postLicense(name);
    newLicense
    ?res.status(200).send({msg:'License has been created'})
    :res.status(400).send({msg:'There has been an error'})
  }
  catch(error){
    console.log(error)
  }
}