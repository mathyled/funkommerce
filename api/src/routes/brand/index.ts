import { Router } from "express";
import { getAllBrands } from "../../controllers/brand";
const router = Router();

router.get("/", getAllBrands);

export default router;
