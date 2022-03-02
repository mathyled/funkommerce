import axios from 'axios'
import { Request, Response } from 'express'
const {product, category, features, brand} = require('../db')

export const getAllProduct = async (req: Request, res: Response) =>{
    try{
        const allProduct = await product.findAll({})
        res.status(200).json(allProduct)
    }catch(error){
        console.log(error)
    }
}