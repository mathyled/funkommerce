import { Router } from "express";
const {postCheckout} = require('../../controllers/checkout')

const router = Router()

router.post('/', postCheckout)

export default router;