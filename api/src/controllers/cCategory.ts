import axios from 'axios'
import { Request, Response } from 'express'
const {product, category, features, brand} = require('../db')

export const getAllCategory = async (req: Request, res: Response) =>{
    try{
        const allCategory = await category.findAll({})
        res.status(200).json(allCategory)
    }catch(error){
        console.log(error)
    }
}