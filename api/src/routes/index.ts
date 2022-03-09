import { Router } from "express";
import productRoute from "./product";
import brandRoute from "./brand";
import categoryRouter from "./category"
const router = Router();

router.use("/product", productRoute);
router.use("/brand", brandRoute);
router.use("/category", categoryRouter);



export default router;
