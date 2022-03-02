import { Router } from "express";
import productRoutes from './product'
import categoryRoutes from './category'
const router = Router();

router.use('/product', productRoutes)
router.use('/category', categoryRoutes)
export default router;