import axios from "axios";
import { Request, Response } from "express";
const { License } = require("../db.ts");

export const getAllLicense = async (req: Request, res: Response) => {
    try {
      const allLicenseData = await License.findAll({});
  
      res.send(allLicenseData);
    } catch (error) {
      console.error(error);
    }
  };
