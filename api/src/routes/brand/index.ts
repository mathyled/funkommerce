import { Router } from "express";
import { getAllBrands } from "../../controllers/controllerBrand";
const router = Router();

router.get("/", getAllBrands);

export default router;
