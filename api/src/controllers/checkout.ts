import { PrismaClient } from '@prisma/client'
const {product, order} = new PrismaClient()
import Stripe from "stripe";
const {STRIPE_URL} = process.env 
const stripe = new Stripe(STRIPE_URL || "", {
  apiVersion: '2020-08-27',
});

import { Request, Response } from "express";

export const postCheckout = async (req:Request, res:Response)=>{
    try{
        const {userId, id}=req.body
        const findOrder = await order.findFirst({
            where:{UserId:userId},include:{Order_detail:true}
    })

       let amount = Math.floor(Number(findOrder?.amount))
        const payment = await stripe.paymentIntents.create(
            {
                amount,
                currency: "USD",
                payment_method: id,
                confirm:true
        })

        if(payment.status === "succeeded"){
        const updateAllProduct = findOrder?.Order_detail.map(async(order)=>{
              await product.update({where:{
                    id:order.productId?order.productId:2
                },data:{
                    stock:{
                        decrement:order.quantity
                    }
                }
            })
        })
        if(updateAllProduct){
            await order.update({where:{
                id:findOrder?.id
            },data:{
                status_pay:"PAYMENT"
            }})
        }
        return res.send({msg:"PAYMENT COMPLETED"})
    } 
    return res.send({msg:"error"})

    }catch(error){
        console.log(error)
    }
}