import { Router } from "express";
import productRoute from "./product";
import brandRoute from "./brand";
import categoryRouter from "./category"
import userRoute from "./user";
import licenseRoute from "./license"

const router = Router();

router.use("/product", productRoute);
router.use("/brand", brandRoute);
router.use("/category", categoryRouter);
router.use("/user", userRoute);
router.use("/license", licenseRoute)


export default router;
