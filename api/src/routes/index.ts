import { Router } from "express";
import productRoute from "./product";
import brandRoute from "./brand";
import categoryRouter from "./category"
<<<<<<< HEAD
import orderRouter from "./order";
=======
import userRoute from "./user";
import licenseRoute from "./license"

>>>>>>> main
const router = Router();

router.use("/product", productRoute);
router.use("/brand", brandRoute);
router.use("/category", categoryRouter);
<<<<<<< HEAD
router.use("/order", orderRouter);

=======
router.use("/user", userRoute);
router.use("/license", licenseRoute)
>>>>>>> main


export default router;
