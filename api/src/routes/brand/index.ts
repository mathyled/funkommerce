import { Router } from "express";
import { getAllBrands, createBrand } from "../../controllers/brand";
const router = Router(); 

router.get("/", getAllBrands);
router.post("/", createBrand);
export default router;
