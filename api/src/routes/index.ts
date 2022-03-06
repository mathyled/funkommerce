import { Router } from "express";
import brandRoutes from "./brand";
import productRoutes from "./product";
import licenseRoutes from "./license";
import categoryRoutes from "./category";
import productTestRoutes from "./productTest";
const router = Router();

router.use("/brand", brandRoutes);
router.use("/license", licenseRoutes);
router.use("/product", productRoutes);
router.use("/category", categoryRoutes);
router.use("/productTest", productTestRoutes);

export default router;
